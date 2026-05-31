import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Father's Night 2026 | Celebration of Fathers",
  description: "Father's Night 2026 - A Western-themed celebration honoring fathers at Pentecostal Missionary Church of Christ.",
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#a86f3f',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
