import { RenderBlocks } from '@/blocks/RenderBlocks'
import config from '@/payload.config'
import { getPayload } from 'payload'
// import PageClient from '../components/PageClient'
import { localeLang } from '@/utilities/locale'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  console.log('---------------------------------------------------------------')

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
  console.log({ localeFromLayout: locale })

  if (!page) return notFound()
  console.log(page.layout)
  return (
    <main>
      <RenderBlocks locale={locale} blocks={page.layout || []} />
    </main>
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
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
