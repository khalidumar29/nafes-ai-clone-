'use client'
import { useState } from 'react'
import FinalStep from './FinalStep'
import PreviousTrendsStep from './PreviousTrendsStep'
import SingleSelectStep from './SingleSelectStep'
import StepContainer from './StepContainer'
import UserForm from './UserForm'

const MultiStepForm = () => {
  const allSteps = [
    {
      step: 1,
      title: 'What are your objectives from using Nafes?',
    },
    {
      step: 2,
      title: 'Which platforms you user to access tenders?',
    },
    {
      step: 3,
      title: 'What is your average win rate in tenders?',
    },
    {
      step: 4,
      title: 'Please fill in your information',
    },
    {
      step: 5,
      title: '',
    },
  ]
  const [formData, setFormData] = useState({
    objective: '',
    platforms: '',
    averageRate: '',
    tendersPerMonth: '',
    full_name: '',
    email: '',
    company_name: '',
    mobile: '',
  })
  const [currentStep, setCurrentStep] = useState(1)
  const currentTitle = allSteps.find((item) => item.step === currentStep)?.title
  const objectiveItems = [
    'Reduce non-compliance',
    'Automate manual tasks',
    'Get more business intelligence',
  ]
  const platformItems = [
    'Etimad only',
    'Etimad and other platforms',
    'We haven’t accessed any tenders related platforms',
  ]
  const participateItems = ['0', '1-3', '4-10', '10+']
  const averageItems = ['Never won', '10% - 20%', '20% +']
  const renderForm = (step) => {
    switch (step) {
      case 1:
        return (
          <SingleSelectStep
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            setFormData={setFormData}
            formData={formData}
            items={objectiveItems}
            name="objective"
          />
        )
      case 2:
        return (
          <SingleSelectStep
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            setFormData={setFormData}
            formData={formData}
            items={platformItems}
            name={'platforms'}
          />
        )
      case 3:
        return (
          <PreviousTrendsStep
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            setFormData={setFormData}
            formData={formData}
            averageItems={averageItems}
            participateItems={participateItems}
          />
        )
      case 4:
        return (
          <UserForm
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            setFormData={setFormData}
            formData={formData}
          />
        )
      case 5:
        return (
          <FinalStep
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            setFormData={setFormData}
            formData={formData}
          />
        )

      default:
        return (
          <SingleSelectStep
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            setFormData={setFormData}
            formData={formData}
            items={objectiveItems}
            name="objective"
          />
        )
    }
  }
  return (
    <div className="bg-white rounded-xl p-8 max-w-[560px] mx-auto shadow-[0_4px_16px_rgba(0,0,0,0.1)] border border-gray-200 m-0 flex flex-col gap-8 relative">
      <StepContainer allSteps={allSteps} currentStep={currentStep} />
      {currentTitle ? <p className="font-bold text-2xl leading-10">{currentTitle}</p> : ''}
      {renderForm(currentStep)}
    </div>
  )
}

export default MultiStepForm
