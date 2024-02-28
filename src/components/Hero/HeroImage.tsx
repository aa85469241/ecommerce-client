'use client';

import Image from "next/image";
import { Highlight1, Highlight2, ShoppingCart } from "../../../public/assets";

const HeroImage = () => {
    return (
        <div className="flex">
            <div>
                <Image
                    src={Highlight1}
                    alt="highlight1"
                />
            </div>
            <div>
                <Image src={ShoppingCart} alt="shopping-cart" priority />
            </div>
            <div className="self-end">
                <Image
                    src={Highlight2}
                    alt="highlight2"
                />
            </div>
        </div>
    )
}

export default HeroImage