'use client'

import { useEffect, useRef, useState, type ComponentType } from 'react'
import type { Education, Experience, Project, Recommendation, SideProject, Skill } from '@/lib/types'

function createDeferredSection<P extends object>(
    loader: () => Promise<{ default: ComponentType<P> }>,
    minHeight: string,
) {
    return function DeferredSection(props: P) {
        const ref = useRef<HTMLDivElement>(null)
        const [Component, setComponent] = useState<ComponentType<P> | null>(null)

        useEffect(() => {
            const element = ref.current
            if (!element) return

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        void loader().then((mod) => setComponent(() => mod.default))
                        observer.disconnect()
                    }
                },
                { rootMargin: '300px 0px' },
            )

            observer.observe(element)
            return () => observer.disconnect()
        }, [])

        return (
            <div ref={ref} style={Component ? undefined : { minHeight }}>
                {Component ? <Component {...props} /> : null}
            </div>
        )
    }
}

const DeferredExperience = createDeferredSection<{ experiences: Experience[] }>(
    () => import('@/components/sections/ExperienceSection'),
    '60vh',
)

const DeferredProjects = createDeferredSection<{ projects: Project[] }>(
    () => import('@/components/sections/ProjectsSection'),
    '80vh',
)

const DeferredSideProjects = createDeferredSection<{ sideProjects: SideProject[] }>(
    () => import('@/components/sections/SideProjectsSection'),
    '70vh',
)

const DeferredSkills = createDeferredSection<{ skills: Skill[] }>(
    () => import('@/components/sections/SkillsSection'),
    '60vh',
)

const DeferredEducation = createDeferredSection<{ education: Education[] }>(
    () => import('@/components/sections/EducationSection'),
    '60vh',
)

const DeferredRecommendations = createDeferredSection<{ recommendations: Recommendation[] }>(
    () => import('@/components/sections/RecommendationsSection'),
    '50vh',
)

type BelowFoldSectionsProps = {
    experiences: Experience[]
    projects: Project[]
    sideProjects: SideProject[]
    skills: Skill[]
    education: Education[]
    recommendations: Recommendation[]
}

export default function BelowFoldSections({
    experiences,
    projects,
    sideProjects,
    skills,
    education,
    recommendations,
}: BelowFoldSectionsProps) {
    return (
        <>
            <DeferredExperience experiences={experiences} />
            <DeferredProjects projects={projects} />
            <DeferredSideProjects sideProjects={sideProjects} />
            <DeferredSkills skills={skills} />
            <DeferredEducation education={education} />
            <DeferredRecommendations recommendations={recommendations} />
        </>
    )
}
