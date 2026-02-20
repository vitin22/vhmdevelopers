import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check, Star } from "lucide-react"

const packages = [
  {
    name: "Dubai Luxe",
    duration: "5 Days / 4 Nights",
    price: "$2,499",
    featured: false,
    includes: [
      "5-star hotel accommodation",
      "Private desert safari",
      "Burj Khalifa VIP access",
      "Luxury yacht dinner cruise",
      "Airport transfers",
    ],
  },
  {
    name: "Middle East Grand Tour",
    duration: "12 Days / 11 Nights",
    price: "$6,999",
    featured: true,
    includes: [
      "Dubai, Qatar & Egypt",
      "All luxury accommodations",
      "Private guided tours",
      "Exclusive experiences",
      "Business class flights",
      "24/7 concierge service",
    ],
  },
  {
    name: "Egyptian Discovery",
    duration: "7 Days / 6 Nights",
    price: "$3,299",
    featured: false,
    includes: [
      "5-star Nile cruise",
      "Pyramids private tour",
      "Luxor & Valley of Kings",
      "Hot air balloon ride",
      "All meals included",
    ],
  },
]

export function TravelPackages() {
  return (
    <section id="packages" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">
            Exclusive Packages
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
            Curated Luxury Journeys
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Handcrafted travel experiences designed for those who seek the extraordinary. 
            Every detail perfected for your comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card
              key={pkg.name}
              className={`relative bg-card border-border/50 ${
                pkg.featured ? "ring-2 ring-primary" : ""
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Star className="h-3 w-3 fill-current" /> Most Popular
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">
                  {pkg.duration}
                </p>
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  {pkg.name}
                </h3>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <span className="font-serif text-4xl font-bold text-foreground">
                    {pkg.price}
                  </span>
                  <span className="text-muted-foreground text-sm"> / person</span>
                </div>
                <ul className="space-y-3 text-left">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-foreground/80">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${
                    pkg.featured
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  Book This Package
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
