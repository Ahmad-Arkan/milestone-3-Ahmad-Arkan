import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const privatePages = ['/admin/*', '/admin']
  const auth : boolean = true

  if (privatePages.includes(pathname) && !auth) {
    return NextResponse.redirect(new URL('/auth', request.url))
  }

  // return NextResponse.redirect(new URL('/', request.url))
  return NextResponse.next()
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
  ]
}