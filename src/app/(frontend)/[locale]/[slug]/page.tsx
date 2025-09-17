import { getPayload } from 'payload'
import config from '@/payload.config'
import { RenderBlocks } from '@/blocks/RenderBlocks'
// import PageClient from '../components/PageClient'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { localeLang } from '@/utilities/locale'

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
  console.log(page)
  return (
    <main>
      <RenderBlocks blocks={page.layout || []} />
      {/*
      <Articles />
 */}
    </main>
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'pages',
    where: { slug: { equals: slug } },
    locale: locale as 'en' | 'ar',
    limit: 1,
    overrideAccess: true,
  })
  const page = docs?.[0]

  if (!page) return {}

  return {
    title: `Ostool | ${page.title}`,
  }
}
