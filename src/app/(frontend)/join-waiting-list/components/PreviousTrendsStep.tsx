import { FormData } from '@/type'
import React from 'react'
import FormButtonContainer from './FormButtonContainer'
import SelectLabel from './SelectLabel'

interface PreviousTrendsStepProps {
  averageItems: string[]
  participateItems: string[]
  formData: FormData
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
  currentStep: number
}

const PreviousTrendsStep: React.FC<PreviousTrendsStepProps> = ({
  averageItems,
  participateItems,
  formData,
  setFormData,
  setCurrentStep,
  currentStep,
}) => {
  return (
    <div className="w-full">
      <div className="flex gap-[16px] mb-[32px]">
        {averageItems.map((item) => (
          <SelectLabel
            key={item}
            item={item}
            selectedItem={formData.averageRate}
            name={'averageRate'}
            setFormData={setFormData}
          />
        ))}
      </div>
      <p className="font-bold text-2xl leading-10 mb-[32px]">
        How many tenders do you participate in per month?
      </p>
      <div className="flex gap-[16px] mb-[32px]">
        {participateItems.map((item) => (
          <SelectLabel
            key={item}
            item={item}
            selectedItem={formData.tendersPerMonth}
            name={'tendersPerMonth'}
            setFormData={setFormData}
          />
        ))}
      </div>
      <FormButtonContainer
        currentStep={currentStep}
        isDisable={!formData.averageRate || !formData.tendersPerMonth}
        handleBack={() => setCurrentStep((prev) => prev - 1)}
        handleNext={() => setCurrentStep((prev) => prev + 1)}
      />
    </div>
  )
}

export default PreviousTrendsStep
