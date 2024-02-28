import getCategories from "@/actions/getCategories";
import { Filter } from "./Filter";
import { Category, Color, Size } from "@/types";
import { MobileFilter } from "./MobileFilter";

interface FilterSectionProps {
    categories: Category[];
    sizes: Size[];
    colors: Color[];
}

const FilterSection: React.FC<FilterSectionProps> = ({
    categories,
    sizes,
    colors
}) => {

    return (
        <>
            <div className="hidden md:block">
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
            </div>
            <MobileFilter
                categories={categories}
                sizes={sizes}
                colors={colors}
            />
        </>
    )
}

export default FilterSection