import { getCurrentUser } from '@/actions/getCurrentUser';
import ProfileForm from '@/components/Account/personal-info/ProfileForm';
import React from 'react'

const PersonalInfoPage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) return;

    return (
        <div className="w-full max-w-lg p-2 md:mt-10">
            <h1 className="text-xl font-kanit font-semibold mb-6 md:text-2xl">
                Personal Information
            </h1>
            <ProfileForm currentUser={currentUser} />
        </div>
    )
}

export default PersonalInfoPage;