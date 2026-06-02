import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware({
  ...routing,
  // Desactiva la detección del navegador porque la hará tu proxy
  localeDetection: false,
  // Evita que Next.js intente redirigir si no ve el idioma en la URL
  localePrefix: 'as-needed' 
});

export const config = {
  matcher: ['/', '/(es|en|fr)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};