import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import type { Profile } from '@/lib/types'

function SocialIcon({ label }: { label: string }) {
    const className = 'w-5 h-5 text-gray-600 dark:text-gray-400'
    const lower = label.toLowerCase()

    if (lower.includes('github')) return <Github aria-hidden="true" className={className} />
    if (lower.includes('linkedin')) return <Linkedin aria-hidden="true" className={className} />
    return <Mail aria-hidden="true" className={className} />
}

export default function HeroSection({ profile }: { profile: Profile }) {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div
                className="absolute inset-0 opacity-20 bg-[radial-gradient(600px_circle_at_0%_0%,rgba(120,119,198,0.3),transparent),radial-gradient(600px_circle_at_100%_100%,rgba(120,119,198,0.3),transparent)]"
                aria-hidden="true"
            />
            <div className="text-center z-10 max-w-4xl mx-auto px-6">
                <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent mb-4">
                    {profile?.name}
                </h1>
                <p className="text-2xl md:text-4xl text-gray-700 dark:text-gray-300 mb-6">
                    {profile?.title}
                </p>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                    {profile?.bio}
                </p>
                <div className="flex justify-center space-x-6 mb-12">
                    {(profile?.socials ?? []).map((s) => (
                        <a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={s.label}
                            className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all duration-300"
                        >
                            <SocialIcon label={s.label} />
                        </a>
                    ))}
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
                    <MapPin aria-hidden="true" className="w-4 h-4" />
                    <span>{profile?.location}</span>
                </div>
            </div>
        </section>
    )
}
