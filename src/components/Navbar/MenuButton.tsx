'use client';

import Link from "next/link";
import { RiInboxLine, RiAdminLine, RiLogoutBoxLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { SafeUser } from "@/types";
import { Menu, Transition } from "@headlessui/react";
import UserStatusButton from "./UserStatusButton";
import CartButton from "./CartButton";
import { signOut } from "next-auth/react";

interface MenuButtonProps {
    currentUser: SafeUser | null;
}

interface MenuItemProps {
    href: string
    children: React.ReactNode
}

const MenuItem: React.FC<MenuItemProps> = ({ href, children }) => {
    return (
        <Menu.Item>
            {({ close }) => (
                <div
                    className="btn btn-ghost w-full rounded-md text-left hover:bg-black hover:text-white"
                >
                    <Link
                        href={href}
                        className="w-full"
                        onClick={close}
                    >
                        <div className=" flex items-center gap-4 rounded-md text-sm font-light">
                            {children}
                        </div>
                    </Link>
                </div>
            )}
        </Menu.Item>
    )
}

const MenuButton = ({ currentUser }: MenuButtonProps) => {

    return (
        <div id="showMenu" className="md:hidden relative">
            <Menu as="div" className="relative inline-block">
                {({ open }) => (
                    <>
                        <Menu.Button className="btn btn-circle btn-ghost swap swap-rotate">

                            {/* this hidden checkbox controls the state */}
                            <input
                                type="checkbox"
                                checked={open ? true : false}
                                readOnly
                            />

                            {/* hamburger icon */}
                            <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                            {/* close icon */}
                            <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                        </Menu.Button>
                        <Transition
                            show={open}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 mt-2 px-2 pb-1 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                                <div className="w-full flex items-center justify-between pt-2 pb-1">
                                    <Menu.Item>
                                        {({ active, close }) => (
                                            <div
                                                className={`${active ? 'bg-black text-white' : 'text-gray-900'
                                                    } rounded-md`}
                                            >
                                                <CartButton close={close} />
                                            </div>
                                        )}
                                    </Menu.Item>
                                    <div className="mx-1 text-lg">|</div>
                                    <Menu.Item>
                                        <div>
                                            <UserStatusButton
                                                currentUser={currentUser}
                                            />
                                        </div>
                                    </Menu.Item>
                                </div>
                                <div className="border-b-[1px] border-slate-300 pb-1">
                                    <h6 className="text-xs text-neutral uppercase mt-2 mb-1">
                                        - Route -
                                    </h6>
                                    <MenuItem href="http://localhost:8080">
                                        <RiAdminLine size={20} />
                                        <span>Admin</span>
                                    </MenuItem>
                                    <MenuItem href="/products">
                                        <RiInboxLine size={20} />
                                        <span>Products</span>
                                    </MenuItem>
                                </div>
                                {currentUser &&
                                    <div>
                                        <h6 className="text-xs text-neutral uppercase mt-2 mb-1">
                                            - user -
                                        </h6>
                                        <MenuItem href="/account">
                                            <CgProfile size={20} />
                                            <span>Profile</span>
                                        </MenuItem>
                                        <Menu.Item>
                                            <div
                                                className="btn btn-ghost w-full rounded-md text-left hover:bg-black hover:text-white"
                                                onClick={() => signOut({ callbackUrl: "/" })}
                                            >
                                                <div className="w-full flex items-center gap-4 rounded-md text-sm font-bold">
                                                    <RiLogoutBoxLine size={20} />
                                                    <span>Logout</span>
                                                </div>
                                            </div>
                                        </Menu.Item>
                                    </div>
                                }
                            </Menu.Items>
                        </Transition>
                    </>
                )}

            </Menu>
        </div>
    );
}

export default MenuButton;