import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/Popover'
import { SlidersVertical } from 'lucide-react'
import Image from 'next/image'
import banner from '../../../../public/images/banner.svg'
import bp from '../../../../public/images/bp.webp'
const Page = () => {
  return (
    <section>
      <section className="container mt-10">
        <div className="grid grid-cols-2 gap-5">
          <div className="my-[60px]">
            <h1 className="text-[62px] font-bold leading-[1.3] mt-[1em]">
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
        <div className="grid grid-cols-2 gap-10">
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
            <Button variant="outline">Continue Reading</Button>
          </div>
        </div>
        <section className="mt-[175px]">
          <div className="flex items-center justify-between">
            <h3 className="text-[53px] font-semibold">More Articles</h3>
            <div className="flex gap-5">
              <Input placeholder="Search for an Artical" />
              <Popover>
                <PopoverTrigger>
                  <SlidersVertical />
                </PopoverTrigger>
                <PopoverContent>Place content for the popover here.</PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="mt-[130px] mb-[100px]">
            <div className="grid grid-cols-2 gap-[55px]">
              {Array.from({ length: 5 }, (_, i) => (
                <div key={i} className={i % 2 === 0 ? '-mt-[80px]' : ''}>
                  <div className="max-h-[320px]">
                    <Image
                      src={banner}
                      alt="banner "
                      className="max-h-[320px] h-full w-full object-cover"
                    ></Image>
                  </div>
                  <div className="flex justify-between my-5">
                    <div className="bg-[#5b39bb] font-bold text-[14px] text-white px-[24px] py-[8px] rounded-full">
                      المنافسات
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-[30px] my-[25px]">
                      كل ما تريد معرفته حول نظام المزايدات في المنافسات التجارية مع نافس
                    </h4>
                    <p className="text-sm">
                      هل تتنافس في مزاد علني للفوز بفرصة؟ تعرف على كل شيء حول نظام المزايدات والتعرف
                      على أنواع المزايدات الإلكترونية، وكيفية تطوير استراتيجية رابحة مع دليل نافِس
                      الشامل.{' '}
                    </p>
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
