"use client"

import { AlertCircle, BookOpen, TrendingDown } from "lucide-react"

export function ProblemSection() {
  const problems = [
    {
      icon: BookOpen,
      title: "Outdated Education",
      stat: "70% of schools",
      description: "Still use textbooks and lectures that don't engage Gen Z learners",
    },
    {
      icon: TrendingDown,
      title: "Unprepared Generation",
      stat: "Less than 50%",
      description: "Of teenagers globally are financially literate despite making daily money decisions",
    },
    {
      icon: AlertCircle,
      title: "Disconnected Methods",
      stat: "Traditional learning",
      description: "Fails to connect with how teens actually learn and interact with technology",
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[var(--neon-purple)]/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            The World Has a{" "}
            <span className="bg-gradient-to-r from-[var(--neon-purple)] to-destructive bg-clip-text text-transparent">
              Money Problem
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div key={index} className="glass rounded-3xl p-8 hover:scale-105 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-destructive/20 to-[var(--neon-purple)]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <problem.icon className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{problem.title}</h3>
              <div className="text-3xl font-bold text-destructive mb-4">{problem.stat}</div>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-2xl md:text-3xl font-semibold text-muted-foreground">
            But the world is ready for <span className="text-[var(--neon-green)]">change...</span>
          </p>
        </div>
      </div>
    </section>
  )
}
