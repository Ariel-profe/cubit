import { IAddress } from "./address.interface";

export interface IOrder {
    id: string;
    subTotal: number;
    tax: number;
    total: number;
    itemsInOrder: number;
    isPaid: boolean;
    isPaidAt?: Date | null;
    isSentByEmail: boolean;
    deliveredAt?: Date | string;
    status: boolean;

    createdAt: string | Date | undefined;
    updatedAt: Date | null;

    userId: string;
    OrderAddress?: IAddress;
};

export interface IOrderItem {
    id: string;
    quantity: number;
    price: number;
    orderId: string;
    backpackId?: string;
    caddyId?: string;
    carryId?: string;
    coolerpadId?: string;
    coverId?: string;
    dockingId?: string;
    hddId?: string;
    headphoneId?: string;
    mouseId?: string;
    networkCardId?: string;
    notebookId?: string;
    padId?: string;
    ramId?: string;
    sourceId?: string;
    ssdId?: string;
    supportId?: string;
    videoCardId?: string;
}