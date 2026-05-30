"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTranslations, useLocale } from "next-intl"
// 1. IMPORTANTE: Importa useRouter y usePathname desde tu archivo local de i18n
// Si tu archivo se llama diferente o está en otra carpeta, ajusta esta ruta (ej. "@/navigation" o "@/i18n")
import { useRouter, usePathname } from "@/i18n/routing"

export function SoftwareNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations("Navigation")
  
  // 2. Obtenemos el idioma activo ('en' o 'es') y los controladores de ruta
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const navLinks = [
    { href: "#services", label: t("services")},
    { href: "#work", label: t("work") },
    { href: "#process", label: t("process") },
    { href: "#about", label: t("about") },
    { href: "#contact", label: t("contact") },
  ]

  // 3. Función para cambiar el prefijo de la URL manteniendo la misma vista
  const handleLocaleChange = (nextLocale: "es" | "en") => {
    router.replace(pathname, { locale: nextLocale })
  }

  // 4. Bloque del selector de idiomas con banderas (Reutilizable)
  const LanguageSelector = () => (
    <div className="flex items-center gap-1 bg-secondary/60 p-1 rounded-lg border border-border">
      <button
        onClick={() => handleLocaleChange("es")}
        title="Español"
        className={`px-2 py-0.5 rounded text-base transition-all ${
          locale === "es"
            ? "bg-background shadow-sm scale-105 border border-border/40"
            : "opacity-40 hover:opacity-100"
        }`}
      >
        🇪🇸
      </button>
      <button
        onClick={() => handleLocaleChange("en")}
        title="English"
        className={`px-2 py-0.5 rounded text-base transition-all ${
          locale === "en"
            ? "bg-background shadow-sm scale-105 border border-border/40"
            : "opacity-40 hover:opacity-100"
        }`}
      >
        🇬🇧
      </button>
    </div>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/company-logo.png"
            alt="Vexel Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span className="text-xl font-semibold text-foreground">VHMDevelopers</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Vista Escritorio: Botones alineados */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <LanguageSelector />
          <Button>{t("getStarted")}</Button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Vista Móvil */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="flex items-center justify-between gap-4 pt-2 border-t border-border/60">
              <LanguageSelector />
              <Button className="flex-1">{t("getStarted")}</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}