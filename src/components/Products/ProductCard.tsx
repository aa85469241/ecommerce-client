'use client'

import { priceFormat } from "@/lib/format";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames"

interface ProductCardProps {
    data: Product;
    className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
    data,
    className
}) => {
    return (
        <Link href={`/products/${data.id}`} className="group">
            <div className={cn("card aspect-square w-full max-w-[220px] border-2 border-neutral-300 bg-base-100 hover:scale-105 transition", className)}>
                <figure>
                    <Image
                        src={data?.images?.[0].url}
                        alt={data.name}
                        width={400}
                        height={400}
                        priority
                        className="h-32 object-cover md:h-40"
                    />
                </figure>
                <div className="card-body relative p-2 px-3">
                    <div>
                        <h2 className="card-title text-lg font-extrabold line-clamp-1">
                            {data.name}
                        </h2>
                        <p className="text-xs font-medium text-neutral-500">
                            {data.category.name}
                        </p>
                    </div>
                    {/* <div className="divider my-0" /> */}
                    <div className="w-full flex justify-end items-center gap-2 mb-0 mt-auto">
                        <span className="text-sm md:text-md">
                            {priceFormat(data.price)}
                        </span>
                        <span className="hidden group-focus:visible group-focus:loading group-focus:loading-spinner group-focus:loading-xs"></span>
                    </div>
                </div>
            </div>
        </Link>
    )
}