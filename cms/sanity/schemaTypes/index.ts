import { type SchemaTypeDefinition } from 'sanity'

import profile from './profile'
import experience from './experience'
import project from './project'
import skill from './skill'
import education from './education'
import recommendation from './recommendation'
import sideProject from './sideProject'
import siteSettings from './siteSettings'

export const schemaTypes: SchemaTypeDefinition[] = [
    profile,
    experience,
    project,
    sideProject,
    skill,
    education,
    recommendation,
    siteSettings,
]
