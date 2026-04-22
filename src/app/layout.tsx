import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: {
    default: 'OpenClaw Setup Guide',
    template: '%s | OpenClaw Setup Guide',
  },
  description: 'A beginner\'s guide to running a personal AI agent team on a Raspberry Pi 5.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'OpenClaw Setup Guide',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="openclaw-theme">
          <div className="min-h-screen flex flex-col">
            <SiteHeader />
            <main className="flex-1">
              {children}
            </main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
