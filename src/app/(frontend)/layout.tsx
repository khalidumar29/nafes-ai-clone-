import type { Metadata } from 'next'

import { cn } from '@/utilities/ui'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import React from 'react'

import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import { getServerSideURL } from '@/utilities/getURL'
import { getPayload } from 'payload'
import config from '@payload-config'
import 'swiper/css'
import 'swiper/css/bundle'
import './globals.css'
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const payload = await getPayload({ config })

  const navbar = await payload.findGlobal({ slug: 'navbar' as any })
  const footer = await payload.findGlobal({ slug: 'footer' })
  return (
    <html className={cn(GeistSans.variable, GeistMono.variable)} lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body className="bg-white text-black">
        <Providers>
          {/* <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          /> */}

          {/* <Header /> */}
          <Navbar navbar={navbar} />
          {children}
          <Footer footer={footer} />
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
}
