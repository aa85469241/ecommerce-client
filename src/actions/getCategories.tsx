import { env } from "@/lib/env";
import { Category } from "@/types";

const URL = `${env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
    const res = await fetch(URL);

    return res.json();
}

export default getCategories;

export const revalidate = 5;