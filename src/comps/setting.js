
'use client'

import { useState } from "react"
import './comps.css'
import { useRouter } from "next/navigation"

export default function Setting(){

    const router = useRouter()
    const [showsetting,setShowsetting] = useState(false)
    return(
       <div className="setting">
        <i className="ri-home-5-line"></i>
        <i className="ri-search-2-line"></i>
        <i className="ri-add-fill"></i>
        <div onClick={()=>router.push('/profile')} className="user-profile"></div>
        </div>
    )
}