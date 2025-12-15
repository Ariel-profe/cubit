"use server";

import prisma from "@/lib/prisma";

export const getProductBySlug = async (slug: string, model: any) => {

    switch (model) {
        case "backpack":
            model = prisma.backpack;
            break;
        case "caddy":
            model = prisma.caddy;
            break;
        case "carry":
            model = prisma.carry;
            break;
        case "coolerpad":
            model = prisma.coolerpad;
            break;
        case "cover":
            model = prisma.cover;
            break;
        case "docking":
            model = prisma.docking;
            break;
        case "hdd":
            model = prisma.hdd;
            break;
        case "headphone":
            model = prisma.headphone;
            break;
        case "mouse":
            model = prisma.mouse;
            break;
        case "networkCard":
            model = prisma.networkCard;
            break;
        case "notebook":
            model = prisma.notebook;
            break;
        case "pad":
            model = prisma.pad;
            break;
        case "ram":
            model = prisma.ram;
            break;
        case "source":
            model = prisma.source;
            break;
        case "ssd":
            model = prisma.ssd;
            break;
        case "support":
            model = prisma.support;
            break;
        case "videoCard":
            model = prisma.videoCard;
            break;
        default:
            throw new Error("Modelo no válido");
    }

    try {
        const product = await model.findFirst({
            include: {
                ProductImage: true,
                category: {
                    select: {
                        name: true
                    }
                }
            },
            where: {
                slug: slug
            }
        })

        if (!product) return null;

        return {
            ...product,
            category: product.category.name,
            images: product.ProductImage.map((image: any) => image.url)
        };

    } catch (error) {
        console.error("Error al obtener el producto por slug:", error);
        throw new Error("Error al obtener el producto por slug");
    }
};