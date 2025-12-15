"use server";

import { headers } from "next/headers";
import prisma from "@/lib/prisma";
import type { IAddress } from "@/interfaces";
import { auth } from "@/lib/auth";

interface ProductToOrder {
    productId: string;
    quantity: number;
};

export const placeOrder = async (productIds: ProductToOrder[], address: IAddress) => {

     const session = await auth.api.getSession({
        headers: await headers()
    })
    const userId = session?.user.id;

    // Verificar sesion de usuario
    if (!userId) {
        return {
            ok: false,
            message: 'No hay sesión de usuario'
        }
    };

    // Obtener la informacion de los productos (podemos tener 2 productos con el mismo ID si es q tienen diferentes colores/tamanos/etc)
    const [backpacks, caddys, carrys, coolerpads, covers, dockings, hdds, headphones, mice, networkCards, notebooks, pads, rams, sources, ssds, supports, videoCards] = await Promise.all([
        prisma.backpack.findMany({
            where: {
                id: {
                    in: productIds.map(p => p.productId)
                }
            }
        }),
        prisma.caddy.findMany({
            where: {
                id: {
                    in: productIds.map(p => p.productId)
                }
            }
        }),
        prisma.carry.findMany({
            where: {
                id: {
                    in: productIds.map(p => p.productId)
                }
            }
        }),
        prisma.coolerpad.findMany({
            where: {
                id: {
                    in: productIds.map(p => p.productId)
                }
            }
        }),
        prisma.cover.findMany({
            where: {
                id: {
                    in: productIds.map(p => p.productId)
                }
            }
        }),
        prisma.docking.findMany({
            where: {
                id: {
                    in: productIds.map(p => p.productId)
                }
            }
        }),
        prisma.hdd.findMany({
            where: {
                id: {
                    in: productIds.map(p => p.productId)
                }
            }
        }),
        prisma.headphone.findMany({
            where: {
                id: {
                    in: productIds.map(p => p.productId)
                }
            }
        }),
        prisma.mouse.findMany({
            where: {
                id: {
                    in: productIds.map(p => p.productId)
                }
            }
        }),
        prisma.networkCard.findMany({
            where: {
                id: {
                    in: productIds.map(p => p.productId)
                }
            }
        }),
        prisma.notebook.findMany({
            where: {
                id: {
                    in: productIds.map(p => p.productId)
                }
            }
        }),
        prisma.pad.findMany({
            where: {
                id: {
                    in: productIds.map(p => p.productId)
                }
            }
        }),
        prisma.ram.findMany({
            where: {
                id: {
                    in: productIds.map(p => p.productId)
                }
            }
        }),
        prisma.source.findMany({
            where: {
                id: {
                    in: productIds.map(p => p.productId)
                }
            }
        }),
        prisma.ssd.findMany({
            where: {
                id: {
                    in: productIds.map(p => p.productId)
                }
            }
        }),
        prisma.support.findMany({
            where: {
                id: {
                    in: productIds.map(p => p.productId)
                }
            }
        }),
        prisma.videoCard.findMany({
            where: {
                id: {
                    in: productIds.map(p => p.productId)
                }
            }
        }),
    ]);

    const products = [
        ...backpacks,
        ...caddys,
        ...carrys,
        ...coolerpads,
        ...covers,
        ...dockings,
        ...hdds,
        ...headphones,
        ...mice,
        ...networkCards,
        ...notebooks,
        ...pads,
        ...rams,
        ...sources,
        ...ssds,
        ...supports,
        ...videoCards];

    // Calcular los montos
    const itemsInOrder = productIds.reduce((count, prod) => count + prod.quantity, 0);

    // Calcular totales de subTotal, tax y total
    const { subTotal, tax, total } = productIds.reduce((totals, item) => {

        const productQuantity = item.quantity;
        const product = products.find(p => p.id === item.productId);

        if (!product) {
            throw new Error(`500 - ${item.productId} no existe`)
        };

        const subTotal = product.price * productQuantity;

        totals.subTotal += subTotal;
        totals.tax += subTotal * 0.21;
        totals.total += subTotal * 1.21;

        return totals;
    }, { subTotal: 0, tax: 0, total: 0 })

    // Crear la transaccion de base de datos

    try {
        const prismaTx = await prisma.$transaction(async (tx) => {

            // 1. Actualizar el stock de los productos basado en lo q el client esta llevando
            const updatedProductsPromises = products.map((product) => {

                //Acumular los valores
                const productQuantity = productIds.filter(
                    p => p.productId === product.id,
                ).reduce((acc, item) => item.quantity + acc, 0);

                if (productQuantity === 0) {
                    throw new Error(`500 - ${product.id} no tiene cantidad definida`)
                };

                // Actualizar stock según el tipo de producto
                if (notebooks.find(n => n.id === product.id)) {
                    // Notebook
                    return tx.notebook.update({
                        where: { id: product.id },
                        data: { inStock: { decrement: productQuantity } }
                    });
                } 
                else if (backpacks.find(c => c.id === product.id)) {
                    // Backpack
                    return tx.backpack.update({
                        where: { id: product.id },
                        data: { inStock: { decrement: productQuantity } }
                    });
                } 
                else if (caddys.find(c => c.id === product.id)) {
                    // Caddy
                    return tx.caddy.update({
                        where: { id: product.id },
                        data: { inStock: { decrement: productQuantity } }
                    });
                } 
                else if (carrys.find(c => c.id === product.id)) {
                    // Carry
                    return tx.carry.update({
                        where: { id: product.id },
                        data: { inStock: { decrement: productQuantity } }
                    });
                } 
                else if (coolerpads.find(c => c.id === product.id)) {
                    // CoolerPad
                    return tx.coolerpad.update({
                        where: { id: product.id },
                        data: { inStock: { decrement: productQuantity } }
                    });
                } 
                else if (covers.find(c => c.id === product.id)) {
                    // Cover
                    return tx.cover.update({
                        where: { id: product.id },
                        data: { inStock: { decrement: productQuantity } }
                    });
                } 
                else if (dockings.find(c => c.id === product.id)) {
                    // Docking
                    return tx.docking.update({
                        where: { id: product.id },
                        data: { inStock: { decrement: productQuantity } }
                    });
                } 
                else if (hdds.find(c => c.id === product.id)) {
                    // Hdd
                    return tx.hdd.update({
                        where: { id: product.id },
                        data: { inStock: { decrement: productQuantity } }
                    });
                } 
                else if (headphones.find(c => c.id === product.id)) {
                    // Headphone
                    return tx.headphone.update({
                        where: { id: product.id },
                        data: { inStock: { decrement: productQuantity } }
                    });
                } 
                else if (mice.find(c => c.id === product.id)) {
                    // Mice
                    return tx.mouse.update({
                        where: { id: product.id },
                        data: { inStock: { decrement: productQuantity } }
                    });
                } 
                else if (networkCards.find(c => c.id === product.id)) {
                    // NetworkCard
                    return tx.networkCard.update({
                        where: { id: product.id },
                        data: { inStock: { decrement: productQuantity } }
                    });
                } 
                else if (pads.find(c => c.id === product.id)) {
                    // Pad
                    return tx.pad.update({
                        where: { id: product.id },
                        data: { inStock: { decrement: productQuantity } }
                    });
                } 
                else if (rams.find(c => c.id === product.id)) {
                    // Ram
                    return tx.ram.update({
                        where: { id: product.id },
                        data: { inStock: { decrement: productQuantity } }
                    });
                } 
                else if (sources.find(c => c.id === product.id)) {
                    // Source
                    return tx.source.update({
                        where: { id: product.id },
                        data: { inStock: { decrement: productQuantity } }
                    });
                } 
                else if (ssds.find(c => c.id === product.id)) {
                    // Ssd
                    return tx.ssd.update({
                        where: { id: product.id },
                        data: { inStock: { decrement: productQuantity } }
                    });
                } 
                else if (supports.find(c => c.id === product.id)) {
                    // Support
                    return tx.support.update({
                        where: { id: product.id },
                        data: { inStock: { decrement: productQuantity } }
                    });
                } 
                else if (videoCards.find(c => c.id === product.id)) {
                    // VideoCard
                    return tx.videoCard.update({
                        where: { id: product.id },
                        data: { inStock: { decrement: productQuantity } }
                    });
                } 
                else {
                    throw new Error(`500 - No se reconoce el producto con id ${product.id}`);
                };
            });

            const updatedProducts = await Promise.all(updatedProductsPromises);

            //Verificar valores negativos en la existencia = no hay stock
            updatedProducts.forEach(product => {
                if (product.inStock < 0) {
                    throw new Error(`${product.title} no se encuentra en stock`)
                }
            });

            // 2. Crear la orden - encabezado - detalle
            const order = await tx.order.create({
                data: {
                    userId: userId,
                    itemsInOrder: itemsInOrder,
                    subTotal: subTotal,
                    tax: tax,
                    total: total,
                    isSentByEmail: true,

                    OrderItem: {
                        createMany: {
                            data: productIds.map(p => ({
                                quantity: p.quantity,
                                backpackId: backpacks.find(n => n.id === p.productId)?.id ?? null,
                                caddyId: caddys.find(n => n.id === p.productId)?.id ?? null,
                                carryId: carrys.find(n => n.id === p.productId)?.id ?? null,
                                coolerpadId: coolerpads.find(n => n.id === p.productId)?.id ?? null,
                                coverId: covers.find(n => n.id === p.productId)?.id ?? null,
                                dockingId: dockings.find(n => n.id === p.productId)?.id ?? null,
                                hddId: hdds.find(n => n.id === p.productId)?.id ?? null,
                                headphoneId: headphones.find(n => n.id === p.productId)?.id ?? null,
                                mouseId: mice.find(n => n.id === p.productId)?.id ?? null,
                                networkCardId: networkCards.find(n => n.id === p.productId)?.id ?? null,
                                notebookId: notebooks.find(n => n.id === p.productId)?.id ?? null,
                                padId: pads.find(n => n.id === p.productId)?.id ?? null,
                                ramId: rams.find(n => n.id === p.productId)?.id ?? null,
                                sourceId: sources.find(n => n.id === p.productId)?.id ?? null,
                                ssdId: ssds.find(n => n.id === p.productId)?.id ?? null,
                                supportId: supports.find(n => n.id === p.productId)?.id ?? null,
                                videoCardId: videoCards.find(n => n.id === p.productId)?.id ?? null,
                                price: products.find(product => product.id === p.productId)?.price ?? 0
                            }))
                        }
                    }
                }
            });

            //Validar si el precio es  0, lanzar un error

            // 3. Crear la direccion de la orden
            const { department, ...restAddress } = address;

            const orderAddress = await tx.orderAddress.create({
                data: {
                    ...restAddress,
                    departmentId: department,
                    orderId: order.id
                }
            });

            return {
                order: order,
                orderAddress: orderAddress,
                updatedProducts: updatedProducts
            }
        });

        return {
            ok: true,
            order: prismaTx.order,
            prismaTx
        }
    } catch (error: any) {
        return {
            ok: false,
            message: error?.message
        }
    }
};