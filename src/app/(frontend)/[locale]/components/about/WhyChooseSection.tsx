'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'

interface WhyChooseProps {
  title: string
  highlightText?: string
  description?: string
  cards?: {
    id: string
    title: string
    description?: string
    img?: { url: string; alt?: string }
  }[]
  ctaText?: string
  ctaLink?: string
}

const WhyChooseSection = ({
  title,
  highlightText,
  description,
  cards = [],
  ctaText,
  ctaLink,
}: WhyChooseProps) => {
  return (
    <section className="my-[100px]">
      <div className="container">
        <h1 className="sm:text-[64px] text-[40px] font-bold text-start leading-[1.3]">
          {title}{' '}
          {highlightText && (
            <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 bg-clip-text text-transparent">
              {highlightText}
            </span>
          )}
          ?
        </h1>

        {description && <p className="sm:w-[50%] mt-[30px] mb-[40px]">{description}</p>}

        <div className="grid sm:grid-cols-3 grid-cols-1 gap-5">
          {cards.map((item) => (
            <div key={item.id} className="p-[24px] border rounded-[10px] flex flex-col gap-[24px]">
              <div className="w-[64px] h-[64px] bg-[#dff1ef] rounded-full flex items-center justify-center mb-4">
                {item.img?.url && (
                  <Image
                    src={item.img.url}
                    alt={item.img.alt || 'card image'}
                    width={40}
                    height={40}
                  />
                )}
              </div>
              <h3 className="font-bold text-2xl mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-[1.7]">{item.description}</p>
            </div>
          ))}
        </div>

        {ctaText && (
          <div className="mt-10 flex items-center justify-center">
            <Link href={ctaLink || '#'}>
              <Button variant="outline">
                {ctaText} <MoveRight className="ml-2" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default WhyChooseSection
