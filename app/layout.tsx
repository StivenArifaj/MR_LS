import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import ChatbaseProvider from "./components/ChatbaseProvider"
import Script from 'next/script'

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://moneyrush.vercel.app"),
  title: {
    default: "MoneyRush: The #1 Financial Literacy Game for Teens",
    template: "%s | MoneyRush",
  },
  description:
    "Play MoneyRush, the ultimate financial education game where students learn to earn, invest, and grow wealth. Master money skills in a futuristic city. Join free.",
  keywords: [
    "MoneyRush",
    "financial literacy game",
    "money game for teens",
    "financial education app",
    "stock market simulator for students",
    "personal finance game",
  ],
  authors: [{ name: "MoneyRush Team" }],
  creator: "MoneyRush",
  publisher: "MoneyRush",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://moneyrush.vercel.app",
    title: "MoneyRush: The #1 Financial Literacy Game for Teens",
    description:
      "Play MoneyRush, the ultimate financial education game where students learn to earn, invest, and grow wealth. Master money skills in a futuristic city.",
    siteName: "MoneyRush",
    // images: [
    //   {
    //     url: "/og-image.jpg", // We should create this later
    //     width: 1200,
    //     height: 630,
    //     alt: "MoneyRush Financial Education Game",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MoneyRush: The #1 Financial Literacy Game for Teens",
    description:
      "Play MoneyRush, the ultimate financial education game where students learn to earn, invest, and grow wealth.",
    creator: "@MoneyRushApp", // Placeholder
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MoneyRush",
  applicationCategory: "EducationalGame",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "MoneyRush is a revolutionary financial literacy game that helps teens learn real-world money skills through immersive gameplay.",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "1250",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} ${spaceGrotesk.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ChatbaseProvider />
        {children}
        <Analytics />
        <Script id="chatbase-embed">
          {`
            (function(){
              if(!window.chatbase||window.chatbase("getState")!=="initialized"){
                window.chatbase=(...arguments)=>{
                  if(!window.chatbase.q){window.chatbase.q=[]}
                  window.chatbase.q.push(arguments)
                };
                window.chatbase=new Proxy(window.chatbase,{
                  get(target,prop){
                    if(prop==="q"){
                      return target.q
                    }
                    return(...args)=>target(prop,...args)
                  }
                })
              }
              const onLoad=function(){
                const script=document.createElement("script");
                script.src="https://www.chatbase.co/embed.min.js";
                script.id="h8ALvz3ayeQd1ZVP1DkCa";
                script.domain="www.chatbase.co";
                document.body.appendChild(script)
              };
              if(document.readyState==="complete"){
                onLoad()
              }else{
                window.addEventListener("load",onLoad)
              }
            })();
          `}
        </Script>
      </body>
    </html>
  )
}
