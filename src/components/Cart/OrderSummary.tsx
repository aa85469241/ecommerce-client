'use client';

import useCart from "@/hooks/useCart";
import { priceFormat } from "@/lib/format";
import Button from "../Button";
import { useEffect, useState } from "react";
import axios from "axios";
import { SafeUser } from "@/types";
import toast from "react-hot-toast";

interface OrderSummaryProps {
    user: SafeUser | null;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ user }) => {
    const [isMounted, setIsMounted] = useState(false);
    const cart = useCart((state) => state.cart)
    const removeAll = useCart((state) => state.removeAll)
    const totalPrice = cart.reduce((total, item) => {
        return total + item.product.price * item.quantity
    }, 0)

    const onCheckout = async () => {
        if (!user) {
            toast.error("Please login first!")
            return;
        }

        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
            productInCart: cart,
            user: user,
        })

        window.location = response.data.url;
    }

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div className={`p-4 mt-8 border-2 border-neutral rounded-lg md:col-span-5 md:mt-0 ${cart.length === 0 && "hidden"}`}>
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold tracking-wider">
                    Order Summary
                </h2>
                <Button
                    label="clean orders"
                    className="btn-sm btn-outline rounded-xl"
                    onClick={() => {
                        toast.success("Items all removed!!")
                        removeAll();
                    }}
                />
            </div>
            <div className="divider divider-neutral mt-1"></div>
            <div className="space-y-4 pr-4">
                {cart.map((item) => (
                    <div key={item.cartId} className="flex justify-between items-center text-sm font-medium">
                        <div>
                            {item.product.name}
                            <span className="ml-2 text-neutral-500 text-xs">
                                {item.size} | {item.color}
                            </span>
                        </div>
                        <div>x{item.quantity}</div>
                    </div>
                ))}
                {cart.length !== 0
                    && <div className="divider divider-neutral opacity-50"></div>}
                <div className="flex justify-between items-center font-semibold">
                    <div>Subtotal:</div>
                    <div>{priceFormat(totalPrice)}</div>
                </div>
            </div>
            <Button
                label="check out"
                onClick={onCheckout}
                className="btn-neutral btn-sm w-full mt-4 text-white rounded-lg font-kanit hover:bg-slate-700"
            />
        </div>
    )
}

export default OrderSummary