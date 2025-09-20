import { sanity } from '@/lib/sanity.client'
import { tags } from '@/lib/revalidate'
import {
    profileQuery, experiencesQuery, projectsQuery,
    skillsQuery, educationQuery, recommendationsQuery, settingsQuery
} from '@/lib/queries'

import FloatingParticles from '@/components/animations/FloatingParticles'
import ScrollProgress from '@/components/animations/ScrollProgress'
import NavigationDots from '@/components/navigation/NavigationDots'

import HeroSection from '@/components/sections/HeroSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import SkillsSection from '@/components/sections/SkillsSection'
import EducationSection from '@/components/sections/EducationSection'
import RecommendationsSection from '@/components/sections/RecommendationsSection'

export const revalidate = 60

export default async function Page() {
    const [profile, experiences, projects, skills, education, recommendations, settings] = await Promise.all([
        sanity.fetch(profileQuery, {}, { next: { revalidate, tags: [tags.profile] } }),
        sanity.fetch(experiencesQuery, {}, { next: { revalidate, tags: [tags.experience] } }),
        sanity.fetch(projectsQuery, {}, { next: { revalidate, tags: [tags.projects] } }),
        sanity.fetch(skillsQuery, {}, { next: { revalidate, tags: [tags.skills] } }),
        sanity.fetch(educationQuery, {}, { next: { revalidate, tags: [tags.education] } }),
        sanity.fetch(recommendationsQuery, {}, { next: { revalidate, tags: [tags.recommendations] } }),
        sanity.fetch(settingsQuery, {}, { next: { revalidate, tags: [tags.settings] } }),
    ])

    return (
        <div className="min-h-screen relative">
            <FloatingParticles />
            <ScrollProgress />
            <NavigationDots />
            <div className="relative z-10">
                <HeroSection profile={profile} />
                <ExperienceSection experiences={experiences} />
                <ProjectsSection projects={projects} />
                <SkillsSection skills={skills} />
                <EducationSection education={education} />
                <RecommendationsSection recommendations={recommendations} />
                <footer className="py-12 text-center border-t border-gray-800">
                    <div className="max-w-4xl mx-auto px-6">
                        <p className="text-gray-400 mb-4">
                            © {new Date().getFullYear()} {profile?.name}. Built with Next.js, Tailwind CSS, and Framer Motion.
                        </p>
                        <p className="text-sm text-gray-500">
                            {settings?.footerText ?? 'Always learning, always building, always growing. 🚀'}
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    )
}
