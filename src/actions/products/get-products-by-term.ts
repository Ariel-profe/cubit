"use server";

import { prisma } from "@/lib/prisma";

interface PaginationOptions {
    term: string;
    page?: number;
    take?: number;
};

export const getProductsByTerm = async ({ term, page = 1, take = 12 }: PaginationOptions) => {
    try {
        const [backpacks, caddys, carrys, coolerPads, covers, dockings, hdds, headphones, mouses, networkCards, notebooks, pads, rams, sources, ssds, supports, videoCards] = await Promise.all(
            [
                prisma.backpack.findMany({
                    where: {
                        status: true,
                        OR: [
                            { title: { contains: term, mode: 'insensitive' } },
                            { brand: { contains: term, mode: 'insensitive' } },
                            { tags: { has: term } }
                        ]
                    },
                    include: {
                        ProductImage: true,
                        category: {
                            select: {
                                name: true
                            }
                        }
                    },
                }),
                prisma.caddy.findMany({
                    where: {
                        status: true,
                        OR: [
                            { title: { contains: term, mode: 'insensitive' } },
                            { brand: { contains: term, mode: 'insensitive' } },
                            { tags: { has: term } }
                        ]
                    },
                    include: {
                        ProductImage: true,
                        category: {
                            select: {
                                name: true
                            }
                        }
                    },
                }),
                prisma.carry.findMany({
                    where: {
                        status: true,
                        OR: [
                            { title: { contains: term, mode: 'insensitive' } },
                            { brand: { contains: term, mode: 'insensitive' } },
                            { tags: { has: term } }
                        ]
                    },
                    include: {
                        ProductImage: true,
                        category: {
                            select: {
                                name: true
                            }
                        }
                    },
                }),
                prisma.coolerpad.findMany({
                    where: {
                        status: true,
                        OR: [
                            { title: { contains: term, mode: 'insensitive' } },
                            { brand: { contains: term, mode: 'insensitive' } },
                            { tags: { has: term } }
                        ]
                    },
                    include: {
                        ProductImage: true,
                        category: {
                            select: {
                                name: true
                            }
                        }
                    },
                }),
                prisma.cover.findMany({
                    where: {
                        status: true,
                        OR: [
                            { title: { contains: term, mode: 'insensitive' } },
                            { brand: { contains: term, mode: 'insensitive' } },
                            { tags: { has: term } }
                        ]
                    },
                    include: {
                        ProductImage: true,
                        category: {
                            select: {
                                name: true
                            }
                        }
                    },
                }),
                prisma.docking.findMany({
                    where: {
                        status: true,
                        OR: [
                            { title: { contains: term, mode: 'insensitive' } },
                            { brand: { contains: term, mode: 'insensitive' } },
                            { tags: { has: term } }
                        ]
                    },
                    include: {
                        ProductImage: true,
                        category: {
                            select: {
                                name: true
                            }
                        }
                    },
                }),
                prisma.hdd.findMany({
                    where: {
                        status: true,
                        OR: [
                            { title: { contains: term, mode: 'insensitive' } },
                            { brand: { contains: term, mode: 'insensitive' } },
                            { tags: { has: term } }
                        ]
                    },
                    include: {
                        ProductImage: true,
                        category: {
                            select: {
                                name: true
                            }
                        }
                    },
                }),
                prisma.headphone.findMany({
                    where: {
                        status: true,
                        OR: [
                            { title: { contains: term, mode: 'insensitive' } },
                            { brand: { contains: term, mode: 'insensitive' } },
                            { tags: { has: term } }
                        ]
                    },
                    include: {
                        ProductImage: true,
                        category: {
                            select: {
                                name: true
                            }
                        }
                    },
                }),
                prisma.mouse.findMany({
                    where: {
                        status: true,
                        OR: [
                            { title: { contains: term, mode: 'insensitive' } },
                            { brand: { contains: term, mode: 'insensitive' } },
                            { tags: { has: term } }
                        ]
                    },
                    include: {
                        ProductImage: true,
                        category: {
                            select: {
                                name: true
                            }
                        }
                    },
                }),
                prisma.networkCard.findMany({
                    where: {
                        status: true,
                        OR: [
                            { title: { contains: term, mode: 'insensitive' } },
                            { brand: { contains: term, mode: 'insensitive' } },
                            { tags: { has: term } }
                        ]
                    },
                    include: {
                        ProductImage: true,
                        category: {
                            select: {
                                name: true
                            }
                        }
                    },
                }),
                prisma.notebook.findMany({
                    where: {
                        status: true,
                        OR: [
                            { title: { contains: term, mode: 'insensitive' } },
                            { brand: { contains: term, mode: 'insensitive' } },
                            { tags: { has: term } }
                        ]
                    },
                    include: {
                        ProductImage: true,
                        category: {
                            select: {
                                name: true
                            }
                        }
                    },
                }),
                prisma.pad.findMany({
                    where: {
                        status: true,
                        OR: [
                            { title: { contains: term, mode: 'insensitive' } },
                            { brand: { contains: term, mode: 'insensitive' } },
                            { tags: { has: term } }
                        ]
                    },
                    include: {
                        ProductImage: true,
                        category: {
                            select: {
                                name: true
                            }
                        }
                    },
                }),
                prisma.ram.findMany({
                    where: {
                        status: true,
                        OR: [
                            { title: { contains: term, mode: 'insensitive' } },
                            { brand: { contains: term, mode: 'insensitive' } },
                            { tags: { has: term } }
                        ]
                    },
                    include: {
                        ProductImage: true,
                        category: {
                            select: {
                                name: true
                            }
                        }
                    },
                }),
                prisma.source.findMany({
                    where: {
                        status: true,
                        OR: [
                            { title: { contains: term, mode: 'insensitive' } },
                            { brand: { contains: term, mode: 'insensitive' } },
                            { tags: { has: term } }
                        ]
                    },
                    include: {
                        ProductImage: true,
                        category: {
                            select: {
                                name: true
                            }
                        }
                    },
                }),
                prisma.ssd.findMany({
                    where: {
                        status: true,
                        OR: [
                            { title: { contains: term, mode: 'insensitive' } },
                            { brand: { contains: term, mode: 'insensitive' } },
                            { tags: { has: term } }
                        ]
                    },
                    include: {
                        ProductImage: true,
                        category: {
                            select: {
                                name: true
                            }
                        }
                    },
                }),
                prisma.support.findMany({
                    where: {
                        status: true,
                        OR: [
                            { title: { contains: term, mode: 'insensitive' } },
                            { brand: { contains: term, mode: 'insensitive' } },
                            { tags: { has: term } }
                        ]
                    },
                    include: {
                        ProductImage: true,
                        category: {
                            select: {
                                name: true
                            }
                        }
                    },
                }),
                prisma.videoCard.findMany({
                    where: {
                        status: true,
                        OR: [
                            { title: { contains: term, mode: 'insensitive' } },
                            { brand: { contains: term, mode: 'insensitive' } },
                            { tags: { has: term } }
                        ]
                    },
                    include: {
                        ProductImage: true,
                        category: {
                            select: {
                                name: true
                            }
                        }
                    },
                }),
            ]
        );
        // Add pagination
        if (isNaN(Number(page))) page = 1;
        if (page < 1) page = 1;

        const allProducts = [
            ...backpacks, ...caddys, ...carrys, ...coolerPads, ...covers, ...dockings, ...hdds, ...headphones, ...mouses, ...networkCards, ...notebooks, ...pads, ...rams, ...sources, ...ssds, ...supports, ...videoCards
        ].sort((a, b) => a.title.localeCompare(b.title));

        const currentPage = Number(page) || 1;
        const itemsPerPage = Number(take) || 12;
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedProducts = allProducts.slice(start, end);

        const totalCount = allProducts.length;
        const totalPages = Math.ceil(totalCount / itemsPerPage);

        // Convert images for all products
        return {
            products: paginatedProducts.map(product => ({
                ...product,
                category: product.category.name,
                images: product.ProductImage.map(image => image.url)
            })),
            currentPage: page,
            totalPages: totalPages
        };
    } catch (error) {
        console.error("Error fetching products by term:", error);
        throw new Error("Failed to fetch products");
    }
};