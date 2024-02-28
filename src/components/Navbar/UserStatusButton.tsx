'use client';

import Image from "next/image";
import { BiKey } from "react-icons/bi";
import { SafeUser } from "@/types";
import { ProfilePlaceholder } from '../../../public/assets';
import { useLoginModal } from '@/hooks/useLoginModal';

interface UserStatusButtonProps {
    currentUser?: SafeUser | null;
}

const UserStatusButton: React.FC<UserStatusButtonProps> = ({ currentUser }) => {
    const loginModal = useLoginModal();

    return (
        <>
            {currentUser
                ? <div className="flex items-center p-2 md:p-0">
                    <div className="avatar cursor-pointer pointer-events-auto">
                        <div className="w-8 rounded-full ring ring-sky-700/60 ring-offset-base-100 ring-offset-2">
                            <Image
                                src={currentUser?.image || ProfilePlaceholder}
                                alt="profile"
                                width={40}
                                height={40}
                            />
                        </div>
                    </div>
                </div>
                : <div
                    className="tooltip tooltip-bottom flex items-center"
                    data-tip="SignIn"
                >
                    <button
                        className="btn btn-ghost btn-circle pointer-events-auto p-0"
                        onClick={loginModal.onOpen}
                    >
                        <BiKey size={30} />
                    </button>
                </div>
            }
        </>
    );
}

export default UserStatusButton;