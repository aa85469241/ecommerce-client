import qs from 'query-string'
import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
    categoryId?: string;
    sizes?: string;
    colors?: string;
    isFeatured?: boolean;
}

const getProducts = async (query?: Query): Promise<Product[]> => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            categoryId: query?.categoryId,
            sizes: query?.sizes,
            colors: query?.colors,
            isFeatured: query?.isFeatured,
        }
    })

    const res = await fetch(url);

    return res.json();
}

export default getProducts;

export const revalidate = 5;