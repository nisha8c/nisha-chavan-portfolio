'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Github, Code, Smartphone, Monitor } from 'lucide-react'
import type { Project } from '@/lib/types'
import { projectImageUrl } from '@/lib/imageBuilder'

const tabs = [
    { id: 'all', label: 'All Projects', icon: Code },
    { id: 'web', label: 'Web Apps', icon: Monitor },
    { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
] as const

export default function ProjectsSection({ projects = [] }: { projects: Project[] }) {
    const [active, setActive] = React.useState<'all' | 'web' | 'mobile'>('all')

    const filtered = active === 'all'
        ? projects
        : projects.filter(p => p.category?.toLowerCase() === active)

    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8 }} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">Featured Projects</h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">A collection of hobby-level applications I have built to explore new technologies</p>
                </motion.div>

                <motion.div className="flex justify-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.3, duration: 0.8 }}>
                    <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-full p-2 border border-gray-200 dark:border-gray-700">
                        {tabs.map(t => (
                            <motion.button key={t.id} onClick={() => setActive(t.id)}
                                           className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 ${
                                               active === t.id ? 'bg-blue-500 text-white shadow-lg' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                           }`}
                                           whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <t.icon className="w-4 h-4" /> {t.label}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filtered.map((project, index) => (
                        <motion.div key={`${project.title}-${index}`} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.1 + 0.2, duration: 0.8 }} className="group relative">
                            <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-500">
                                <div className="relative overflow-hidden">
                                    {project.image && (
                                        <img
                                            src={projectImageUrl(project.image)}
                                            alt={project.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                    )}
                                    <motion.div className="absolute inset-0 bg-gradient-to-t from-gray-100 dark:from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3"
                                                whileHover={{ opacity: 1 }}>
                                        {project.githubUrl && (
                                            <motion.a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                                                      aria-label={`View ${project.title} on GitHub`}
                                                      className="w-12 h-12 bg-black/80 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-sm"
                                                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(59,130,246,0.8)' }} whileTap={{ scale: 0.9 }}>
                                                <Github aria-hidden="true" className="w-5 h-5 text-white" />
                                            </motion.a>
                                        )}
                                        {project.demoUrl && (
                                            <motion.a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                                                      aria-label={`View live demo of ${project.title}`}
                                                      className="w-12 h-12 bg-black/80 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-sm text-white text-xs font-semibold"
                                                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(59,130,246,0.8)' }} whileTap={{ scale: 0.9 }}>
                                                Demo
                                            </motion.a>
                                        )}
                                    </motion.div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                        {project.featured && (
                                            <motion.span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs rounded-full font-medium"
                                                         animate={{ boxShadow: ['0 0 0 rgba(255, 193, 7, 0)', '0 0 20px rgba(255, 193, 7, 0.3)', '0 0 0 rgba(255, 193, 7, 0)'] }}
                                                         transition={{ duration: 2, repeat: Infinity }}>
                                                Featured
                                            </motion.span>
                                        )}
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {(project.technologies ?? []).map((tech, t) => (
                                            <motion.span key={`${tech}-${t}`} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs border border-blue-500/30"
                                                         initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.1 + t * 0.05 + 0.8, type: 'spring' }}>
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {!filtered.length && (
                    <p className="text-center text-gray-600 dark:text-gray-400">No projects in this category yet.</p>
                )}
            </div>
        </section>
    )
}
