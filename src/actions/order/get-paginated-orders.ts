"use server";

import { auth } from "@/auth.config";
import { prisma } from "@/lib/prisma";

export const getPaginatedOrders = async () => {

    const session = await auth();

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