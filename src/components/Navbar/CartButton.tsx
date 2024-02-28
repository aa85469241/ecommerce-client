'use client';

import useCart from "@/hooks/useCart";
import { priceFormat } from "@/lib/format";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

interface CartButtonProps {
    close?: () => void;
}

const CartButton: React.FC<CartButtonProps> = ({ close }) => {
    const cart = useCart((state) => state.cart);
    const [isMounted, setIsMounted] = useState(false);
    const totalPrice = cart.reduce((total, item) => {
        return total + item.product.price * item.quantity
    }, 0)

    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted) {
        return null;
    }

    return (
        <div>
            <div className="dropdown dropdown-hover">
                <Link
                    href="/cart"
                    className="btn btn-ghost btn-circle pointer-events-auto p-2"
                    onClick={close}
                >
                    <div tabIndex={0} className="indicator p-1">
                        <span className="indicator-item badge badge-accent">
                            {cart.length}
                        </span>
                        <FaShoppingCart size={20} />
                    </div>
                </Link>
                <div tabIndex={0} className="dropdown-content right-0 bg-base-200 shadow-sm shadow-black border border-black mt-1 rounded-md p-3">
                    <p className="text-black whitespace-nowrap font-semibold">
                        Total: {priceFormat(totalPrice)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CartButton