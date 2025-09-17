'use client'

import LocaleLink from '@/components/shared/LocaleLink'
import { Button } from '@/components/ui/button' // Assuming you have a reusable Button component
import { ArrowRight } from 'lucide-react'

// Define the types for the component props based on the Payload block fields
type CtaSectionProps = {
  mainHeading: string
  description: string
  ctaText: string
  ctaLink?: string
}

export const CtaSection = ({ mainHeading, description, ctaText, ctaLink }: CtaSectionProps) => {
  const content = (
    <Button
      className="bg-black hover:bg-gray-800 text-white px-8 py-4 h-auto text-lg font-medium rounded-lg flex items-center space-x-3 mx-auto"
      aria-label={ctaText}
    >
      <span className="text-teal-400">{ctaText}</span>
      <ArrowRight className="w-5 h-5 text-teal-400" />
    </Button>
  )

  return (
    <section>
      <div className="sm:py-20 px-6 py-10 ">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">{mainHeading}</h2>

          {/* Description Text */}
          <p className="text-lg text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
            {description}
          </p>

          {/* CTA Button with optional link */}
          {ctaLink ? (
            <LocaleLink href={ctaLink}>{content}</LocaleLink>
          ) : (
            <div className="cursor-pointer">{content}</div>
          )}
        </div>
      </div>
    </section>
  )
}
