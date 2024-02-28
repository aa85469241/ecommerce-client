'use client';

import { Billboard as BillboardType, Category, Color, Product, Size } from "@/types";
import { ProductCard } from "./ProductCard";
import { NoResults } from "./NoResults";
import FilterSection from "../Filtering/FilterSection";

interface ProductsListProps {
    title: string;
    products: Product[];
    categories: Category[];
    sizes: Size[];
    colors: Color[];
    billboard?: BillboardType;
}

export const ProductsList: React.FC<ProductsListProps> = ({
    title,
    products,
    categories,
    sizes,
    colors,
    // billboard,
}) => {

    return (
        <div className="w-full flex gap-8 md:mt-4">
            <div className="relative mb-10">
                <FilterSection
                    categories={categories}
                    sizes={sizes}
                    colors={colors}
                />
            </div>
            <div className="flex-1">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold tracking-wider uppercase">
                        {title}
                    </h1>
                    <p className="text-black/60 font-semibold">
                        Your shop start from here
                    </p>
                    <div className="divider mt-0 mb-2" />
                </div>
                {products.length === 0
                    ? <NoResults />
                    : <div className="
                grid 
                grid-cols-2
                justify-center 
                items-center 
                lg:grid-cols-3
                xl:grid-cols-4
                lg:text-left 
                gap-8"
                    >
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                data={product}
                            />
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}