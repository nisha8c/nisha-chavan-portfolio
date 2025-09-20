'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react'
import type { Education } from '@/lib/types'
import { urlFor } from '@/lib/imageBuilder'

export default function EducationSection({ education = [] }: { education: Education[] }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, amount: 0.3 })

    const courses = [
        'Advanced React Patterns - Kent C. Dodds',
        'JavaScript Algorithms & Data Structures',
        'Modern CSS & Sass Bootcamp',
        'Node.js Complete Guide',
        'AWS Certified Solutions Architect',
        'UI/UX Design Fundamentals',
    ]

    return (
        <section id="education" ref={ref} className="py-20 relative">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                        Education & Learning
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">Continuous learning is key to staying current in technology</p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3, duration: 0.8 }}>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                <GraduationCap className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Formal Education</h3>
                        </div>

                        <div className="space-y-8">
                            {education.map((edu, index) => (
                                <motion.div key={`${edu.institution}-${index}`} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                                            transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }} whileHover={{ scale: 1.02, rotateY: 5 }}
                                            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-500">
                                    <div className="flex items-center gap-4 mb-4">
                                        {edu.logo && (
                                            <motion.img
                                                src={urlFor(edu.logo).width(64).height(64).fit('crop').dpr(2).url()}
                                                alt={edu.institution} className="w-16 h-16 rounded-lg object-cover"
                                                whileHover={{ rotate: 360 }} transition={{ duration: 1 }}
                                            />
                                        )}
                                        <div>
                                            <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                                            <p className="text-blue-400 font-medium">{edu.institution}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-gray-400 mb-3">
                                        <Calendar className="w-4 h-4" />
                                        {edu.duration}
                                    </div>

                                    <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.5, duration: 0.8 }}>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                                <Award className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Courses & Certifications</h3>
                        </div>

                        <div className="grid gap-4">
                            {courses.map((course, index) => (
                                <motion.div key={course} initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }} whileHover={{ scale: 1.05, x: 10 }}
                                            className="flex items-center gap-4 p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-300">
                                    <motion.div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0"
                                                animate={{ rotate: [0, 360] }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}>
                                        <BookOpen className="w-4 h-4 text-white" />
                                    </motion.div>
                                    <span className="text-gray-300 font-medium">{course}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
