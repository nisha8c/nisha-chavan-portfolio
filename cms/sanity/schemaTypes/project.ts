import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'description', type: 'text' }),
        defineField({ name: 'category', type: 'string' }), // "web" | "mobile" | "other"
        defineField({
            name: 'technologies',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({ name: 'githubUrl', type: 'url' }),
        defineField({ name: 'demoUrl', type: 'url' }),
        defineField({
            name: 'image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'featured',
            type: 'boolean',
            initialValue: false,
        }),
    ],
})
