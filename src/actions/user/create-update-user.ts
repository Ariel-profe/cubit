"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

const userSchema = z.object({
    id: z.string().uuid().optional().nullable(),
    name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
    email: z.string().email("El email no es válido"),
    password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres").optional().nullable(),
    role: z.enum(["client", "user"], {errorMap: () => ({message: "El rol no es válido"})}),
});

export const createUpdateUser = async (formData: FormData) => {

};