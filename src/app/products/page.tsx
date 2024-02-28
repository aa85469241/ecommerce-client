
import getCategories from "@/actions/getCategories";
import getColors from "@/actions/getColors";
import getProducts from "@/actions/getProducts";
import getSizes from "@/actions/getSizes";
import Container from "@/components/Container";
import { ProductsList } from "@/components/Products/ProductsList";

export const revalidate = 0;

interface ProductsPageProps {
    searchParams: {
        categoryId: string;
        sizes: string;
        colors: string;
    }
}

const ProductsPage: React.FC<ProductsPageProps> = async ({
    searchParams
}) => {
    const products = await getProducts({
        isFeatured: true,
        categoryId: searchParams.categoryId,
        sizes: searchParams.sizes,
        colors: searchParams.colors,
    });
    const categories = await getCategories();
    const sizes = await getSizes();
    const colors = await getColors();

    return (
        <Container>
            <ProductsList
                title="Featured Products"
                products={products}
                categories={categories}
                sizes={sizes}
                colors={colors}
            />
        </Container>
    )
}

export default ProductsPage