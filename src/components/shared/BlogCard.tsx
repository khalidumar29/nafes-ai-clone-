import { cn } from '@/utilities/ui'
import Image from 'next/image'
import Link from 'next/link'
import banner from '../../../public/images/banner.svg'
const BlogCard = ({ className }) => {
  return (
    <div className={cn(className)}>
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
        <Link
          href="/blogs/1"
          className="font-bold text-[30px] my-[25px] hover:underline hover:text-[#5b39bb] transition-colors"
        >
          كل ما تريد معرفته حول نظام المزايدات في المنافسات التجارية مع نافس
        </Link>
        <p className="text-sm">
          هل تتنافس في مزاد علني للفوز بفرصة؟ تعرف على كل شيء حول نظام المزايدات والتعرف على أنواع
          المزايدات الإلكترونية، وكيفية تطوير استراتيجية رابحة مع دليل نافِس الشامل.{' '}
        </p>
      </div>
    </div>
  )
}

export default BlogCard
