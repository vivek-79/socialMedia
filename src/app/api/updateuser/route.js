import { dbConnect } from "@/lib/dbConnect"
import { User } from "@/models/user.model";
import { NextResponse } from "next/server";


export async function POST(req){

    await dbConnect();

    const data = await req.json();
    const user =await User.findById(data.id)
    try {
        if(data.password){
            const verifyPassword = await user.isPasswordCorrect(data.oldPassword)
            
            if(!verifyPassword){
                return NextResponse.json({success:false,messge:"Old password incorrect"},{status:400})
            }
            else{
                user.password=data.password;
            }
        }
        if(data.userName && data.userName !== user.userName){
            
            const existUsername = await User.findOne({userName:data.userName});
            if(existUsername){
                return NextResponse.json({success:false,messge:"Username already taken"},{status:400})
            }
            else{
                user.userName=data.userName
            }
        }
        if(data.fullName && data.fullName !== user.fullName){
            user.fullName=data.fullName;
        }
        if(data.gender && data.gender !== user.gender){
            user.gender =data.gender;
        }
        await user.save()
        return NextResponse.json({success:true,messge:"updated"},{status:201})
    } catch (error) {
        
        return NextResponse.json({success:false,message:"Server error try again"},{status:500})
    }
}