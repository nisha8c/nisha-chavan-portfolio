'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import type { Experience } from '@/lib/types'
import { urlFor } from '@/lib/imageBuilder'

export default function ExperienceSection({ experiences }: { experiences: Experience[] }) {


    return (
        <section id="experience" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8 }} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">Work Experience</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">My journey through different companies and roles in frontend development</p>
                </motion.div>

                <div className="relative">
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-px h-full bg-gradient-to-b from-blue-500 to-purple-500" />
                    {(experiences ?? []).map((exp, index) => (
                        <motion.div
                            key={`${exp.company}-${index}`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: index * 0.5 }}
                            className={`relative mb-16 md:mb-8 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}
                        >
                            <motion.div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 z-10"
                                        initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, amount: 0.2 }} whileHover={{ scale: 1.5 }} transition={{ type: 'spring' }} />

                            <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:ml-0' : 'md:ml-auto'}`}>
                                <motion.div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                                            whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.1)' }}>
                                    <div className="flex items-center gap-4 mb-4">
                                        {exp.logo && (
                                            <img
                                                src={urlFor(exp.logo).width(64).height(64).fit('crop').dpr(2).url()}
                                                alt={exp.company} className="w-12 h-12 rounded-lg object-cover"
                                            />
                                        )}
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                                            <p className="text-blue-400 font-medium">{exp.company}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                                        <div className="flex items-center gap-1"><Calendar className="w-4 h-4" />{exp.duration}</div>
                                        <div className="flex items-center gap-1"><MapPin className="w-4 h-4" />{exp.location}</div>
                                    </div>

                                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                                    <div className="flex flex-wrap gap-2">
                                        {(exp.technologies ?? []).map((tech, t) => (
                                            <motion.span key={`${tech}-${t}`} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                                                         initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: index * 0.1 + t * 0.05 }}>
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
