
import getOrdersWithUser from '@/actions/getOrders';
import OrdersList from '@/components/Account/my-orders/OrdersList';

export const revalidate = 0;

const OrdersPage = async () => {
    const orders = await getOrdersWithUser();

    return (
        <div className="w-full max-w-lg p-2 md:mt-10">
            <h1 className="text-xl font-kanit font-semibold mb-6 md:text-2xl">
                My Orders
            </h1>
            <OrdersList orders={orders} />
        </div>
    )
}

export default OrdersPage;