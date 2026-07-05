'use client'
import React from 'react'
import { motion } from 'framer-motion'

const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'side-projects', label: 'Side Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'recommendations', label: 'Reviews' },
]

export default function NavigationDots() {
    const [active, setActive] = React.useState(0)

    React.useEffect(() => {
        const onScroll = () => {
            const idx = sections.findIndex(s => {
                const el = document.getElementById(s.id)
                if (!el) return false
                const r = el.getBoundingClientRect()
                return r.top <= window.innerHeight / 2 && r.bottom >= window.innerHeight / 2
            })
            if (idx !== -1) setActive(idx)
        }
        window.addEventListener('scroll', onScroll)
        onScroll()
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const go = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-40 space-y-2" aria-label="Page sections">
            {sections.map((s, i) => (
                <motion.button
                    key={s.id}
                    type="button"
                    onClick={() => go(s.id)}
                    aria-label={`Go to ${s.label}`}
                    aria-current={active === i ? 'true' : undefined}
                    className={`min-w-11 min-h-11 flex items-center justify-center rounded-full transition-all duration-300 group relative ${
                        active === i ? 'scale-110' : ''
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <span className={`block w-3 h-3 rounded-full border-2 border-blue-400 transition-all duration-300 ${
                        active === i ? 'bg-blue-500 scale-125' : 'bg-transparent group-hover:bg-blue-400'
                    }`} aria-hidden="true" />
          <span className="absolute right-8 top-1/2 -translate-y-1/2 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity whitespace-nowrap border border-gray-200 dark:border-gray-700">
            {s.label}
          </span>
                </motion.button>
            ))}
        </nav>
    )
}
