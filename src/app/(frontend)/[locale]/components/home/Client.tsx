'use client'

import ReviewCard from '@/components/shared/ReviewCard'
import { Media } from '@/payload-types'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type Review = {
  name: string
  role?: string
  feedback: string
  avatar?: Media | null
  rating?: number
}

type ClientTestimonialsBlockProps = {
  title: string
  reviews: Review[]
}

const Client: React.FC<ClientTestimonialsBlockProps> = ({ title, reviews }) => {
  return (
    <div className="py-20 px-6 bg-[#e3f2ff] mb-[100px]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 text-center mb-16">{title}</h2>

        <div className="max-w-7xl mx-auto">
          <div className="relative py-6">
            <Swiper
              modules={[Pagination, Navigation]}
              spaceBetween={32}
              slidesPerView={1}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet !w-3 !h-3 !bg-gray-300 !opacity-100',
                bulletActiveClass: 'swiper-pagination-bullet-active !bg-teal-500',
                el: '.client-pagination',
              }}
              breakpoints={{
                640: { slidesPerView: 1.5 },
                1024: { slidesPerView: 3 },
              }}
            >
              {reviews.map((review, i) => (
                <SwiperSlide className="py-3" key={i}>
                  <ReviewCard review={review} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="client-pagination flex justify-center space-x-3 mt-8"></div>
        </div>
      </div>
    </div>
  )
}

export default Client
