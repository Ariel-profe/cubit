import { defineAction } from "astro:actions";
import { Category, db } from "astro:db";

export const getCategories = defineAction({
    accept: 'json',
    handler: async () => {

        const categories = await db.select().from(Category);

        if (!categories) {
            throw new Error(`No existen categorías en la base de datos`)
        };

        return {
            categories
        };
    }
});