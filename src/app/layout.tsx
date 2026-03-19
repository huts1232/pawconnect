import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "PawConnect — Find trusted pet care professionals in minutes",
  description: "A comprehensive pet care booking platform that connects pet owners with verified dog walkers, groomers, and pet sitters in their area. Pet owners can ",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className="min-h-screen bg-gray-50 antialiased">{children}</body></html>
}