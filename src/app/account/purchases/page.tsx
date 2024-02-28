
import { Product } from '@/types';
import getOrdersWithUser from '@/actions/getOrders';
import getProduct from '@/actions/getProduct';
import PurchasedItems from '@/components/Account/purchases/PurchasedItems';

export const revalidate = 0

const PurchasesPage = async () => {
    const orders = await getOrdersWithUser();
    const orderItems = orders.flatMap(order => order.orderItems);

    let products: Product[] = []

    for (const item of orderItems) {
        const product = await getProduct(item.product.id);

        if (!products.some(item => item.id === product.id)) {
            products.push(product);
        }
    }

    return (
        <div className="w-full max-w-lg p-2 md:mt-10">
            <h1 className="text-xl font-kanit font-semibold mb-6 md:text-2xl">
                Purchased Products
            </h1>
            <PurchasedItems products={products}/>
        </div>
    )
}

export default PurchasesPage;