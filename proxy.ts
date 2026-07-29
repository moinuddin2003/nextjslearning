// import { NextResponse } from "next/server";
// import { NextRequest } from "next/server";
// import path from "path";

// export function middleware(request: NextRequest){
//     const token = request.cookies.get('token')?.value;

//     const { pathname } = request.nextUrl;

//     const isProtectedRoute = pathname.startsWith('/dashboard') || pathname.startsWith('/contact') || pathname.startsWith('/product');

//     const isAuthroute = pathname === '/login' || pathname === './register'

//     if(isProtectedRoute && !token){
//         const loginUrl = new URL('/login' , request.url);
//         return NextResponse.redirect(loginUrl)
//     }

//     if(isAuthroute && token){
//         const dashboardUrl = new URL('/dashboard' , request.url);
//         return NextResponse.redirect(dashboardUrl)
//     }

//     return NextResponse.next()
// }

// export const config = {
//   matcher: [
//     '/dashboard/:path*',
//     '/profile/:path*',
//     '/contact',
//     '/product',

//     '/login',
//     '/register',
//   ],
// };

import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for Clerk's auto-proxy path
    '/__clerk/:path*',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};