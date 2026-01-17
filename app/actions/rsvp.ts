"use server"

interface RSVPResponse {
  success: boolean
  message: string
}

export async function submitRSVP(formData: FormData): Promise<RSVPResponse> {
  try {
    const email = formData.get("email")

    // Basic validation
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return {
        success: false,
        message: "Please enter a valid email address.",
      }
    }

    // Env variables
    const apiKey = process.env.AIRTABLE_API_KEY
    const baseId = process.env.AIRTABLE_BASE_ID
    const tableName = process.env.AIRTABLE_TABLE_NAME || "RSVPs"

    if (!apiKey || !baseId) {
      console.error("Missing Airtable credentials")
      return {
        success: false,
        message: "Registration system is currently unavailable. Please try again later.",
      }
    }

    const response = await fetch(
      `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                Email: email,
                Status: "Pending",
                "Submitted At": new Date().toISOString(),
              },
            },
          ],
        }),
      }
    )

    if (!response.ok) {
      const error = await response.text()
      console.error("Airtable API error:", error)

      return {
        success: false,
        message: "Failed to submit registration. Please try again.",
      }
    }

    return {
      success: true,
      message: "Thank you! Your RSVP has been confirmed.",
    }
  } catch (error) {
    console.error("RSVP submission failed:", error)

    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    }
  }
}
