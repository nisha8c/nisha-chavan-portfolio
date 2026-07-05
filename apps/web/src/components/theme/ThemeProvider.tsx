'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

type ThemeContextValue = {
    theme: Theme
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>('dark')

    useEffect(() => {
        const stored = localStorage.getItem('theme')
        const initial: Theme = stored === 'light' || stored === 'dark' ? stored : 'dark'
        setTheme(initial)
        document.documentElement.classList.toggle('dark', initial === 'dark')
    }, [])

    const toggleTheme = () => {
        setTheme((current) => {
            const next: Theme = current === 'dark' ? 'light' : 'dark'
            localStorage.setItem('theme', next)
            document.documentElement.classList.toggle('dark', next === 'dark')
            return next
        })
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider')
    }
    return context
}
