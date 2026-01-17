"use client"

import { useState } from "react"
import { Mail } from "lucide-react"
import { submitRSVP } from "@/app/actions/rsvp"

interface RSVPFormProps {
  variant?: "light" | "dark"
}

export function RSVPForm({ variant = "light" }: RSVPFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  async function handleSubmit(formData: FormData) {
    setStatus("loading")
    const result = await submitRSVP(formData)
    setStatus(result.success ? "success" : "error")
    setMessage(result.message)
  }

  const isLight = variant === "light"

  return (
    <div className="w-full">
      <form
        action={handleSubmit}
        className="flex flex-col md:flex-row gap-3"
      >
        {/* Input */}
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
            name="email"
            placeholder="Enter your work email to confirm your attendance"
            className={`flex-1 bg-transparent outline-none text-sm ${
              isLight
                ? "text-gray-700 placeholder:text-gray-400"
                : "text-white placeholder:text-white/50"
            }`}
            required
            disabled={status === "loading" || status === "success"}
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="px-8 py-3 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold rounded-md transition-colors disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {status === "loading" ? "Submitting..." : "RSVP Now"}
        </button>
      </form>

      {message && (
        <p
          className={`mt-2 text-sm ${
            status === "success" ? "text-green-600" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  )
}
