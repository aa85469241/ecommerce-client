'use client';

import gsap from "gsap";
import Container from "@/components/Container"
import useCart from "@/hooks/useCart";
import { useEffect } from "react";
import Link from "next/link";
import Button from "@/components/Button";


const StripeSuccess = () => {
    const removeAll = useCart(state => state.removeAll);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.to("#checkmark__circle", {
            strokeDashoffset: 0,
            duration: 0.5,
        }).to("#checkmark__check", {
            strokeDashoffset: 0,
            duration: 0.5,
        }).to("#success-text", {
            y: 0
        }).to("#buttons", {
            opacity: 1,
            delay: 0.5,
            duration: 1,
            onComplete: () => {
                removeAll();
            }
        })
    })

    return (
        <Container>
            <div className="flex flex-col items-center gap-6 mt-6 md:mt-10">
                <div>
                    <svg
                        className="w-20 h-20"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 52 52"
                    >
                        <circle
                            id="checkmark__circle"
                            cx="26"
                            cy="26"
                            r="25"
                            strokeDasharray={166}
                            strokeDashoffset={166}
                            className="fill-none stroke-success stroke-2"
                        />
                        <path
                            id="checkmark__check"
                            d="M14.1 27.2l7.1 7.2 16.7-16.8"
                            strokeDasharray={48}
                            strokeDashoffset={48}
                            className="stroke-success stroke-2 fill-none"
                        />
                    </svg>
                </div>
                <div className="overflow-y-hidden">
                    <p id="success-text" className="translate-y-full">Your payment was completed!!</p>
                </div>
                <div id="buttons" className="space-x-6 opacity-0">
                    <Link href="/">
                        <Button label="Home page" className="btn-outline" />
                    </Link>
                    <Link href="/products">
                        <Button label="Buy more" className="bg-black text-white hover:bg-black/70" />
                    </Link>
                </div>
            </div>
        </Container>
    )
}

export default StripeSuccess