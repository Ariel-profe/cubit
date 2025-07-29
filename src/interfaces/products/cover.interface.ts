export interface ICover {
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
    idManual:      string;
    notebookSize:  string;
    stamp:         string;
    materials:     string;
    colors:        string[];
    otherFeatures: string[];
};