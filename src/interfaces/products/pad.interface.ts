export interface IPad {
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
    extent: string;
    size: string;
    rgbLighting: string;
    materials: string[];
    colorStamp: string[];
};