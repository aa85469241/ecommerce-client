'use client';
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai"
import QuantityButton from "./QuantityButton";

interface AddToCartButtonProps {
    productId: string;
    addToCart: (productId: string, quantity: number) => Promise<void>;
}

const AddToCartButton = ({ productId, addToCart }: AddToCartButtonProps) => {
    const [quantity, setQuantity] = useState(1);

    return (
        <>
            <div className="mt-10">
                <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
                </div>
                <div className="mt-4">
                    <QuantityButton
                        quantity={quantity}
                        setQuantity={setQuantity}
                    />
                </div>
            </div>
            <div className="mt-10">
                <button
                    className="group btn btn-square btn-accent w-full"
                    onClick={() => { addToCart(productId, quantity) }}
                >
                    <div>
                        <AiOutlineShoppingCart size={25} />
                    </div>
                    <span className="text-base">Add to cart</span>
                    <span className="group-focus:loading"></span>
                </button>
            </div>
        </>
    );
}

export default AddToCartButton;