import BlogCard from '@/components/shared/BlogCard'
import SearchInput from '@/components/shared/SearchInput'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/Popover'
import { SlidersVertical } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import banner from '../../../../public/images/banner.svg'
import bp from '../../../../public/images/bp.webp'
const Page = () => {
  return (
    <section>
      <section className="container mt-10">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
          <div className="sm:my-[60px] my-[0px]">
            <h1 className="sm:text-[62px] text-[40px] font-bold leading-[1.3] mt-[1em]">
              Recent Articles from Our Blog
            </h1>
            <p className="text-[18px] leading-[1.7] text-[#374151] mt-[25px]">
              The Nafes Blog is the go-to resource for ambitious entrepreneurs, offering reliable
              and comprehensive content that clarifies the complete administrative process of
              bidding. It highlights key requirements, instructions, laws, and regulations while
              providing practical advice and leading economic trends to enhance your chances of
              winning tender
            </p>
          </div>
          <div>
            <Image src={bp} alt="bp" width={800} height={800}></Image>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
          <div className="max-h-[340px]">
            <Image src={banner} alt="banner" className="w-full object-cover max-h-[340px]"></Image>
          </div>
          <div>
            <p className="#555a65">March 11, 2024 - فريق نافس</p>
            <h3 className="text-[30px] font-bold text-[#2b2d33]">
              كل ما تريد معرفته حول نظام المزايدات في المنافسات التجارية مع نافس
            </h3>
            <p className="my-[28px] text-[#666]">
              هل تتنافس في مزاد علني للفوز بفرصة؟ تعرف على كل شيء حول نظام المزايدات والتعرف على
              أنواع المزايدات الإلكترونية، وكيفية تطوير استراتيجية رابحة مع دليل نافِس الشامل.
            </p>
            <Link href="/blogs/1">
              {' '}
              <Button variant="outline">Continue Reading</Button>
            </Link>
          </div>
        </div>
        <section className="sm:mt-[175px] mt-[100px]">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <h3 className="sm:text-[53px] text-[35px] font-semibold">More Articles</h3>
            <div className="flex gap-5">
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
            </div>
          </div>
          <div className="mt-[130px] mb-[100px]">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-[55px]">
              {Array.from({ length: 5 }, (_, i) => (
                <BlogCard key={i} className={i % 2 === 0 ? 'sm:-mt-[80px]' : ''} />
              ))}
            </div>
          </div>
        </section>
      </section>
    </section>
  )
}

export default Page
