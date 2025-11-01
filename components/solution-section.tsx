"use client"

import { useState } from "react"
import { Sparkles, Brain, TrendingUp, Users, ChevronLeft, ChevronRight } from "lucide-react"

export function SolutionSection() {
  const [currentScreenshot, setCurrentScreenshot] = useState(0)

  const features = [
    {
      icon: Users,
      title: "Build Your Avatar",
      description: "Create a virtual version of yourself and enter your financial world",
    },
    {
      icon: TrendingUp,
      title: "Real Financial Scenarios",
      description: "Earn salary, manage expenses, invest in stocks and real estate",
    },
    {
      icon: Brain,
      title: "AI-Powered Advisor",
      description: "Get personalized guidance every step of your financial journey",
    },
    {
      icon: Sparkles,
      title: "Adaptive Learning",
      description: "Quiz-based system that personalizes to your knowledge level",
    },
  ]

  const screenshots = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20200124-DzSNIrlOanLfqOsrteLE8AjwqVEpfV.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20200107-df8SzVVa3jkQcKrFvK8L5KQdNusXhT.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20200057-xjDYAETncMBtkIo2AIqRJ13kJPnRIj.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20200134-olldsY5sp6NjhXogFVsAURTla2xG0B.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20200143-DRl0LSvKioYMDDJa1kdHv7XYJQYRCz.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20200115-gQXcoJlmSGdOdQHgpHivDgfzXI4B99.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20195952-oPs7I3R1cfPW0xOHn5bHQu3EokUGFR.png",
  ]

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => (prev + 1) % screenshots.length)
  }

  const prevScreenshot = () => {
    setCurrentScreenshot((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  return (
    <section id="solution" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-blue)]/10 via-background to-[var(--neon-green)]/10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Meet{" "}
            <span className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] bg-clip-text text-transparent">
              MoneyRush
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Your Real-Life Financial Simulator
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {features.map((feature, index) => (
            <div key={index} className="glass rounded-3xl p-6 hover:scale-105 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-purple)] flex items-center justify-center mb-4 glow-blue group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="glass rounded-3xl p-8 md:p-12 max-w-5xl mx-auto">
          <div className="relative">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-[var(--neon-blue)]/20 via-[var(--neon-purple)]/20 to-[var(--neon-green)]/20 flex items-center justify-center relative overflow-hidden">
              <img
                src={screenshots[currentScreenshot] || "/placeholder.svg"}
                alt={`App Screenshot ${currentScreenshot + 1}`}
                className="w-full h-full object-contain rounded-2xl transition-all duration-300"
              />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevScreenshot}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 glass rounded-full p-2 hover:bg-[var(--neon-blue)]/20 transition-all"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextScreenshot}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 glass rounded-full p-2 hover:bg-[var(--neon-blue)]/20 transition-all"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicator Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentScreenshot(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentScreenshot ? "bg-[var(--neon-blue)] w-8" : "bg-muted-foreground"
                  }`}
                  aria-label={`Go to screenshot ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <p className="text-center text-xl font-semibold mt-8 text-muted-foreground">
            Not just an app — it's a <span className="text-foreground">complete financial life simulator</span>
          </p>
        </div>
      </div>
    </section>
  )
}
