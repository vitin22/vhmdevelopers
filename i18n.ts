import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import { routing } from './i18n/routing';
 
export default getRequestConfig(async ({locale}) => {
  // Validamos que el locale sea parte de los soportados y no sea undefined
  if (!locale || !routing.locales.includes(locale as any)) {
    notFound();
  }
 
  return {
    locale: locale as string,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});