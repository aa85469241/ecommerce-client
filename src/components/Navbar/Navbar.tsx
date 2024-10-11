import Link from 'next/link';
import { BiLogoShopify } from "react-icons/bi";
import { getCurrentUser } from '@/actions/getCurrentUser';

import MenuButton from './MenuButton';
import UserStatusButton from './UserStatusButton';
import CartButton from './CartButton';
import LogoutButton from './LogoutButton';


const Navbar = async () => {
    const currentUser = await getCurrentUser();
    const adminPageUrl = process.env.NEXT_PUBLIC_ADMIN_URL!;

    return (
        <nav
            className="fixed w-full h-16 flex justify-between items-center p-4 z-10 md:h-20 md:px-12 lg:px-20"
        >
            <div>
                <Link
                    href="/"
                    className="flex font-semibold uppercase tracking-wider text-xl"
                >
                    <BiLogoShopify size={30} />
                    <span className="mt-[3px]">Store</span>
                </Link>
            </div>
            <ul className="hidden md:flex md:items-center md:gap-4 lg:gap-6">
                <li className="growing-underline">
                    <Link href={adminPageUrl}>
                        Admin
                    </Link>
                </li>
                <li className="growing-underline">
                    <Link href="/products">Products</Link>
                </li>
                {currentUser &&
                    <li className="flex items-center gap-4 lg:gap-6">
                        <div>-</div>
                        <div className="growing-underline">
                            <Link href="/account/personal-info">Account</Link>
                        </div>
                        <LogoutButton />
                    </li>}
            </ul>
            <div className="hidden md:flex md:items-center md:gap-6">
                <CartButton />
                <UserStatusButton currentUser={currentUser} />
            </div>
            <MenuButton currentUser={currentUser} />
        </nav>
    )
}

export default Navbar
