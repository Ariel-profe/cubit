import {defineAction} from 'astro:actions';
import { db, eq, Notebook, ProductImage } from 'astro:db';
import { z } from 'astro:schema';

const newProduct = {
    id: '',
    brand: '',
    code: '',
    stock: 0,
    price: 0,
    slug: 'nuevo_producto',
    status: true,
    tags: 'note, notebooks, laptop',
    title: 'Nuevo producto',
    category: 'notebooks',
    type: '',
    bluetooth: '',
    cardReader: '',
    displayPort: '',
    graphicCard: '',
    hdmi: '',
    keypad: '',
    lan: '',
    memoryRam: '',
    model: '',
    numKeypad: '',
    os: '',
    processor: '',
    screen: '',
    storage1: '',
    storage2: '',
    upcEan: '',
    usb: '',
    vga: '',
    warranty: '',
    webCam: '',
    weight: 0,
    wiFi: '',
};

export const getNotebookBySlug = defineAction({
    accept: 'json',
    input: z.string(),
    handler: async( slug ) => {

        if(slug === 'new'){
            return {
                product: newProduct,
                images: []
            }
        }

        const [notebook] = await db.select().from(Notebook).where(eq(Notebook.slug, slug));

        if(!notebook){
            throw new Error(`Producto con slug ${slug} no existe`)
        };

        const images = await db.select().from(ProductImage).where(eq(ProductImage.productId, notebook.id));        

        return {
            product: notebook,
            images: images.map(i => i.image)
        };
    }
});