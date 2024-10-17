
'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
function Button({
    clas='',
    text='',
    link='',
}) 
{
    const router= useRouter()

    const handleClick =()=>{
        if(link){
            router.push(link)
        }
        else{
            console.log('Button clicked')
        }
    }
  return (
    <button onClick={handleClick}  className={clas}>{text}</button>
  )
}

export default Button