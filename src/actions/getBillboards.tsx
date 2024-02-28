import { env } from "@/lib/env"
import { Billboard } from "@/types";

const URL = `${env.NEXT_PUBLIC_API_URL}/billboards`

const getBillboard = async (id: string): Promise<Billboard> => {
    const res = await fetch(`${URL}/${id}`);

    return res.json();
}

export default getBillboard;

export const revalidate = 5;