import { SoftwareNavigation } from "@/components/software-navigation"
import { SoftwareHero } from "@/components/software-hero"
import { SoftwareServices } from "@/components/software-services"
import { SoftwareWork } from "@/components/software-work"
import { SoftwareProcess } from "@/components/software-process"
import { SoftwareAbout } from "@/components/software-about"
import { SoftwareContact } from "@/components/software-contact"
import { SoftwareFooter } from "@/components/software-footer"
import { getTranslations } from "next-intl/server"
import link from 'next/link';

//forzar el renderizado dinamico
export const dynamic = 'force-dynamic';

type Props = {
  params: Promise<{ locale: string}>;
};


export default async function Home({ params }: Props) {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: 'HomePage'});

  
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
  )
}
