
'use client'

import { useSelector } from 'react-redux';

export default function ProfilePage() {
    let userData = null;

    const user = useSelector((state)=>state.auth.userData)
    console.log(user)
    return (
        <div className='profile-page'>
            <h1>User Profile</h1>
            
        </div>
    );
}
