import { prisma } from "@/lib/prisma";

interface PaginationOptions {
    page?: number;
    take?: number;
    model: any;
    filters?: Record<string, string>;
};

export const getPaginatedProductsWithImages = async ({
    page = 1,
    take = 12,
    model,
    filters = {}
}: PaginationOptions) => {

    switch (model) {
        case "backpack":
            model = prisma.backpack;
            break;
        case "caddy":
            model = prisma.caddy;
            break;
        case "carry":
            model = prisma.carry;
            break;
        case "coolerpad":
            model = prisma.coolerpad;
            break;
        case "cover":
            model = prisma.cover;
            break;
        case "docking":
            model = prisma.docking;
            break;
        case "hdd":
            model = prisma.hdd;
            break;
        case "headphone":
            model = prisma.headphone;
            break;
        case "mouse":
            model = prisma.mouse;
            break;
        case "networkCard":
            model = prisma.networkCard;
            break;
        case "notebook":
            model = prisma.notebook;
            break;
        case "pad":
            model = prisma.pad;
            break;
        case "ram":
            model = prisma.ram;
            break;
        case "source":
            model = prisma.source;
            break;
        case "ssd":
            model = prisma.ssd;
            break;
        case "support":
            model = prisma.support;
            break;
        case "videoCard":
            model = prisma.videoCard;
            break;
        default:
            throw new Error("Modelo no válido");
    };

    if (isNaN(Number(page))) page = 1;
    if (page < 1) page = 1;

    // Normalize filters: remove empty or 'all' values
    const normalizedFilters = Object.entries(filters)
        .filter(([_, value]) => value !== undefined && value !== "" && value !== "all")
        .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

    try {
        // Build Prisma-compatible 'where' clause for multiple filters
        const where: any = {
            status: true,
        };

        Object.entries(normalizedFilters).forEach(([key, value]) => {
            // Handle arrays and comma-separated strings for multi-value fields
            if (
                Array.isArray(value) ||
                (typeof value === "string" &&
                    (key.toLowerCase().includes("colors") 
                        ||key.toLowerCase().includes("compatibility")
                        || key.toLowerCase().includes("connectionType")
                        || key.toLowerCase().includes("volts")
                        || key.toLowerCase().includes("brandsUse")
                        || key.toLowerCase().includes("colorStamp")
                        || key.toLowerCase().includes("materials")
                    ))
            ) {
                const arrValue =
                    Array.isArray(value)
                        ? value
                        : value.split(",").map((v: string) => {
                            const num = Number(v.trim());
                            return isNaN(num) ? v.trim() : num;
                        });
                where[key] = { hasSome: arrValue };
            }
            // Handle numbers
            else if (typeof value === "number" || (!isNaN(Number(value)) && value !== "")) {
                where[key] = Number(value);
            }
            // Handle strings
            else if (typeof value === "string") {
                where[key] = { contains: value, mode: "insensitive" };
            }
            // Fallback for other types
            else {
                where[key] = value;
            }
        });

        const products = await model.findMany({
            where,
            take: take,
            skip: (page - 1) * take,
            include: {
                ProductImage: {
                    take: 2,
                    select: {
                        url: true
                    }
                },
                category: {
                    select: {
                        name: true
                    }
                }
            },
            orderBy: {
                title: "asc"
            }
        });

        const totalCount = await model.count({ where });
        const totalPages = Math.ceil(totalCount / take);      

        return {
            currentPage: page,
            totalPages: totalPages,
            products: products.map((product: any) => ({
                ...product,
                category: product.category.name,
                images: product.ProductImage.map((img: any) => img.url)
            }))
        }

    } catch (error) {
        throw new Error("No se pudieron cargar los productos")
    }
};
