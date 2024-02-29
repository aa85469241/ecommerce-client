import { Order } from "@/types";
import { getCurrentUser } from "./getCurrentUser";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/orders`;

const getOrders = async (): Promise<Order[]> => {
    const res = await fetch(URL, {
        next: {
            revalidate: 30
        }
    });

    return res.json();
}

const getOrdersWithUser = async (): Promise<Order[]> => {
    const allOrders = await getOrders();
    const currentUser = await getCurrentUser();

    const orders = allOrders.filter(order => order.purchaser_id === currentUser?.id);

    return orders;
}

export default getOrdersWithUser;

