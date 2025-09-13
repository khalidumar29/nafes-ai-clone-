'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

type TitleLine = {
  line: string
}

type FAQItem = {
  question: string
  answer: string
}

type FAQBlockProps = {
  titleLines: TitleLine[]
  faqs: FAQItem[]
}

export const FAQ: React.FC<FAQBlockProps> = ({ titleLines, faqs }) => {
  return (
    <div className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Title */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              {titleLines.map((lineObj, i) => (
                <span key={i}>
                  {lineObj.line}
                  <br />
                </span>
              ))}
            </h2>
          </div>

          {/* Right Side - Accordion */}
          <div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}
                  className="border-b border-gray-200"
                >
                  <AccordionTrigger className="text-left text-lg font-medium text-gray-900 py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}
