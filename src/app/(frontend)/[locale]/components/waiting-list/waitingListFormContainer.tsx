import Image from 'next/image'
import MultiStepForm from './MultiStepForm'
const MultiStepFormContainer = ({
  image,
  headline,
  subheadline,
  steps,
  submitButtonText = 'next',
  submissionThanks,
  submissionMessage,
  backToHomeText,
  locale,
}: {
  image: { url: string }
  headline: string
  subheadline: string
  steps: any[]
  submitButtonText: string
  submissionThanks?: string
  submissionMessage?: string
  backToHomeText?: string
  locale?: string
}) => {
  console.log(submitButtonText)

  return (
    <section className="w-full grid lg:grid-cols-2 grid-cols-1 mt-[50px]">
      <div>
        <Image src={image.url} width={800} height={800} className="w-[75%]" alt="img"></Image>
        {/* 
        bg-gradient-to-r from-[#00b3a4] via-[#00a5b6] via-[#008bd6] via-[#5861db] to-[#8150d4] bg-clip-text text-transparent
        */}
        <div className="text-end relative -top-5">
          <p className="inline-block text-primary leading-[60px] pb-2 text-[72px] font-semibold [text-rendering:optimizeLegibility]">
            {headline}
          </p>
          <p className="text-[28px] text-[#cfd1d4]">{subheadline}</p>
        </div>
      </div>
      <div>
        <MultiStepForm
          allStepsData={steps}
          submitButtonText={submitButtonText}
          submissionThanks={submissionThanks}
          submissionMessage={submissionMessage}
          backToHomeText={backToHomeText}
          locale={locale}
        />
      </div>
    </section>
  )
}

export default MultiStepFormContainer
