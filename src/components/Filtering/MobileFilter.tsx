'use client';

import { LuFilter, LuFilterX } from "react-icons/lu";
import { Filter } from "./Filter";
import { Category, Color, Size } from "@/types";

interface MobileFilterProps {
    categories: Category[];
    sizes: Size[];
    colors: Color[];
}

export const MobileFilter: React.FC<MobileFilterProps> = ({
    categories,
    sizes,
    colors,
}) => {

    return (
        <div className="md:hidden drawer absolute inset-0 pt-14 z-20 ">
            <input
                id="mobile-filter"
                type="checkbox"
                className="drawer-toggle"
            />
            <div className="drawer-content">
                <div className="tooltip tooltip-right" data-tip="Filter">
                    <label
                        htmlFor="mobile-filter"
                        className="drawer-button btn btn-circle btn-neutral opacity-50 transition duration-300 hover:opacity-100"
                    >
                        <LuFilter size={20} />
                    </label>
                </div>
            </div>
            <div className="drawer-side">
                <label
                    htmlFor="mobile-filter"
                    aria-label="close sidebar"
                    className="drawer-overlay">
                </label>
                <ul className="menu p-4 min-h-full bg-base-100 text-base-content">
                    <Filter
                        type="category"
                        filterName="category"
                        category={categories}
                        searchKey="categoryId"
                    />
                    <Filter
                        type="size"
                        filterName="size"
                        data={sizes}
                        searchKey="sizes"
                    />
                    <Filter
                        type="color"
                        filterName="color"
                        data={colors}
                        searchKey="colors"
                    />
                </ul>
            </div>
        </div>
    )
}