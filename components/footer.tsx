"use client"

import Link from "next/link"
import { Zap, Mail, Github, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-[var(--neon-blue)]/5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-purple)] flex items-center justify-center glow-blue transition-all group-hover:scale-110">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] bg-clip-text text-transparent">
                MoneyRush
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Changing financial education forever through immersive, gamified learning. Turn every smartphone into a
              powerful learning machine.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="outline" className="hover:border-[var(--neon-blue)] bg-transparent">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="outline" className="hover:border-[var(--neon-blue)] bg-transparent">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="outline" className="hover:border-[var(--neon-blue)] bg-transparent">
                <Github className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#for-schools" className="text-muted-foreground hover:text-foreground transition-colors">
                  For Schools
                </Link>
              </li>
              <li>
                <Link href="#for-schools" className="text-muted-foreground hover:text-foreground transition-colors">
                  For Banks
                </Link>
              </li>
              <li>
                <Link href="#for-schools" className="text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="glass rounded-2xl p-8 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <Mail className="w-8 h-8 text-[var(--neon-blue)] mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">Get financial literacy tips and product updates</p>
            <div className="flex gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="glass border-border/50 focus:border-[var(--neon-blue)]"
              />
              <Button className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] glow-blue">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center text-muted-foreground text-sm">
          <p>© 2025 MoneyRush FinCity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
