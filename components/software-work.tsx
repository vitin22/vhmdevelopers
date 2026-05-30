import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTranslations } from "next-intl" // 1. Importamos next-intl

const projects = [
  {
    id: "financeflow",
    title: "FinanceFlow",
    image: "/project-1.jpg",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    id: "healthtrack",
    title: "HealthTrack Pro",
    image: "/project-2.jpg",
    tags: ["React Native", "Python", "TensorFlow", "GCP"],
  },
  {
    id: "logichain",
    title: "LogiChain",
    image: "/project-3.jpg",
    tags: ["Next.js", "Go", "Kubernetes", "Azure"],
  },
]

export function SoftwareWork() {
  const t = useTranslations("Work")
  return (
    <section id="work" className="py-24 px-6">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="bg-card border-border overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-secondary overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <ExternalLink className="h-8 w-8 text-primary" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-3">{t(`projects.${project.id}.category`)}</Badge>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{t(`projects.${project.id}.description`)}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
