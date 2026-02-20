import { ExternalLink } from "lucide-react"
import Link from "next/link"

const experiences = [
  {
    period: "2022 — Present",
    title: "Senior DevOps Engineer",
    company: "Cloud Systems Inc",
    description: "Lead infrastructure modernization initiatives, implementing Kubernetes-based microservices architecture. Reduced deployment time by 80% through automated CI/CD pipelines.",
    technologies: ["Kubernetes", "AWS", "Terraform", "Go", "ArgoCD"]
  },
  {
    period: "2020 — 2022",
    title: "Full-Stack Developer",
    company: "TechStart Labs",
    description: "Built and maintained multiple SaaS products serving 100K+ users. Implemented real-time features, payment integrations, and scalable backend services.",
    technologies: ["TypeScript", "React", "Node.js", "PostgreSQL", "Redis"]
  },
  {
    period: "2019 — 2020",
    title: "Software Engineer",
    company: "Digital Agency Co",
    description: "Developed custom web applications and APIs for enterprise clients. Introduced containerization practices and automated testing pipelines.",
    technologies: ["Python", "Django", "Docker", "AWS", "Jenkins"]
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Experience</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-8 p-6 rounded-lg hover:bg-card/50 transition-colors group"
            >
              <div className="text-sm font-mono text-muted-foreground">
                {exp.period}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <span className="text-muted-foreground">·</span>
                  <Link 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    {exp.company}
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono bg-primary/10 text-primary rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
