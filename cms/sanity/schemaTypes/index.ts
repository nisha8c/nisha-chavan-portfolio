import { type SchemaTypeDefinition } from 'sanity'

import profile from './profile'
import experience from './experience'
import project from './project'
import skill from './skill'
import education from './education'
import recommendation from './recommendation'
import siteSettings from './siteSettings'

export const schemaTypes: SchemaTypeDefinition[] = [
    profile,
    experience,
    project,
    skill,
    education,
    recommendation,
    siteSettings,
]
