import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'sideProject',
    title: 'Side Project',
    type: 'document',
    orderings: [
        {
            title: 'Display Order',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }],
        },
    ],
    fields: [
        defineField({
            name: 'order',
            title: 'Order',
            type: 'number',
            description: 'Lower numbers appear first',
            validation: (Rule) => Rule.required().min(0).integer(),
        }),
        defineField({ name: 'title', title: 'Project name', type: 'string' }),
        defineField({ name: 'role', title: 'Role', type: 'string' }),
        defineField({
            name: 'badge',
            title: 'Badge label',
            type: 'string',
            description: 'e.g. Personal Project',
        }),
        defineField({ name: 'location', type: 'string' }),
        defineField({ name: 'duration', type: 'string' }),
        defineField({ name: 'description', type: 'text' }),
        defineField({
            name: 'highlights',
            title: 'Highlights',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'technologies',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({ name: 'websiteUrl', title: 'Website URL', type: 'url' }),
        defineField({
            name: 'websiteLabel',
            title: 'Website link label',
            type: 'string',
            description: 'e.g. coming soon',
        }),
        defineField({
            name: 'logo',
            type: 'image',
            options: { hotspot: true },
        }),
    ],
})
