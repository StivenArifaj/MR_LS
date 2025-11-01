"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"

export function FinalCTASection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-blue)]/20 via-[var(--neon-purple)]/20 to-[var(--neon-green)]/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.3),transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3">
            <Sparkles className="w-5 h-5 text-[var(--neon-green)]" />
            <span className="text-sm font-semibold">Join thousands of teens already learning</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance">
            Ready to Change How You{" "}
            <span className="bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-purple)] to-[var(--neon-green)] bg-clip-text text-transparent">
              Think About Money?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground text-balance">
            Start your financial journey today. It's free, fun, and will change your life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] glow-blue text-lg px-10 py-7 hover:opacity-90 group"
            >
              <Link href="/register">
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-border/50 hover:border-[var(--neon-blue)] text-lg px-10 py-7 bg-transparent"
            >
              <Link href="/demo">Schedule School Demo</Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 pt-8 flex-wrap">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-[var(--neon-green)]" />
              <span>100% Free for Students</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-[var(--neon-blue)]" />
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-[var(--neon-purple)]" />
              <span>Start Learning in 2 Minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
