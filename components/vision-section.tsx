"use client"

import { Sparkles } from "lucide-react"

export function VisionSection() {
  return (
    <section id="vision" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-blue)]/20 via-[var(--neon-purple)]/20 to-[var(--neon-green)]/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.2),transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-purple)] flex items-center justify-center mx-auto glow-blue">
            <Sparkles className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-balance">
            MoneyRush Vision:{" "}
            <span className="bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-purple)] to-[var(--neon-green)] bg-clip-text text-transparent">
              Turn Every Smartphone Into A Learning Machine
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-balance">
            We believe every teenager deserves access to world-class financial education. By combining cutting-edge
            technology with proven learning principles, we're creating a future where financial literacy is universal,
            engaging, and accessible to all.
          </p>

          <div className="pt-8">
            <p className="text-2xl md:text-3xl font-bold text-balance">
              Join us in <span className="text-[var(--neon-green)]">changing financial education forever</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
