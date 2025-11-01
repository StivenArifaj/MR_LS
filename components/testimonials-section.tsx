"use client"

import type React from "react"

import { useState } from "react"
import { Star, MessageSquarePlus, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function TestimonialsSection() {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [currentFeedback, setCurrentFeedback] = useState(0)

  const [feedbacks, setFeedbacks] = useState([
    {
      name: "Sarah M.",
      role: "Student, Age 16",
      rating: 5,
      quote:
        "MoneyRush made learning about money actually fun! I never thought I'd enjoy budgeting and investing, but the game makes it so engaging.",
    },
    {
      name: "Michael Chen",
      role: "Parent",
      rating: 5,
      quote:
        "Finally, a tool that teaches my kids real financial skills. I can see their progress and they're actually excited to learn about money.",
    },
    {
      name: "Ms. Rodriguez",
      role: "High School Teacher",
      rating: 5,
      quote:
        "My students are more engaged than ever. MoneyRush brings financial literacy to life in a way textbooks never could.",
    },
  ])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newFeedback = {
      name: formData.get("feedbackName") as string,
      role: formData.get("feedbackRole") as string,
      rating: rating,
      quote: formData.get("feedbackComment") as string,
    }
    setFeedbacks([...feedbacks, newFeedback])
    setSubmitted(true)
    setTimeout(() => {
      setIsOpen(false)
      setSubmitted(false)
      setRating(0)
      setCurrentFeedback(feedbacks.length)
    }, 2000)
  }

  const nextFeedback = () => {
    setCurrentFeedback((prev) => (prev + 1) % feedbacks.length)
  }

  const prevFeedback = () => {
    setCurrentFeedback((prev) => (prev - 1 + feedbacks.length) % feedbacks.length)
  }

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[var(--neon-purple)]/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Loved By{" "}
            <span className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] bg-clip-text text-transparent">
              Thousands
            </span>
          </h2>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="mt-4 border-[var(--neon-blue)]/50 hover:border-[var(--neon-blue)] hover:bg-[var(--neon-blue)]/10 bg-transparent"
              >
                <MessageSquarePlus className="w-4 h-4 mr-2" />
                Share Your Feedback
              </Button>
            </DialogTrigger>
            <DialogContent className="glass sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle className="text-2xl">Share Your Experience</DialogTitle>
                <DialogDescription>Help others discover MoneyRush by sharing your feedback</DialogDescription>
              </DialogHeader>
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-[var(--neon-green)]/20 flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 fill-[var(--neon-green)] text-[var(--neon-green)]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">Your feedback has been added to our carousel</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="feedbackName">Name *</Label>
                    <Input
                      id="feedbackName"
                      name="feedbackName"
                      type="text"
                      placeholder="Your name"
                      required
                      className="glass border-border/50 focus:border-[var(--neon-blue)]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="feedbackRole">Role *</Label>
                    <Select required>
                      <SelectTrigger
                        className="glass border-border/50 focus:border-[var(--neon-blue)]"
                        name="feedbackRole"
                      >
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Student">Student</SelectItem>
                        <SelectItem value="Teacher">Teacher</SelectItem>
                        <SelectItem value="Parent">Parent</SelectItem>
                        <SelectItem value="School">School</SelectItem>
                        <SelectItem value="Institution">Institution</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Rating *</Label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="transition-transform hover:scale-110"
                        >
                          <Star
                            className={`w-8 h-8 ${
                              star <= (hoverRating || rating)
                                ? "fill-[var(--neon-green)] text-[var(--neon-green)]"
                                : "text-muted-foreground"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="feedbackComment">Comment *</Label>
                    <Textarea
                      id="feedbackComment"
                      name="feedbackComment"
                      placeholder="Share your experience with MoneyRush..."
                      rows={4}
                      required
                      className="glass border-border/50 focus:border-[var(--neon-blue)] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={rating === 0}
                    className="w-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] glow-blue"
                  >
                    Submit Feedback
                  </Button>
                </form>
              )}
            </DialogContent>
          </Dialog>
        </div>

        <div className="max-w-2xl mx-auto relative">
          <div className="glass rounded-3xl p-8 md:p-12">
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-purple)] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">{feedbacks[currentFeedback].name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-bold">{feedbacks[currentFeedback].name}</h4>
                  <p className="text-sm text-muted-foreground">{feedbacks[currentFeedback].role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-6">
                {Array.from({ length: feedbacks[currentFeedback].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[var(--neon-green)] text-[var(--neon-green)]" />
                ))}
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed italic">
                "{feedbacks[currentFeedback].quote}"
              </p>
            </div>

            {/* Carousel Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevFeedback}
                className="glass rounded-full p-2 hover:bg-[var(--neon-blue)]/20 transition-all"
                aria-label="Previous feedback"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Indicator Dots */}
              <div className="flex gap-2">
                {feedbacks.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFeedback(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentFeedback ? "bg-[var(--neon-blue)] w-6" : "bg-muted-foreground"
                    }`}
                    aria-label={`Go to feedback ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextFeedback}
                className="glass rounded-full p-2 hover:bg-[var(--neon-blue)]/20 transition-all"
                aria-label="Next feedback"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
