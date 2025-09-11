'use client'
import ReviewCard from '@/components/shared/ReviewCard'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Client = () => {
  return (
    <div className="py-20 px-6 bg-[#e6f7f6]  mb-[100px]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 text-center mb-16">
          Our Clients Feedback
        </h2>

        {/* Testimonials Grid */}
        {/* Testimonial 1 */}
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
                el: '.clint-pagination',
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1.5,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              // className="pb-16"
            >
              {/* Blog Post 1 */}
              {Array.from({ length: 5 }, (_, i) => (
                <SwiperSlide className="py-3" key={i}>
                  <ReviewCard />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Pagination */}
          </div>
          <div className="clint-pagination flex justify-center space-x-3 mt-8"></div>
        </div>
      </div>
    </div>
  )
}

export default Client
