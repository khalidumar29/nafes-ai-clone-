// blogs/[id]
import LocaleLink from '@/components/shared/LocaleLink'
import { getPayload } from '@/lib/payload'
import { RichText, defaultJSXConverters } from '@payloadcms/richtext-lexical/react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import * as React from 'react'
import img from '../../../../../../public/images/banner.svg'

const Page = async ({ params }: { params: Promise<{ locale: string; id: string }> }) => {
  const { locale, id } = await params
  console.log('Locale:', locale, 'ID:', id)

  const payload = await getPayload()
  const { docs } = await payload.find({
    collection: 'posts',
    limit: 5,
    where: {
      publishedAt: { not_equals: null },
      slug: {
        equals: id,
      },
    },
    sort: '-publishedAt',
    locale: locale as 'en' | 'ar',
    depth: 1,
    overrideAccess: true,
  })
  if (!docs || docs.length === 0) return notFound()
  const { docs: sideBarDocs } = await payload.find({
    collection: 'posts',
    limit: 5,
    where: {
      publishedAt: { not_equals: null },
      slug: {
        not_equals: id,
      },
    },
    sort: '-publishedAt',
    locale: locale as 'en' | 'ar',
    depth: 1,
    overrideAccess: true,
  })
  console.log('Docs:', docs)
  return (
    <section className="container">
      <div className="mt-20 grid grid-cols-3 gap-[30px] mb-[10em]">
        <div className="sm:col-span-2 col-span-3">
          <div className="bg-[#5b39bb] w-fit font-bold text-[14px] text-white px-[24px] py-[8px] rounded-full">
            {docs && docs[0]?.heroTag ? docs[0]?.heroTag : ''}
          </div>
          <h1 className="font-bold text-[36px] mt-10">
            {docs && docs[0]?.title ? docs[0]?.title : ''}
          </h1>
          <p className="mt-5">
            {docs && docs[0]?.publishedAt
              ? new Date(docs[0]?.publishedAt).toLocaleDateString('ar-SA', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })
              : ''}
          </p>
          <div className="w-full rounded-5 max-h-[350px] h-full mt-8">
            <Image
              src={
                docs[0].heroImage
                  ? typeof docs[0].heroImage === 'string'
                    ? docs[0].heroImage
                    : typeof docs[0].heroImage === 'object' &&
                        docs[0].heroImage !== null &&
                        'url' in docs[0].heroImage
                      ? (docs[0].heroImage as { url: string }).url
                      : img
                  : img
              }
              alt="img"
              className="max-h-[350px] w-full object-cover rounded-[20px]"
              width={1200}
              height={350}
            />
          </div>
          <div className="mt-[30px]">
            <RichText
              converters={{
                ...defaultJSXConverters,
                paragraph: ({ node, nodesToJSX }) => (
                  <p className="">{nodesToJSX({ parent: node, nodes: node.children })}</p>
                ),
                blockquote: ({ node, nodesToJSX }) => (
                  <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                    {nodesToJSX({ parent: node, nodes: node.children })}
                  </blockquote>
                ),
                heading: ({ node, nodesToJSX }) => {
                  // Ensure node.tag is a valid heading level (1-6)
                  const level =
                    typeof node.tag === 'number' && node.tag >= 1 && node.tag <= 6 ? node.tag : 1
                  const Tag = `h${level}` // Always a string like 'h1', 'h2', etc.
                  const classes =
                    level === 1
                      ? 'text-4xl font-bold my-4'
                      : level === 2
                        ? 'text-3xl font-bold my-3'
                        : level === 3
                          ? 'text-2xl font-bold my-2'
                          : 'text-xl font-bold my-1'
                  return React.createElement(
                    Tag,
                    { className: classes },
                    nodesToJSX({ parent: node, nodes: node.children }),
                  )
                },
                link: ({ node, nodesToJSX }) => {
                  const url = node.fields?.url || ''
                  const isInternal = url.startsWith('/')
                  return (
                    <a
                      href={url}
                      target={isInternal ? '_self' : '_blank'}
                      rel={isInternal ? undefined : 'noopener noreferrer'}
                      className="text-blue-600 underline"
                    >
                      {nodesToJSX({ parent: node, nodes: node.children })}
                    </a>
                  )
                },
              }}
              data={docs[0].content}
            />
          </div>
        </div>
        <div className="col-span-3 sm:col-span-1 mt-20 sm:mt-0 ">
          {/* <SearchInput /> */}
          <h1 className="font-bold text-[36px] my-8">
            {locale === 'en' ? 'Related Articles' : 'مقالات أخرى'}
          </h1>
          <div>
            {sideBarDocs.map((doc, i) => (
              <LocaleLink href={'#'} key={i} className="mb-10 flex gap-[20px] ">
                <Image
                  src={
                    typeof doc.heroImage === 'string'
                      ? doc.heroImage
                      : typeof doc.heroImage === 'object' &&
                          doc.heroImage !== null &&
                          'url' in doc.heroImage
                        ? (doc.heroImage as { url: string }).url
                        : ''
                  }
                  width={82}
                  height={82}
                  alt="img"
                  className="w-[82px] h-[82px] rounded-[5px] object-cover"
                ></Image>
                <div>
                  <p className="text-[18px] leading-[1.3]">{doc.title}</p>
                  <p className="mt-5 text-[#555a65] text-[16px]">
                    {doc.publishedAt
                      ? new Date(doc.publishedAt).toLocaleDateString(locale, {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })
                      : ''}
                  </p>
                </div>
              </LocaleLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export async function generateMetadata() {
  return {
    title: `Ostool | Blogs`,
  }
}

export default Page
