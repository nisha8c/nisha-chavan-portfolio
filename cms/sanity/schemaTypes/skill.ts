import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
        defineField({ name: 'name', type: 'string' }),
        defineField({ name: 'category', type: 'string' }), // frontend, backend, database, tools, design
        defineField({ name: 'proficiency', type: 'number' }), // 0–100
        defineField({ name: 'yearsExperience', type: 'number' }),
        defineField({
            name: 'logo',
            type: 'image',
            options: { hotspot: true },
        }),
    ],
})
