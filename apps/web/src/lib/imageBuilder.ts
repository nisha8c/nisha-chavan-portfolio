import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder'

import { sanity } from './sanity.client'

const builder = imageUrlBuilder(sanity as any)

export function urlFor(source: SanityImageSource): ImageUrlBuilder {
    return builder.image(source)
}
