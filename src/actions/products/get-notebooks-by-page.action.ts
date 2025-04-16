import { defineAction } from 'astro:actions';
import { count, db, Notebook, ProductImage, sql } from 'astro:db';
import { z } from 'astro:schema';

import type { NotebooksWithImages } from '@/interfaces';

export const getNotebooksByPage = defineAction({
    accept: 'json',
    input: z.object({
        page: z.number().optional().default(1),
        limit: z.number().optional().default(9)
    }),
    handler: async ({ page, limit }) => {

        page = page <= 0 ? 1 : page;

        const [totalRecords] = await db.select({ count: count() }).from(Notebook);

        const totalPages = Math.ceil(totalRecords.count / limit);

        if (page > totalPages) {
            // page = totalPage
            return {
                products: [] as NotebooksWithImages[],
                totalPages: totalPages
            }
        };

        const notebooksQuery = sql`
        select a.*,
        ( select GROUP_CONCAT(image,',') from 
            ( select * from ${ProductImage} where productId = a.id limit 2 )
        ) as images
        from ${Notebook} a
        LIMIT ${limit} OFFSET ${(page - 1) * limit};
        `;

        const { rows } = await db.run(notebooksQuery);

        const products = rows.map( product => {
            return {
                ...product,
                images: product.images ? product.images : 'no-image.png'
            }
        }) as unknown as NotebooksWithImages[];

        // const notebooks = await db
        //     .select()
        //     .from(Notebook)
        //     .innerJoin(ProductImage, eq(Notebook.id, ProductImage.id))
        //     .limit(limit)
        //     .offset((page - 1) * 9);

        return {
            notebooks: products, // rows as unknown as NotebooksWithImages[],
            totalPages: totalPages
        }
    }
});