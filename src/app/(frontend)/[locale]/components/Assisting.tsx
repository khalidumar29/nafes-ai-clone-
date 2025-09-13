'use client'

import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import { Media } from '@/payload-types'

type TitleLine = {
  line: string
}

type AssistingBlockProps = {
  titleLines: TitleLine[]
  highlightText: string
  buttonText: string
  image: Media
}

const Assisting = ({ titleLines, highlightText, buttonText, image }: AssistingBlockProps) => {
  console.log('image', image)

  return (
    <div className="container">
      <div className="sm:py-[40px] sm:px-[80px] py-[20px] px-[40px] bg-[#E6F6F6] grid sm:grid-cols-2 grid-cols-1 rounded-[24px]">
        {/* Text Section */}
        <div className="flex flex-col justify-center sm:gap-[60px] gap-[20px]">
          <h3 className="sm:text-[64px] text-[40px] sm:leading-[65px] leading-[40px] font-bold">
            {titleLines.map((lineObj, i) => {
              const line = lineObj.line
              if (line.includes(highlightText)) {
                const parts = line.split(highlightText)
                return (
                  <span key={i}>
                    {parts[0]}
                    <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 bg-clip-text text-transparent">
                      {highlightText}
                    </span>
                    {parts[1]}
                    <br />
                  </span>
                )
              }
              return (
                <span key={i}>
                  {line}
                  <br />
                </span>
              )
            })}
          </h3>

          <Button className="w-fit text-[#0daca3]">
            {buttonText} <MoveRight className="ml-2" />
          </Button>
        </div>

        {/* Image Section */}
        <div>
          <div className="relative -bottom-[44px]">
            {image?.url && (
              <Image
                src={image.url}
                alt={highlightText}
                width={500}
                height={500}
                className="object-contain"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Assisting
