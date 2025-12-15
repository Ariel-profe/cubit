"use server";

import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";

export const getOrderById = async (id: string) => {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session?.user) {
        return {
            ok: false,
            message: 'Debe estar autenticado'
        }
    };

    try {
        const order = await prisma.order.findUnique({
            where: { id },
            include: {
                OrderAddress: {
                    include: {
                        department: {
                            select: {
                                name: true
                            }
                        }
                    }
                },
                OrderItem: {
                    select: {
                        price: true,
                        quantity: true,

                        backpack: {
                            select: {
                                title: true,
                                slug: true,

                                ProductImage: {
                                    select: {
                                        url: true
                                    },
                                    take: 1
                                }
                            }
                        },
                        caddy: {
                            select: {
                                title: true,
                                slug: true,

                                ProductImage: {
                                    select: {
                                        url: true
                                    },
                                    take: 1
                                }
                            }
                        },
                        carry: {
                            select: {
                                title: true,
                                slug: true,

                                ProductImage: {
                                    select: {
                                        url: true
                                    },
                                    take: 1
                                }
                            }
                        },
                        coolerpad: {
                            select: {
                                title: true,
                                slug: true,

                                ProductImage: {
                                    select: {
                                        url: true
                                    },
                                    take: 1
                                }
                            }
                        },
                        cover: {
                            select: {
                                title: true,
                                slug: true,

                                ProductImage: {
                                    select: {
                                        url: true
                                    },
                                    take: 1
                                }
                            }
                        },
                        docking: {
                            select: {
                                title: true,
                                slug: true,

                                ProductImage: {
                                    select: {
                                        url: true
                                    },
                                    take: 1
                                }
                            }
                        },
                        hdd: {
                            select: {
                                title: true,
                                slug: true,

                                ProductImage: {
                                    select: {
                                        url: true
                                    },
                                    take: 1
                                }
                            }
                        },
                        headphone: {
                            select: {
                                title: true,
                                slug: true,

                                ProductImage: {
                                    select: {
                                        url: true
                                    },
                                    take: 1
                                }
                            }
                        },
                        mouse: {
                            select: {
                                title: true,
                                slug: true,

                                ProductImage: {
                                    select: {
                                        url: true
                                    },
                                    take: 1
                                }
                            }
                        },
                        networkCard: {
                            select: {
                                title: true,
                                slug: true,

                                ProductImage: {
                                    select: {
                                        url: true
                                    },
                                    take: 1
                                }
                            }
                        },
                        notebook: {
                            select: {
                                title: true,
                                slug: true,

                                ProductImage: {
                                    select: {
                                        url: true
                                    },
                                    take: 1
                                }
                            }
                        },
                        pad: {
                            select: {
                                title: true,
                                slug: true,

                                ProductImage: {
                                    select: {
                                        url: true
                                    },
                                    take: 1
                                }
                            }
                        },
                        ram: {
                            select: {
                                title: true,
                                slug: true,

                                ProductImage: {
                                    select: {
                                        url: true
                                    },
                                    take: 1
                                }
                            }
                        },
                        source: {
                            select: {
                                title: true,
                                slug: true,

                                ProductImage: {
                                    select: {
                                        url: true
                                    },
                                    take: 1
                                }
                            }
                        },
                        ssd: {
                            select: {
                                title: true,
                                slug: true,

                                ProductImage: {
                                    select: {
                                        url: true
                                    },
                                    take: 1
                                }
                            }
                        },
                        support: {
                            select: {
                                title: true,
                                slug: true,

                                ProductImage: {
                                    select: {
                                        url: true
                                    },
                                    take: 1
                                }
                            }
                        },
                        videoCard: {
                            select: {
                                title: true,
                                slug: true,

                                ProductImage: {
                                    select: {
                                        url: true
                                    },
                                    take: 1
                                }
                            }
                        },

                    }
                }
            }
        });

        if (!order) throw `404 - No se reconoce el producto con id ${id}`;

        if (session.user.role === 'user' || session.user.role === 'client') {
            if (session.user.id !== order.userId) {
                throw `La orden ${id} no coincide con el usuario`
            }
        };

        return {
            ok: true,
            order: order
        };

    } catch (error) {
        console.error(error);
        return {
            ok: false,
            message: '500 - La order no existe'
        }
    }
};

