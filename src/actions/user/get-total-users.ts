"use server";

import { prisma } from "@/lib/prisma";

export const getTotalUsers = async () => {
    try {
        return await prisma.user.count();
    } catch (error) {
        console.error("Error al leer el total de usuarios:", error);
        return 0; // Return 0 or handle the error as needed
    }
};