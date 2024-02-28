'use client';

import { FieldValues, FieldErrors, UseFormRegister } from "react-hook-form";

interface InputProps {
    id: string;
    type: string;
    label: string;
    disabled?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
    id,
    type,
    label,
    disabled,
    required,
    register,
    errors,
}) => {
    return (
        <div className="w-full relative">
            <input
                id={id}
                type={type}
                disabled={disabled}
                placeholder=""
                {...register(id, { required })}
                className={`
                peer
                w-full 
                p-3
                border
                rounded-md
                outline-none
                text-md
                transition
                disabled:opacity-70 
                disabled:cursor-not-allowed
                ${errors[id] ? "border-rose-500" : "border-neutral-400"}
                ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}
            `}
            />
            <label
                className={`
                absolute
                top-4
                left-4
                -translate-y-3
                text-xs
                transition-transform
                select-none
                origin-[0]
                peer-placeholder-shown:scale-100 
                peer-placeholder-shown:translate-y-0 
                peer-focus:scale-75
                peer-focus:-translate-y-4
                ${errors[id] ? "text-rose-500" : "text-neutral-500"}
            `}
            >
                {label}
            </label>
        </div>
    )
}

export default Input;