import './globals.css'
import { Russo_One } from 'next/font/google'
import type { Metadata } from 'next'
import SessionProvider from '@/providers/SessionProvider'
import ToastProvider from '@/providers/ToastProvider'
import Navbar from '@/components/Navbar/Navbar'
import LoginModal from '@/components/Modals/LoginModal'
import RegisterModal from '@/components/Modals/RegisterModal'

const russo = Russo_One({
    subsets: ['latin'],
    weight: ['400']
})

export const metadata: Metadata = {
    title: 'Next Store',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${russo.className} bg-background`}>
                <SessionProvider>
                    <ToastProvider />
                    <LoginModal />
                    <RegisterModal />
                    <Navbar />
                    {children}
                </SessionProvider>
            </body>
        </html>
    )
}
