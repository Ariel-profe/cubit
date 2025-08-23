import { IconType } from "react-icons";
import { IoCubeOutline, IoPeopleOutline, IoTicketOutline, IoNewspaperOutline, IoLayersOutline } from "react-icons/io5";

interface IAdminLink {
    title: string;
    href: string;
    icon: IconType;
};

export const adminLinks:IAdminLink[] = [
    {
        title: "Productos",
        href: "/admin/productos",
        icon: IoCubeOutline,
    },
    {
        title: "Usuarios",
        href: "/admin/usuarios",
        icon: IoPeopleOutline,
    },
    {
        title: "Órdenes",
        href: "/admin/ordenes",
        icon: IoTicketOutline,
    },
    {
        title: "Presupuestos",
        href: "/admin/presupuestos",
        icon: IoNewspaperOutline,
    },
    {
        title: "Facturación",
        href: "/admin/facturacion",
        icon: IoLayersOutline,
    },
];