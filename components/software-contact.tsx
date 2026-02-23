"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react" // Importar useState
import { sendEmail } from "@/app/actions" // Importar la acción
import { toast } from "sonner" // Importamos toast

export function SoftwareContact() {
  const [isPending, setIsPending] = useState(false)
  const [email, setEmail] = useState("")

  // Función para validar el formato del email
  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  // El botón se desactiva si: está enviando O el email no es válido
  const isButtonDisabled = isPending || !validateEmail(email);

  async function handleSubmit(formData: FormData) {
    setIsPending(true)
    
    try {
      const result = await sendEmail(formData)
      
      if (result.success) {
        toast.success("¡Mensaje enviado!", {
          description: "Nos pondremos en contacto contigo lo antes posible.",
        })
        // Opcional: limpiar el formulario
        const form = document.querySelector('form') as HTMLFormElement
        form?.reset()
      } else {
        toast.error("Error al enviar", {
          description: "Hubo un problema con el servicio de correo. Inténtalo más tarde.",
        })
      }
    } catch (error) {
      toast.error("Error inesperado", {
        description: "Revisa tu conexión a internet.",
      })
    } finally {
      setIsPending(false)
    }
  }
  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3">Contact Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Let's Build Something Great
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to start your project? Get in touch and let's discuss how we can help bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            {/* Usamos action en lugar de onSubmit */}
            <form action={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <Input name="name" id="name" required placeholder="Your name" className="bg-background" />
                </div>
                {/* Campo Email con validación en tiempo real */}
              <div>
                <label htmlFor="email" className="...">Email</label>
                <Input 
                  name="email" 
                  id="email" 
                  type="email" 
                  required 
                  placeholder="you@company.com" 
                  className={`bg-background transition-colors ${
                    email && !validateEmail(email) ? 'border-red-500 focus-visible:ring-red-500' : ''
                  }`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {email && !validateEmail(email) && (
                  <p className="text-[10px] text-red-500 mt-1">Please enter a valid email address.</p>
                )}
              </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <Input name="subject" id="subject" required placeholder="Project inquiry" className="bg-background" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea name="message" id="message" required placeholder="Tell us about your project..." rows={5} className="bg-background" />
              </div>
              <Button type="submit" size="lg" className="w-full md:w-auto" disabled={isButtonDisabled}>
                {isPending ? "Sending..." : "Send Message"}
              </Button>



              
            </form>
          </CardContent>
        </Card>
      </div>

          <div className="space-y-4">
            <Card className="bg-card border-border">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Email</h3>
                  <p className="text-sm text-muted-foreground">vhmdevelopers@gmail.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Phone</h3>
                  <p className="text-sm text-muted-foreground">+34 () 123-4567</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Location</h3>
                  <p className="text-sm text-muted-foreground">Barcelona, ES</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
