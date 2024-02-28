'use client';

import Button from "@/components/Button";
import Container from "@/components/Container"
import gsap from "gsap"
import Link from "next/link";
import { useEffect } from "react"


const StripeCancel = () => {

    useEffect(() => {
        const tl = gsap.timeline();

        tl.to("#checkmark__circle", {
            strokeDashoffset: 0,
            duration: 0.5,
        }).to(["#cross__path--left", "#cross__path--right"], {
            strokeDashoffset: 0,
        }).to("#cancel-text", {
            y: 0
        }).to("#button", {
            opacity: 1,
            delay: 0.5,
            duration: 1,
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
                            className="fill-none stroke-error stroke-2"
                        />
                        <path
                            id="cross__path--left"
                            d="M16,16 l20,20"
                            strokeDasharray={48}
                            strokeDashoffset={48}
                            className="fill-none stroke-error stroke-2"
                        />
                        <path
                            id="cross__path--right"
                            d="M16,36 l20,-20"
                            strokeDasharray={48}
                            strokeDashoffset={48}
                            className="fill-none stroke-error stroke-2"
                        />
                    </svg>
                </div>
                <div className="overflow-y-hidden">
                    <p id="cancel-text" className="translate-y-full">Your payment was not completed!!</p>
                </div>
                <div id="button" className="opacity-0">
                    <Link href="/cart">
                        <Button label="Back to cart" className="btn-outline"/>
                    </Link>
                </div>
            </div>
        </Container>
    )
}

export default StripeCancel