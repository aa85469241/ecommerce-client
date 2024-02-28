'use client';

import { MouseEventHandler, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Color, Product, Size } from "@/types";
import { ImageGallery } from "./ImageGallery";
import { priceFormat } from "@/lib/format";
import QuantityButton from "./QuantityButton";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useCart, { CartProduct } from "@/hooks/useCart";
import toast from "react-hot-toast";


interface ProductInfoProps {
    product: Product;
    sizes: Size[];
    colors: Color[];
}

export const ProductInfo: React.FC<ProductInfoProps> = ({
    product,
    sizes,
    colors,
}) => {
    const cart = useCart();
    const router = useRouter();
    const [selectedSize, setSelectedSize] = useState<string>("");
    const [selectedColor, setSelectedColor] = useState<string>("");
    const [quantity, setQuantity] = useState<number>(1);
    const cartId = (product.id + "-" + selectedSize + "-" + selectedColor).trim();

    const item: CartProduct = {
        product: product,
        size: selectedSize,
        color: selectedColor,
        quantity: quantity,
        cartId: cartId,
    }

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();

        if (!selectedSize || !selectedColor) {
            toast.error("Please select a size and a color.")
            return;
        }

        try {
            cart.addItem(item);
        }
        catch (err) {
            console.log(err);
        }
        finally {
            setTimeout(() => {
                setSelectedSize("");
                setSelectedColor("");
                setQuantity(1);
                router.refresh();
            }, 300)
        }
    }

    useEffect(() => {
        if (product.colors.length === 0) {
            setSelectedColor("No color data")
        }
    }, [product])

    return (
        <div className="
                w-full
                mx-auto 
                pt-6 
                flex
                flex-col
                justify-center
                gap-8
                sm:flex-row
                md:gap-6
                md:pt-10
                "
        >
            {/* Product Images */}
            <div className="flex-1">
                <ImageGallery images={product.images} />
            </div>
            {/* Product Info */}
            <div className="flex-1 space-y-4 lg:mt-0">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
                        {product.name}
                    </h1>
                </div>
                <p className="text-2xl tracking-tight text-gray-900">
                    {priceFormat(product.price)}
                </p>
                <div className="divider max-w-md h-1" />
                <div className="space-y-4 max-w-md">
                    <div className="space-y-2 font-kanit">
                        <div className="flex items-end gap-2 text-xl font-medium text-gray-900 leading-6">
                            Size
                            <span className="text-sm text-gray-900/70">
                                choose the size
                            </span>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                            {sizes
                                .filter((size) => product.sizes.includes(size.value))
                                .map((size) => (
                                    <button
                                        key={size.id}
                                        type="button"
                                        onClick={() => {
                                            if (selectedSize === size.value) {
                                                setSelectedSize("");
                                            } else {
                                                setSelectedSize(size.value)
                                            }

                                        }}
                                        className={`btn btn-md rounded-none hover:bg-neutral-500 hover:border-none ${selectedSize === size.value ? "btn-neutral" : "btn-outline"}`}
                                    >
                                        {size.name}
                                    </button>
                                ))}
                        </div>
                    </div>
                    <div className={`
                            space-y-2 
                            font-kanit
                            ${product.colors.length === 0 && "hidden"}
                            `}
                    >
                        <div className="flex items-end gap-2 text-xl font-medium text-gray-900 leading-6">
                            Color
                            <span className="text-sm text-gray-900/70">
                                choose the color
                            </span>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                            {colors
                                .filter((color) => product.colors.includes(color.value))
                                .map((color) => (
                                    <button
                                        key={color.id}
                                        type="button"
                                        onClick={() => {
                                            if (selectedColor === color.value) {
                                                setSelectedColor("")
                                            } else {
                                                setSelectedColor(color.value)
                                            }
                                        }}
                                        className={`btn btn-md rounded-none hover:bg-neutral-500 hover:border-none ${selectedColor === color.value ? "btn-neutral" : "btn-outline"}`}
                                    >
                                        {color.name}
                                    </button>
                                ))}
                        </div>
                    </div>
                    <div className="space-y-2 font-kanit">
                        <div className="flex items-center justify-between">
                            <div className="flex items-end gap-2 text-xl font-medium text-gray-900 leading-6">
                                Quantity
                                <span className="text-sm text-gray-900/70">
                                    amount of the product
                                </span>
                            </div>
                        </div>
                        <div>
                            <QuantityButton
                                quantity={quantity}
                                setQuantity={setQuantity}
                            />
                        </div>
                    </div>
                    <div className="mt-10 w-full max-w-xs">
                        <button
                            className="group btn btn-square btn-accent w-full"
                            onClick={onAddToCart}
                        >
                            <div>
                                <AiOutlineShoppingCart size={25} />
                            </div>
                            <span className="text-base font-kanit">Add to cart</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
