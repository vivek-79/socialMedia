import { NextResponse } from "next/server";

export function middleware(req) {
    const { cookies } = req
    const accessToken = cookies.get('accessToken')
    const token = accessToken?.value
    const path= req.nextUrl.pathname;

    console.log('path is ',path)
    const publicPath =['/verifyemail'];
    const isPublic = publicPath.includes(path)
    if(isPublic){
        return NextResponse.next()
    }
    if (!token) {
        return NextResponse.redirect(new URL('/login', req.url))
    }
    return NextResponse.next()
}

export const config = {
    matcher: ['/','/verifyemail']
}
