"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/auth.config";
import { prisma } from "@/lib/prisma";

export const changeUserRole = async (userId: string, role: string) => {

    const session = await auth();
    if (session?.user.role !== 'admin') {
        return {
            ok: false,
            message: 'Usted no tiene permisos para realizar esta acción.'
        };
    };

    try {

        const newRole = role === 'admin' ? 'admin' : role === 'client' ? 'client' : 'user';

        const user = await prisma.user.update({
            where: { id: userId },
            data: { role: newRole }
        });

        revalidatePath('/admin/users');

        return {
            ok: true,
            message: `El rol del usuario "${user.name}" ha sido cambiado a "${role}".`
        };
        
    } catch (error) {
        console.error('Error al cambiar el rol del usuario:', error);
        return {
            ok: false,
            message: 'Ocurrió un error al cambiar el rol del usuario.'
        };
        
    }

};