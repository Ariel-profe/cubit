import { IBudget } from "@/interfaces/budget.interface";
import { prisma } from "@/lib/prisma";

interface PaginationOptions {
    page?: number;
    take?: number;
};

export const getPaginatedBudgets = async ({
    page = 1,
    take = 12
}: PaginationOptions) => {

    if (isNaN(Number(page))) page = 1;
    if (page < 1) page = 1;    

    try {

        const budgets = await prisma.budget.findMany({
            take: take,
            skip: (page - 1) * take,
            orderBy: {
                date: "asc"
            },
            include: {
                BudgetItem: true
            }
        });

        const totalCount = await prisma.budget.count();
        const totalPages = Math.ceil(totalCount / take);         

        return {
            currentPage: page,
            totalPages: totalPages,
            budgets: budgets.map(budget => ({
                ...budget,
                createdAt: budget.createdAt.toISOString()
            }))
        }

    } catch (error) {
        throw new Error("No se pudieron cargar los productos")
    }
};
