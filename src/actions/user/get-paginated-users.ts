"use server";

import { forbidden, unauthorized } from "next/navigation";
import { getServerSession } from "@/lib/get-server-session";
import prisma from "@/lib/prisma";

export const getPaginatedUsers = async () => {

    const session = await getServerSession();
    const user = session?.user;
    if (!user) unauthorized();
    if (user.role !== 'admin') forbidden();

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
