import Image from "next/image"
import { Award, Users, Globe, Shield } from "lucide-react"

const stats = [
  { icon: Users, value: "15,000+", label: "Happy Travelers" },
  { icon: Globe, value: "25+", label: "Destinations" },
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Shield, value: "100%", label: "Secure Booking" },
]

export function TravelAbout() {
  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/dubai.jpg"
                alt="Luxury travel experience"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg hidden md:block">
              <p className="font-serif text-4xl font-bold">10+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </div>

          <div>
            <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">
              About Us
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
              Your Gateway to Luxury Travel
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              For over a decade, we have been crafting extraordinary travel 
              experiences across the Middle East. Our team of expert travel 
              consultants combines local knowledge with world-class service to 
              create journeys that exceed expectations.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              From the golden dunes of Dubai to the ancient wonders of Egypt, 
              we ensure every moment of your journey is nothing short of 
              exceptional. Our partnerships with the finest hotels, airlines, 
              and local guides guarantee an experience that is both authentic 
              and luxurious.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-serif text-2xl font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
