"use client"

import { Github, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-background border-t border-white/10">

      {/* Top animated glow */}
      <div className="absolute inset-x-0 -top-40 h-72 bg-gradient-to-r from-primary/20 via-purple-500/20 to-cyan-500/20 blur-3xl animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14 text-center md:text-left">

          {/* BRAND */}
          <div className="space-y-5">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg shadow-primary/30">
                <span className="text-primary-foreground font-extrabold text-xl">
                  C
                </span>
              </div>
              <span className="text-xl font-bold tracking-wide">
                Career<span className="text-primary">Hub</span>
              </span>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto md:mx-0">
              Building careers, unlocking opportunities, and shaping the future
              of ambitious minds.
            </p>
          </div>

          <FooterColumn
            title="Opportunities"
            links={[
              ["Jobs", "/job"],
              ["Scholarships", "/scholarship"],
              ["Internships", "/internship"],
            ]}
          />

          <FooterColumn
            title="Resources"
            links={[
              ["Career Blog", "/career-blog"],
              ["Resume Tips", "/resume-tips"],
              ["Interview Prep", "/interview-prep"],
            ]}
          />

          <FooterColumn
            title="Legal"
            links={[
              ["Privacy Policy", "/privacy"],
              ["Terms & Conditions", "/terms"],
              ["Contact", "/contact"],
            ]}
          />
        </div>

        {/* DIVIDER */}
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* SOCIAL ICONS — LEFT */}
        <div className="mt-8 flex items-center justify-start">
          <div className="flex gap-6">
            <SocialIcon icon={<Twitter className="w-5 h-5" />} />
            <SocialIcon
              href="https://www.linkedin.com/in/mansi-singhal-0a5580296/"
              icon={<Linkedin className="w-5 h-5" />}
            />
            <SocialIcon
              href="https://github.com/mansi066"
              icon={<Github className="w-5 h-5" />}
            />
          </div>
        </div>

        {/* BOTTOM COPYRIGHT LINE */}
        <div className="mt-6 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-muted-foreground tracking-wide">
            © {new Date().getFullYear()} CareerHub. Crafted with ❤️ for ambitious minds.
          </p>
        </div>
      </div>
    </footer>
  )
}

/* ------------------ COMPONENTS ------------------ */

function FooterColumn({ title, links }: any) {
  return (
    <div>
      <h4 className="mb-5 font-semibold tracking-wide text-foreground">
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map(([label, href]: any) => (
          <li key={label}>
            <a
              href={href}
              className="inline-block text-sm text-muted-foreground hover:text-primary transition-all duration-200 hover:translate-x-1"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SocialIcon({ icon, href = "#" }: any) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative"
    >
      <div className="absolute inset-0 rounded-full bg-primary/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative p-3 rounded-full border border-white/10 bg-card/60 backdrop-blur-md text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all">
        {icon}
      </div>
    </a>
  )
}
