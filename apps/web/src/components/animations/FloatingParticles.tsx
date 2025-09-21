'use client'
import React from 'react'
import { motion } from 'framer-motion'

type Particle = { id:number; x:number; y:number; size:number; duration:number }

export default function FloatingParticles() {
    const [particles, setParticles] = React.useState<Particle[] | null>(null)

    React.useEffect(() => {
        const list = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 1,
            duration: Math.random() * 20 + 10,
        }))
        setParticles(list)
    }, [])

    if (!particles) return null

    return (
        <div className="fixed inset-0 pointer-events-none z-0" suppressHydrationWarning>
            {particles.map(p => (
                <motion.div
                    key={p.id}
                    className="absolute bg-blue-400 rounded-full opacity-20"
                    style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
                    animate={{ y: [0, -30, 0], x: [0, 15, -15, 0], opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: p.duration, repeat: Infinity, ease: 'easeInOut' }}
                />
            ))}
        </div>
    )
}
