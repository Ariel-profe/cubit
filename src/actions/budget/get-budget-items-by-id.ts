"use server";

import { prisma } from "@/lib/prisma";

export const getBudgetItemsById = async (budgetId: string) => {

    try {
        const budgetItems = await prisma.budgetItem.findMany({
            where: {
                budgetId: budgetId
            }
        });

        return budgetItems;
    } catch (error) {
        console.error("Error fetching budget items:", error);
        return [];
    }
};