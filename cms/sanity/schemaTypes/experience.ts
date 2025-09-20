import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        defineField({ name: 'company', type: 'string' }),
        defineField({ name: 'position', type: 'string' }),
        defineField({ name: 'location', type: 'string' }),
        defineField({ name: 'duration', type: 'string' }), // e.g., "2022 - Present"
        defineField({ name: 'description', type: 'text' }),
        defineField({
            name: 'technologies',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'logo',
            type: 'image',
            options: { hotspot: true },
        }),
    ],
})
