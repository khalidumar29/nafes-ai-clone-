'use client'

import { MoveUpRight } from 'lucide-react'
import Image from 'next/image'
import { Media } from '@/payload-types'

type WorkFlowBlockProps = {
  title: string
  highlight: string
  description?: string
  intro?: string
  items: { text: string }[]
  image?: Media | null
}

const WorkFlow: React.FC<WorkFlowBlockProps> = ({
  title,
  highlight,
  description,
  intro,
  items,
  image,
}) => {
  return (
    <div className="container">
      <div className="sm:w-1/2">
        <h1 className="font-bold text-[64px] mb-[45px]">
          {title} <br />
          <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 bg-clip-text text-transparent">
            {highlight}
          </span>
        </h1>
        {description && <p className="text-sm text-[#212529] leading-[1.5]">{description}</p>}
      </div>

      <div className="w-full grid sm:grid-cols-2 grid-cols-1">
        <div className="mt-10 sm:mt-0 sm:w-[488px] w-full flex flex-col gap-[30px] justify-center items-center">
          {intro && <p>{intro}</p>}
          <div className="bg-[#dff1ef] rounded-[24px] p-5 flex flex-col gap-4">
            {items?.map((item, i) => (
              <div key={i} className="flex">
                <MoveUpRight className="text-[#0daca4] mr-2" />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {image && typeof image.url === 'string' && (
          <div>
            <Image
              src={image.url}
              alt={image.alt || 'Workflow image'}
              width={400}
              height={400}
              className="sm:w-[90%] w-full sm:h-[600px]"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default WorkFlow
