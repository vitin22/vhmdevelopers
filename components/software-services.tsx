import { Code2, Cloud, Server, Smartphone, Globe, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Code2,
    title: "Custom Development",
    description: "Tailored software solutions built from the ground up to meet your specific business needs and requirements.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps for iOS and Android with seamless user experiences.",
  },
  {
    icon: Globe,
    title: "Web Applications",
    description: "Modern, responsive web applications using cutting-edge frameworks and technologies.",
  },
  {
    icon: Cloud,
    title: "Cloud Deployment",
    description: "Scalable cloud infrastructure on AWS, Azure, or GCP with automated deployment pipelines.",
  },
  {
    icon: Server,
    title: "DevOps & CI/CD",
    description: "Streamlined development workflows with continuous integration and deployment automation.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security practices and compliance with industry standards.",
  },
]

export function SoftwareServices() {
  return (
    <section id="services" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Everything You Need to Build & Ship
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From initial concept to production deployment, we provide end-to-end software development services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="bg-card border-border hover:border-primary/50 transition-colors group">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
