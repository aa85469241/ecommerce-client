import { Metadata } from "next";
import getProduct from "@/actions/getProduct";
import getColors from "@/actions/getColors";
import getSizes from "@/actions/getSizes";
import { Breadcrumbs } from "@/components/Products/Breadcrumbs";
import { ProductInfo } from "@/components/Products/ProductInfo";
import { ProductDescription } from "@/components/Products/ProductDescription";

interface ProductDetailProps {
    params: {
        productId: string;
    }
}

export async function generateMetadata({
    params
}: ProductDetailProps): Promise<Metadata> {
    const product = await getProduct(params.productId);

    return {
        title: "Next Store - " + product.name
    }

}

const ProductDetail: React.FC<ProductDetailProps> = async ({
    params
}) => {
    const product = await getProduct(params.productId);
    const colors = await getColors();
    const sizes = await getSizes();

    return (
        <div className="bg-secondary overflow-hidden">
            <div className="pt-20 pb-4 px-8 md:px-12 lg:px-20">
                {/* breadcrumbs */}
                <Breadcrumbs product={product} />

                {/* Product Information */}
                <ProductInfo
                    product={product}
                    sizes={sizes}
                    colors={colors}
                />
                <div className="divider h-1" />
                <ProductDescription />
            </div>
        </div>
    )
}

export default ProductDetail


