import { User } from "@prisma/client";

export type SafeUser = Omit<
    User,
    "createAt" | "updateAt" | "emailVerified"
> & {
    createAt: string,
    updateAt: string,
    emailVerified: string | null,
}

export interface Billboard {
    id: string;
    label: string;
    image: string;
}

export interface Seller {
    id: string;
}

export interface Product {
    id: string;
    name: string;
    price: number;
    category: Category;
    sizes: string | string[];
    colors: string | string[];
    images: Image[];
    user: Seller;
}

export interface Category {
    id: string;
    name: string;
    imageUrl: string;
    billboard: Billboard;
}

export interface Size {
    id: string;
    name: string;
    value: string;
}

export interface Color {
    id: string;
    name: string;
    value: string;
}

export interface Image {
    id: string;
    url: string;
}

export interface Order {
    id: string;
    isPaid: boolean;
    purchaser_id: string;
    purchaser_name: string;
    purchaser_email: string;
    orderItems: OrderItem[];
    createAt: Date;
}

export interface OrderItem {
    color: string;
    size: string;
    quantity: number;
    product: Product;
}
