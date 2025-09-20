import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        defineField({ name: 'siteTitle', type: 'string' }),
        defineField({ name: 'tagline', type: 'string' }),
        defineField({ name: 'footerText', type: 'string' }),
        defineField({
            name: 'ogImage',
            title: 'Default OG Image',
            type: 'image',
            options: { hotspot: true },
        }),
    ],
})
