
'use client'

import { useState } from "react"
import './comps.css'
import { useRouter } from "next/navigation"
import { login } from "@/redux/authSlice";
import { useDispatch} from "react-redux";
import { useEffect } from "react";

export default function Setting(){

    const router = useRouter()
    const dispatch = useDispatch()
    // useEffect(()=>{
    //   const getUser = async()=>{
    //    try {
    //      const result = await fetch('http://localhost:3000/api/getUser')
    //      const data = await result.json()
    //      dispatch(login(data.user))
    //      if(!data.success){
    //         router.push('/login')
    //      }
    //    } catch (error) {
    //     console.log(error.message)
    //    }
    //   }
    //   getUser(); 
    // },[])
    return(
       <div className="setting">
        <i className="ri-home-5-line"></i>
        <i className="ri-search-2-line"></i>
        <i className="ri-add-fill"></i>
        <div onClick={()=>router.push('/profile')} className="user-profile"></div>
        </div>
    )
}