"use server";

import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";

export const getOrdersByUser = async () => {

     const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session?.user) {
        return {
            ok: false,
            error: 'Usuario no autenticado'
        }
    };

    try {
        const orders = await prisma.order.findMany({
            where: {
                userId: session.user.id,
            },
            include: {
                OrderAddress: {
                    select: {
                        firstName: true,
                        lastName: true
                    }
                }
            },
            orderBy: {
                createdAt: 'desc',
            },
        });

        return {
            ok: true,
            orders: orders
        }
    } catch (error) {
        console.error('Error fetching orders:', error);
        throw error;
    }
};