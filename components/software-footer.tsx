import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export function SoftwareFooter() {
  return (
    <footer className="bg-foreground text-background py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/company-logo.png"
                alt="Vexel Logo"
                width={40}
                height={40}
                className="w-10 h-10 brightness-0 invert"
              />
              <span className="text-xl font-semibold">Vexel</span>
            </Link>
            <p className="text-background/70 max-w-md mb-6 leading-relaxed">
              Building high-quality software solutions for modern businesses. 
              From custom development to cloud deployment, we've got you covered.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-background/70">
              <li><Link href="#" className="hover:text-background transition-colors">Custom Development</Link></li>
              <li><Link href="#" className="hover:text-background transition-colors">Mobile Apps</Link></li>
              <li><Link href="#" className="hover:text-background transition-colors">Web Applications</Link></li>
              <li><Link href="#" className="hover:text-background transition-colors">Cloud Deployment</Link></li>
              <li><Link href="#" className="hover:text-background transition-colors">DevOps</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-background/70">
              <li><Link href="#about" className="hover:text-background transition-colors">About Us</Link></li>
              <li><Link href="#work" className="hover:text-background transition-colors">Our Work</Link></li>
              <li><Link href="#" className="hover:text-background transition-colors">Careers</Link></li>
              <li><Link href="#contact" className="hover:text-background transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            {new Date().getFullYear()} Vexel. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/60">
            <Link href="#" className="hover:text-background transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-background transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
