"use server";

import { getServerSession } from '@/lib/get-server-session';
import prisma from '@/lib/prisma';
import { v2 as cloudinary } from 'cloudinary';
import { revalidatePath } from 'next/cache';
import { forbidden, unauthorized } from 'next/navigation';

// Configure Cloudinary
cloudinary.config(process.env.CLOUDINARY_URL ?? '');

export const deleteBudgetImage = async (image: string) => {
    const session = await getServerSession();
    const user = session?.user;
    if (!user) unauthorized();
    if (user.role !== 'admin') forbidden();

    if (!image.startsWith("http")) {
        return {
            ok: false,
            message: "No se puede eliminar una imagen que no está en la nube"
        }
    };

    const imageName = image
        .split('/')
        .pop()
        ?.split(".")[0] ?? "";

    try {
        await cloudinary.uploader.destroy(imageName);
        await prisma.budgetItem.updateMany({
            where: {
                image: image
            },
            data: {
                image: ""
            }
        });

        revalidatePath('/admin/presupuestos');
        revalidatePath('/admin/presupuestos/[id]');

        return {
            ok: true,
            message: "Imagen eliminada correctamente"
        };
    } catch (error) {
        return {
            ok: false,
            message: "Error al eliminar la imagen"
        };
    }

};