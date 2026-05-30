import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { useTranslations } from "next-intl"

const highlightIndexes = ["0", "1", "2", "3", "4", "5"]

export function SoftwareAbout() {
  const t = useTranslations("About")

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl" />
            <div className="relative bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/company-logo.png"
                  alt="Vexel Logo"
                  width={84}
                  height={84}
                  className="w-16 h-16"
                />
                <div>
                  <h3 className="text-2xl font-bold text-foreground">VHMDevelopers</h3>
                  <p className="text-muted-foreground">{t("subRole")}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4 rounded-lg bg-secondary/50">
                  <p className="text-3xl font-bold text-primary">8+</p>
                  <p className="text-sm text-muted-foreground">{t("statYears")}</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/50">
                  <p className="text-3xl font-bold text-primary">100+</p>
                  <p className="text-sm text-muted-foreground">{t("statProjects")}</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/50">
                  <p className="text-3xl font-bold text-primary">50+</p>
                  <p className="text-sm text-muted-foreground">{t("statClients")}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-primary font-medium mb-3">{t("badge")}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              {t("mainTitle")}
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t("paragraph1")}
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {t("paragraph2")}
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {highlightIndexes.map((index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm text-foreground">{t(`highlights.${index}`)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
