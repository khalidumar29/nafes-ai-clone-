import { RenderBlocks } from '@/blocks/RenderBlocks'
import config from '@/payload.config'
import { getPayload } from 'payload'
// import PageClient from '../components/PageClient'
import { localeLang } from '@/utilities/locale'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

// interface PageProps {
//   params: {
//     locale: string
//     slug: string
//   }
// }

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  console.log('Locale:', locale, 'Slug:', slug)
  const { isEnabled: isDraftMode } = await draftMode()
  console.log('Draft mode is enabled:', isDraftMode)
  const supportedLocale = localeLang.find((lang) => lang.code === locale)
  if (!supportedLocale) {
    return notFound()
  }
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'pages',
    where: { slug: { equals: slug } },
    locale: locale as 'en' | 'ar',
    limit: 1,
    draft: isDraftMode,
    overrideAccess: true,
  })
  const page = docs?.[0]

  if (!page) return notFound()
  console.log(page.layout)
  return (
    <main>
      <RenderBlocks blocks={page.layout || []} />

      {/* <Articles /> */}
    </main>
  )
}
