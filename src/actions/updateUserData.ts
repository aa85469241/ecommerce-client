'use server';

import * as z from 'zod';
import { prisma } from "@/lib/db/prisma";
import { getCurrentUser } from "./getCurrentUser";
import { AccountSchema } from '@/schemas';
import { revalidatePath } from 'next/cache';

export async function updateUserDate(
    values: z.infer<typeof AccountSchema>
) {
    const validatedFields = AccountSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "InValid fields!" }
    };

    const currentUser = await getCurrentUser();
    const { name } = validatedFields.data;

    await prisma.user.update({
        where: {
            id: currentUser?.id
        },
        data: { name }
    })

    revalidatePath("/account/personal-info");

    return { success: "Account updated!" }
}