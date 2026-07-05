import type { Metadata } from 'next'
import './globals.css'
import React from 'react'
import { ThemeProvider } from '@/components/theme/ThemeProvider'

export const metadata: Metadata = {
    title: 'Nisha Chavan',
    description: 'Portfolio',
    other: {
        "google-site-verification": "JsxMf5ZFLXWgVgVTla1UrQdaJ3r9gsqrtG-pH_cZnPA",
    },
}

const themeScript = `
(function () {
  try {
    var theme = localStorage.getItem('theme')
    document.documentElement.classList.toggle('dark', theme !== 'light')
  } catch (e) {
    document.documentElement.classList.add('dark')
  }
})()
`

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="dark" suppressHydrationWarning>
        <head>
            <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        </head>
        <body className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
            <ThemeProvider>{children}</ThemeProvider>
        </body>
        </html>
    )
}
