import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import nextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github"


const githubId = process.env.GITHUB_ID;
const githubSecret = process.env.GITHUB_SECRET;
const emailUser = process.env.EMAIL_USER;



if ( !githubId || !githubSecret) {
    throw new Error( "Missing environment variables for authentication.");
}

export const authConfig = {
    providers: [
        GithubProvider( {
            clientId: githubId,
            clientSecret: githubSecret,
        }),
    ],
    adapter: PrismaAdapter(prisma), 
    callbacks: {
    // Callback pour vérifier l'email lors de la connexion
    async signIn({ user }) {
        
        if (user.email === emailUser) {
            return true; 
        } else {
            return false; 
        }
    },
    
    async session({ session, user }) {
        if (session.user) {
            session.user.email = user.email;
        }
        return session;
    },
  },
    debug: true,
    secret: process.env.NEXTAUTH_SECRET,
} satisfies NextAuthOptions

export default nextAuth( authConfig );