'use client';

import { useCallback, useTransition } from "react";
import { AiOutlineGoogle } from "react-icons/ai"
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal"
import Input from "../Input";
import Button from "../Button";
import { useLoginModal } from "@/hooks/useLoginModal"
import { useRegisterModal } from "@/hooks/useRegisterModal";

const LoginModal = () => {
    const router = useRouter();
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();
    const [isPending, startTransition] = useTransition();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        startTransition(() => {
            signIn('credentials', {
                ...data,
                redirect: false,
            })
                .then((callback) => {
                    if (callback?.error) {
                        toast.error(callback.error);
                    } else {
                        toast.success("Login success!!");
                        router.refresh();
                        loginModal.onClose();
                    }
                })
        })
    }

    const onToggle = useCallback(() => {
        loginModal.onClose();
        registerModal.onOpen();
    }, [loginModal, registerModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <label className="text-md font-light tracking-wider">
                Login to your account
            </label>
            <Input
                id="email"
                type="text"
                label="Email Address"
                register={register}
                errors={errors}
                disabled={isPending}
                required
            />
            <Input
                id="password"
                type="password"
                label="Password"
                register={register}
                errors={errors}
                disabled={isPending}
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
                disabled={isPending}
            />
            <div className="w-full text-center">
                <p className="-tracking-wide font-medium">
                    {"Don't"} you have account?
                    <span
                        className="
                        ml-1 
                        font-semibold 
                        cursor-pointer 
                        hover:underline
                        "
                        onClick={onToggle}
                    >
                        Register now.
                    </span>
                </p>
            </div>
        </div>
    )

    return (
        <Modal
            title="Login"
            isOpen={loginModal.isOpen}
            onClose={loginModal.onClose}
            submitButtonLabel="click to login"
            submitButtonClassName="btn-error text-secondary"
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default LoginModal;