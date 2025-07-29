import { IProductImage } from "./product-image.interface";

export interface INotebook {
    // Required
    id         : string;
    code        : string;
    title       : string;
    slug        : string;
    brand       : string;
    category    : string;
    images      : string[];
    ProductImage?: IProductImage[];
    price       : number;
    inStock     : number;
    tags        : string[];
    status      : boolean;
    createdAt   : Date;
    updatedAt   : Date;

    // Specific
    type        : ValidNotebookTypes;
    model       : string;
    upcEan      : string;
    processor   : string;
    memoryRam   : string;
    graphicCard : string;
    storage1    : string;
    storage2    : string;
    screen      : string;
    keypad      : string;
    numKeypad   : string;
    os          : string;
    cardReader  : string;
    webCam      : string;
    usb         : string[];
    lan         : string;
    wiFi        : string;
    bluetooth   : string;
    vga         : string;
    hdmi        : string;
    displayPort : string;
    weight      : number;
    warranty    : string;
};

export type ValidNotebookTypes = 'hogar' | 'empresa' | 'profesional' | 'gamer';