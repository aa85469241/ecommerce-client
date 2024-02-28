'use client';

import { useCallback, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../Button";

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    disabled?: boolean;
    submitButtonLabel: string;
    submitButtonClassName?: string;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    disabled,
    submitButtonLabel,
    submitButtonClassName,
}) => {
    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        setShowModal(isOpen)
    }, [isOpen]);

    const handleOnClose = useCallback(() => {
        if (disabled) {
            return;
        }

        setShowModal(false);
        setTimeout(() => {
            onClose();
        }, 300)
    }, [disabled, onClose]);

    const handleOnSubmit = useCallback(() => {
        if (disabled) {
            return;
        }

        onSubmit();
    }, [disabled, onSubmit]);

    if (!isOpen) {
        return null;
    }

    return (
        <div className="flex justify-center items-center fixed inset-0 bg-neutral-400/80 overflow-hidden z-50">
            <div className="
            relative 
            h-auto
            w-11/12
            sm:w-4/6
            md:w-3/5
            lg:w-2/5
            my-6
            mx-auto 
            max-h-screen 
            "
            >
                <div className={`
                translate 
                duration-500 
                h-full 
                ${showModal ? "translate-y-0" : "translate-y-full"}
                ${showModal ? "opacity-100" : "opacity-0"}
                `}>
                    <div className="h-auto rounded-lg shadow-lg relative flex flex-col bg-base-200">
                        <div
                            id="modal-header"
                            className="relative flex items-center justify-center p-4 pb-0 md:p-6 md:pb-0"
                        >
                            <button
                                className="absolute right-10 hover:scale-125 scale duration-100"
                                onClick={handleOnClose}
                            >
                                <AiOutlineClose size={20} />
                            </button>
                            <div className="uppercase text-lg">{title}</div>
                        </div>

                        {/* { divider } */}
                        <div className="divider px-4 mb-0"/>

                        <div id="modal-body" className="relative p-4 md:p-6">
                            {body}
                        </div>
                        <div id="modal-footer" className="flex flex-col gap-2 p-4 md:p-6">
                            <Button
                                label={submitButtonLabel}
                                disabled={disabled}
                                className={submitButtonClassName}
                                onClick={handleOnSubmit}
                            />
                            {/* { divider } */}
                            <div className="divider">
                                or
                            </div>
                            
                            {footer}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;