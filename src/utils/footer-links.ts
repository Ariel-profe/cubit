import type { IFooterLinks, ISocialMediaLinks } from "@/interfaces";

export const footerLinks: IFooterLinks[] = [
    {
        title: "productos",
        links: [
            {
                id: 1,
                title: 'notebooks',
                href: '/productos/notebooks'
            },
            {
                id: 2,
                title: 'pantallas',
                href: '/#'
            },
            {
                id: 3,
                title: 'mouse',
                href: '/#'
            },
            {
                id: 4,
                title: 'auriculares',
                href: '/#'
            },
        ]
    },
    {
        title: "empresa",
        links: [
            {
                id: 1,
                title: 'nosotros',
                href: '/#'
            },
            {
                id: 2,
                title: 'galería',
                href: '/#'
            },
            {
                id: 3,
                title: 'servicios',
                href: '/#'
            },
        ]
    }
];

export const footerSocialMedia:ISocialMediaLinks[] = [
    {
        icon: "/src/assets/social-media/instagram.svg",
        title: "instagram",
        href: "#"
    },
    {
        icon: "/src/assets/social-media/facebook.svg",
        title: "facebook",
        href: "#"
    },
    {
        icon: "/src/assets/social-media/whatsapp.svg",
        title: "whatsapp",
        href: "#"
    },
];