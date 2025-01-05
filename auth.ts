// import NextAuth from "next-auth";
// import authConfig from "@/auth.config";
// import {PrismaAdapter} from '@auth/prisma-adapter';

// import { getUserById } from "@/data/user";
// import { prisma } from "./lib/db";


// declare module "@auth/core/types" {

//   interface User {
//     // add your custom fields here
//     role: "ADMIN" | "USER"
//   }

//   interface Session {
//     user: User;
//   }
// }

// declare module "@auth/core/jwt" {
//   interface JWT {
//     // add your custom fields here
//     role: "ADMIN" | "USER"
//   }
// }

// export const {
//   handlers: { GET, POST },
//   auth,
//   signIn,
//   signOut
// } = NextAuth({
//     adapter: PrismaAdapter(prisma),
//     session: {
//         strategy: "jwt"
//     },
//     callbacks: {
//       async session({token, session}){

//         if(token.sub && session.user){
//           session.user.id = token.sub
//         };

//         if(token.role && session.user){
//           session.user.role = token.role;
//         }
        
//         return session;
//       },
//       async jwt({token}){

//         if(!token.sub) return token;

//         const existingUser = await getUserById(token.sub);

//         if(!existingUser) return token;

//         token.role = existingUser.role;

//         return token;
//       },
//     },
//   ...authConfig
// });