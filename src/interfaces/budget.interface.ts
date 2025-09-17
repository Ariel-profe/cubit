
export interface IBudgetItem {
    id: number;
    budgetId: string;
    description: string;
    image: string;
    quantity: number | string;
    price: string;

    createdAt: Date | string;
};

export interface IBudget {
    id: string;
    userId: string;
    budgetNumber: string;
    date: string;
    companyName: string;
    companyEmail: string;
    clientName: string;
    clientEmail: string;
    
    BudgetItem: IBudgetItem[];

    createdAt: Date | string;
};