
import NextAuth, {type NextAuthConfig} from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import {z} from 'zod';
import bcryptjs from 'bcryptjs';

import { prisma } from './lib/prisma';

export const authConfig: NextAuthConfig = {
    pages: {
        signIn: '/auth/login',
        newUser: '/auth/new-account',
    },
    callbacks: {

        // authorized({auth, request: { nextUrl }}){

        //     const isLoggedIn = !!auth?.user;
        //     const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
        //     if(isOnDashboard){
        //         if(isLoggedIn) return true;
        //         return false;
        //     } else if(isLoggedIn){
        //         return Response.redirect(new URL("/dashboard", nextUrl));
        //     };

        //     return true
        // },

        jwt({token, user}) {

            if(user){
                token.data = user;
            }
            return token;
        },

        session({session, token}){
            session.user = token.data as any;

            return session;
        }
    },
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({
                        email: z.string().email().toLowerCase(),
                        password: z.string().min(6),
                    })
                    .safeParse(credentials);

                if (!parsedCredentials.success) return null;

                const {email, password} = parsedCredentials.data;               
                    
                // Buscar el correo
                const user = await prisma.user.findUnique({where: {email: email.toLowerCase()}});
                if (!user) return null;

                // Comparar la contraseña
                if( !bcryptjs.compareSync(password, user.password)) return null;

                // Si la autenticacion es existosa, sumar 1 al contador de visitas del usuario
                await prisma.user.update({
                    where: {id: user.id},
                    data: {
                        counterVisits: user.counterVisits + 1
                    }
                });

                // Regresar el usuario sin el password
                const {password: _, ...rest} = user;
                    
                return rest;
            }
        })
    ]
};

export const {signIn, signOut, auth, handlers} = NextAuth(authConfig);
