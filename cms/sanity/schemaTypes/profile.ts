import { defineType, defineField } from 'sanity'
export default defineType({
    name: 'profile',
    title: 'Profile',
    type: 'document',
    fields: [
        defineField({ name: 'name', type: 'string' }),
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'bio', type: 'text' }),
        defineField({ name: 'location', type: 'string' }),
        defineField({
            name: 'socials',
            title: 'Social Links',
            type: 'array',
            of: [{ type: 'object', fields: [
                    { name: 'label', type: 'string' },
                    { name: 'href', type: 'url' },
                ]}]
        }),
    ]
})
