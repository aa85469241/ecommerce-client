import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/db/prisma";
import { Adapter } from "next-auth/adapters";
import { env } from "@/lib/env";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import bcrypt from "bcrypt";
import { UserRole } from "@prisma/client";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
    providers: [
        GoogleProvider({
            profile(profile) {
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: "GoogleAuth-" + profile.email,
                    image: profile.picture,
                    role: profile.role ?? UserRole.USER,
                }
            },
            clientId: env.GOOGLE_CLIENT_ID,
            clientSecret: env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "email", type: "text" },
                password: { label: "password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Invalid credentials');
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials?.email,
                    }
                })

                if (!user || !user.hashedPassword) {
                    throw new Error('Invalid credentials');
                }

                const isPasswordCorrect = await bcrypt.compare(
                    credentials.password,
                    user.hashedPassword,
                )

                if (!isPasswordCorrect) {
                    throw new Error('Invalid credentials');
                }

                return user;
            }
        })
    ],
    callbacks: {
        session({ session, token }) {
            if (token.role && session.user) {
                session.user.role = token.role;
            }
            return session
        },
        jwt({ token, user }) {
            return { ...token, ...user }
        },
    },
    pages: {
        signIn: "/"
    },
    session: {
        strategy: "jwt",
    },
    // debug: process.env.NODE_ENV === 'development',
    secret: env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };