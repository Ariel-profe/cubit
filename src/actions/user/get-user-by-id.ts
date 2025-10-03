"use server";

import { IUser } from "@/interfaces";
import { prisma } from "@/lib/prisma";

export const getUserById = async (id: string): Promise<{ ok: boolean; message?: string; user?: IUser }> => {
    try {
        const user = await prisma.user.findUnique({
            where: { id }
        });

        if(!user) {
            return {
                ok: false,
                message: 'Usuario no encontrado'
            };
        };
        
        return {
            ok: true,
            user
        };
    } catch (error) {
        console.error(error);
        return {
            ok: false,
            message: 'Error al obtener el usuario'
        };
    }
};
