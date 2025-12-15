"use server";

import { forbidden, unauthorized } from "next/navigation";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";
import { categoriesDictionary } from "@/utils/products/dictionary";
import { getServerSession } from "@/lib/get-server-session";

export const deleteProduct = async (productId: string, model: any) => {

    const session = await getServerSession();
    const user = session?.user;
    if (!user) unauthorized();
    if (user.role !== 'admin') forbidden();

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
        // Check if the product exists
        const product = await model.findUnique({ where: { id: productId } });
        if (!product) {
            return {
                ok: false,
                message: "Producto no encontrado"
            }
        };
        // Delete the product from the database
        await model.update({
            where: { id: productId },
            data: {
                status: false
            }
        }
        );

        // Revalidate the path to update the cache
        revalidatePath(`/admin/productos/${categoriesDictionary[model]}`);
        revalidatePath(`/productos/${categoriesDictionary[model]}`);

        return {
            ok: true,
            message: "Producto eliminado correctamente"
        };
    } catch (error: any) {
        console.error(error);
        return {
            ok: false,
            message: `Error al eliminar el producto: ${error.message}`
        };
    }
};