import { defineAction } from "astro:actions";
import { count, db, Notebook } from "astro:db";

export const getNotebooksCounted = defineAction({
    accept: 'json',
    handler: async () => {

        const products = await db.select({value: count()}).from(Notebook);

        if (!products) {
            throw new Error(`No existen products en la base de datos`)
        };

        return {
            products
        };
    }
});