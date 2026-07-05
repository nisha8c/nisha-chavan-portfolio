import { groq } from 'next-sanity'

export const profileQuery = groq`*[_type=="profile"][0]{
  name, title, bio, location, socials
}`

export const experiencesQuery = groq`*[_type=="experience"]|order(coalesce(order, 999) asc, _createdAt asc){
  order, company, position, duration, location, description, technologies, logo
}`

export const projectsQuery = groq`*[_type=="project"]|order(_createdAt asc){
  title, description, category, technologies, githubUrl, demoUrl, image, featured
}`

export const sideProjectsQuery = groq`*[_type=="sideProject"]|order(coalesce(order, 999) asc, _createdAt asc){
  order, title, role, badge, location, duration, description, highlights, technologies, websiteUrl, websiteLabel, logo
}`

export const skillsQuery = groq`*[_type=="skill"]|order(_createdAt asc){
  name, category, proficiency, yearsExperience, logo
}`

export const educationQuery = groq`*[_type=="education"]|order(_createdAt asc){
  institution, degree, duration, description, logo
}`

export const recommendationsQuery = groq`*[_type=="recommendation"]|order(_createdAt asc){
  name, position, company, text, rating, avatar
}`

export const settingsQuery = groq`*[_type=="siteSettings"][0]{ siteTitle, tagline, footerText, ogImage }`
