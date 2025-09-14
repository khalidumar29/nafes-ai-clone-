'use client'
import { cn } from '@/utilities/ui'
import FormButtonContainer from './FormButtonContainer'

const SingleSelectStep = ({ setCurrentStep, setFormData, formData, items, name, currentStep }) => {
  return (
    <div>
      <div className="flex flex-col gap-5 mb-5">
        {items.map((item, i) => (
          <div
            key={i}
            className={cn(
              'flex items-center justify-start px-6 h-[75px]  rounded-[10px] border cursor-pointer ',
              formData[name] === item && 'text-white bg-[#0daca3]',
            )}
            onClick={() => setFormData({ ...formData, [name]: item })}
          >
            <p>{item}</p>
          </div>
        ))}
      </div>
      <FormButtonContainer
        currentStep={currentStep}
        isDisable={!formData[name]?.length}
        handleBack={() => setCurrentStep((prev) => prev - 1)}
        handleNext={() => setCurrentStep((prev) => prev + 1)}
      />
    </div>
  )
}

export default SingleSelectStep
