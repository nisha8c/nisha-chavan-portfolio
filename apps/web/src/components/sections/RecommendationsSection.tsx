'use client'
import React, { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'
import type { Recommendation } from '@/lib/types'
import { urlFor } from '@/lib/imageBuilder'

export default function RecommendationsSection({ recommendations = [] }: { recommendations: Recommendation[] }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, amount: 0.3 })
    const [idx, setIdx] = useState(0)

    useEffect(() => {
        const t = setInterval(() => setIdx(p => (p + 1) % recommendations.length), 5000)
        return () => clearInterval(t)
    }, [recommendations.length])

    const next = () => setIdx(p => (p + 1) % recommendations.length)
    const prev = () => setIdx(p => (p - 1 + recommendations.length) % recommendations.length)

    const item = recommendations[idx]

    return (
        <section id="recommendations" ref={ref} className="py-20 relative">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">What People Say</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">Testimonials from colleagues and collaborators</p>
                </motion.div>

                <div className="relative">
                    <motion.div className="overflow-hidden" initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.3, duration: 0.8 }}>
                        <AnimatePresence mode="wait">
                            <motion.div key={idx} initial={{ opacity: 0, x: 100, rotateY: -90 }} animate={{ opacity: 1, x: 0, rotateY: 0 }}
                                        exit={{ opacity: 0, x: -100, rotateY: 90 }} transition={{ duration: 0.8, type: 'spring' }}
                                        className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-12 relative">
                                <motion.div className="absolute top-8 left-8 text-blue-400 opacity-20" animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity }}>
                                    <Quote className="w-16 h-16" />
                                </motion.div>

                                <div className="flex flex-col md:flex-row items-center gap-8">
                                    <motion.div className="flex-shrink-0" whileHover={{ scale: 1.1, rotate: 5 }}>
                                        <div className="relative">
                                            {item?.avatar && (
                                                <motion.img
                                                    src={urlFor(item.avatar).width(96).height(96).fit('crop').dpr(2).url()}
                                                    alt={item.name} className="w-24 h-24 rounded-full object-cover border-4 border-blue-500/50"
                                                    animate={{ boxShadow: ['0 0 0 rgba(59,130,246,0)', '0 0 20px rgba(59,130,246,0.3)', '0 0 0 rgba(59,130,246,0)'] }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                />
                                            )}
                                            <motion.div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-2 border-gray-800"
                                                        animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
                                        </div>
                                    </motion.div>

                                    <div className="flex-1 text-center md:text-left">
                                        <motion.p className="text-gray-300 text-lg leading-relaxed mb-6 italic"
                                                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
                                            “{item?.text}”
                                        </motion.p>

                                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
                                            <div className="flex justify-center md:justify-start gap-1 mb-3">
                                                {Array.from({ length: item?.rating ?? 0 }).map((_, i) => (
                                                    <motion.div key={i} initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 0.6 + i * 0.1, type: 'spring' }}>
                                                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                                    </motion.div>
                                                ))}
                                            </div>
                                            <h4 className="text-xl font-bold text-white mb-1">{item?.name}</h4>
                                            <p className="text-blue-400 font-medium">{item?.position}</p>
                                            <p className="text-gray-400 text-sm">{item?.company}</p>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>

                    <div className="flex justify-center gap-4 mt-8">
                        <motion.button onClick={prev} className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700 hover:border-blue-500 transition-all duration-300"
                                       whileHover={{ scale: 1.1, backgroundColor: 'rgba(59,130,246,0.1)' }} whileTap={{ scale: 0.9 }}>
                            <ChevronLeft className="w-5 h-5 text-gray-400 hover:text-blue-400" />
                        </motion.button>
                        <div className="flex items-center gap-2">
                            {recommendations.map((_, i) => (
                                <motion.button key={i} onClick={() => setIdx(i)}
                                               className={`w-3 h-3 rounded-full transition-all duration-300 ${i === idx ? 'bg-blue-500 scale-125' : 'bg-gray-600 hover:bg-gray-500'}`}
                                               whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }} />
                            ))}
                        </div>
                        <motion.button onClick={next} className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700 hover:border-blue-500 transition-all duration-300"
                                       whileHover={{ scale: 1.1, backgroundColor: 'rgba(59,130,246,0.1)' }} whileTap={{ scale: 0.9 }}>
                            <ChevronRight className="w-5 h-5 text-gray-400 hover:text-blue-400" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    )
}
