'use client'

import BlogCard from '@/components/shared/BlogCard'
import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Blogs = ({ articles }: { articles: any[] }) => {
  return (
    <div className=" px-6 bg-white pb-[100px]">
      <div className="max-w-7xl mx-auto">
        {/* Blog Posts Swiper */}
        <div className="relative">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={32}
            slidesPerView={1}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !w-3 !h-3 !bg-gray-300 !opacity-100',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-teal-500',
              el: '.blog-pagination',
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
              },
              1024: {
                slidesPerView: 2.2,
              },
            }}
            // className="pb-16"
          >
            {/* Blog Post 1 */}
            {articles.map((article, i) => (
              <SwiperSlide key={i}>
                <BlogCard article={article} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="blog-pagination flex justify-center space-x-3 mt-8"></div>
        </div>
        <Button className="w-fit text-[#0daca3]">
          Read More <MoveRight className="ml-2" />
        </Button>
      </div>
    </div>
  )
}

export default Blogs
