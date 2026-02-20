import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function TravelHero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <Image
        src="/hero-bg.jpg"
        alt="Luxury desert landscape"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-6">
          Luxury Travel Experiences
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground text-balance">
          Discover the Wonders of the Middle East
        </h1>
        <p className="text-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Experience unparalleled luxury in Dubai, Qatar, Egypt and beyond. 
          Curated journeys crafted for the discerning traveler.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base">
            Explore Destinations
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-base bg-transparent">
            View Packages
          </Button>
        </div>
      </div>

      <a 
        href="#destinations" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-bounce"
        aria-label="Scroll to destinations"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  )
}
