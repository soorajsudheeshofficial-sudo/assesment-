"use client"

import { useState } from "react"
import { Mail } from "lucide-react"

interface RSVPFormProps {
  variant?: "light" | "dark"
}

export function RSVPForm({ variant = "light" }: RSVPFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")
  const [message, setMessage] = useState("")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")

    // Static-safe mock submit
    setTimeout(() => {
      setStatus("success")
      setMessage("Thank you! Your RSVP has been recorded.")
    }, 800)
  }

  const isLight = variant === "light"

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-3"
      >
        <div
          className={`flex-1 flex items-center gap-3 px-4 py-3 rounded-md border ${
            isLight
              ? "bg-white border-gray-200"
              : "bg-white/10 border-white/20 backdrop-blur-sm"
          }`}
        >
          <Mail className={`w-5 h-5 ${isLight ? "text-gray-400" : "text-white/50"}`} />
          <input
            type="email"
            required
            placeholder="Enter your work email to confirm your attendance"
            className={`flex-1 bg-transparent outline-none text-sm ${
              isLight
                ? "text-gray-700 placeholder:text-gray-400"
                : "text-white placeholder:text-white/50"
            }`}
            disabled={status === "loading" || status === "success"}
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="px-8 py-3 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold rounded-md transition-colors disabled:opacity-70"
        >
          {status === "loading" ? "Submitting..." : "RSVP Now"}
        </button>
      </form>

      {message && (
        <p className="mt-2 text-sm text-green-600">{message}</p>
      )}
    </div>
  )
}
