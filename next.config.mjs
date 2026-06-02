import createNextIntlPlugin from 'next-intl/plugin';

// Especificamos la ruta exacta para asegurar que el plugin la encuentre
const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
}

export default withNextIntl(nextConfig);
