import { ArrowRight, Code2, Cloud, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import video from "@/videos/videoVHM.mp4"
import BackgroundVideo from "next-video/background-video"

export function SoftwareHero() {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Lado Izquierdo: Contenido */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Rocket className="h-4 w-4" />
              Building the future of software
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
              We Build & Deploy
              <span className="text-primary"> Applications</span> That Scale
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              From concept to deployment, we create high-performance software solutions. 
              Custom development, cloud infrastructure, and DevOps expertise to accelerate your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="gap-2">
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                View Our Work
              </Button>
            </div>

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">100+</p>
                  <p className="text-sm text-muted-foreground">Apps Built</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">99.9%</p>
                  <p className="text-sm text-muted-foreground">Uptime</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Derecho: Video en el Grid 2 */}
          <div className="relative hidden lg:flex items-center justify-center">

            <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden -mt-24 -translate-y-12 translate-x-30 scale-150">
                

                {/* Contenedor del Video */}
                
              <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden">
              <BackgroundVideo 
                src={video} 
                // mix-blend-screen elimina el fondo negro del video
                // pointer-events-none evita que el video interfiera con clicks
                className="w-full h-full object-contain multiply pointer-events-none"
              />
            </div>
                
              </div>
            
            
         
          </div>
        </div>
      </div>
    </section>
  )
}