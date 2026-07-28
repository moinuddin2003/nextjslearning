import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request){
    try{
        const body = await request.json();
        const {email, password} = body;

        const railwayRes = await fetch("https://foodappbackend-production-5f7c.up.railway.app/user/login/" , {
            method:"POST",
            headers: {'Content-Type' : 'application/json'},
            body:JSON.stringify({email, password})
        }) 

        const data = await railwayRes.json();

        if(!railwayRes.ok){
            return NextResponse.json({
                message: data.message || "Invalid Credentials"
            },{
                status: railwayRes.status
            })
        }

        const accessToken = data.token.access;

        const cookieStore = await cookies();
        cookieStore.set('token' , accessToken, {
            httpOnly: true, // Prevents client-side JS from accessing it (XSS protection)
      secure: process.env.NODE_ENV === 'production', // HTTPS only in production
      sameSite: 'lax', // CSRF protection
      maxAge: 60 * 60 * 24, // Cookie expires in 1 day (in seconds)
      path: '/', // Cookie is valid across the whole site
        })

        return NextResponse.json({success: true, message: "Logged in Successfully"})
    } catch(error){
        return NextResponse.json({ message: 'Something went wrong' },
      { status: 500 })
    }

}