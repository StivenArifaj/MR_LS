"use client"

import { UserPlus, User, Briefcase, DollarSign, Bot, Trophy } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up & Personalize",
      description: "Take a quick quiz so the system learns your financial knowledge level",
    },
    {
      icon: User,
      title: "Build Your Character",
      description: "Create your avatar and enter your virtual financial world",
    },
    {
      icon: Briefcase,
      title: "Start Your Journey",
      description: "Get your first job and start earning your virtual salary",
    },
    {
      icon: DollarSign,
      title: "Make Decisions",
      description: "Budget, save, invest, and manage real-world financial scenarios",
    },
    {
      icon: Bot,
      title: "Get Guided Support",
      description: "Your AI advisor provides real-time feedback and personalized tips",
    },
    {
      icon: Trophy,
      title: "Level Up",
      description: "Earn points, age up your character, unlock advanced challenges",
    },
  ]

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[var(--neon-purple)]/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            How MoneyRush{" "}
            <span className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] bg-clip-text text-transparent">
              Works
            </span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative glass rounded-3xl p-8 hover:scale-105 transition-all duration-300 group"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-purple)] flex items-center justify-center text-2xl font-bold glow-blue">
                  {index + 1}
                </div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--neon-blue)]/20 to-[var(--neon-purple)]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8 text-[var(--neon-blue)]" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
