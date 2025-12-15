"use server";

import { revalidatePath } from "next/cache";
import { v2 as cloudinary } from 'cloudinary';
import z from "zod";
import prisma from "@/lib/prisma";
import { Hdd, Prisma } from "@prisma/client";
import { getServerSession } from "@/lib/get-server-session";
import { forbidden, unauthorized } from "next/navigation";

// Configure Cloudinary
cloudinary.config(process.env.CLOUDINARY_URL ?? '');

const hddSchema = z.object({
    id: z.string().uuid().optional().nullable(),
    code: z.string().min(3).max(100),
    title: z.string().min(3).max(255),
    slug: z.string().min(3).max(255),
    brand: z.string().min(3).max(100),
    categoryId: z.string().uuid(),
    price: z.coerce
        .number()
        .min(0)
        .transform(val => Number(val.toFixed(2))),
    inStock: z.coerce
        .number()
        .min(0)
        .transform(val => Number(val.toFixed(0))),
    tags: z.string(),
    status: z.coerce
        .boolean()
        .transform(val => Boolean(val)).default(true),
    //Specific
    idManual: z.string().min(3).max(100),
    model: z.string().max(100),
    format: z.string().max(100),
    capacity: z.string().max(100),
    rpm: z.string().max(100),
    thickness: z.string().max(100)
});

export const createUpdateHdd = async (formData: FormData) => {
    const session = await getServerSession();
    const user = session?.user;
    if (!user) unauthorized();
    if (user.role !== 'admin') forbidden();
    const data = Object.fromEntries(formData);

    let productParsed = hddSchema.safeParse(data);

    // // Validate the product data avoiding undefined or nullable values
    if (Object.values(data).some(value => value === 'undefined')) {
        return {
            ok: false,
            message: `El campo "${Object.keys(data).find(key => data[key] === 'undefined')}" es obligatorio}`
        }
    };

    if (!productParsed?.success) {
        console.log("Validation error:", productParsed?.error);
        return {
            ok: false,
            message: productParsed?.error?.errors.map(err => err.message).join(', ')
        }
    };

    const product: any = productParsed.data;
    product.slug = product.slug.toLowerCase().replace(/ /g, '-').trim();

    const { id, ...rest } = product;

    try {
        const prismaTx = await prisma.$transaction(async (tx) => {

            let product: Hdd;

            const tagsArray = rest.tags.split(',').map((tag: string) => tag.trim().toLowerCase());

            if (id) {
                // Update product
                product = await prisma.hdd.update({
                    where: { id },
                    data: {
                        ...rest,
                        tags: {
                            set: tagsArray
                        }
                    },
                })

            } else {
                // Create product
                product = await prisma.hdd.create({
                    data: {
                        ...rest,
                        tags: {
                            set: tagsArray
                        }
                    },
                })
            };

            // Images
            // If there are images in the formData, process and save them
            if (formData.getAll("images")) {
                const images = await uploadImages(formData.getAll("images") as File[]);
                if (!images) {
                    throw new Error("Error al subir las imágenes, rollback de la transacción");
                };

                // Update product with images
                await prisma.productImage.createMany({
                    data: images.map(image => ({
                        url: image!,
                        //TODO: Add more models as needed
                        hddId: prisma.hdd ? product.id : null
                    }))
                })
            };

            return { product }
        });

        // Revalidate path
        revalidatePath('/admin/productos/discos-duros');
        revalidatePath(`/admin/productos/discos-duros/${product.slug}`);
        revalidatePath(`/productos/discos-duros/${product.slug}`);

        return {
            ok: true,
            message: id ? "Producto actualizado correctamente" : "Producto creado correctamente",
        };

    } catch (error: any) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                console.log(error);

                return {
                    ok: false,
                    message: Array.isArray(error.meta?.target) && error.meta?.target.includes('code')
                        ? "El código ya existe"
                        : (typeof error.meta?.target === 'string' && error.meta?.target === 'code'
                            ? "El código ya existe"
                            : "El slug ya existe")
                };
            }
        }

        console.log(error);
        return {
            ok: false,
            message: error,
        };
    }
};

const uploadImages = async (images: File[]) => {

    try {

        const uploadPromises = images.map(async (image) => {

            try {
                const buffer = await image.arrayBuffer();
                const base64Image = Buffer.from(buffer).toString('base64');

                return cloudinary.uploader.upload(`data:image/png;base64,${base64Image}`)
                    .then(r => r.secure_url);

            } catch (error) {
                console.log(error);
                return null;
            }
        })

        const uploadedImages = await Promise.all(uploadPromises);
        return uploadedImages;

    } catch (error) {
        console.log(error);
        return null;
    };
}