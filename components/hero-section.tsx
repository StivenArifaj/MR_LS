"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Play, ChevronDown, TrendingUp, Wallet, Target } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-[var(--neon-blue)]/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-[var(--neon-blue)]/20 blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-[var(--neon-purple)]/20 blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-[var(--neon-green)]/20 blur-xl animate-pulse delay-500" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Floating Stats */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="glass rounded-2xl px-6 py-3 flex items-center gap-2 animate-fade-in">
              <TrendingUp className="w-5 h-5 text-[var(--neon-green)]" />
              <span className="text-sm text-muted-foreground">
                Only <span className="text-foreground font-bold">1 in 2</span> teens are financially literate
              </span>
            </div>
            <div className="glass rounded-2xl px-6 py-3 flex items-center gap-2 animate-fade-in delay-200">
              <Wallet className="w-5 h-5 text-[var(--neon-blue)]" />
              <span className="text-sm text-muted-foreground">
                <span className="text-foreground font-bold">€160B</span> EdTech market
              </span>
            </div>
            <div className="glass rounded-2xl px-6 py-3 flex items-center gap-2 animate-fade-in delay-300">
              <Target className="w-5 h-5 text-[var(--neon-purple)]" />
              <span className="text-sm text-muted-foreground">
                <span className="text-foreground font-bold">95%</span> of teens use smartphones
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight animate-fade-in-up text-balance">
            Change Financial
            <br />
            <span className="bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-purple)] to-[var(--neon-green)] bg-clip-text text-transparent">
              Education Forever
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up delay-200 text-balance">
            Where teens learn real money skills through an unforgettable game. Build. Earn. Invest. Grow.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] glow-blue text-lg px-8 py-6 hover:opacity-90"
            >
              <Link href="/register">Start Learning Free</Link>
            </Button>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border/50 hover:border-[var(--neon-blue)] text-lg px-8 py-6 group bg-transparent"
                >
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-4xl p-0 bg-transparent border-0">
                  <video className="w-full rounded-lg" controls autoPlay>
                    <source src="/20250611131857.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
              </DialogContent>
            </Dialog>

          </div>

          {/* Hero Visual with Phoenix Image */}
          <div className="mt-16 animate-fade-in-up delay-500">
            <div className="glass rounded-3xl p-8 max-w-4xl mx-auto">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-[var(--neon-blue)]/20 via-[var(--neon-purple)]/20 to-[var(--neon-green)]/20 flex items-center justify-center relative overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Phoenix_10_A_futuristic_colorful_city_made_of_coins_and_money_0-vXPIHWmMNP4UIWA5h51RmYef1BI5SL.jpg"
                  alt="MoneyRush FinCity - Futuristic Financial World"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </div>
    </section>
  )
}
