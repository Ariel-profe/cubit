export interface IHeadphone {
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
    sensitivity: string;
    type: string;
    connectionType: string;
    frequencyRange: string;
    colors: string[];
    microphone: string;
    ledLighting: string;
    gamer: string;
};