'use client'

import dynamic from 'next/dynamic'

const FloatingParticles = dynamic(() => import('@/components/animations/FloatingParticles'), { ssr: false })
const ScrollProgress = dynamic(() => import('@/components/animations/ScrollProgress'), { ssr: false })
const NavigationDots = dynamic(() => import('@/components/navigation/NavigationDots'), { ssr: false })
const ThemeToggle = dynamic(() => import('@/components/theme/ThemeToggle'), { ssr: false })

export default function DeferredChrome() {
    return (
        <>
            <FloatingParticles />
            <ScrollProgress />
            <ThemeToggle />
            <NavigationDots />
        </>
    )
}
