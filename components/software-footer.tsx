import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"
import { useTranslations } from "next-intl" // 1. Importamos next-intl

// Definimos la estructura de navegación estática vinculada a las llaves del JSON
const serviceLinks = [
  { id: "custom", href: "#" },
  { id: "mobile", href: "#" },
  { id: "web", href: "#" },
  { id: "cloud", href: "#" },
  { id: "devops", href: "#" },
  { id: "ai", href: "#" },
  { id: "desktop", href: "#" },
  { id: "microservices", href: "#" },
] as const

const companyLinks = [
  { id: "about", href: "#about" },
  { id: "work", href: "#work" },
  { id: "careers", href: "#" },
  { id: "contact", href: "#contact" },
] as const

export function SoftwareFooter() {
  const t = useTranslations("Footer") // 2. Apuntamos a "Footer"

  return (
    <footer className="bg-foreground text-background py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Columna Principal: Marca y Redes */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/company-logo.png"
                alt="VHMDevelopers Logo"
                width={40}
                height={40}
                className="w-10 h-10 brightness-0 invert"
              />
              <span className="text-xl font-semibold">VHMDevelopers</span>
            </Link>
            <p className="text-background/70 max-w-md mb-6 leading-relaxed">
              {t("description")}
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Columna: Servicios */}
          <div>
            <h3 className="font-semibold mb-4">{t("titleServices")}</h3>
            <ul className="space-y-3 text-background/70">
              {serviceLinks.map((link) => (
                <li key={link.id}>
                  <Link href={link.href} className="hover:text-background transition-colors">
                    {t(`services.${link.id}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna: Compañía */}
          <div>
            <h3 className="font-semibold mb-4">{t("titleCompany")}</h3>
            <ul className="space-y-3 text-background/70">
              {companyLinks.map((link) => (
                <li key={link.id}>
                  <Link href={link.href} className="hover:text-background transition-colors">
                    {t(`company.${link.id}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sección Inferior: Derechos y Políticas */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            {new Date().getFullYear()} VHMDevelopers. {t("rights")}
          </p>
          <div className="flex gap-6 text-sm text-background/60">
            <Link href="#" className="hover:text-background transition-colors">
              {t("privacy")}
            </Link>
            <Link href="#" className="hover:text-background transition-colors">
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}