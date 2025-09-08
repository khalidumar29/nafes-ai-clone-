import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const FAQ = () => {
  return (
    <div className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Title */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Frequently
              <br />
              asked
              <br />
              Questions
            </h2>
          </div>

          {/* Right Side - Accordion */}
          <div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border-b border-gray-200">
                <AccordionTrigger className="text-left text-lg font-medium text-gray-900 py-6 hover:no-underline">
                  How long does it take to get started with Nafes AI?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  Getting started with Nafes AI is quick and easy. You can begin using our platform
                  within minutes of signing up. Our onboarding process guides you through the
                  initial setup, and you'll be analyzing tenders and opportunities right away.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b border-gray-200">
                <AccordionTrigger className="text-left text-lg font-medium text-gray-900 py-6 hover:no-underline">
                  Who is Nafes AI for?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  Nafes AI is designed for businesses, contractors, and organizations that
                  participate in government and private sector tenders. Whether you're a small
                  business or a large enterprise, our platform helps you identify relevant
                  opportunities and improve your success rate.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b border-gray-200">
                <AccordionTrigger className="text-left text-lg font-medium text-gray-900 py-6 hover:no-underline">
                  What kind of support do you offer during subscription time?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  We provide comprehensive support throughout your subscription period, including
                  24/7 customer service, detailed documentation, video tutorials, and personalized
                  onboarding assistance. Our support team is always ready to help you maximize the
                  value of our platform.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b border-gray-200">
                <AccordionTrigger className="text-left text-lg font-medium text-gray-900 py-6 hover:no-underline">
                  How does Nafes AI help me win more tenders?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  Nafes AI uses advanced analytics to identify the most relevant tender
                  opportunities for your business, analyzes historical data to improve your bidding
                  strategy, and provides insights into competitor behavior and market trends,
                  significantly increasing your chances of winning.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-b border-gray-200">
                <AccordionTrigger className="text-left text-lg font-medium text-gray-900 py-6 hover:no-underline">
                  What is Nafes AI?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  Nafes AI is an intelligent tender analytics platform that helps businesses
                  discover, analyze, and win government and private sector tenders. Our AI-powered
                  system provides comprehensive market insights, competitor analysis, and strategic
                  recommendations to boost your revenue through successful tender participation.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
