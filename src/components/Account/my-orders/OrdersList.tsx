'use client'

import { format } from 'date-fns'
import { priceFormat } from '@/lib/format';
import { Order } from '@/types'

interface OrdersListProps {
    orders: Order[];
}

const OrdersList: React.FC<OrdersListProps> = ({ orders }) => {

    return (
        <div className="space-y-4">
            {orders.map((order) => (
                <div key={order.id} className="space-y-1">
                    <div className="flex items-end gap-2">
                        <h1 className="font-medium text-lg capitalize">
                            order
                        </h1>
                        <p className="text-neutral tracking-wider">{order.id}</p>
                    </div>
                    <div>
                        <p className="text-gray tracking-wide">
                            Total: {priceFormat(order.orderItems.reduce((acc, item) => {
                                return acc + item.quantity * item.product.price
                            }, 0))}
                        </p>
                    </div>
                    <div>
                        <p className="text-gray tracking-wide">
                            Ordered on: {format(order.createAt, "MMMM dd, yyyy")}
                        </p>
                    </div>
                </div>
            ))}
            {orders.length === 0 && <div>Your order is empty!</div>}
        </div>
    )
}

export default OrdersList