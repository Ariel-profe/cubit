"use server";

import { auth } from "@/auth.config";
import { prisma } from "@/lib/prisma";

export const getPaginatedUsers = async () => {

    const session = await auth();

    if (session?.user.role !== 'admin') {
        return {
            ok: false,
            message: 'Usted no tiene permisos para ver esta página.'
        };
    };

    const users = await prisma.user.findMany({
        where: {
            status: true
        },
        orderBy: {
            name: 'desc'
        }
    });

    return {
        ok: true,
        users: users
    }

};
