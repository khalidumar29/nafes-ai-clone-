'use client'

import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const CompanySlider = ({ companyLogos }: { companyLogos: any[] }) => {
  console.log('company logo:', companyLogos[0].logo.url)

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
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 9,
          },
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {companyLogos.map((logo, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <div className="w-[119px] h-[119px] border p-[20px] rounded-[8px] bg-white">
              <img
                src={logo.logo.url}
                alt={`Logo ${index + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/*  */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CompanySlider
