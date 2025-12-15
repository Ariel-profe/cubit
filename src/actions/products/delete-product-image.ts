"use server";

import { revalidatePath } from 'next/cache';
import { forbidden, unauthorized } from 'next/navigation';
import { v2 as cloudinary } from 'cloudinary';
import { getServerSession } from '@/lib/get-server-session';
import prisma from '@/lib/prisma';

// Configure Cloudinary
cloudinary.config(process.env.CLOUDINARY_URL ?? '');

export const deleteProductImage = async (imageId: number, imageUrl: string) => {

    const session = await getServerSession();
    const user = session?.user;
    if (!user) unauthorized();
    if (user.role !== 'admin') forbidden();

        if(!imageUrl.startsWith("http")){
            return {
                ok: false,
                message: "No se puede eliminar una imagen que no está en la nube"
            }
        };

        const imageName = imageUrl
            .split('/')
            .pop()
            ?.split(".")[0] ?? "";

            try {

                await cloudinary.uploader.destroy(imageName);

                const deletedImage = await prisma.productImage.delete({
                    where: {
                        id: imageId
                    },
                    select: {
                        backpack: {
                            select: {
                                slug: true
                            }
                        },
                        caddy: {
                            select: {
                                slug: true
                            }
                        },
                        carry: {
                            select: {
                                slug: true
                            }
                        },
                        coolerpad: {
                            select: {
                                slug: true
                            }
                        },
                        cover: {
                            select: {
                                slug: true
                            }
                        },
                        docking: {
                            select: {
                                slug: true
                            }
                        },
                        hdd: {
                            select: {
                                slug: true
                            }
                        },
                        headphone: {
                            select: {
                                slug: true
                            }
                        },
                        mouse: {
                            select: {
                                slug: true
                            }
                        },
                        networkCard: {
                            select: {
                                slug: true
                            }
                        },
                        notebook: {
                            select: {
                                slug: true
                            }
                        },
                        pad: {
                            select: {
                                slug: true
                            }
                        },
                        ram: {
                            select: {
                                slug: true
                            }
                        },
                        source: {
                            select: {
                                slug: true
                            }
                        },
                        ssd: {
                            select: {
                                slug: true
                            }
                        },
                        support: {
                            select: {
                                slug: true
                            }
                        },
                        videoCard: {
                            select: {
                                slug: true
                            }
                        },
                    }
                });

                //Revalidate paths
                revalidatePath(`/admin/productos`);
                revalidatePath(`/admin/productos/mochilas/${deletedImage.backpack?.slug}`);
                revalidatePath(`/admin/productos/notebooks/${deletedImage.notebook?.slug}`);
                revalidatePath(`/admin/productos/notebooks/${deletedImage.notebook?.slug}`);
                revalidatePath(`/admin/productos/caddy/${deletedImage.caddy?.slug}`);

                revalidatePath(`/productos`);
                
                return {
                    ok: true,
                    message: "Imagen eliminada correctamente"
                }
                
            } catch (error) {
                console.error("Error deleting image:", error);
                return {
                    ok: false,
                    message: "Error al eliminar la imagen"
                };
                
            }
};