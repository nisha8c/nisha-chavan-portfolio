'use client'

import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()

    return (
        <motion.button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="fixed top-6 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 shadow-lg backdrop-blur-sm hover:border-blue-500/50 transition-colors"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
        >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </motion.button>
    )
}
