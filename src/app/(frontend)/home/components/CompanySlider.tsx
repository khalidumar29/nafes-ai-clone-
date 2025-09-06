'use client'

import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const CompanySlider = () => {
  return (
    <div className="py-[20px] px-[10px]">
      <Swiper
        spaceBetween={0}
        slidesPerView={9}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={3000}
        modules={[Autoplay]}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {Array.from({ length: 20 }, (_, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <div className="w-[119px] h-[119px] border p-[20px] rounded-[8px] bg-white">
              slide {index + 1}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CompanySlider
