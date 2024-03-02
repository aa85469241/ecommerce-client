'use client'

import React, { useState, useTransition } from 'react'
import toast from 'react-hot-toast'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { updateUserDate } from '@/actions/updateUserData'
import { AccountSchema } from '@/schemas'
import { SafeUser } from '@/types'
import { emailFormat } from '@/lib/format'

interface ProfileFormProps {
    currentUser: SafeUser
}


const ProfileForm: React.FC<ProfileFormProps> = ({
    currentUser
}) => {
    const [updateAccount, setUpdateAccount] = useState(false);
    const [isPending, startTransition] = useTransition();
    const isGoogleAuth = currentUser.email.includes('googleauth')

    const {
        register,
        handleSubmit,
        // formState: { errors }
    } = useForm({
        resolver: zodResolver(AccountSchema),
        defaultValues: {
            name: currentUser.name,
        }
    })

    const onSubmit = (values: z.infer<typeof AccountSchema>) => {
        startTransition(() => {
            updateUserDate(values)
                .then((data: any) => {
                    if (data.success) {
                        toast.success(data.success)
                    } else {
                        toast.error(data.error)
                    }
                }).finally(() => {
                    setUpdateAccount(false);
                })
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4 px-2">
                <div>
                    <label className="capitalize text-neutral-500 font-light text-sm">
                        email address:
                    </label>
                    <div className="relative mt-2">
                        <input
                            type="text"
                            className="input input-bordered input-sm w-full disabled:shadow disabled:border-neutral-500/40"
                            disabled
                            defaultValue={emailFormat(currentUser.email)}
                        />
                        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
                            {isGoogleAuth ? '(google)' : '(credential)'}
                        </span>
                    </div>
                </div>
                <div>
                    <label className="capitalize text-neutral-500 font-light text-sm">
                        name:
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            className="input input-bordered input-sm w-full disabled:shadow disabled:border-neutral-500/40"
                            disabled={updateAccount ? false : true}
                            {...register('name')}
                        />
                    </div>
                </div>
                <p className="text-sm text-neutral-600">
                    Change your account details below, or <a href="/" className="underline hover:font-bold">
                        click here
                    </a> to change your password.
                </p>
                <div className="space-x-2">
                    <button
                        type="button"
                        className={`text-sm rounded-lg p-3 
                    transition ${updateAccount
                                ? 'bg-red-500 text-white hover:bg-red-500/70'
                                : 'bg-black text-white hover:bg-black/70'}
                        `}
                        onClick={() => setUpdateAccount(prev => !prev)}
                    >
                        {updateAccount ? 'Cancel Update' : 'Update Account'}
                    </button>
                    {updateAccount &&
                        <button
                            type="submit"
                            className="inline-flex items-center text-sm rounded-lg p-3 transition bg-black text-white hover:bg-black/70"
                        >
                            Confirm Changes<span className={`${isPending && 'loading loading-spinner loading-sm ml-2'}`}></span>
                        </button>
                    }
                </div>
            </div>
        </form>
    )
}

export default ProfileForm