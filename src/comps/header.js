
'use client'
import { login } from "@/redux/authSlice";
import { useDispatch} from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Header(){

    const router = useRouter()
    const dispatch = useDispatch()
    useEffect(()=>{
      const getUser = async()=>{
       try {
         const result = await fetch('http://localhost:3000/api/getUser')
         const data = await result.json()
         dispatch(login(data.user))
         if(!data.success){
            router.push('/login')
         }
       } catch (error) {
        console.log(error.message)
       }
      }
      getUser(); 
    },[])
    return(
        <div className="header">
            <h2>Connect  <i className="ri-base-station-fill"></i></h2>
            <i className="ri-wechat-2-line"></i>
        </div>
    )
}