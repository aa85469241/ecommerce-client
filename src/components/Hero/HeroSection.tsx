'use client'

import Link from 'next/link'
import Button from '../Button'

const HeroSection = () => {
    return (
        <div className="p-4 max-w-lg">
            <section className="space-y-2 text-center md:text-start">
                <h1 className="text-2xl font-bold whitespace-nowrap lg:text-4xl">
                    A Ultimate Retail Experience
                </h1>
                <p className="text-md font-normal tracking-wide lg:text-lg">
                    Your One-Stop Destination for Trendy Finds and Unbeatable Deals
                </p>
            </section>
            <div className="mt-4 text-center md:text-start">
                <Link href="/products">
                    <Button
                        label='Shop Now'
                        className="btn-neutral w-56 text-secondary rounded-lg"
                    />
                </Link>
            </div>
        </div>
    )
}

export default HeroSection