export interface IBudgetItem {
    id: string;
    description: string;
    image: string;
    quantity: number | string;
    price: string;
};

export interface IBudgetData {
    budgetNumber: string;
    date: string;
    companyName: string;
    companyEmail: string;
    clientName: string;
    clientEmail: string;
    items: IBudgetItem[];
};