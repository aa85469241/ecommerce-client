'use client';

import Image from "next/image"
import EmptyCart from "../../../public/assets/empty-cart.jpg";
import Link from "next/link";

const CartIsEmpty = () => {
    return (
        <div className="relative flex flex-col items-center">
            <div>
                <Image
                    src={EmptyCart}
                    alt="empty-cart"
                    width={300}
                    height={300}
                    className="object-cover mix-blend-multiply"
                />
            </div>
            <div className="text-xl font-medium mt-2">
                No item in cart.
                <Link href="/products" className="ml-2 font-bold hover:underline">Shop now!</Link>
            </div>
        </div>
    )
}

export default CartIsEmpty