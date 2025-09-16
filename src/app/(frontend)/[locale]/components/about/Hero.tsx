'use client'

import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Image from 'next/image'
import Link from 'next/link'
import { MoveRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const AboutHero = ({
  mainTitleLines = [],
  companies = [],
  secondaryTitle,
  description,
  ctaText,
  ctaLink,
  image,
}: any) => {
  return (
    <div className="container">
      {/* Main Title */}
      <h1 className="sm:text-[72px] text-[40px] font-bold leading-[1.3] mt-[1em]">
        {mainTitleLines.map((line: any, i: number) => (
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

      {/* Company Slider */}
      <div className="sm:pt-[93px] pt-[50px]">
        <Swiper
          spaceBetween={0}
          slidesPerView={9}
          autoplay={{ delay: 0, disableOnInteraction: false }}
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

      {/* Sub Section */}
      <div className="grid sm:grid-cols-2 grid-cols-1 mt-[60px]">
        <div className="flex flex-col gap-[25px] justify-center">
          <h2 className="sm:text-[62px] text-[40px] font-bold leading-[1.3]">{secondaryTitle}</h2>
          <p className="text-[#374151]">{description}</p>

          {ctaText && (
            <Link href={ctaLink || '#'}>
              <Button className="w-fit" variant="outline">
                {ctaText} <MoveRight className="ml-2" />
              </Button>
            </Link>
          )}
        </div>
        {image?.url && (
          <div>
            <Image
              src={image.url}
              alt={image.alt || 'Hero Right Image'}
              width={800}
              height={800}
              className="sm:ml-10"
            />
          </div>
        )}
      </div>
    </div>
  )
}
