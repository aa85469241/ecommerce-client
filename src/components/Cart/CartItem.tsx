'use client';

import Image from "next/image";
import Link from "next/link";
import useCart, { CartProduct } from "@/hooks/useCart"
import { Color } from "@/types";
import { FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";

interface CartItemProps {
    data: CartProduct;
    colors: Color[];
}

const CartItem: React.FC<CartItemProps> = ({
    data,
    colors
}) => {
    const cart = useCart();
    const color = colors.filter((c) => c.value === data.color).map((c) => c.name);

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }


    return (
        <li className="relative w-full flex border-2 border-neutral/50 rounded-md overflow-hidden">
            <div id="cart-image" className="relative aspect-square w-32 md:w-36">
                <Image
                    src={data.product.images[0].url}
                    alt={data.product.name}
                    fill
                    priority
                    className="object-cover p-1 object-center rounded-lg"
                />
            </div>
            <div id="cart-info" className="flex flex-col justify-start gap-2 px-3 pt-2 md:px-6 md:pt-3">
                <div className="text-2xl lg:text-3xl font-bold ">
                    {data.product.name}
                </div>
                <div className="text-xs font-medium tracking-wide">
                    Size: <span className="font-normal">{data.size}</span>
                </div>
                {colors.find((c) => c.value === data.color)
                    &&
                    <div className="text-xs font-medium tracking-wide line">
                        Color: <span className="font-normal">{color}</span>
                    </div>
                }
                <div className="text-xs font-medium tracking-wide">
                    Quantity: <span className="font-normal">{data.quantity}</span>
                </div>
            </div>
            <div
                id="remove-button"
                className="absolute top-2 right-2"
            >
                <button
                    className="btn btn-circle btn-sm btn-outline hover:scale-110"
                    onClick={() => cart.removeItem(data.cartId)}
                >
                    <FaTimes />
                </button>
            </div>
            <div className="absolute bottom-0 right-4 flex">
                <Link href={`/products/${data.product.id}`}>
                    <span className="text-xs hover:text-gray">
                        buy this more
                    </span>
                </Link>
                <div className="mx-2">|</div>
                <Link href="/products">
                    <span className="text-xs hover:text-gray">view others</span>
                </Link>
            </div>
        </li>
    )
}

export default CartItem