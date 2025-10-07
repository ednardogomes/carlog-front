import { NextRequest, NextResponse } from "next/server";

export function auth(request: NextRequest) {
    const currentUser = request.cookies.get('userToken')?.value;
    if (currentUser && request.nextUrl.pathname === '/login') {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }
    if (!currentUser && request.nextUrl.pathname !== '/dashboard') {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
}