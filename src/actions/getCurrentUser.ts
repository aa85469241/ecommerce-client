import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/db/prisma";

export async function getSession() {
    return await getServerSession(authOptions)
}

export async function getCurrentUser() {
    try {
        const session = await getSession();

        if (!session?.user.email || session.user.role !== "USER") {
            return null;
        }

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user.email as string
            }
        })

        if (!currentUser) {
            return null;
        }

        return {
            ...currentUser,
            createAt: currentUser.createAt.toISOString(),
            updateAt: currentUser.updateAt.toISOString(),
            emailVerified: currentUser.emailVerified?.toISOString() || null,
        }
    }
    catch (err) {
        return null;
    }
}

export const revalidate = 5;