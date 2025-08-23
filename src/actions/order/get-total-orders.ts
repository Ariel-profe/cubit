"use server";

import { prisma } from "@/lib/prisma";

export const getTotalOrders = async () => {
    try {
        return await prisma.order.count();
    } catch (error) {
        console.error("Error al leer el total de órdenes:", error);
        return 0; // Return 0 or handle the error as needed
    }
};