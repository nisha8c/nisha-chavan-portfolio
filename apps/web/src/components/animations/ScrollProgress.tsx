'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function ScrollProgress() {
    const [progress, setProgress] = React.useState(0)
    React.useEffect(() => {
        const onScroll = () => {
            const total = document.documentElement.scrollHeight - window.innerHeight
            setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
        }
        onScroll()
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])
    return (
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
            <motion.div className="h-full bg-gradient-to-r from-blue-500 to-purple-600" style={{ width: `${progress}%` }} />
        </div>
    )
}
