"use server";

import { prisma } from "@/lib/prisma";

export const getProductsByTerm = async (term: string) => {
    try {
        const [backpacks, caddys, carrys, coolerPads, covers, dockings, hdds, headphones, mouses, networkCards, notebooks, pads, rams, sources, ssds, supports, videoCards] = await Promise.all(
        [
            prisma.backpack.findMany({
                where: {
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
        // Convert images for all products
        return [...backpacks, ...caddys, ...carrys, ...coolerPads, ...covers, ...dockings, ...hdds, ...headphones, ...mouses, ...networkCards, ...notebooks, ...rams, ...pads, ...ssds, ...supports, ...videoCards, ...sources].map(product => {
            return {
                ...product,
                category: product.category.name,
                images: product.ProductImage.map(image => image.url)
            };
        });
    } catch (error) {
        console.error("Error fetching products by term:", error);
        throw new Error("Failed to fetch products");
    }

};