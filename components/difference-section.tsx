"use client"

import { X, Check } from "lucide-react"

export function DifferenceSection() {
  const comparisons = [
    { traditional: "Textbooks & Lectures", moneyrush: "Immersive Simulation" },
    { traditional: "One-size-fits-all", moneyrush: "Fully Personalized" },
    { traditional: "Boring & Passive", moneyrush: "Gamified Missions" },
    { traditional: "Theory Only", moneyrush: "Real-world Practice" },
    { traditional: "No Feedback", moneyrush: "AI-guided Support" },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[var(--neon-purple)]/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Why MoneyRush{" "}
            <span className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] bg-clip-text text-transparent">
              Stands Out
            </span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto glass rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-destructive flex items-center gap-2">
                <X className="w-6 h-6" />
                Traditional Methods
              </h3>
              <div className="space-y-4">
                {comparisons.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-destructive/10">
                    <X className="w-5 h-5 text-destructive flex-shrink-0" />
                    <span className="text-muted-foreground">{item.traditional}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-[var(--neon-green)] flex items-center gap-2">
                <Check className="w-6 h-6" />
                MoneyRush
              </h3>
              <div className="space-y-4">
                {comparisons.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-[var(--neon-green)]/10">
                    <Check className="w-5 h-5 text-[var(--neon-green)] flex-shrink-0" />
                    <span className="font-semibold">{item.moneyrush}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[var(--neon-blue)]/10 to-[var(--neon-purple)]/10 border border-[var(--neon-blue)]/30">
            <p className="text-xl font-semibold text-center text-balance">
              The only platform that simulates an <span className="text-[var(--neon-blue)]">ENTIRE financial life</span>{" "}
              — not just budgeting or saving
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
