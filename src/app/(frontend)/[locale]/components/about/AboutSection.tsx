'use client'

import Image from 'next/image'

const AboutSection = ({ title, description, image, items = [] }: any) => {
  return (
    <section className="bg-[linear-gradient(to_bottom,#fff_0%,#e6f7f6_27.88%,#e6f7f6_82.69%,#fff_100%)]">
      <div className="container">
        {/* Main Title */}
        <div className="flex justify-center items-center w-full">
          <h1 className="sm:text-[64px] text-[40px] font-bold text-center leading-[1.3] sm:w-[60%]">
            {title}
          </h1>
        </div>

        {/* Description */}
        {description && (
          <div className="flex items-center justify-center w-full">
            <p className="text-[rgb(55,65,81)] text-center mt-[30px] mb-[60px] max-w-2xl">
              {description}
            </p>
          </div>
        )}

        {/* Background Image */}
        {image?.url && (
          <div className="bg-no-repeat bg-cover bg-[center_bottom] h-fit">
            <Image
              src={image.url}
              alt={image.alt || 'About Image'}
              width={1200}
              height={400}
              className="w-full sm:h-[300px] object-cover rounded-[20px]"
            />
          </div>
        )}

        {/* Items: Vision / Mission / Values */}
        <div className="mt-[65px] px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {items.map((item: any, idx: number) => (
                <div key={idx} className="relative">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{item.heading}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                  {idx < items.length - 1 && (
                    <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-gray-200"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
