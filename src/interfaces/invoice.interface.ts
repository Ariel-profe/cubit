export interface IInvoiceItem {
    id: string;
    description: string;
    quantity: number | string;
    tax: number | string;
    price: number;
};

export interface IInvoice {
    id: string;
    // userId: string;
    date: string;
    companyName: string;
    companyEmail: string;
    clientName: string;
    clientEmail: string;
    items: IInvoiceItem[];
    subtotal: number;
    tax: number | string;
    total: number;
    status: 'draft' | 'sent' | 'paid' | 'cancelled';
};