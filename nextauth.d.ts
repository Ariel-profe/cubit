import NextAuth, {DefaultSession} from 'next-auth'

declare module "next-auth"{
    interface Session {
        user: {
            id: string;
            name: string;
            email: string;
            emailVerified?: boolean;
            role: string;
            address?: string;
            city?: string;
            zipCode?: string;
            location?: string;
            cuit?: string;
            phone?: string;
            image?: string;
            counterVisits: number;
        } & DefaultSession["user"];
    }
}