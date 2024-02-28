'use client';

import { animatePageOut } from '@/lib/animations';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

interface TransitionLinkProps {
    href: string
    label?: string
    className?: string
    children?: React.ReactNode
}

const TransitionLink: React.FC<TransitionLinkProps> = ({
    href,
    label,
    className,
    children,
}) => {
    const router = useRouter();
    const currentPath = usePathname();

    const handleOnClick = () => {
        if (currentPath === href) {
            router.refresh();
        }else {
            animatePageOut(href, router)
        }
    }

    return (
        <button
            className={className}
            onClick={handleOnClick}
        >
            {label}
            {children}
        </button>
    )
}

export default TransitionLink