"use server";

import { prisma } from "@/lib/prisma";

export const getFeaturedNotebooks = async () => {
    try {

        const notebooksDB = await prisma.notebook.findMany({
            take: 5,
            where: {
                status: true
            },
            select: {
                title: true,
                slug: true,
                category: {
                    select: {
                        name: true
                    }
                },
                price: true,
                ProductImage: {
                    select: {
                        url: true
                    },
                    take: 1
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
            })) as {
                title: string;
                slug: string;
                category: string;
                price: number;
                images: string[];
                ProductImage: { url: string }[];
            }[]
        }
    } catch (error) {
        console.log(error);
        return {
            ok: false,
            message: "Error al obtener las notebooks destacadas",
        }

    }
};