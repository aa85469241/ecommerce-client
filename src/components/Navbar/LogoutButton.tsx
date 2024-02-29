'use client'

import { signOut } from 'next-auth/react'
import React from 'react'
import { RiLogoutBoxLine } from 'react-icons/ri'

const LogoutButton = () => {
    return (
        <div
            className="tooltip tooltip-bottom"
            data-tip="Logout"
        >
            <button
                className="btn btn-circle btn-ghost"
                onClick={() => signOut({ callbackUrl: "/" })}
            >
                <RiLogoutBoxLine size={20} />
            </button>
        </div>
    )
}

export default LogoutButton