'use client';

import { SafeUser } from "@/types";
import Link from "next/link";
import UserStatusButton from "./UserStatusButton";
import CartButton from "./CartButton";
import { RiInboxLine, RiAdminLine } from "react-icons/ri";

interface MenuButtonProps {
    currentUser: SafeUser | null;
}

const MenuButton = ({ currentUser }: MenuButtonProps) => {

    return (
        <div id="showMenu" className="md:hidden relative">
            <label tabIndex={0} className="btn btn-circle swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" className="peer" />
                {/* hamburger icon */}
                <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                {/* close icon */}
                <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                {/* dropdown content */}

                <ul tabIndex={0} className="absolute right-0 bottom-0 translate-y-[105%] invisible peer-checked:visible z-50 menu-sm p-2 shadow rounded-box w-48 bg-base-100 pointer-events-none">
                    <li className="w-full flex items-center justify-between">
                        <CartButton />
                        <span id="divider" className="pointer-events-none select-none">|</span>
                        <UserStatusButton currentUser={currentUser} />
                    </li>
                    <li className="nav-item">
                        <Link href="http://localhost:8080" className="w-full">
                            <div className="grid grid-cols-[20%_80%]">
                                <RiAdminLine size={20}/>
                                <span>Admin</span>
                            </div>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/products" className="w-full">
                            <div className="grid grid-cols-[20%_80%]">
                                <RiInboxLine size={20}/>
                                <span>Products</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </label>
        </div>
    );
}

export default MenuButton;