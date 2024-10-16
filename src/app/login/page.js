


'use client'
import React, { useState } from 'react'
import '../register/register.css'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { login } from '@/redux/authSlice'

function page() {

    const router = useRouter()
    const { register, handleSubmit } = useForm()
    const [error, seterror] = useState('')
    const dispatch = useDispatch()
    const handleRegister = async (data) => {
        seterror('')
        try {
            const register = await fetch('http://localhost:3000/api/login', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            })

            const result = await register.json()
            if (!result.success) {
                seterror(result.message)
            }
            else {
                dispatch(login(result.loggedInUser))
                console.log(result)
                router.push('/')
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
                    <h2>Login</h2>
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
                {error && <p className='error'>{error}</p>}
                <div className='form-comp'>
                    <button type='submit'>Submit</button>
                </div>
                <p>Don&apos;t have account ?| <Link href='/register'>Signup</Link></p>
            </form>
        </div>
    )
}

export default page