import { Github, ExternalLink, Folder } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Kube-Monitor",
    description: "Real-time Kubernetes cluster monitoring dashboard with customizable alerts and metrics visualization.",
    technologies: ["Go", "React", "Prometheus", "Grafana"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Deploy-CLI",
    description: "Command-line tool for streamlined application deployments across multiple cloud providers.",
    technologies: ["Rust", "AWS SDK", "GCP SDK"],
    github: "https://github.com",
    demo: null
  },
  {
    title: "GitOps-Template",
    description: "Production-ready GitOps repository template with ArgoCD, Helm charts, and multi-environment support.",
    technologies: ["Kubernetes", "Helm", "ArgoCD", "Kustomize"],
    github: "https://github.com",
    demo: null
  },
  {
    title: "API-Gateway",
    description: "High-performance API gateway with rate limiting, authentication, and request transformation.",
    technologies: ["Go", "Redis", "PostgreSQL", "Docker"],
    github: "https://github.com",
    demo: "https://demo.com"
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Projects</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <Folder className="h-10 w-10 text-primary" />
                <div className="flex items-center gap-3">
                  <Link 
                    href={project.github}
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                  {project.demo && (
                    <Link 
                      href={project.demo}
                      target="_blank"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="View demo"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  )}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="text-xs font-mono text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
