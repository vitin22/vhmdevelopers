import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const highlights = [
  "Experienced team of senior developers",
  "Agile methodology for faster delivery",
  "Transparent communication throughout",
  "Post-launch support and maintenance",
  "Security-first development approach",
  "Scalable cloud-native architecture",
]

export function SoftwareAbout() {
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
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Vexel</h3>
                  <p className="text-muted-foreground">Software Development</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4 rounded-lg bg-secondary/50">
                  <p className="text-3xl font-bold text-primary">8+</p>
                  <p className="text-sm text-muted-foreground">Years</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/50">
                  <p className="text-3xl font-bold text-primary">100+</p>
                  <p className="text-sm text-muted-foreground">Projects</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/50">
                  <p className="text-3xl font-bold text-primary">50+</p>
                  <p className="text-sm text-muted-foreground">Clients</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-primary font-medium mb-3">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Building Software That Powers Your Business
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We are a team of passionate developers, designers, and DevOps engineers dedicated to 
              delivering exceptional software solutions. With years of experience across various 
              industries, we bring expertise and innovation to every project.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our mission is to help businesses leverage technology to achieve their goals. 
              Whether you need a custom application, cloud migration, or complete digital transformation, 
              we have the skills and experience to make it happen.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
