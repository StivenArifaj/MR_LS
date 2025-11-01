"use client"

import { School, Building2, Users, ArrowRight } from "lucide-react"

export function BusinessModelSection() {
  return (
    <section id="for-schools" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-[var(--neon-blue)]/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Free for Students.{" "}
            <span className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] bg-clip-text text-transparent">
              Powerful for Everyone.
            </span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto glass rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--neon-green)] to-[var(--neon-blue)] flex items-center justify-center mx-auto mb-6 glow-green">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Students</h3>
              <p className="text-4xl font-bold text-[var(--neon-green)] mb-2">FREE</p>
              <p className="text-muted-foreground">Forever</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-purple)] flex items-center justify-center mx-auto mb-6 glow-blue">
                <School className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Schools</h3>
              <p className="text-lg font-semibold text-[var(--neon-blue)] mb-2">Annual Licensing</p>
              <p className="text-muted-foreground">Curriculum integration</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--neon-purple)] to-[var(--neon-blue)] flex items-center justify-center mx-auto mb-6 glow-purple">
                <Building2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Enterprise</h3>
              <p className="text-lg font-semibold text-[var(--neon-purple)] mb-2">Custom Solutions</p>
              <p className="text-muted-foreground">Branded content</p>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-5 h-5 text-[var(--neon-green)]" />
              <span>Students</span>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-5 h-5 text-[var(--neon-blue)]" />
              <span>Families</span>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <School className="w-5 h-5 text-[var(--neon-purple)]" />
              <span>Schools</span>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <Building2 className="w-5 h-5 text-[var(--neon-green)]" />
              <span>Financial Industry</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
