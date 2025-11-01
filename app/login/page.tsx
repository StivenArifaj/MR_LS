"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Zap, Eye, EyeOff, ArrowLeft } from "lucide-react"
import { auth } from "@/lib/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            Welcome Back to Your{" "}
            <span className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] bg-clip-text text-transparent">
              Financial Journey
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Continue building your financial future. Your virtual world is waiting.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
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

          <div>
            <h2 className="text-3xl font-bold mb-2">Login to Your Account</h2>
            <p className="text-muted-foreground">Enter your credentials to continue</p>
          </div>
          
          {error && <p className="text-red-500 text-center font-medium">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email / Username</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm cursor-pointer">
                  Remember me
                </Label>
              </div>
              <Link href="#" className="text-sm text-[var(--neon-blue)] hover:underline">
                Forgot password?
              </Link>
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] glow-blue text-lg py-6">
              {isSubmitting ? 'Logging In...' : 'Login'}
            </Button>
          </form>

          <div className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/register" className="text-[var(--neon-blue)] hover:underline font-semibold">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
