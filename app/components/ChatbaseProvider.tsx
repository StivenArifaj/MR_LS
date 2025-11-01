"use client"

import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../../lib/firebase"

const ChatbaseProvider = () => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const idToken = await user.getIdToken()

          const response = await fetch("/api/getChatbaseToken", {
            headers: {
              Authorization: `Bearer ${idToken}`,
            },
          })

          if (response.ok) {
            const { token } = await response.json()
            if (window.chatbase) {
                window.chatbase("identify", { token })
            }
          } else {
            console.error("Failed to get Chatbase token:", response.statusText)
          }
        } catch (error) {
          console.error("Error identifying user to Chatbase:", error)
        }
      }
    })

    // Cleanup subscription on unmount
    return () => unsubscribe()
  }, [])

  return null // This component does not render anything
}

export default ChatbaseProvider
