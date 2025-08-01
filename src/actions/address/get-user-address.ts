"use server";

import { prisma } from "@/lib/prisma";

export const getUserAddress = async(userId: string) => {
    try {
        const address = await prisma.userAddress.findUnique({
            where: {
                userId: userId
            }
        });

        if(!address) return null;

        const {departmentId, address2, ...rest} = address;

        return {
            ...rest,
            department: departmentId,
            address2: address2 ? address2 : ''
        };
    } catch (error) {
        console.log(error);
        return null;
    }
};