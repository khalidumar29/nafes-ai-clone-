'use client'

import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Image from 'next/image'

 const AboutHero = ({ titleLines, companies }: any) => {
  return (
    <section className="text-center py-[50px] sm:py-[100px]">
      <h1 className="sm:text-[72px] text-[40px] font-bold leading-[1.3] mt-[1em]">
        {titleLines.map((line: any, i: number) => (
          <span key={i}>
            {line.isGradient ? (
              <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 bg-clip-text text-transparent">
                {line.text}
              </span>
            ) : (
              line.text
            )}
            <br />
          </span>
        ))}
      </h1>

      <div className="sm:pt-[93px] pt-[50px]">
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
            320: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 9 },
          }}
        >
          {companies?.map((company: any, index: number) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <div className="w-[119px] h-[119px] border p-[20px] rounded-[8px] bg-white flex items-center justify-center">
                <Image
                  src={company.logo.url}
                  alt="company logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default AboutHero