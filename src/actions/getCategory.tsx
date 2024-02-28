import { env } from "@/lib/env";
import { Category } from "@/types";

const URL = `${env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
    const res = await fetch(`${URL}/${id}`);

    return res.json();
}

export default getCategory;

export const revalidate = 5;