'use client';

import Image from "next/image";
import cn from "classnames";
import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
    billboard: BillboardType;
    textWrapperStyle?: string;
    textStyle?: string;
}

const Billboard: React.FC<BillboardProps> = ({
    billboard,
    textWrapperStyle,
    textStyle
}) => {

    return (
        <div className="relative w-full h-56 rounded-md overflow-hidden">
            <Image
                src={billboard.image}
                alt="Billboard image"
                fill
                priority
                className="object-cover object-center"
            />
            <div className={cn("space-x-2", textWrapperStyle)}>
                <span
                    className={cn("text-2xl font-semibold text-neutral-600 capitalize", textStyle)}
                >
                    {billboard.label}
                </span>
            </div>
        </div>
    )
}

export default Billboard