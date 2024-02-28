import { env } from "@/lib/env";
import { Color } from "@/types";

const URL = `${env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
    const res = await fetch(URL);

    return res.json();
}

export default getColors;

export const revalidate = 5;