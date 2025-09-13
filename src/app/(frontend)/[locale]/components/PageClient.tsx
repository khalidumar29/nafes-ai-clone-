'use client'

import { useLivePreview } from '@payloadcms/live-preview-react'
import { Page as PageType } from '@/payload-types'
import { RenderBlocks } from '@/blocks/RenderBlocks'

export default function PageClient({ page: initialPage }: { page: PageType }) {
  const { data } = useLivePreview<PageType>({
    initialData: initialPage,
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
    depth: 2,
  })

  return (
    <div className="prose mx-auto max-w-4xl p-4 lg:p-8">
      {data.layout && <RenderBlocks blocks={data.layout} />}
    </div>
  )
}
