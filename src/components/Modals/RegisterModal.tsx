'use client';

import { useCallback } from "react";
import { AiOutlineGoogle } from "react-icons/ai"
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import Modal from "./Modal"
import Input from "../Input";
import Button from "../Button";
import { useLoginModal } from "@/hooks/useLoginModal";
import { useRegisterModal } from "@/hooks/useRegisterModal"



const RegisterModal = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {

        axios.post("/api/register", data)
            .then(() => {
                toast.success("Register success!!");
                registerModal.onClose();
                loginModal.onOpen();
            })
            .catch((error) => {
                toast.error(error);
            })
    }

    const onToggle = useCallback(() => {
        loginModal.onOpen();
        registerModal.onClose();
    }, [loginModal, registerModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <label className="text-md font-light tracking-wider">
                create your account
            </label>
            <Input
                id="name"
                type="text"
                label="Your name"
                register={register}
                errors={errors}
                required
            />
            <Input
                id="email"
                type="text"
                label="Email Address"
                register={register}
                errors={errors}
                required
            />
            <Input
                id="password"
                type="text"
                label="Password"
                register={register}
                errors={errors}
                required
            />
        </div>
    )

    const footerContent = (
        <div className="flex flex-col gap-4">
            <Button
                label="Continue with Google"
                onClick={() => signIn("google")}
                className="btn-outline border-2"
                icon={AiOutlineGoogle}
            />
            <div className="w-full text-center">
                <p className="-tracking-wide font-medium">
                    Already have account?
                    <span
                        className="
                        ml-1 
                        font-semibold 
                        cursor-pointer 
                        hover:underline
                        "
                        onClick={onToggle}
                    >
                        LogIn now.
                    </span>
                </p>
            </div>
        </div>
    )

    return (
        <Modal
            title="Register"
            isOpen={registerModal.isOpen}
            onClose={registerModal.onClose}
            submitButtonLabel="click to register"
            submitButtonClassName="btn-error text-secondary"
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default RegisterModal;