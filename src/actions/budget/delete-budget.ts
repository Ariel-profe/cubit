"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export const deleteBudget = async (budgetId: string) => {    

    try {
        //Delete first the BudgetItem
        const budgetItems = await prisma.budgetItem.findMany({ where: { budgetId: budgetId } });

        if (!budgetItems) {
            return {
                ok: false,
                message: "No se encontraron items para el presupuesto"
            }
        }

        await prisma.budgetItem.deleteMany({ where: { budgetId: budgetId } });

        // // Check if the budget exists
        const budget = await prisma.budget.findUnique({ where: { id: budgetId } });
        if (!budget) {
            return {
                ok: false,
                message: "Presupuesto no encontrado"
            }
        };
        // // Delete the budget from the database
        await prisma.budget.delete({
            where: { id: budgetId }
        });

        // Revalidate the path to update the cache
        revalidatePath(`/admin/productos/presupuestos`);

        return {
            ok: true,
            message: "Presupuesto eliminado correctamente"
        };
    } catch (error: any) {
        console.error(error);
        return {
            ok: false,
            message: `Error al eliminar el presupuesto: ${error.message}`
        };
    }
};