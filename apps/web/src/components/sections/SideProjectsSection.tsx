'use client'

import { motion } from 'framer-motion'
import { Calendar, ExternalLink, MapPin, Rocket } from 'lucide-react'
import type { SideProject } from '@/lib/types'
import { logoUrl } from '@/lib/imageBuilder'

export default function SideProjectsSection({ sideProjects = [] }: { sideProjects: SideProject[] }) {
    if (!sideProjects.length) return null

    return (
        <section id="side-projects" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                        Side Projects
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        Personal products and ventures built outside of day-to-day work
                    </p>
                </motion.div>

                <div className="space-y-10">
                    {sideProjects.map((project, index) => (
                        <motion.article
                            key={`${project.title}-${index}`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-6 md:p-8 hover:border-blue-500/50 transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:items-start gap-6">
                                {project.logo && (
                                    <img
                                        src={logoUrl(project.logo)}
                                        alt={project.title}
                                        className="w-16 h-16 rounded-xl object-cover shrink-0"
                                        loading="lazy"
                                    />
                                )}

                                <div className="flex-1">
                                    {project.badge && (
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 text-xs font-medium rounded-full bg-purple-500/15 text-purple-600 dark:text-purple-300 border border-purple-500/30">
                                            <Rocket aria-hidden="true" className="w-3.5 h-3.5" />
                                            {project.badge}
                                        </span>
                                    )}

                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                                        {project.title}
                                    </h3>
                                    <p className="text-blue-500 dark:text-blue-400 font-medium mb-3">
                                        {project.role}
                                    </p>

                                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                                        {project.location && (
                                            <div className="flex items-center gap-1">
                                                <MapPin aria-hidden="true" className="w-4 h-4" />
                                                {project.location}
                                            </div>
                                        )}
                                        {project.duration && (
                                            <div className="flex items-center gap-1">
                                                <Calendar aria-hidden="true" className="w-4 h-4" />
                                                {project.duration}
                                            </div>
                                        )}
                                    </div>

                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                                        {project.description}
                                    </p>

                                    {(project.highlights ?? []).length > 0 && (
                                        <div className="mb-6">
                                            <p className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                                                Highlights
                                            </p>
                                            <ul className="space-y-2">
                                                {project.highlights!.map((highlight, i) => (
                                                    <li
                                                        key={i}
                                                        className="flex gap-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed"
                                                    >
                                                        <span className="text-blue-500 mt-1.5 shrink-0">•</span>
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {(project.technologies ?? []).length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.technologies!.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 bg-blue-500/15 text-blue-700 dark:text-blue-300 rounded-full text-xs border border-blue-500/30"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {project.websiteUrl && (
                                        <a
                                            href={project.websiteUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors"
                                        >
                                            <ExternalLink aria-hidden="true" className="w-4 h-4" />
                                            Website: {project.websiteUrl.replace(/^https?:\/\//, '')}
                                            {project.websiteLabel ? ` (${project.websiteLabel})` : ''}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}
