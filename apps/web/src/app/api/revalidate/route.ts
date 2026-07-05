import { revalidateTag } from 'next/cache'

export async function POST() {
    revalidateTag('profile')
    revalidateTag('experience')
    revalidateTag('projects')
    revalidateTag('sideProjects')
    revalidateTag('skills')
    revalidateTag('education')
    revalidateTag('recommendations')
    revalidateTag('settings')
    return new Response('OK')
}
