'use client';

import { IconType } from "react-icons"
import { FaRegUser, FaUserCircle, FaRegCreditCard, FaBoxOpen } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { SafeUser } from "@/types";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { emailFormat } from "@/lib/format";

const Route = ({
    href,
    Icon,
    label
}: {
    href: string,
    Icon: IconType,
    label: string
}) => {
    return (
        <li>
            <Link href={href}>
                <div className="btn btn-ghost w-fit flex items-center gap-2 text-sm md:text-base">
                    <Icon />
                    <p className="tracking-wide capitalize font-medium text-sm">
                        {label}
                    </p>
                </div>
            </Link>
        </li>
    )
}

interface AccountRouterListProps {
    currentUser: SafeUser;
}

const AccountRouterList: React.FC<AccountRouterListProps> = ({
    currentUser
}) => {
    return (
        <div className="mb-2 md:mt-10 md:mb-0">
            <div className="flex items-center gap-8 md:flex-col md:gap-4">
                <h1 className="text-3xl font-bold tracking-wider md:text-4xl">Hi, welcome~</h1>
                <div className="flex gap-2 md:ml-4">
                    <FaUserCircle size={45} />
                    <div>
                        <p className="font-semibold">
                            {currentUser.name}
                        </p>
                        <p className="text-xs">
                            {emailFormat(currentUser.email)}
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <ul className="max-w-md grid grid-cols-2 border-b border-neutral-500/50 md:border-none mt-4 pl-2 pb-2 md:block md:space-y-4 md:mt-6 md:pb-0">
                    <Route
                        href="/account/personal-info"
                        Icon={FaRegUser}
                        label="Personal Information"
                    />
                    <Route
                        href="/account/purchases"
                        Icon={FaRegCreditCard}
                        label="My purchases"
                    />
                    <Route
                        href="/account/orders"
                        Icon={FaBoxOpen}
                        label="My orders"
                    />
                    <li>
                        <div
                            className="btn btn-ghost w-fit flex items-center gap-2 text-base md:text-lg"
                            onClick={() => signOut({ callbackUrl: "/" })}
                        >
                            <MdLogout />
                            <p className="tracking-wide capitalize font-bold">
                                Logout
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AccountRouterList