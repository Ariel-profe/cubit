"use server";

import prisma from "@/lib/prisma";

export const getStockBySlug = async (slug: string, model: any): Promise<number> => {

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
    };

    try {
        const stock = await model.findFirst({
            where: {
                slug: slug
            },
            select: {
                inStock: true
            }
        })

        return stock?.inStock ?? 0;
    } catch (error) {
        return 0;
    }
};