import { ArrowRight, Code2, Cloud, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"

export function SoftwareHero() {
  const t = useTranslations('Hero');
  
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Lado Izquierdo: Contenido */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Rocket className="h-4 w-4" />
              {t('badge')}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
              {t('titleNormal')}
              <span className="text-primary"> {t('titleHighlight')}</span>
              {t('titleScale')}
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              {t('description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="gap-2">
                {t('btnStart')}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                {t('btnWork')}
              </Button>
            </div>

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">100+ </p>
                  <p className="text-sm text-muted-foreground">{t('statApps')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">99.9%</p>
                  <p className="text-sm text-muted-foreground">{t('statUptime')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Derecho: Video Dinámico (Circular solo en modo oscuro) */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full aspect-square flex items-center justify-center -mt-24 -translate-y-12 translate-x-30 scale-150">
              
              {/* Contenedor del Video: 
                - En modo claro: Cuadrado normal sin bordes redondeados severos.
                - En modo oscuro (dark:): Se vuelve circular (rounded-full), añade overflow-hidden para recortar el video y un sutil borde brillante.
                -Arriba el scale-s150 es el tamaño del circulo del video
              */}
              <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden transition-all duration-500 dark:rounded-full dark:border dark:border-primary/20 dark:shadow-[0_0_50px_rgba(var(--primary),0.1)]">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  // mix-blend-screen quita el fondo negro en modo oscuro. 
                  // Si en modo claro prefieres que no se fusione, puedes usar dark:mix-blend-screen
                  className="w-full h-full object-cover dark:mix-blend-screen pointer-events-none"
                >
                  <source src="/videos/videoVHM.mp4" type="video/mp4" />
                </video>
              </div>
                
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}