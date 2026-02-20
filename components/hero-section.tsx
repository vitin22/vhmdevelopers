"use client"

import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20 relative">
      {/* Video - right side */}
      <div className="absolute top-24 right-6 md:top-28 md:right-12 lg:right-24">
        <div className="h-40 w-40 md:h-56 md:w-56 lg:h-72 lg:w-72 rounded-full overflow-hidden ring-4 ring-primary/30">
          <video
            src="/video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-4xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-3 w-3 rounded-full bg-primary animate-pulse" />
          <span className="text-muted-foreground text-sm font-mono uppercase tracking-widest">
            Available for opportunities
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-6">
          <span className="text-foreground">Developer</span>
          <span className="text-primary"> & </span>
          <span className="text-foreground">DevOps Engineer</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
          I build scalable systems, automate infrastructure, and craft elegant code. 
          Passionate about cloud architecture, CI/CD pipelines, and turning complex 
          problems into simple, maintainable solutions.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          {["TypeScript", "Go", "Python", "Kubernetes", "AWS", "Terraform"].map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1.5 text-sm font-mono bg-secondary text-secondary-foreground rounded-md border border-border"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href="#contact" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            <Mail className="h-4 w-4" />
            Get in touch
          </Link>
          <div className="flex items-center gap-3">
            <Link 
              href="https://github.com" 
              target="_blank"
              className="p-2.5 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link 
              href="https://linkedin.com" 
              target="_blank"
              className="p-2.5 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link 
              href="https://twitter.com" 
              target="_blank"
              className="p-2.5 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

    </section>
  )
}
