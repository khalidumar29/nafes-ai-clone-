// blogs page
import LocaleLink from '@/components/shared/LocaleLink'
import { Button } from '@/components/ui/button'
import { getPayload } from '@/lib/payload'
import { cn } from '@/utilities/ui'
import Image from 'next/image'
const Page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params
  const payload = await getPayload()
  const { docs } = await payload.find({
    collection: 'posts',
    limit: 5,
    where: {
      publishedAt: { not_equals: null },
    },
    locale: locale as 'en' | 'ar',
    sort: '-publishedAt',
    depth: 1,
    overrideAccess: true,
  })

  const blogPageData = await payload.findGlobal({
    slug: 'blog-page',
    depth: 1,
    locale: locale as 'en' | 'ar',
    overrideAccess: true,
  })

  return (
    <section>
      <section className="container mt-10">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
          <div className="sm:my-[60px] my-[0px]">
            <h1 className="sm:text-[62px] text-[40px] font-bold leading-[1.3] mt-[1em]">
              {blogPageData?.hero?.title}
            </h1>
            <p className="text-[18px] leading-[1.7] text-[#374151] mt-[25px]">
              {blogPageData?.hero?.description}
            </p>
          </div>
          <div>
            <Image
              src={
                typeof blogPageData?.hero?.image === 'string'
                  ? blogPageData.hero.image
                  : typeof blogPageData?.hero?.image === 'object' &&
                      blogPageData?.hero?.image !== null &&
                      'url' in blogPageData.hero.image &&
                      typeof blogPageData.hero.image.url === 'string'
                    ? blogPageData.hero.image.url
                    : ''
              }
              alt="bp"
              width={800}
              height={800}
            ></Image>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
          <div className="max-h-[340px]">
            <img
              src={
                typeof blogPageData?.hero?.image === 'object' &&
                blogPageData?.hero?.image !== null &&
                'url' in blogPageData.hero.image &&
                typeof blogPageData.hero.image.url === 'string'
                  ? blogPageData.hero.image.url
                  : ''
              }
              alt="banner"
              className="w-full object-cover max-h-[340px]"
            />
          </div>
          <div>
            <p className="#555a65">
              {typeof blogPageData.featuredPost === 'object' &&
              blogPageData.featuredPost !== null &&
              'publishedAt' in blogPageData.featuredPost &&
              blogPageData.featuredPost.publishedAt
                ? new Date(blogPageData.featuredPost.publishedAt).toLocaleDateString(locale, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })
                : ''}
            </p>
            <h3 className="text-[30px] font-bold text-[#2b2d33]">
              {typeof blogPageData.featuredPost === 'object' &&
              blogPageData.featuredPost !== null &&
              'title' in blogPageData.featuredPost
                ? blogPageData.featuredPost.title
                : ''}
            </h3>
            <p className="my-[28px] text-[#666]">
              {typeof blogPageData.featuredPost === 'object' &&
              blogPageData.featuredPost !== null &&
              'Short Description' in blogPageData.featuredPost
                ? blogPageData.featuredPost['Short Description']
                : ''}
            </p>
            <LocaleLink
              href={
                typeof blogPageData?.featuredPost === 'object' &&
                blogPageData.featuredPost !== null &&
                'slug' in blogPageData.featuredPost &&
                typeof blogPageData.featuredPost.slug === 'string'
                  ? `/blogs/${blogPageData.featuredPost.slug}`
                  : '#'
              }
            >
              <Button variant="outline">{blogPageData?.featurePostButtonText}</Button>
            </LocaleLink>
          </div>
        </div>
        <section className="sm:mt-[175px] mt-[100px]">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <h3 className="sm:text-[53px] text-[35px] font-semibold">
              {blogPageData?.moreArticlesTitle}
            </h3>
            {/* <div className="flex gap-5">
              <SearchInput />
              <Popover>
                <PopoverTrigger className="hover:bg-teal-500 hover:border-none border border-black px-4 py-1 rounded">
                  <SlidersVertical />
                </PopoverTrigger>
                <PopoverContent className="mr-10 rounded">
                  <p className="font-bold">Sorted by</p>
                  <div className="my-5 space-y-5">
                    <div className="flex items-center gap-3">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms">Newest First</Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <Checkbox id="a" />
                      <Label htmlFor="a">Last First</Label>
                    </div>
                  </div>
                  <p className="font-bold">Categories</p>
                  <div className="my-5 space-y-5">
                    <div className="flex items-center gap-3">
                      <Checkbox id="n" />
                      <Label
                        className="bg-[#f59e0b] rounded-full px-6 py-2 font-bold text-white"
                        htmlFor="n"
                      >
                        المزايدات{' '}
                      </Label>
                    </div>
                  </div>
                  <div>
                    <Button className="w-full text-teal-500">Save</Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div> */}
          </div>
          <div className="mt-[130px] mb-[100px]">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-[55px]">
              {docs.map((doc, i) => (
                <div key={i} className={cn('')}>
                  <div className="max-h-[320px]">
                    <Image
                      src={
                        typeof doc.heroImage === 'string'
                          ? doc.heroImage
                          : typeof doc.heroImage === 'object' &&
                              doc.heroImage !== null &&
                              'url' in doc.heroImage &&
                              typeof doc.heroImage.url === 'string'
                            ? doc.heroImage.url
                            : ''
                      }
                      alt="banner "
                      className="max-h-[320px] h-full w-full object-cover"
                      width={600}
                      height={320}
                    />
                  </div>
                  <div className="flex justify-between my-5">
                    <div className="bg-[#5b39bb] font-bold text-[14px] text-white px-[24px] py-[8px] rounded-full">
                      {doc.heroTag}
                    </div>
                  </div>
                  <div>
                    <LocaleLink
                      href="/blogs/1"
                      className="font-bold text-[30px] my-[25px] hover:underline hover:text-[#5b39bb] transition-colors"
                    >
                      {doc.title}
                    </LocaleLink>
                    <p className="text-sm">{doc['Short Description']}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </section>
  )
}

export default Page
