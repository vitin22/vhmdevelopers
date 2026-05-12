"use client";
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';

export default function Providers({ 
  children, 
  messages, 
  locale 
}: { 
  children: React.ReactNode; 
  messages: AbstractIntlMessages; 
  locale: string; 
}) {
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
}