"use server";

import { v2 as cloudinary } from 'cloudinary';
import z from "zod";
import { prisma } from "@/lib/prisma";
import { Budget, BudgetItem } from "@prisma/client";
import { auth } from "@/auth.config";
import { revalidatePath } from 'next/cache';

// Configure Cloudinary
cloudinary.config(process.env.CLOUDINARY_URL ?? '');

const budgetSchema = z.object({
    id: z.string().uuid().optional().nullable(),
    budgetNumber: z.string().min(3).max(50),
    date: z.string().min(3).max(50),
    companyName: z.string().min(3).max(100),
    companyEmail: z.string().email().max(100),
    clientName: z.string().min(3).max(100),
    clientEmail: z.string().email().max(100),
    createdAt: z.string().optional().nullable()
});

export const createBudget = async (formData: FormData) => {

    const session = await auth();
    const userId = session?.user.id;

    // Verificar sesion de usuario
    if (!userId) {
        return {
            ok: false,
            message: 'No hay sesión de usuario'
        }
    };

    const data = Object.fromEntries(formData);

    let budgetParsed = budgetSchema.safeParse(data);

    const budgetItems: BudgetItem[] = [];
    let index = 0;

    while (true) {
        const description = data[`BudgetItem[${index}][description]`] as string | undefined;
        const quantity = data[`BudgetItem[${index}][quantity]`] as string | undefined;
        const price = data[`BudgetItem[${index}][price]`] as string | undefined;

        if (description === undefined && quantity === undefined && price === undefined) {
            break;
        }

        budgetItems.push({
            id: 0, // Will be auto-generated
            budgetId: '', // Will be set by Prisma
            description: description || '',
            image: '', // Will be set after image upload
            quantity: quantity ? parseInt(quantity) : 1,
            price: price || '0',
            createdAt: new Date()
        });

        index++;
    };    

    // // Validate the product data avoiding undefined or nullable values
    if (Object.values(data).some(value => value === 'undefined')) {
        return {
            ok: false,
            message: `El campo "${Object.keys(data).find(key => data[key] === 'undefined')}" es obligatorio}`
        }
    };

    if (!budgetParsed?.success) {
        console.log("Validation error:", budgetParsed?.error);
        return {
            ok: false,
            message: budgetParsed.error
        }
    };

    const budget = {
        id: budgetParsed.data.id,
        budgetNumber: budgetParsed.data.budgetNumber,
        date: budgetParsed.data.date,
        companyName: budgetParsed.data.companyName,
        companyEmail: budgetParsed.data.companyEmail,
        clientName: budgetParsed.data.clientName,
        clientEmail: budgetParsed.data.clientEmail,
        userId: userId!,
        createdAt: budgetParsed.data.createdAt ? new Date(budgetParsed.data.createdAt) : new Date()
    };

    const {id, ...rest} = budget;

    try {

        const prismaTx = await prisma.$transaction(async (tx) => {

            let budget: Budget;

           if(id){
            // Update budget
            budget = await tx.budget.update({
                where: { id },
                data: { ...rest  }
            });
           } else {
            // Create budget
           budget = await tx.budget.create({
                data: { ...rest }
            });
           }          

            // Upload images to Cloudinary and update budgetItems
            for (let i = 0; i < budgetItems.length; i++) {
                const files = formData.getAll(`BudgetItem[${i}][image]`) as File[];

                if (files && files.length > 0) {
                    const uploadedImages = await uploadImages(files);
                    if (uploadedImages) {
                        budgetItems[i].image = uploadedImages.join(','); // Store as comma-separated string
                    }
                }

                budgetItems[i].budgetId = budget.id;
            };

            // Delete existing budget items if updating, but if the image is not changed, keep the old one
            if(id){
                // Fetch existing items to preserve images if not updated
                const existingItems = await tx.budgetItem.findMany({
                    where: { budgetId: budget.id },
                });

                await tx.budgetItem.deleteMany({
                    where: { budgetId: budget.id },
                });

                // Preserve images for items where no new image was uploaded
                budgetItems.forEach((item, idx) => {
                    if (!item.image && existingItems[idx]) {
                        item.image = existingItems[idx].image;
                    }
                });
            }

            await tx.budgetItem.createMany({
                data: budgetItems.map(item => ({
                    description: item.description,
                    image: id ? item.image : '',
                    quantity: item.quantity,
                    price: item.price,
                    budgetId: budget.id
                }))
            })

            return { budget };
        });

        revalidatePath('/admin/(dashboard)/presupuestos');

        return {
            ok: true,
            message: id ? 'Presupuesto actualizado correctamente' : 'Presupuesto creado correctamente',
        };

    } catch (error) {
        console.log(error);
        return {
            ok: false,
            message: 'Error al crear/actualizar el presupuesto'
        }
    };
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