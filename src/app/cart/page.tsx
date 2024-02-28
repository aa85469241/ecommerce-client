import getColors from "@/actions/getColors";
import Container from "@/components/Container";
import CartList from "@/components/Cart/CartList";
import OrderSummary from "@/components/Cart/OrderSummary";
import { getCurrentUser } from "@/actions/getCurrentUser";

const CartPage = async () => {
    const colors = await getColors();
    const user = await getCurrentUser();

    return (
        <Container>
            <h1 className="main-title-text">Shopping Cart</h1>
            <div className="divider mt-1"></div>
            <div className="w-full md:grid md:grid-cols-12 md:items-start gap-x-8">
                <CartList colors={colors} />
                <OrderSummary user={user} />
            </div>
        </Container>
    )
}

export default CartPage