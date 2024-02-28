import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animatePageIn = () => {
    const animateWrapper = document.getElementById("transition-element");

    if (animateWrapper) {
        const tl = gsap.timeline();

        tl.set(animateWrapper, {
            xPercent: 0,
        })
            .to(animateWrapper, {
                xPercent: 100,
                duration: 0.8,
            })
            .to(
                animateWrapper,
                {
                    borderTopLeftRadius: "50vh",
                    borderBottomLeftRadius: "50vh",
                    duration: 0.4,
                },
                "<"
            );
    }
}

export const animatePageOut = (
    href: string,
    router: AppRouterInstance
) => {
    const animateWrapper = document.getElementById("transition-element");

    if (animateWrapper) {
        const tl = gsap.timeline();

        tl.set(animateWrapper, {
            xPercent: -100,
            borderTopRightRadius: "50vh",
            borderBottomRightRadius: "50vh",
            borderTopLeftRadius: "0",
            borderBottomLeftRadius: "0",
        })
            .to(animateWrapper, {
                xPercent: 0,
                duration: 0.8,
                onComplete: () => {
                    router.push(href);
                },
            })
            .to(
                animateWrapper,
                {
                    borderTopRightRadius: "0",
                    borderBottomRightRadius: "0",
                    duration: 0.4,
                },
                "<"
            );
    }
}

export const checkMarkAnimation = () => {
    const circle = document.getElementById("checkmark__circle");
    const check = document.getElementById("checkmark__check");

    const tl = gsap.timeline();

    tl.to(circle, {
        strokeDashoffset: 0,
        duration: 1,
        ease: "power1.inOut"
    }).to(check, {
        strokeDashoffset: 0,
        duration: 1,
    })
}