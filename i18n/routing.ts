import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
    locales: ['en', 'es'],

    defaultLocale: 'en',
    //localePrefix: 'always',
});

// 2. Exporta estas utilidades basadas en tu objeto 'routing'
export const { Link, redirect, usePathname, useRouter, getPathname } = 
  createNavigation(routing);