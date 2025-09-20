'use client'
import React from 'react'
import { motion } from 'framer-motion'

const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
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
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 space-y-4">
            {sections.map((s, i) => (
                <motion.button
                    key={s.id}
                    onClick={() => go(s.id)}
                    className={`w-4 h-4 rounded-full border-2 border-blue-400 transition-all duration-300 group relative ${
                        active === i ? 'bg-blue-500 scale-125' : 'bg-transparent hover:bg-blue-400'
                    }`}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                >
          <span className="absolute right-6 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {s.label}
          </span>
                </motion.button>
            ))}
        </div>
    )
}
