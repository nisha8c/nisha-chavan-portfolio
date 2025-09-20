'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import type { Profile } from '@/lib/types'

export default function HeroSection({ profile }: { profile: Profile }) {
    const [text, setText] = React.useState('')
    const [cursor, setCursor] = React.useState(true)
    const fullText = profile?.title ?? ''

    React.useEffect(() => {
        let i = 0
        const t = setInterval(() => {
            if (i < fullText.length) { setText(fullText.slice(0, i + 1)); i++ } else clearInterval(t)
        }, 100)
        const c = setInterval(() => setCursor(v => !v), 500)
        return () => { clearInterval(t); clearInterval(c) }
    }, [fullText])

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <motion.div
                className="absolute inset-0 opacity-20"
                animate={{
                    background: [
                        'radial-gradient(600px circle at 0% 0%, rgba(120,119,198,0.3), transparent)',
                        'radial-gradient(600px circle at 100% 100%, rgba(120,119,198,0.3), transparent)',
                        'radial-gradient(600px circle at 0% 100%, rgba(59,130,246,0.3), transparent)',
                        'radial-gradient(600px circle at 100% 0%, rgba(59,130,246,0.3), transparent)',
                    ],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="text-center z-10 max-w-4xl mx-auto px-6">
                <motion.h1
                    className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent mb-4"
                    initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                >
                    {profile?.name}
                </motion.h1>
                <div className="text-2xl md:text-4xl text-gray-300 mb-6 h-12">
                    {text}<span className={cursor ? 'opacity-100' : 'opacity-0'}>|</span>
                </div>
                <motion.p
                    className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }}
                >
                    {profile?.bio}
                </motion.p>
                <motion.div
                    className="flex justify-center space-x-6 mb-12"
                    initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 0.8 }}
                >
                    {(profile?.socials ?? []).map((s) => (
                        <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                           className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700 hover:border-blue-500 transition-all duration-300">
                            {s.label.toLowerCase().includes('github') ? <Github className="w-5 h-5 text-gray-400" /> :
                                s.label.toLowerCase().includes('linkedin') ? <Linkedin className="w-5 h-5 text-gray-400" /> :
                                    <Mail className="w-5 h-5 text-gray-400" />}
                        </a>
                    ))}
                </motion.div>
                <motion.div className="flex items-center justify-center gap-2 text-gray-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
                    <MapPin className="w-4 h-4" />
                    <span>{profile?.location}</span>
                </motion.div>
            </div>
        </section>
    )
}
