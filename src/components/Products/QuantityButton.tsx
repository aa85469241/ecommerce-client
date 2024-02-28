'use client'

import toast from "react-hot-toast";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface QuantityButtonProps {
    quantity: number;
    setQuantity: React.Dispatch<number>;
}

const QuantityButton = ({ quantity, setQuantity }: QuantityButtonProps) => {
    let minQuantity = 1;
    let maxQuantity = 99;

    const handleIncrement = () => {
        quantity < maxQuantity
            ? setQuantity(quantity + 1)
            : setQuantity(maxQuantity);
    }

    const handleDecrement = () => {
        quantity > minQuantity
            ? setQuantity(quantity - 1)
            : setQuantity(minQuantity);
    }

    const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedQty = Number(e.target.value);

        setQuantity(updatedQty);
    }

    return (
        <div className="flex gap-2">
            <button
                className="btn btn-outline border-black/30 btn-sm h-auto rounded-sm"
                type="button"
                onClick={() => handleDecrement()}
            >
                <AiOutlineMinus size={15} />
            </button>
            <input
                type="text"
                value={quantity}
                onChange={handleInputValue}
                required
                className="input input-sm input-bordered rounded-sm h-10 w-16 text-center"
            />
            <button
                className="btn btn-outline border-black/30 btn-sm h-auto rounded-sm"
                type="button"
                onClick={() => handleIncrement()}
            >
                <AiOutlinePlus size={15} />
            </button>
        </div>
    )
}

export default QuantityButton;