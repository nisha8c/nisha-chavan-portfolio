import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

const builder = imageUrlBuilder({ projectId, dataset })

function optimized(source: SanityImageSource) {
    return builder.image(source).auto('format').quality(80)
}

/** Small logos/icons shown at 48px (w-12) */
export function logoUrl(source: SanityImageSource) {
    return optimized(source).width(96).height(96).fit('crop').url()
}

/** Medium logos shown at 64px (w-16) */
export function mediumLogoUrl(source: SanityImageSource) {
    return optimized(source).width(128).height(128).fit('crop').url()
}

/** Avatar images shown at 96px (w-24) */
export function avatarUrl(source: SanityImageSource) {
    return optimized(source).width(192).height(192).fit('crop').url()
}

/** Project card thumbnails */
export function projectImageUrl(source: SanityImageSource) {
    return optimized(source).width(560).height(280).fit('crop').url()
}

/** @deprecated Use the sized helpers above */
export function urlFor(source: SanityImageSource) {
    return optimized(source)
}
