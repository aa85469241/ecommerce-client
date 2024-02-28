import Link from 'next/link';
import { BiLogoShopify } from "react-icons/bi";
import { getCurrentUser } from '@/actions/getCurrentUser';

import MenuButton from './MenuButton';
import UserStatusButton from './UserStatusButton';
import CartButton from './CartButton';
import LogoutButton from './LogoutButton';
import ProfileButton from './ProfileButton';


const Navbar = async () => {
    const currentUser = await getCurrentUser();

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
            <ul className="font-montserrat items-center hidden md:flex">
                <li className="mx-3">
                    <Link className="growing-underline" href="http://localhost:8080">
                        Admin
                    </Link>
                </li>
                <li className="growing-underline mx-3">
                    <Link href="/products">Products</Link>
                </li>
            </ul>
            <div className="hidden md:flex md:items-center md:gap-6">
                <CartButton />
                {currentUser
                    ? <div className="group flex items-center gap-2 rounded-full shadow-inner shadow-neutral-500 py-1 pr-2">
                        <UserStatusButton currentUser={currentUser} />
                        <ProfileButton />
                        <LogoutButton />
                    </div>
                    : <UserStatusButton currentUser={currentUser} />
                }
            </div>
            <MenuButton currentUser={currentUser} />
        </nav>
    )
}

export default Navbar