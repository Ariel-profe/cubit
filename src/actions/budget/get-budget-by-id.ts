"use server";

import prisma from "@/lib/prisma";

export const getBudgetById = async (id: string) => {

    try {
        const budget = await prisma.budget.findUnique({
            where: { id },
            include: {
                BudgetItem: true
            }
        })

        if (!budget) return null;

        return {
            ...budget,

        };

    } catch (error) {
        console.error("Error al obtener el presupuesto por id:", error);
        throw new Error("Error al obtener el presupuesto por id");
    }
};