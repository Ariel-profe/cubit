import {defineAction} from 'astro:actions';
import { db, inArray, Notebook, ProductImage, eq } from 'astro:db';

import type { CartItem } from '@/interfaces';

export const loadProductsFromCart = defineAction({
    accept: 'json',
    // input: z.string(),
    handler: async( _, {cookies} ) => {

        // console.log({ctx, cookies: ctx.cookies});
        
        const cart = JSON.parse(cookies.get('cart')?.value ?? '[]') as CartItem[];

        if(cart.length === 0) return [];

        // Load products
        const productIds = cart.map(item => item.productId);

        const dbProducts = await db
            .select()
            .from(Notebook)
            .innerJoin(ProductImage, eq(Notebook.id, ProductImage.productId))
            .where(inArray(Notebook.id, productIds))            

        return cart.map( item => {

            const dbProduct = dbProducts.find(p => p.Notebook.id === item.productId);

            if(!dbProduct){
                throw new Error(`El producto con id ${item.productId} no existe`)
            };

            const {title, category ,price, slug} = dbProduct.Notebook;
            const image = dbProduct.ProductImage.image;            

            return {
                productId: item.productId,
                quantity: item.quantity,
                title: title,
                category: category,
                image: image.startsWith('http')
                    ? image
                    : `${import.meta.env.PUBLIC_URL}/images/products/${image}`,
                price: price,
                slug: slug
            }

        });
    }
});