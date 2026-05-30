// 1. Añade Brain, Layers y MonitorSpeaker a las importaciones
import { Code2, Cloud, Server, Smartphone, Globe, Shield, Brain, Layers, MonitorSpeaker } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslations } from "next-intl" // 1. Importamos next-intl

const services = [
  { id: "custom", icon: Code2 },
  { id: "ai", icon: Brain },
  { id: "microservices", icon: Layers },
  { id: "desktop", icon: MonitorSpeaker },
  { id: "mobile", icon: Smartphone },
  { id: "web", icon: Globe },
  { id: "cloud", icon: Cloud },
  { id: "devops", icon: Server },
  { id: "security", icon: Shield },
]

export function SoftwareServices() {
  const t = useTranslations("Services")

  return (
    <section id="services" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3">{t("badge")}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {t("mainTitle")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("mainSubtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            /* Aquí ya tienes integrada la animación de hover que añadimos antes */
            <Card key={service.id} className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg group">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{t(`items.${service.id}.title`)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(`items.${service.id}.description`)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}