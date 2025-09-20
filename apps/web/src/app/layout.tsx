import type { Metadata } from 'next'
import './globals.css'
import React from "react";

export const metadata: Metadata = {
    title: 'Portfolio',
    description: 'Portfolio site',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className="bg-gray-900 text-white">{children}</body>
        </html>
    )
}
