import { IconType } from "react-icons";
import { IoDiceOutline, IoGridOutline, IoHomeOutline, IoLayersOutline, IoLogoUsd, IoNewspaperOutline, IoPeopleOutline, IoSettingsOutline, IoTicketOutline } from "react-icons/io5";

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
};

type Menu = {
  href: string;
  label: string;
  active?: boolean;
  icon: IconType;
  submenus?: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/admin/dashboard",
          label: "Dashboard",
          icon: IoGridOutline,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/",
          label: "Sitio",
          icon: IoHomeOutline,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Contenido",
      menus: [
        {
          href: "#",
          label: "Categorías",
          icon: IoLayersOutline
        },
        {
          href: "/admin/facturacion",
          label: "Facturación",
          icon: IoLogoUsd
        },
        {
          href: "/admin/ordenes",
          label: "Órdenes",
          icon: IoTicketOutline
        },
        {
          href: "/admin/presupuestos",
          label: "Presupuestos",
          icon: IoNewspaperOutline
        },
        {
          href: "",
          label: "Productos",
          icon: IoDiceOutline,
          submenus: [
            {
              href: "/admin/productos/auriculares",
              label: "auriculares"
            },
            {
              href: "/admin/productos/caddys",
              label: "caddys"
            },
            {
              href: "/admin/productos/carrys",
              label: "carrys"
            },
            {
              href: "/admin/productos/cooler-pads",
              label: "cooler pads"
            },
            {
              href: "/admin/productos/discos-duros",
              label: "discos duros"
            },
            {
              href: "/admin/productos/discos-solidos",
              label: "discos sólidos"
            },
            {
              href: "/admin/productos/dockings",
              label: "dockings"
            },
            {
              href: "/admin/productos/fuentes",
              label: "fuentes"
            },
            {
              href: "/admin/productos/fundas",
              label: "fundas"
            },
            {
              href: "/admin/productos/mochilas",
              label: "mochilas"
            },
            {
              href: "/admin/productos/mouses",
              label: "mouses"
            },
            {
              href: "/admin/productos/notebooks",
              label: "notebooks"
            },
            {
              href: "/admin/productos/pads",
              label: "pads"
            },
            {
              href: "/admin/productos/placas-de-red",
              label: "placas de red"
            },
            {
              href: "/admin/productos/placas-de-video",
              label: "placas de video"
            },
            {
              href: "/admin/productos/rams",
              label: "rams"
            },
            {
              href: "/admin/productos/soportes",
              label: "soportes"
            },
          ]
        },
        {
          href: "/admin/usuarios",
          label: "Usuarios",
          icon: IoPeopleOutline
        },
      ]
    },
    {
      groupLabel: "Configuración",
      menus: [
        {
          href: "/account",
          label: "Cuenta",
          icon: IoSettingsOutline
        }
      ]
    }
  ];
}