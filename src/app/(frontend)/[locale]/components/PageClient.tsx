'use client'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { Page as PageType } from '@/payload-types'
import { useLivePreview } from '@payloadcms/live-preview-react'

export default function PageClient({
  page: initialPage,
  locale,
}: {
  page: PageType
  locale: string
}) {
  const { data } = useLivePreview<PageType>({
    initialData: initialPage,
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
    depth: 2,
  })

  return (
    <div className="">{data.layout && <RenderBlocks locale={locale} blocks={data.layout} />}</div>
  )
}
