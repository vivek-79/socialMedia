
'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import '.././profile.css'
import { useForm } from 'react-hook-form'

function page(params) {

  const user = useSelector((state) => state.auth.userData)

  const {register,handleSubmit} = useForm()

  const handleChanges= async(data)=>{
    data.id= user._id;
    const res= await fetch('http://localhost:3000/api/updateuser',{
      method:"POST",
      body:JSON.stringify(data)
    })
  }
  return (
    <main>
      <p>Edit profile</p>
      <div className='profile-pic'></div>
      <input type='file' id='profile'></input>
      <label className='change' htmlFor='profile'>Change</label>
      <form 
        onSubmit={handleSubmit(handleChanges)}
      >
        <label>Name</label>
        <input
          {...register('fullName')}
        />
        <label>User name</label>
        <input 
          {...register('userName')}
        />
        <label>Gender</label>
        <input 
          {...register('gender')}
        />
        <label>Change password</label>
        <input
          placeholder='Old'
          {...register('oldPassword')}
        />
        <input
          placeholder='New'
          {...register('password')}
        />
        <button type='submit'>Save changes</button>
      </form>
    </main>
  )
}

export default page