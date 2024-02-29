'use client';

import Image from "next/image";
import { priceFormat } from "@/lib/format";
import { Product } from "@/types";
import { FaShoppingBag } from "react-icons/fa";
import Link from "next/link";

interface PurchasedItemsProps {
    products: Product[];
}

const PurchasedItems: React.FC<PurchasedItemsProps> = ({
    products
}) => {

    return (
        <div>
            <div className="space-y-4">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="relative flex bg-base-200/80 rounded-md shadow-md overflow-hidden"
                    >
                        <div className="relative h-24 aspect-square">
                            <Image
                                src={product.images[0].url}
                                alt={product.name}
                                fill
                                sizes="auto"
                                className="object-cover"
                            />
                        </div>
                        <div className="pt-2 px-4 overflow-hidden">
                            <h1 className="text-lg tracking-wide">
                                {product.name}
                            </h1>
                            <p className="text-gray">
                                {priceFormat(product.price)}
                            </p>
                        </div>
                        <div className="relative mr-0 ml-auto">
                            <Link href={`/products/${product.id}`}>
                                <button className="group btn flex-col h-full mr-0 rounded-none">
                                    <FaShoppingBag size={20} className="translate-y-4 transition group-hover:translate-y-0" />
                                    <div className="overflow-y-hidden">
                                        <span className="inline-block text-xs whitespace-nowrap translate-y-4 transition group-hover:translate-y-0">
                                            Buy again
                                        </span>
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            {products.length === 0 &&
                <p>{"You haven't made any purchase yet."}</p>
            }
        </div>
    )
}

export default PurchasedItems