'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FormData } from '@/type'
import { cn } from '@/utilities/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'
import FinalStep from './FinalStep'
import StepContainer from './StepContainer'

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState<number>(1)

  const allStepsData = [
    {
      id: 0,
      step: 1,
      formType: 'select',

      field: [
        {
          id: 0,
          title: 'What are your objectives from using Nafes?',
          inputs: [
            {
              name: 'objective',
              value: 'Reduce non-compliance',
            },
            {
              name: 'objective',
              value: 'Automate manual tasks',
            },
            {
              name: 'objective',
              value: 'Get more business intelligence',
            },
          ],
        },
      ],
    },
    {
      id: 1,
      step: 2,
      formType: 'select',

      field: [
        {
          id: 0,
          title: 'Which platforms you user to access tenders?',
          inputs: [
            {
              name: 'platforms',
              value: 'Etimad only',
            },
            {
              name: 'platforms',
              value: 'Etimad and other platforms',
            },
            {
              name: 'platforms',
              value: 'We haven’t accessed any tenders related platforms',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      step: 3,
      formType: 'select',

      field: [
        {
          id: 1,
          title: 'What is your average win rate in tenders?',
          inputs: [
            {
              name: 'averageRate',
              value: 'Never won',
            },
            {
              name: 'averageRate',
              value: '10% - 20%',
            },
            {
              name: 'averageRate',
              value: '20% +',
            },
          ],
        },
        {
          id: 0,
          title: 'How many tenders do you participate in per month?',
          inputs: [
            {
              name: 'tendersPerMonth',
              value: '0',
            },
            {
              name: 'tendersPerMonth',
              value: '1-3',
            },
            {
              name: 'tendersPerMonth',
              value: '4-10',
            },
            {
              name: 'tendersPerMonth',
              value: '10+',
            },
          ],
        },
      ],
    },
    {
      id: 3,
      step: 4,
      formType: 'form',

      field: [
        {
          id: 1,
          title: 'Please fill in your information',
          inputs: [
            {
              name: 'Full Name',
              value: 'full_name',
            },
            {
              name: 'Email',
              value: 'email',
            },
            {
              name: 'Company Name',
              value: 'company_name',
            },
            {
              name: 'Mobile',
              value: 'mobile',
            },
          ],
        },
      ],
    },
    {
      id: 4,
      step: 5,
      formType: 'final',
      field: [],
    },
  ]
  const currentStepData = allStepsData.find((item) => item.step === currentStep)
  // Extended schema for all fields
  const schema = z.object({
    objective: z.string().min(1, 'Objective is required'),
    platforms: z.string().min(1, 'Platform is required'),
    averageRate: z.string().min(1, 'Average rate is required'),
    tendersPerMonth: z.string().min(1, 'Tenders per month is required'),
    full_name: z.string().min(1, 'Full name is required'),
    email: z.string().email('Invalid email'),
    company_name: z.string().min(1, 'Company name is required'),
    mobile: z.string().min(10, 'Mobile number must be at least 10 digits'),
  })

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      objective: '',
      platforms: '',
      averageRate: '',
      tendersPerMonth: '',
      full_name: '',
      email: '',
      company_name: '',
      mobile: '',
    },
  })
  console.log({ isValid, errors })

  const watchedValues = watch() // Watch all values for controlled selects

  const onSubmit = (data: FormData) => {
    if (currentStep < 5) {
      setCurrentStep((prev) => prev + 1)
    } else {
      // Final submission (e.g., send to API)
      console.log('Final data:', data)
      // Handle API call here
    }
  }
  const handleSelect = (name: keyof FormData, value: string) => {
    setValue(name, value, { shouldValidate: true }) // Use setValue for selects
  }
  return (
    <div className="bg-white rounded-xl p-8 max-w-[560px] mx-auto shadow-[0_4px_16px_rgba(0,0,0,0.1)] border border-gray-200 m-0 flex flex-col gap-8 relative">
      <StepContainer allSteps={allStepsData} currentStep={currentStep} />
      {currentStepData?.formType !== 'final' ? (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          {currentStepData?.field.map((items, i) => (
            <div key={i} className="w-full">
              {items.title && <p className="font-bold text-2xl leading-10">{items.title}</p>}
              {currentStepData.formType === 'select' ? (
                <div
                  className={cn(
                    'flex flex-col gap-5 mb-5 mt-[20px]',
                    currentStepData.field.length > 1 && 'flex-row',
                  )}
                >
                  {items.inputs.map((input, i) => (
                    <div
                      key={i}
                      onClick={() => handleSelect(input.name as keyof FormData, input.value)}
                      className={cn(
                        'w-full text-lg h-[75px] flex items-center px-6 justify-start cursor-pointer border rounded-[10px]',
                        watchedValues[input.name] === input.value && 'bg-[#0daca3] text-white',
                        currentStepData.field.length > 1 && 'justify-center',
                      )}
                    >
                      <p>{input.value}</p>
                    </div>
                  ))}
                </div>
              ) : currentStepData.formType === 'form' ? (
                <div className="space-y-4 mt-4">
                  {items.inputs.map((input, i) => (
                    <div key={i}>
                      <Label htmlFor={input.value}>{input.name}</Label>
                      <Input id={input.value} {...register(input.value as keyof FormData)} />
                      {errors[input.value] && (
                        <p className="text-red-500">{errors[input.value]?.message}</p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
          <div className="w-full flex justify-between mt-5">
            {currentStep > 1 && (
              <Button onClick={() => setCurrentStep(currentStep - 1)} variant="ghost">
                <ArrowLeft />
              </Button>
            )}
            <Button
              disabled={!isValid && currentStepData.formType === 'form'} // Disable next if invalid on form step
              onClick={() => setCurrentStep(currentStep + 1)}
              variant="outline"
              type={currentStepData.formType === 'form' ? 'submit' : 'button'}
            >
              Next <ArrowRight />
            </Button>
          </div>
        </form>
      ) : (
        <FinalStep formData={watchedValues} />
      )}
    </div>
  )
}

export default MultiStepForm
