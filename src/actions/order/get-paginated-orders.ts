"use server";

import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";

export const getPaginatedOrders = async () => {

     const session = await auth.api.getSession({
        headers: await headers()
    })

    if (session?.user.role !== 'admin') {
        return {
            ok: false,
            message: 'Usted no tiene permisos para ver esta página.'
        }
    };

    try {
        const orders = await prisma.order.findMany({
            where: {
                status: true
            },
            include: {
                OrderAddress: {
                    select: {
                        firstName: true,
                        lastName: true,
                        cuit: true,
                        phone: true,
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