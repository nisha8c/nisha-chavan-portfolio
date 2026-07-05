import { sanity } from '@/lib/sanity.server'
import { tags } from '@/lib/revalidate'
import {
    profileQuery, experiencesQuery, projectsQuery, sideProjectsQuery,
    skillsQuery, educationQuery, recommendationsQuery, settingsQuery
} from '@/lib/queries'

import DeferredChrome from '@/components/layout/DeferredChrome'
import BelowFoldSections from '@/components/layout/BelowFoldSections'
import HeroSection from '@/components/sections/HeroSection'

export const revalidate = 60

export default async function Page() {
    const [profile, experiences, projects, sideProjects, skills, education, recommendations, settings] = await Promise.all([
        sanity.fetch(profileQuery, {}, { next: { revalidate, tags: [tags.profile] } }),
        sanity.fetch(experiencesQuery, {}, { next: { revalidate, tags: [tags.experience] } }),
        sanity.fetch(projectsQuery, {}, { next: { revalidate, tags: [tags.projects] } }),
        sanity.fetch(sideProjectsQuery, {}, { next: { revalidate, tags: [tags.sideProjects] } }),
        sanity.fetch(skillsQuery, {}, { next: { revalidate, tags: [tags.skills] } }),
        sanity.fetch(educationQuery, {}, { next: { revalidate, tags: [tags.education] } }),
        sanity.fetch(recommendationsQuery, {}, { next: { revalidate, tags: [tags.recommendations] } }),
        sanity.fetch(settingsQuery, {}, { next: { revalidate, tags: [tags.settings] } }),
    ])

    return (
        <div className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen relative transition-colors duration-300">
            <DeferredChrome />
            <main className="relative z-10">
                <HeroSection profile={profile} />
                <BelowFoldSections
                    experiences={experiences}
                    projects={projects}
                    sideProjects={sideProjects}
                    skills={skills}
                    education={education}
                    recommendations={recommendations}
                />
            </main>
            <footer className="relative z-10 py-12 text-center border-t border-gray-200 dark:border-gray-800">
                <div className="max-w-4xl mx-auto px-6">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        © {new Date().getFullYear()} {profile?.name}. Built with Next.js, Tailwind CSS, and Framer Motion.
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        {settings?.footerText ?? 'Always learning, always building, always growing. 🚀'}
                    </p>
                </div>
            </footer>
        </div>
    )
}
