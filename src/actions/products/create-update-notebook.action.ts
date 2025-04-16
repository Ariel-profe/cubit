import { defineAction } from 'astro:actions';
import { db, eq, Notebook, ProductImage } from 'astro:db';
import { v4 as UUID } from 'uuid';
import { z } from 'astro:schema';
import { getSession } from 'auth-astro/server';
import { ACCEPTED_IMAGE_TYPES } from '@/utils';
import { ImageUpload } from '@/utils/products/image-upload';

const MAX_FILE_SIZE = 5_000_000; //5 MB

export const createUpdateNotebook = defineAction({
    accept: 'form',
    input: z.object({
        id: z.string().optional(),
        brand: z.string({ message: 'Marca requerida' }),
        code: z.string({ message: 'Código requerida' }),
        stock: z.number({ message: 'Stock requerido' }),
        price: z.number({ message: 'Precio requerido' }),
        slug: z.string({ message: 'Slug requerida' }),
        status: z.boolean(),
        tags: z.string({ message: 'Etiquetas requeridas' }),
        title: z.string({ message: 'Nombre del producto requerido' }),
        type: z.string({ message: 'Tipo de producto requerido' }),
        bluetooth: z.string({ message: 'Bluetooth requerido' }),
        cardReader: z.string({ message: 'Lector de tarjetas requerido' }),
        displayPort: z.string({ message: 'Display Port requerido' }),
        graphicCard: z.string({ message: 'Tarjeta gráfica requerida' }),
        hdmi: z.string({ message: 'HDMI requerido' }),
        keypad: z.string({ message: 'Teclado requerido' }),
        lan: z.string({ message: 'Lan requerida' }),
        memoryRam: z.string({ message: 'Memoria ram requerida' }),
        model: z.string({ message: 'Modelo requerido' }),
        numKeypad: z.string({ message: 'Teclado numérico requerido' }),
        os: z.string({ message: 'Sistema operativo requerido' }),
        processor: z.string({ message: 'Procesador requerido' }),
        screen: z.string({ message: 'Pantalla requerida' }),
        storage1: z.string({ message: 'Almacenamiento 1 requerido' }),
        storage2: z.string({ message: 'Almacenamiento 2 requerido' }),
        upcEan: z.string({ message: 'UP/EAN requerido' }),
        usb: z.string({ message: 'USB requerido' }),
        vga: z.string({ message: 'VGA requerido' }),
        warranty: z.string({ message: 'Garantia requerida' }),
        webCam: z.string({ message: 'Web cam requerida' }),
        weight: z.number({ message: 'Peso requerido' }),
        wiFi: z.string({ message: 'WiFi requerido' }),

        imageFiles: z.array(
            z.instanceof(File)
                .refine(file => file.size <= MAX_FILE_SIZE, 'Tamaño máximo de imagen: 5Mb')
                .refine(file => {
                    if (file.size === 0) return true;

                    return ACCEPTED_IMAGE_TYPES.includes(file.type);
                }, `Solo se aceptan los tipos de imagen: ${ACCEPTED_IMAGE_TYPES.join(',')}`)
        ).optional()
    }),
    handler: async (form, { request }) => {

        const session = await getSession(request);

        const user = session?.user;

        if (!user) {
            throw new Error("No autorizado");
        };

        const { id = UUID(), imageFiles, ...rest } = form;

        rest.slug = rest.slug.toLowerCase().replaceAll(' ', '_').trim();

        const product = {
            id: id,
            user: user.id!,
            category: 'notebooks',
            ...rest
        };

        const queries: any = [];

        if (!form.id) {
            // Crear producto
            queries.push(
                db.insert(Notebook).values(product)
            )
        } else {
            // Actualizar producto
            queries.push(
                db.update(Notebook).set(product).where(eq(Notebook.id, id))
            )
        };

        // Insert images

        const secureUrls:string[] = [];

        if( form.imageFiles && 
            form.imageFiles.length > 0 
            && form.imageFiles[0].size > 0 
        ){
            const urls = await Promise.all(
                form.imageFiles.map(file => ImageUpload.upload(file))
            );

            secureUrls.push(...urls)
        }
        
        secureUrls.forEach( imageUrl => {
            const imageObj = {
                id: UUID(),
                image: imageUrl,
                productId: product.id
            }

            queries.push(db.insert(ProductImage).values(imageObj));
        });

        await db.batch(queries);

        return product;
    }
});