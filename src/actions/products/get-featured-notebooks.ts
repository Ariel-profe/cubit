"use server";

import { prisma } from "@/lib/prisma";
import { INotebook } from "@/interfaces";

export const getFeaturedNotebooks = async () => {
    try {

        const notebooksDB = await prisma.notebook.findMany({
            take: 5,
            where: {
                status: true
            },
            include: {
                ProductImage: true,
                category: {
                    select: {
                        name: true
                    }
                }
            }
        });

        if (!notebooksDB) {
            return {
                ok: false,
                message: "No hay notebooks para mostrar"
            }
        };

        return {
            ok: true,
            notebooks: notebooksDB.map(notebook => ({
                ...notebook,
                category: notebook.category.name,
                images: notebook.ProductImage?.map(image => image.url)
            })) as INotebook[]
        }
    } catch (error) {
        console.log(error);
        return {
            ok: false,
            message: "Error al obtener las notebooks destacadas",
        }

    }
};