"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export function TravelContact() {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">
            Get in Touch
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
            Start Your Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to experience the luxury of the Middle East? Contact our travel 
            experts and let us craft your perfect journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                <p className="text-muted-foreground">+1 234 567 890</p>
                <p className="text-muted-foreground">+1 234 567 891</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                <p className="text-muted-foreground">info@luxurytravel.com</p>
                <p className="text-muted-foreground">bookings@luxurytravel.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Visit Us</h3>
                <p className="text-muted-foreground">123 Luxury Avenue</p>
                <p className="text-muted-foreground">New York, NY 10001</p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                placeholder="Your Name"
                className="bg-background border-border"
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-background border-border"
              />
            </div>
            <Input
              placeholder="Destination of Interest"
              className="bg-background border-border"
            />
            <Textarea
              placeholder="Tell us about your dream trip..."
              rows={5}
              className="bg-background border-border resize-none"
            />
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6">
              Send Inquiry
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
