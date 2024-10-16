import { NextResponse } from "next/server"
import jwt from 'jsonwebtoken'
import { User } from "@/models/user.model";
import { dbConnect } from "@/lib/dbConnect";


export async function GET(req) {

    await dbConnect();
    const { cookies } = req
    console.log(cookies)
    const accessToken = cookies.get('accessToken')

    if (!accessToken) {
        return NextResponse.json({ success: false, message: "Unaouthorized request" }, { status: 400 })
    }
    try {
        const decodedInfo = jwt.verify(accessToken.value,process.env.ACCESS_TOKEN_SECRET);

        if (!decodedInfo) {
            return NextResponse.json({ success: false, message: "AcessToken expired" }, { status: 400 })
        }


        const userId = decodedInfo._id
        const user = await User.findById(userId).select("-password -refreshToken")
        
        if (!user) {
            return NextResponse.json({ success: false, message: "User not exist" }, { status: 400 })
        }
        
        return NextResponse.json({ success: true, user, message: "User fetched" }, { status: 200 })
    } catch (error) {
        console.log(error.message)
        return NextResponse.json({ success: false, message: "Server error" }, { status: 500 })
    }
}