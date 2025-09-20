'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { Skill } from '@/lib/types'
import { urlFor } from '@/lib/imageBuilder'

const categories = [
    { name: 'Frontend', key: 'frontend', color: 'from-blue-400 to-cyan-400' },
    { name: 'Backend', key: 'backend', color: 'from-green-400 to-emerald-400' },
    { name: 'Database', key: 'database', color: 'from-purple-400 to-pink-400' },
    { name: 'Tools', key: 'tools', color: 'from-orange-400 to-red-400' },
    { name: 'Design', key: 'design', color: 'from-yellow-400 to-orange-400' },
] as const

export default function SkillsSection({ skills = [] }: { skills: Skill[] }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, amount: 0.3 })

    return (
        <section id="skills" ref={ref} className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                        Skills & Technologies
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">Technologies I work with to bring ideas to life</p>
                </motion.div>

                {categories.map((cat, i) => {
                    const items = skills.filter(s => s.category?.toLowerCase() === cat.key)
                    if (!items.length) return null
                    return (
                        <motion.div key={cat.key} className="mb-16" initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: i * 0.2, duration: 0.8 }}>
                            <div className="flex items-center gap-4 mb-8">
                                <motion.h3 className={`text-2xl font-bold bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}
                                           animate={{ backgroundPosition: ['0%', '100%', '0%'] }} transition={{ duration: 3, repeat: Infinity }}>
                                    {cat.name}
                                </motion.h3>
                                <div className={`h-px flex-1 bg-gradient-to-r ${cat.color} opacity-30`} />
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                                {items.map((skill, sidx) => (
                                    <motion.div key={skill.name} className="group relative"
                                                initial={{ opacity: 0, y: 50, rotate: -10 }} animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
                                                transition={{ delay: i * 0.2 + sidx * 0.1, duration: 0.8, type: 'spring' }} whileHover={{ scale: 1.1, rotate: 5, y: -10 }}>
                                        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
                                            <motion.div className="w-16 h-16 mx-auto mb-4 relative" animate={{ rotateY: [0, 360] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
                                                {skill.logo && (
                                                    <img
                                                        src={urlFor(skill.logo).width(64).height(64).fit('crop').dpr(2).url()}
                                                        alt={skill.name} className="w-full h-full object-contain"
                                                        loading="lazy"
                                                    />
                                                )}
                                            </motion.div>
                                            <h4 className="text-white font-semibold mb-2 group-hover:text-blue-400 transition-colors">{skill.name}</h4>
                                            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                                                <motion.div className={`h-full bg-gradient-to-r ${cat.color} rounded-full`}
                                                            initial={{ width: 0 }} animate={inView ? { width: `${skill.proficiency}%` } : { width: 0 }}
                                                            transition={{ delay: i * 0.2 + sidx * 0.1 + 0.5, duration: 1.5, ease: 'easeOut' }} />
                                            </div>
                                            <div className="text-xs text-gray-400">
                                                <div>{skill.proficiency}%</div>
                                                <div>{skill.yearsExperience} years</div>
                                            </div>
                                        </div>
                                        <motion.div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                                                    initial={{ y: 10, opacity: 0 }} whileHover={{ y: 0, opacity: 1 }}>
                                            {skill.proficiency}% Proficiency
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}
