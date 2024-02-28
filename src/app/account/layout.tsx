import { Metadata } from "next";
import { getCurrentUser } from "@/actions/getCurrentUser"
import AccountRouterList from "@/components/Account/AccountRouterList";
import Container from "@/components/Container";
import SessionProvider from "@/providers/SessionProvider"

export const metadata: Metadata = {
    title: 'Next Store - Account',
}

export default async function AccountLayout({
    children
}: {
    children: React.ReactNode
}) {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return;
    }

    return (
        <SessionProvider>
            <Container className="flex flex-col md:flex-row md:gap-12 lg:gap-32">
                <AccountRouterList currentUser={currentUser} />
                {children}
            </Container>
        </SessionProvider>
    )
}