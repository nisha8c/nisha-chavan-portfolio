import imageUrlBuilder from '@sanity/image-url'
import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

interface SanityConfig {
    projectId: string
    dataset: string
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

const builder = imageUrlBuilder({ projectId, dataset } satisfies SanityConfig)

export function urlFor(source: SanityImageSource): ImageUrlBuilder {
    return builder.image(source)
}
