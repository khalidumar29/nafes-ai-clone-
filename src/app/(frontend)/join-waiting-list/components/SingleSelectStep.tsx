'use client'
import { FormData } from '@/type'
import FormButtonContainer from './FormButtonContainer'
import SelectLabel from './SelectLabel'

interface SingleSelectStepProps {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
  formData: FormData
  items: string[]
  name: string
  currentStep: number
}

const SingleSelectStep: React.FC<SingleSelectStepProps> = ({
  setCurrentStep,
  setFormData,
  formData,
  items,
  name,
  currentStep,
}) => {
  return (
    <div>
      <div className="flex flex-col gap-5 mb-5">
        {items.map((item, i) => (
          <SelectLabel
            key={item}
            item={item}
            selectedItem={formData[name]}
            name={name}
            setFormData={setFormData}
            className="justify-start"
          />
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
