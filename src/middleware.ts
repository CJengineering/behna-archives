import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const specificCookie = request.cookies.get('auth-password');

  if (!specificCookie) {
    console.log('auth-password cookie is missing');
    return NextResponse.redirect(new URL('/login?error=missing', request.url));
  }

  console.log('auth-password cookie:', specificCookie);
  console.log('expected password:', process.env.NEXT_PUBLIC_AUTH_PASSWORD);

  if (specificCookie.value === process.env.NEXT_PUBLIC_AUTH_PASSWORD) {
    return NextResponse.next();
  } else {
    console.log('auth-password does not match');
    return NextResponse.redirect(new URL('/login?error=incorrect', request.url));
  }
}

// Exclude /login from the middleware
export const config = {
  matcher: [
    '/((?!api|static|.*\\..*|_next|login).*)' // This ensures middleware runs on all paths except for the specified ones, including /login
  ],
};