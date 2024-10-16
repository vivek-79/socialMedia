
'use client'
import React, { useState } from 'react'
import './register.css'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

function page() {

    const { register, handleSubmit } = useForm()
    const [error,seterror] = useState('')
    const handleRegister = async (data) => {
        seterror('')
       try {
         const register = await fetch('http://localhost:3000/api/signup', {
             method: "POST",
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify(data),
         })
 
         const result = await register.json()
         if(!result.success){
             seterror(result.message)
         }
       } catch (error) {
        seterror('Error occured while registering try again')
       }
    }
    return (
        <div className='register'>
            <form className='register-form'
                onSubmit={handleSubmit(handleRegister)}
            >
                <div className='form-comp'>
                    <h2>Register</h2>
                </div>
                <div className='form-comp'>
                    <label>Full name</label>
                    <input
                        type='text'
                        required
                        {...register('fullName')}
                    />
                </div>
                <div className='form-comp'>
                    <label>User name</label>
                    <input
                        type='text'
                        required
                        {...register('userName')}
                    />
                </div>
                <div className='form-comp'>
                    <label>Email</label>
                    <input type='text'
                        required
                        {...register('email')}
                    />
                </div>
                <div className='form-comp'>
                    <label>Password</label>
                    <input type='password'
                        required
                        {...register('password')}
                    />
                </div>
                 {error && <p className='error'>{error}</p> }
                <div className='form-comp'>
                    <button type='submit'>Submit</button>
                </div>
                <p>Alredy have account ?| <Link href='/login'>Login</Link></p>
            </form>
        </div>
    )
}

export default page