const skillCategories = [
  {
    title: "Languages",
    skills: ["TypeScript", "Go", "Python", "Rust", "Bash", "SQL"]
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Vue.js"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "FastAPI", "GraphQL", "gRPC", "REST"]
  },
  {
    title: "DevOps & Cloud",
    skills: ["AWS", "GCP", "Kubernetes", "Docker", "Terraform", "Pulumi"]
  },
  {
    title: "CI/CD & Tools",
    skills: ["GitHub Actions", "ArgoCD", "Jenkins", "GitLab CI"]
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"]
  }
]

export function SkillsSection() {
  return (
    <section id="skills" className="px-6 md:px-12 lg:px-24 py-20 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Skills & Tools</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-md border border-border hover:border-primary/50 transition-colors cursor-default"
                  >
                    {skill}
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
