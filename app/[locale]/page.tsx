import { SoftwareNavigation } from "@/components/software-navigation"
import { SoftwareHero } from "@/components/software-hero"
import { SoftwareServices } from "@/components/software-services"
import { SoftwareWork } from "@/components/software-work"
import { SoftwareProcess } from "@/components/software-process"
import { SoftwareAbout } from "@/components/software-about"
import { SoftwareContact } from "@/components/software-contact"
import { SoftwareFooter } from "@/components/software-footer"
import { getTranslations } from "next-intl/server"

// Forzar el renderizado dinámico para asegurar que el contexto de i18n esté siempre fresco
export const dynamic = 'force-dynamic';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;

  // Acceso a traducciones en el lado del servidor
  const t = await getTranslations({ locale, namespace: 'HomePage' });

  return (
    <main className="min-h-screen bg-background">
      <SoftwareNavigation />
      <SoftwareHero />
      <SoftwareServices />
      <SoftwareWork />
      <SoftwareProcess />
      <SoftwareAbout />
      <SoftwareContact />
      <SoftwareFooter />
    </main>
  );
}