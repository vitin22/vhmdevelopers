import { Code2, Container, GitBranch, Gauge } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Building robust applications with modern frameworks, clean architecture, and performance-first mindset."
  },
  {
    icon: Container,
    title: "Container Orchestration",
    description: "Deploying and managing containerized applications with Kubernetes, Docker, and service mesh technologies."
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipelines",
    description: "Designing automated workflows for testing, building, and deploying code with zero downtime."
  },
  {
    icon: Gauge,
    title: "Infrastructure as Code",
    description: "Provisioning and managing cloud resources declaratively with Terraform, Pulumi, and CloudFormation."
  }
]

export function AboutSection() {
  return (
    <section id="about" className="px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">About</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Bridging development and operations
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over 5 years of experience in software engineering and DevOps, I specialize in 
                building and maintaining the infrastructure that powers modern applications.
              </p>
              <p>
                I thrive at the intersection of code and infrastructure, ensuring that applications 
                are not just functional but also scalable, secure, and resilient. My approach combines 
                strong software engineering fundamentals with deep operational expertise.
              </p>
              <p>
                When I am not architecting systems or writing code, you will find me contributing to 
                open-source projects, writing technical blog posts, or exploring new cloud-native 
                technologies.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div 
                key={item.title}
                className="p-5 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group"
              >
                <item.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
