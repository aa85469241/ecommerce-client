'use server';

import * as z from 'zod';
import { prisma } from "@/lib/db/prisma";
import { getCurrentUser } from "./getCurrentUser";
import { AccountSchema } from '@/schemas';

export async function updateUserDate(
    values: z.infer<typeof AccountSchema>
) {
    const validatedFields = AccountSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "InValid fields!" }
    };

    const currentUser = await getCurrentUser();
    const { email, name } = validatedFields.data;

    await prisma.user.update({
        where: {
            id: currentUser?.id
        },
        data: {
            email,
            name,
        }
    })

    return { success: "Account updated!" }
}