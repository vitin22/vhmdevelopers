"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react" // Importar useState
import { sendEmail } from "@/app/actions" // Importar la acción
import { toast } from "sonner" // Importamos toast
import { useTranslations } from "next-intl"

export function SoftwareContact() {
  const t = useTranslations("Contact")
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
        toast.success(t("toastSuccessTitle"), {
          description: t("toastSuccessDesc"),
        })
        // Opcional: limpiar el formulario
        const form = document.querySelector('form') as HTMLFormElement
        form?.reset()
      } else {
        toast.error(t("toastErrorTitle"), {
          description: t("toastErrorDesc"),
        })
      }
    } catch (error) {
      toast.error(t("toastCatchTitle"), {
        description: t("toastCatchDesc"),
      })
    } finally {
      setIsPending(false)
    }
  }
 return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3">{t("badge")}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {t("mainTitle")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("mainSubtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <form action={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">{t("labelName")}</label>
                      <Input name="name" id="name" required placeholder={t("placeholderName")} className="bg-background" />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">{t("labelEmail")}</label>
                      <Input 
                        name="email" 
                        id="email" 
                        type="email" 
                        required 
                        placeholder={t("placeholderEmail")}
                        className={`bg-background transition-colors ${
                          email && !validateEmail(email) ? 'border-red-500 focus-visible:ring-red-500' : ''
                        }`}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {email && !validateEmail(email) && (
                        <p className="text-[10px] text-red-500 mt-1">{t("errorEmail")}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">{t("labelSubject")}</label>
                    <Input name="subject" id="subject" required placeholder={t("placeholderSubject")} className="bg-background" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">{t("labelMessage")}</label>
                    <Textarea name="message" id="message" required placeholder={t("placeholderMessage")} rows={5} className="bg-background" />
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto" disabled={isButtonDisabled}>
                    {isPending ? t("btnSending") : t("btnSend")}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Tarjetas laterales de información de contacto */}
          <div className="space-y-4">
            <Card className="bg-card border-border">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">{t("infoEmail")}</h3>
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
                  <h3 className="font-medium text-foreground mb-1">{t("infoPhone")}</h3>
                  <p className="text-sm text-muted-foreground">+34 641 91 29 15</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">{t("infoLocation")}</h3>
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
