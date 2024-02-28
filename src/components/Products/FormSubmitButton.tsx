'use client'

import React, { ComponentProps } from "react"
import { experimental_useFormStatus as useFormStatus } from "react-dom"

type FormSubmitButtonProps = {
    className?: string,
    children: React.ReactNode,
} & ComponentProps<"button">

const FormSubmitButton = ({ className, children, ...props }: FormSubmitButtonProps) => {
    const { pending } = useFormStatus();

    return (
        <button
            {...props}
            className={`btn btn-accent ${className}`}
            type="submit"
        >
            {children}
            {pending && <span className="loading loading-ring" />}
        </button>
    )
}

export default FormSubmitButton