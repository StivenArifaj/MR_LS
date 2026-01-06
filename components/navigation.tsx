"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Zap, LogOut } from "lucide-react"
import { auth } from "@/lib/firebase"
import { onAuthStateChanged, signOut } from "firebase/auth"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true)
        setUserEmail(user.email)
      } else {
        setIsLoggedIn(false)
        setUserEmail(null)
      }
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      unsubscribe()
    }
  }, [])

  const handleLogout = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error("Error signing out: ", error)
    }
  }

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "For Schools", href: "#for-schools" },
    { label: "About", href: "#vision" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass py-3" : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-purple)] flex items-center justify-center glow-blue transition-all group-hover:scale-110">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] bg-clip-text text-transparent">
            MoneyRush
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {isLoggedIn && userEmail ? (
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-3 glass rounded-full px-4 py-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-purple)] flex items-center justify-center">
                <span className="text-sm font-bold text-white">{userEmail.charAt(0).toUpperCase()}</span>
              </div>
              <span className="text-sm font-medium">{userEmail}</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="border-border/50 hover:border-[var(--neon-blue)] bg-transparent"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              asChild
              className="border-border/50 hover:border-[var(--neon-green)] bg-transparent"
            >
              <Link href="/demo">Schedule Demo</Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-border/50 hover:border-[var(--neon-blue)] bg-transparent"
            >
              <Link href="/login">Login</Link>
            </Button>
            <Button
              asChild
              className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] glow-blue hover:opacity-90"
            >
              <Link href="/register">Get Started Free</Link>
            </Button>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass mt-4 mx-4 rounded-2xl p-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 space-y-2">
            {isLoggedIn && userEmail ? (
              <>
                <div className="glass rounded-lg p-3 mb-2">
                  <p className="text-sm font-medium">{userEmail}</p>
                </div>
                <Button
                  onClick={() => {
                    handleLogout()
                    setIsMobileMenuOpen(false)
                  }}
                  className="w-full"
                  variant="outline"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" asChild className="w-full bg-transparent border-[var(--neon-green)]/50">
                  <Link href="/demo">Schedule Demo</Link>
                </Button>
                <Button variant="outline" asChild className="w-full bg-transparent">
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild className="w-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)]">
                  <Link href="/register">Get Started Free</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
