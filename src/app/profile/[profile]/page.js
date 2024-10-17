
'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import '.././profile.css'

function page(params) {

    const user = useSelector((state)=>state.auth.userData)
    
  return (
    <main>
        <p>Edit profile</p>
        <div className='profile-pic'></div>
        <input type='file' htmlFor='profile'></input>
        <p for='profile'>Change</p>
        <form>
            <label>Name</label>
            <input/>
            <label>User name</label>
            <input/>
            <label>Gender</label>
            <input/>
            <label>Change password</label>
            <input
             placeholder='Old'
            />
            <input
             placeholder='New'
            />
            <button>Save changes</button>
        </form>
    </main>
  )
}

export default page