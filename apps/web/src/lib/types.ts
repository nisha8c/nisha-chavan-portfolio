// apps/web/src/lib/types.ts
import type { Image as SanityImage } from 'sanity'

export type Social = { label: string; href: string }

export type Profile = {
    name: string
    title: string
    bio: string
    location: string
    socials: Social[]
}

export type Experience = {
    company: string
    position: string
    duration: string
    location: string
    description: string
    technologies: string[]
    logo?: SanityImage // Sanity image
}

export type Project = {
    title: string
    description: string
    category: 'web' | 'mobile' | string
    technologies: string[]
    githubUrl?: string
    demoUrl?: string
    image?: SanityImage // Sanity image
    featured?: boolean
}

export type Skill = {
    name: string
    category: 'frontend' | 'backend' | 'database' | 'tools' | 'design' | string
    proficiency: number
    yearsExperience: number
    logo?: SanityImage // Sanity image
}

export type Education = {
    institution: string
    degree: string
    duration: string
    description: string
    logo?: SanityImage // Sanity image
}

export type Recommendation = {
    name: string
    position: string
    company: string
    text: string
    rating: number
    avatar?: SanityImage // Sanity image
}

export type SiteSettings = {
    siteTitle?: string
    tagline?: string
    footerText?: string
    ogImage?: SanityImage
}
