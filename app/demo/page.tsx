"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Zap, ArrowLeft, CheckCircle2 } from "lucide-react"

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-[var(--neon-blue)]/10 via-background to-[var(--neon-purple)]/10">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--neon-green)]/20 to-[var(--neon-green)]/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-[var(--neon-green)]" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Request Received!</h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Thank you for your interest in MoneyRush. Our team will contact you within 24 hours to schedule your demo.
          </p>
          <Button asChild className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] glow-blue">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--neon-blue)]/10 via-background to-[var(--neon-purple)]/10">
      <div className="container mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-8 text-foreground/80 hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>

        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-purple)] flex items-center justify-center glow-blue">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] bg-clip-text text-transparent">
                MoneyRush
              </span>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Schedule Your{" "}
              <span className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] bg-clip-text text-transparent">
                School Demo
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              See how MoneyRush can transform financial education at your institution
            </p>
          </div>

          <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 md:p-12 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="John Doe"
                  required
                  className="glass border-border/50 focus:border-[var(--neon-blue)]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="schoolName">School / Institution Name *</Label>
                <Input
                  id="schoolName"
                  type="text"
                  placeholder="Lincoln High School"
                  required
                  className="glass border-border/50 focus:border-[var(--neon-blue)]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Role *</Label>
              <Select required>
                <SelectTrigger className="glass border-border/50 focus:border-[var(--neon-blue)]">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="principal">Principal</SelectItem>
                  <SelectItem value="teacher">Teacher</SelectItem>
                  <SelectItem value="coordinator">Coordinator</SelectItem>
                  <SelectItem value="program-manager">Program Manager</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">Work Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@school.edu"
                  required
                  className="glass border-border/50 focus:border-[var(--neon-blue)]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone (Optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="glass border-border/50 focus:border-[var(--neon-blue)]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Country / City *</Label>
              <Input
                id="location"
                type="text"
                placeholder="New York, USA"
                required
                className="glass border-border/50 focus:border-[var(--neon-blue)]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message (Optional)</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your school and what you're looking for..."
                rows={4}
                className="glass border-border/50 focus:border-[var(--neon-blue)] resize-none"
              />
            </div>

            <div className="space-y-3">
              <Label>Preferred Demo Type *</Label>
              <RadioGroup defaultValue="live-call" className="space-y-3">
                <div className="glass rounded-xl p-4 cursor-pointer hover:border-[var(--neon-blue)] border border-transparent transition-colors">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="live-call" id="live-call" />
                    <Label htmlFor="live-call" className="cursor-pointer flex-1">
                      <div className="font-semibold">Live Call</div>
                      <div className="text-sm text-muted-foreground">Schedule a video call with our team</div>
                    </Label>
                  </div>
                </div>
                <div className="glass rounded-xl p-4 cursor-pointer hover:border-[var(--neon-blue)] border border-transparent transition-colors">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="product-tour" id="product-tour" />
                    <Label htmlFor="product-tour" className="cursor-pointer flex-1">
                      <div className="font-semibold">Product Tour</div>
                      <div className="text-sm text-muted-foreground">Self-guided interactive walkthrough</div>
                    </Label>
                  </div>
                </div>
                <div className="glass rounded-xl p-4 cursor-pointer hover:border-[var(--neon-blue)] border border-transparent transition-colors">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="email-info" id="email-info" />
                    <Label htmlFor="email-info" className="cursor-pointer flex-1">
                      <div className="font-semibold">Email Info Packet</div>
                      <div className="text-sm text-muted-foreground">Receive detailed information via email</div>
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] glow-blue text-lg py-6"
            >
              Request Demo
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
