import { NextResponse, NextRequest } from 'next/server';
import { refreshToken } from './app/api/instance';

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken');
  const refresh = request.cookies.get('refreshToken');
 if(!accessToken && refresh){
  console.log(123);
   }
 if(!refresh){
  return NextResponse.redirect(new URL('/auth/login', request.url));

 }
  if (!accessToken) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  } else {
    // alert('Login')
    if (request.nextUrl.pathname === '/auth/login') {
      return NextResponse.redirect('/')
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [],
};
