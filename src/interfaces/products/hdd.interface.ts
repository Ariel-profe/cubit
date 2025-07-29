export interface IHdd {
    // Required
    id: string;
    code: string;
    title: string;
    slug: string;
    brand: string;
    category: string;
    images: string[];
    price: number;
    inStock: number;
    tags: string[];
    status: boolean;
    createdAt: Date;
    updatedAt: Date;

    // Specific
    idManual: string;
    model: string;
    format: string;
    capacity: string;
    rpm: string;
    thickness: string;
};