import { persist, createJSONStorage } from 'zustand/middleware';
import { create } from 'zustand';
import { Product } from '@/types';
import toast from 'react-hot-toast';


type CartProductStatus = {
    size: string;
    color: string;
    quantity: number;
    cartId: string;
}

export interface CartProduct extends CartProductStatus {
    product: Product;
}

interface CartStore {
    cart: CartProduct[];
    addItem: (item: CartProduct) => void;
    removeItem: (id: string) => void;
    removeAll: () => void;
}

const useCart = create(
    persist<CartStore>((set, get) => ({
        cart: [],
        addItem: (item: CartProduct) => {
            const currentItem = get().cart;
            const existItem = currentItem.find(_item => _item.cartId === item.cartId);

            if (existItem) {
                const updatedItem = currentItem.map((_item) => _item.cartId === item.cartId ? { ...item, quantity: (_item.quantity as number) + item.quantity } : _item)

                set({ cart: updatedItem })
                toast.success("Updated success!!")
            } else {
                set({ cart: [...get().cart, item] })
                toast.success("Add success!!")
            }
        },
        removeItem: (id: string) => {
            const removeItem = get().cart.find(item => item.cartId === id)!;

            set({ cart: [...get().cart.filter((item) => item.cartId !== id)] })
            toast.success(`${removeItem.product.name} has been removed!!`)
        },
        removeAll: () => {
            set({ cart: [] })
            // toast.success("All Removed!!");
        },

    }), {
        name: 'cart-storage',
        storage: createJSONStorage(() => localStorage)
    })
)

export default useCart;
