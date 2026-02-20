import { Mail, Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const socials = [
  { name: "GitHub", href: "https://github.com", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
]

export function ContactSection() {
  return (
    <section id="contact" className="px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Contact</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {"Let's build something together"}
          </h3>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            I am always interested in hearing about new opportunities, challenging projects, 
            or just connecting with fellow engineers. Feel free to reach out!
          </p>
          
          <Link 
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity mb-12"
          >
            <Mail className="h-5 w-5" />
            hello@example.com
            <ArrowUpRight className="h-4 w-4" />
          </Link>

          <div className="flex items-center justify-center gap-4">
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                className="p-3 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                aria-label={social.name}
              >
                <social.icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
