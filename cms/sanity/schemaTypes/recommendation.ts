import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'recommendation',
    title: 'Recommendation',
    type: 'document',
    fields: [
        defineField({ name: 'name', type: 'string' }),
        defineField({ name: 'position', type: 'string' }),
        defineField({ name: 'company', type: 'string' }),
        defineField({ name: 'text', type: 'text' }),
        defineField({ name: 'rating', type: 'number' }), // e.g., 1–5 stars
        defineField({
            name: 'avatar',
            type: 'image',
            options: { hotspot: true },
        }),
    ],
})
