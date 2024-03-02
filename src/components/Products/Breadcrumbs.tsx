'use client';

import Link from "next/link";
import { Product } from "@/types"

interface BreadcrumbsProps {
    product: Product;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
    product
}) => {
    return (
        <nav aria-label="Breadcrumb">
            <ol role="list" className="mx-auto flex items-center space-x-2">
                <li>
                    <div className="flex items-center">
                        <Link
                            href="/products"
                            className="mr-2 text-sm font-medium underline transition hover:scale-110"
                        >
                            Products
                        </Link>
                        <svg
                            width="16"
                            height="20"
                            viewBox="0 0 16 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="h-5 w-4 text-gray-300"
                        >
                            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                        </svg>
                    </div>
                </li>
                <li>
                    <div className="flex items-center">
                        <div
                            className="mr-2 text-sm font-medium select-none"
                        >
                            {product.category.name}
                        </div>
                        <svg
                            width="16"
                            height="20"
                            viewBox="0 0 16 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="h-5 w-4 text-gray-300"
                        >
                            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                        </svg>
                    </div>
                </li>
                <li className="truncate">
                    <div
                        className="font-medium text-sm select-none"
                        data-tip={product.name}
                    >
                        {product.name}
                    </div>
                </li>
            </ol>
        </nav>
    )
}
