export interface IBackpack {
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
    materials: string[];
    model: string;
    color: string;
    compartments: number;
    lateralPockets: number;
    superiorPockets: number;
    frontPockets: number;
    notebookCompartment: string;
    notebookSize: string;
};