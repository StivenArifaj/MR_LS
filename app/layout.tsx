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
  title: "MoneyRush - Change Financial Education Forever",
  description:
    "Turn every smartphone into a powerful learning machine. Where teens learn real money skills through an unforgettable game.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} ${spaceGrotesk.variable} font-sans antialiased`}>
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
