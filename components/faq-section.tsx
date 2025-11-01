"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "How is MoneyRush different from other finance apps?",
      answer:
        "MoneyRush is the only platform that simulates an ENTIRE financial life - not just budgeting or saving. You build a character, earn salaries, invest in stocks and real estate, and make real financial decisions with personalized AI guidance.",
    },
    {
      question: "Is it really free for students?",
      answer:
        "Yes! MoneyRush is completely free for all students forever. We believe financial literacy should be accessible to everyone, regardless of their economic background.",
    },
    {
      question: "How does the personalization work?",
      answer:
        "When you sign up, you take a quick quiz that assesses your current financial knowledge. Our AI then creates a personalized learning path that adapts to your level, ensuring you're always challenged but never overwhelmed.",
    },
    {
      question: "What age group is this for?",
      answer:
        "MoneyRush is designed primarily for teenagers aged 13-18, but it's valuable for anyone looking to improve their financial literacy in an engaging, gamified way.",
    },
    {
      question: "How do schools integrate MoneyRush?",
      answer:
        "Schools can license MoneyRush for curriculum integration. Teachers get access to a dashboard where they can track student progress, assign missions, and view analytics. It works as a perfect supplement to traditional finance classes.",
    },
    {
      question: "Is student data safe and private?",
      answer:
        "Absolutely. We take privacy seriously and comply with all data protection regulations. Student data is encrypted, never sold, and only used to improve the learning experience.",
    },
    {
      question: "Can parents track their child's progress?",
      answer:
        "Yes! Parents can create a free account to monitor their child's learning journey, view progress reports, and see detailed insights into their financial literacy development.",
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[var(--neon-purple)]/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto glass rounded-3xl p-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                <AccordionTrigger className="text-left hover:text-[var(--neon-blue)] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
