import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'education',
    title: 'Education',
    type: 'document',
    fields: [
        defineField({ name: 'institution', type: 'string' }),
        defineField({ name: 'degree', type: 'string' }),
        defineField({ name: 'duration', type: 'string' }),
        defineField({ name: 'description', type: 'text' }),
        defineField({
            name: 'logo',
            type: 'image',
            options: { hotspot: true },
        }),
    ],
})
