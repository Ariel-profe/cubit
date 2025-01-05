import * as z from 'zod';

export const loginSchema = z.object({
    email: z.string().email({
        message: "Email es required"
    }),
    password: z.string().min(1, {
        message: "Password is required"
    })
});

export const registerSchema = z.object({
    name: z.string().min(2, {
        message: "Name is required"
    }).toLowerCase(),
    email: z.string().email({
        message: "Email es required"
    }).toLowerCase(),
    password: z.string().min(6, {
        message: "Minimun 6 characters required"
    })
});

export const productSchema = z.object({
    title: z.string().min(2, {
        message: "Name is required"
    }).toLowerCase().trim(),
    slug: z.string().min(2, {
        message: "Name is required"
    }).toLowerCase().trim(),
    price: z.number().positive(),
    description: z.string().min(5, {
        message: "Description is required"
    }).toLowerCase().trim(),
});