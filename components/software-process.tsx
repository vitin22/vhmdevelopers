import { MessageSquare, Pencil, Code, Rocket } from "lucide-react"
import { useTranslations } from "next-intl"

const steps = [
  {
    id: "discovery",
    icon: MessageSquare,
    number: "01",
  },
  {
    id: "design",
    icon: Pencil,
    number: "02",
  },
  {
    id: "development",
    icon: Code,
    number: "03",
  },
  {
    id: "deploy",
    icon: Rocket,
    number: "04",
  },
]

export function SoftwareProcess() {
  const t = useTranslations("Process")

  return (
    <section id="process" className="py-24 px-6 bg-secondary/30">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-border" />
              )}
              <div className="relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <span className="text-4xl font-bold text-primary/20">{step.number}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{t(`steps.${step.id}.title`)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(`steps.${step.id}.description`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
