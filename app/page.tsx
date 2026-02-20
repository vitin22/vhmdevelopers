import { SoftwareNavigation } from "@/components/software-navigation"
import { SoftwareHero } from "@/components/software-hero"
import { SoftwareServices } from "@/components/software-services"
import { SoftwareWork } from "@/components/software-work"
import { SoftwareProcess } from "@/components/software-process"
import { SoftwareAbout } from "@/components/software-about"
import { SoftwareContact } from "@/components/software-contact"
import { SoftwareFooter } from "@/components/software-footer"

export default function Home() {
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
