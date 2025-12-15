"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const deleteUser = async (userId: string): Promise<{ ok: boolean; message: string }> => {
    try {
        const userDB = await prisma.user.findUnique({ where: { id: userId } });

        if (!userDB) {
            return {
                ok: false,
                message: "Usuario no encontrado"
            };
        }

        await prisma.user.update({ where: { id: userId }, data: { status: false } });

         // Revalidate the path to update the cache
        revalidatePath(`/admin/usuarios`);

        return {
            ok: true,
            message: "Usuario eliminado correctamente"
        };
    } catch (error) {
        console.error(error);
        return {
            ok: false,
            message: "500 - Error al eliminar el usuario"
        };
    }
};