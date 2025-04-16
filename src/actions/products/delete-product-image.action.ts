
import { ImageUpload } from '@/utils/products/image-upload';
import { defineAction } from 'astro:actions';
import { db, eq, ProductImage } from 'astro:db';
import { z } from 'astro:schema';
import { getSession } from 'auth-astro/server';

export const deleteProductImage = defineAction({
    accept: 'json',
    input: z.string(),
    handler: async (imageId, { request }) => {

        const session = await getSession(request);

        const user = session?.user;

        if (!user || user.role !== 'admin') {
            throw new Error("No autorizado");
        };

        const [productImage] = await db.select().from(ProductImage).where(eq(ProductImage.id, imageId));

        if (!productImage) {
            throw new Error("No existe la imagen");
        };

        const deleted = await db.delete(ProductImage).where(eq(ProductImage.id, imageId));

        if(productImage.image.includes('http')){ { 
            await ImageUpload.delete(productImage.image);
        }};

        return {ok: true}
    }
});