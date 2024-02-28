'use client';

import { useEffect, useState } from "react";
import useCart from "@/hooks/useCart";
import CartItem from "./CartItem";
import { Color } from "@/types";
import Link from "next/link";
import CartIsEmpty from "./CartIsEmpty";

interface CartListProps {
    colors: Color[];
}

const CartList: React.FC<CartListProps> = ({ colors }) => {
    const cart = useCart();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div className={`w-full space-y-6 ${cart.cart.length === 0 ? "md:col-span-12" : "md:col-span-7"}`}>
            {cart.cart.length === 0
                && <CartIsEmpty />
            }
            <ul className="space-y-4">
                {cart.cart.map((item, index) => (
                    <CartItem
                        key={"cart-" + index}
                        data={item}
                        colors={colors}
                    />
                ))}
            </ul>
        </div>
    )
}

export default CartList