import { NextResponse } from "next/server";


export function middleware(req) {
    const { cookies } = req
    console.log(cookies)
    const accessToken = cookies.get('accessToken')
    const token = accessToken.value
    if (!token) {
        return NextResponse.redirect(new URL('/login', req.url))
    }
}

export const config = {
    matcher: ['/']
}
