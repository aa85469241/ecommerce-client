'use server';

import { getCart } from "@/lib/db/cart";
import { prisma } from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";


export async function deleteItemFromCart(productId: string) {
    const cart = await getCart();

    const itemInCart = cart?.items.find(item => item.productId === productId);

    if (!itemInCart) {
        return;
    } else {
        await prisma.cartItem.delete({
            where: { id: itemInCart.id }
        })
    }

    revalidatePath("/cart");
}