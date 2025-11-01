"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Zap, Eye, EyeOff, Check, ArrowLeft, Upload, X } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [accountType, setAccountType] = useState("student")
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setUploadedFile(file)
    }
  }

  const removeFile = () => {
    setUploadedFile(null)
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Side - Marketing */}
      <div className="hidden lg:flex flex-col justify-center p-12 bg-gradient-to-br from-[var(--neon-blue)]/20 via-[var(--neon-purple)]/20 to-[var(--neon-green)]/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.3),transparent_70%)]" />
        <div className="relative z-10 max-w-lg">
          <Link
            href="/"
            className="inline-flex items-center gap-2 mb-8 text-foreground/80 hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>

          <Link href="/" className="flex items-center gap-2 mb-12 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-purple)] flex items-center justify-center glow-blue transition-all group-hover:scale-110">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] bg-clip-text text-transparent">
              MoneyRush
            </span>
          </Link>
          <h1 className="text-5xl font-bold mb-6 text-balance">
            Start Your{" "}
            <span className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] bg-clip-text text-transparent">
              Financial Journey
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Join thousands of teens learning real money skills through an unforgettable game.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[var(--neon-green)]/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-[var(--neon-green)]" />
              </div>
              <span className="text-muted-foreground">100% Free Forever</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[var(--neon-green)]/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-[var(--neon-green)]" />
              </div>
              <span className="text-muted-foreground">No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[var(--neon-green)]/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-[var(--neon-green)]" />
              </div>
              <span className="text-muted-foreground">Start Learning in 2 Minutes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex items-center justify-center p-8 overflow-y-auto max-h-screen">
        <div className="w-full max-w-md space-y-8 py-8">
          <div className="lg:hidden">
            <Link
              href="/"
              className="inline-flex items-center gap-2 mb-6 text-foreground/80 hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>

            <div className="text-center mb-8">
              <Link href="/" className="inline-flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-purple)] flex items-center justify-center glow-blue">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] bg-clip-text text-transparent">
                  MoneyRush
                </span>
              </Link>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center gap-2">
            {[1, 2].map((s) => (
              <div
                key={s}
                className={`h-2 rounded-full transition-all ${
                  s === step ? "w-12 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)]" : "w-8 bg-muted"
                }`}
              />
            ))}
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-2">Create Your Account</h2>
            <p className="text-muted-foreground">{step === 1 ? "Choose your account type" : "Enter your details"}</p>
          </div>

          {step === 1 && (
            <form className="space-y-6">
              <div className="space-y-4">
                <Label>I am a...</Label>
                <RadioGroup value={accountType} onValueChange={setAccountType} className="space-y-3">
                  <div className="glass rounded-xl p-4 cursor-pointer hover:border-[var(--neon-blue)] border border-transparent transition-colors">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="student" id="student" />
                      <Label htmlFor="student" className="cursor-pointer flex-1">
                        <div className="font-semibold">Student</div>
                        <div className="text-sm text-muted-foreground">Learn financial skills through gaming</div>
                      </Label>
                    </div>
                  </div>
                  <div className="glass rounded-xl p-4 cursor-pointer hover:border-[var(--neon-blue)] border border-transparent transition-colors">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="parent" id="parent" />
                      <Label htmlFor="parent" className="cursor-pointer flex-1">
                        <div className="font-semibold">Parent</div>
                        <div className="text-sm text-muted-foreground">Monitor my child's progress</div>
                      </Label>
                    </div>
                  </div>
                  <div className="glass rounded-xl p-4 cursor-pointer hover:border-[var(--neon-blue)] border border-transparent transition-colors">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="teacher" id="teacher" />
                      <Label htmlFor="teacher" className="cursor-pointer flex-1">
                        <div className="font-semibold">Teacher</div>
                        <div className="text-sm text-muted-foreground">Teach financial literacy</div>
                      </Label>
                    </div>
                  </div>
                  <div className="glass rounded-xl p-4 cursor-pointer hover:border-[var(--neon-blue)] border border-transparent transition-colors">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="institution" id="institution" />
                      <Label htmlFor="institution" className="cursor-pointer flex-1">
                        <div className="font-semibold">School/Institution</div>
                        <div className="text-sm text-muted-foreground">Integrate into curriculum</div>
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              <Button
                type="button"
                onClick={() => setStep(2)}
                className="w-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] glow-blue text-lg py-6"
              >
                Continue
              </Button>
            </form>
          )}

          {step === 2 && accountType === "student" && (
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="glass border-border/50 focus:border-[var(--neon-blue)]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="glass border-border/50 focus:border-[var(--neon-blue)]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="glass border-border/50 focus:border-[var(--neon-blue)] pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="glass border-border/50 focus:border-[var(--neon-blue)] pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth</Label>
                <Input id="dob" type="date" className="glass border-border/50 focus:border-[var(--neon-blue)]" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="country">Country (Optional)</Label>
                <Input
                  id="country"
                  type="text"
                  placeholder="United States"
                  className="glass border-border/50 focus:border-[var(--neon-blue)]"
                />
              </div>

              <div className="flex items-start gap-2">
                <Checkbox id="parentalConsent" className="mt-1" />
                <Label htmlFor="parentalConsent" className="text-sm cursor-pointer leading-relaxed">
                  I'm under 18 and have parental consent
                </Label>
              </div>

              <div className="flex items-start gap-2">
                <Checkbox id="terms" className="mt-1" />
                <Label htmlFor="terms" className="text-sm cursor-pointer leading-relaxed">
                  I agree to the{" "}
                  <Link href="#" className="text-[var(--neon-blue)] hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-[var(--neon-blue)] hover:underline">
                    Privacy Policy
                  </Link>
                </Label>
              </div>

              <div className="flex gap-3">
                <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1">
                  Back
                </Button>
                <Button className="flex-1 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] glow-blue">
                  Create Account
                </Button>
              </div>
            </form>
          )}

          {step === 2 && accountType === "parent" && (
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="glass border-border/50 focus:border-[var(--neon-blue)]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="glass border-border/50 focus:border-[var(--neon-blue)]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="glass border-border/50 focus:border-[var(--neon-blue)] pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="glass border-border/50 focus:border-[var(--neon-blue)] pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="country">Country / Region</Label>
                <Input
                  id="country"
                  type="text"
                  placeholder="United States"
                  className="glass border-border/50 focus:border-[var(--neon-blue)]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="childEmail">Child's Username or Email (Optional)</Label>
                <Input
                  id="childEmail"
                  type="text"
                  placeholder="Link with child account"
                  className="glass border-border/50 focus:border-[var(--neon-blue)]"
                />
                <p className="text-xs text-muted-foreground">You can skip this and link later</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="childAge">Child's Age (Optional)</Label>
                <Input
                  id="childAge"
                  type="number"
                  placeholder="14"
                  className="glass border-border/50 focus:border-[var(--neon-blue)]"
                />
              </div>

              <div className="flex items-start gap-2">
                <Checkbox id="terms" className="mt-1" />
                <Label htmlFor="terms" className="text-sm cursor-pointer leading-relaxed">
                  I agree to the{" "}
                  <Link href="#" className="text-[var(--neon-blue)] hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-[var(--neon-blue)] hover:underline">
                    Privacy Policy
                  </Link>
                </Label>
              </div>

              <div className="flex gap-3">
                <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1">
                  Back
                </Button>
                <Button className="flex-1 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] glow-blue">
                  Create Account
                </Button>
              </div>
            </form>
          )}

          {step === 2 && accountType === "teacher" && (
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Jane Smith"
                  className="glass border-border/50 focus:border-[var(--neon-blue)]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Work Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="teacher@school.edu"
                  className="glass border-border/50 focus:border-[var(--neon-blue)]"
                />
                <p className="text-xs text-muted-foreground">Institutional domain preferred</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="glass border-border/50 focus:border-[var(--neon-blue)] pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="glass border-border/50 focus:border-[var(--neon-blue)] pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="school">School Name</Label>
                <Input
                  id="school"
                  type="text"
                  placeholder="Lincoln High School"
                  className="glass border-border/50 focus:border-[var(--neon-blue)]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select>
                  <SelectTrigger className="glass border-border/50 focus:border-[var(--neon-blue)]">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="teacher">Teacher</SelectItem>
                    <SelectItem value="counselor">Counselor</SelectItem>
                    <SelectItem value="coordinator">Program Coordinator</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  type="text"
                  placeholder="United States"
                  className="glass border-border/50 focus:border-[var(--neon-blue)]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="verification">Proof of Affiliation (Optional)</Label>
                <input
                  type="file"
                  id="verification"
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                {!uploadedFile ? (
                  <label
                    htmlFor="verification"
                    className="glass rounded-xl p-4 border border-border/50 hover:border-[var(--neon-blue)] transition-colors cursor-pointer block"
                  >
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Upload className="w-5 h-5" />
                      <span>Upload school ID or document</span>
                    </div>
                  </label>
                ) : (
                  <div className="glass rounded-xl p-4 border border-[var(--neon-blue)] transition-colors">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 text-sm">
                        <Upload className="w-5 h-5 text-[var(--neon-green)]" />
                        <span className="text-foreground truncate">{uploadedFile.name}</span>
                      </div>
                      <button
                        type="button"
                        onClick={removeFile}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-start gap-2">
                <Checkbox id="terms" className="mt-1" />
                <Label htmlFor="terms" className="text-sm cursor-pointer leading-relaxed">
                  I agree to the{" "}
                  <Link href="#" className="text-[var(--neon-blue)] hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-[var(--neon-blue)] hover:underline">
                    Privacy Policy
                  </Link>
                </Label>
              </div>

              <div className="flex gap-3">
                <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1">
                  Back
                </Button>
                <Button className="flex-1 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] glow-blue">
                  Create Account
                </Button>
              </div>
            </form>
          )}

          {step === 2 && accountType === "institution" && (
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="institutionName">Institution / School Name</Label>
                <Input
                  id="institutionName"
                  type="text"
                  placeholder="Lincoln High School"
                  className="glass border-border/50 focus:border-[var(--neon-blue)]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="institutionType">Type</Label>
                <Select>
                  <SelectTrigger className="glass border-border/50 focus:border-[var(--neon-blue)]">
                    <SelectValue placeholder="Select institution type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="school">School</SelectItem>
                    <SelectItem value="ngo">NGO</SelectItem>
                    <SelectItem value="bank">Bank</SelectItem>
                    <SelectItem value="financial">Financial Institution</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactName">Contact Person Name</Label>
                <Input
                  id="contactName"
                  type="text"
                  placeholder="John Doe"
                  className="glass border-border/50 focus:border-[var(--neon-blue)]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Contact Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="contact@school.edu"
                  className="glass border-border/50 focus:border-[var(--neon-blue)]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="glass border-border/50 focus:border-[var(--neon-blue)]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Country / City</Label>
                <Input
                  id="location"
                  type="text"
                  placeholder="New York, USA"
                  className="glass border-border/50 focus:border-[var(--neon-blue)]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Website (Optional)</Label>
                <Input
                  id="website"
                  type="url"
                  placeholder="https://school.edu"
                  className="glass border-border/50 focus:border-[var(--neon-blue)]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Admin Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="glass border-border/50 focus:border-[var(--neon-blue)] pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="glass border-border/50 focus:border-[var(--neon-blue)] pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="studentCount">Estimated Student Count</Label>
                <Input
                  id="studentCount"
                  type="number"
                  placeholder="500"
                  className="glass border-border/50 focus:border-[var(--neon-blue)]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="partnershipModel">Preferred Partnership Model</Label>
                <Select>
                  <SelectTrigger className="glass border-border/50 focus:border-[var(--neon-blue)]">
                    <SelectValue placeholder="Select partnership type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="demo">Demo</SelectItem>
                    <SelectItem value="license">License</SelectItem>
                    <SelectItem value="collaboration">Collaboration</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-start gap-2">
                <Checkbox id="terms" className="mt-1" />
                <Label htmlFor="terms" className="text-sm cursor-pointer leading-relaxed">
                  I agree to the{" "}
                  <Link href="#" className="text-[var(--neon-blue)] hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-[var(--neon-blue)] hover:underline">
                    Privacy Policy
                  </Link>
                </Label>
              </div>

              <div className="flex gap-3">
                <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1">
                  Back
                </Button>
                <Button className="flex-1 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] glow-blue">
                  Create Account
                </Button>
              </div>
            </form>
          )}

          <div className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-[var(--neon-blue)] hover:underline font-semibold">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
