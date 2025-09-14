import { cn } from '@/utilities/ui'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Image from 'next/image'
import Link from 'next/link'
const BlogCard = ({ className, article }: { className?: string; article: any }) => {
  return (
    <div className={cn(className)}>
      <div className="max-h-[320px]">
        <Image
          src={article.image.url}
          width={800}
          height={400}
          alt="banner "
          className="max-h-[320px] h-full w-full object-cover"
        ></Image>
      </div>
      <div className="flex justify-between my-5">
        <div className="bg-[#5b39bb] font-bold text-[14px] text-white px-[24px] py-[8px] rounded-full">
          {article.tag}
        </div>
      </div>
      <div>
        <Link
          href="/blogs/1"
          className="font-bold text-[30px] my-[25px] hover:underline hover:text-[#5b39bb] transition-colors"
        >
          {article.title}{' '}
        </Link>
        <div>
          <RichText data={article.description} />
        </div>
      </div>
    </div>
  )
}

export default BlogCard
