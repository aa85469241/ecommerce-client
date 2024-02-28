'use client';

import useCart from "@/hooks/useCart";
import { useEffect, useState } from "react";

const RemoveAllButton = () => {
    const cart = useCart();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted) {
        return null;
    }

    return (
        <div>
            <button
                type="button"
                disabled={cart.cart.length === 0 ? true : false}
                className="btn btn-outline w-full"
                onClick={cart.removeAll}
            >
                clear
            </button>
        </div>
    )
}

export default RemoveAllButton