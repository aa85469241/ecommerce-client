'use client';

import Link from 'next/link'
import React from 'react'
import { RiUserSearchLine } from 'react-icons/ri'

const ProfileButton = () => {
    return (
        <div
            className="tooltip tooltip-bottom"
            data-tip="Profile"
        >
            <button className="btn btn-circle btn-ghost btn-sm">
                <Link href="/account">
                    <RiUserSearchLine size={20} />
                </Link>
            </button>
        </div>
    )
}

export default ProfileButton