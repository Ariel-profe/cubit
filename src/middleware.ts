// middleware.ts
import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from './auth.config';

export async function middleware(req: NextRequest) {

  const session = await auth();

  const requestedPage = req.nextUrl.pathname;

  const url = req.nextUrl.clone();

  if (!session) {
    url.pathname = '/auth/login';
    // url.pathname= '/';
    url.search = `p=${requestedPage}`;

    return NextResponse.redirect(url);
  };

  if (requestedPage.includes('/api') && session.user.role !== 'admin') {
    return new Response(JSON.stringify({ message: 'No autorizado' }), {
      status: 401,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };

  if (requestedPage.includes('/admin') && session.user.role !== 'admin') {
    return new Response(JSON.stringify({ message: 'No autorizado' }), {
      status: 401,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };

  if (requestedPage.includes('/profile') && !session) {
    return new Response(JSON.stringify({ message: 'No autorizado' }), {
      status: 401,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  if (requestedPage.includes('/profile') && !url.pathname.includes(session.user.id)) {
    return new Response(JSON.stringify({ message: 'No autorizado' }), {
      status: 401,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  //   return NextResponse.rewrite(new URL('/about-2', req.url))
  return NextResponse.next();
};

// Supports both a single string value or an array of matchers
export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*', '/checkout/address', '/checkout/', '/profile', '/profile/:path*']
};