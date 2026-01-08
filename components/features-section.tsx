"use client"

import { useState } from "react"
import { GraduationCap, Users, School, Building2 } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function FeaturesSection() {
  const [activeTab, setActiveTab] = useState("students")

  const features = {
    students: {
      icon: GraduationCap,
      title: "For Students",
      items: [
        "Gamified learning experience that makes finance fun",
        "Real-world simulations: stocks, real estate, budgeting",
        "Personalized AI advisor guiding every decision",
        "Progress tracking and achievement system",
        "Safe, risk-free environment to learn and experiment",
      ],
    },
    parents: {
      icon: Users,
      title: "For Parents",
      items: [
        "Monitor your child's learning progress in real-time",
        "Detailed insights into financial literacy development",
        "Safe and educational environment",
        "Completely free access for families",
        "Complements traditional school education",
      ],
    },
    schools: {
      icon: School,
      title: "For Schools",
      items: [
        "Ready for curriculum integration",
        "Teacher dashboard with student analytics",
        "Track entire class progress and engagement",
        "Engaging supplement to traditional finance classes",
        "Annual licensing with full support",
      ],
    },
    banks: {
      icon: Building2,
      title: "For Banks & Institutions",
      items: [
        "Reach and educate future customers early",
        "Create branded learning missions and content",
        "Sponsored educational content opportunities",
        "Build trust with the next generation",
        "Align with CSR and financial literacy goals",
      ],
    },
  }

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-[var(--neon-blue)]/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Financial Education{" "}
            <span className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-green)] bg-clip-text text-transparent">
              For Everyone
            </span>
          </h2>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 glass p-2 h-auto">
            {Object.entries(features).map(([key, feature]) => (
              <TabsTrigger
                key={key}
                value={key}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[var(--neon-blue)] data-[state=active]:to-[var(--neon-purple)] data-[state=active]:text-white py-3"
              >
                <feature.icon className="w-5 h-5 mr-2" />
                {feature.title.replace("For ", "")}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(features).map(([key, feature]) => (
            <TabsContent key={key} value={key} className="mt-8">
              <div className="glass rounded-3xl p-8 md:p-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-purple)] flex items-center justify-center glow-blue">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold">{feature.title}</h3>
                </div>
                <ul className="space-y-4">
                  {feature.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[var(--neon-green)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-[var(--neon-green)]" />
                      </div>
                      <span className="text-lg text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
