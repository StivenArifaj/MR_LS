"use client"
import { TrendingUp, Users, Smartphone, BarChart3 } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: TrendingUp,
      value: "50",
      suffix: "%+",
      label: "of teens prefer gamified learning",
    },
    {
      icon: BarChart3,
      value: "160",
      suffix: "B+",
      prefix: "€",
      label: "EdTech market size",
    },
    {
      icon: Smartphone,
      value: "95",
      suffix: "%",
      label: "of teens use smartphones daily",
    },
    {
      icon: Users,
      value: "2",
      suffix: "x",
      label: "market growth expected by 2030",
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-blue)]/10 via-background to-[var(--neon-green)]/10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-purple)] flex items-center justify-center mx-auto mb-6 glow-blue group-hover:scale-110 transition-transform">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] bg-clip-text text-transparent">
                {stat.prefix}
                {stat.value}
                {stat.suffix}
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
