import config from '@/payload.config'
import { localeLang } from '@/utilities/locale'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import PageClient from './components/PageClient'

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const supportedLocale = localeLang.find((lang) => lang.code === locale)
  if (!supportedLocale) {
    return notFound()
  }
  const payload = await getPayload({ config })
  const pages = await payload.find({
    collection: 'pages',
    depth: 2,
    locale: locale as 'en' | 'ar' | undefined,

    where: {
      slug: { equals: '/' },
    },
  })

  return (
    <main>
      {pages.docs.length > 0 ? (
        pages.docs.map((page) => (
          <div key={page.id}>
            <PageClient page={page} />
          </div>
        ))
      ) : (
        <div className="no-pages">
          <h2>No Pages Found</h2>
          <p>No pages have been created for the main domain yet.</p>
        </div>
      )}
    </main>
  )
}
