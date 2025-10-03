'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FormData } from '@/type'
import { cn } from '@/utilities/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'
import FinalStep from './FinalStep'
import StepContainer from './StepContainer'

const MultiStepForm = ({
  allStepsData,
  submitButtonText,
  submissionThanks,
  submissionMessage,
  backToHomeText,
  locale,
}: {
  allStepsData: any
  submitButtonText?: string
  submissionThanks?: string
  submissionMessage?: string
  backToHomeText?: string
  locale?: string
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1)

  const { schema, defaultValues } = useMemo(() => {
    const schemaShape: Record<string, any> = {}
    const defaultVals: Record<string, string> = {}
    const seen = new Set<string>()

    allStepsData?.forEach((step: any) => {
      step.fields?.forEach((field: any) => {
        field.inputs?.forEach((input: any) => {
          if (!seen.has(input.name)) {
            // All fields should be optional by default, we'll validate individually per step
            schemaShape[input.name] = z.string().optional()
            defaultVals[input.name] = ''
            seen.add(input.name)
          }
        })
      })
    })

    return {
      schema: z.object(schemaShape),
      defaultValues: defaultVals,
    }
  }, [allStepsData])

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    getValues,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: 'onChange',
  })

  const currentStepData = allStepsData?.find((item: any) => item.step === currentStep)
  const watchedValues = watch()

  const onSubmit = async (data: FormData) => {
    console.log('=== FORM SUBMISSION DEBUG ===')
    console.log('Form data received (already mapped during selection):', data)
    console.log('Form data keys:', Object.keys(data))
    console.log('Form data entries:', Object.entries(data))

    // Data is already mapped during selection, so we can use it directly
    const submissionData = { ...data }

    console.log('Final data being sent to API:', submissionData)

    try {
      const apiUrl = process.env.NEXT_PUBLIC_SERVER_URL || window.location.origin

      console.log('Sending data to API:', JSON.stringify(submissionData, null, 2))

      const res = await fetch(`${apiUrl}/api/waiting-form-submissions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData),
      })

      if (!res.ok) {
        const errorText = await res.text()
        console.error('Response error:', errorText)
        throw new Error(`Failed: ${res.status} - ${errorText}`)
      }

      const json = await res.json()
      console.log('Form submitted successfully:', json)
      console.log('Created record ID:', json.doc?.id)

      setCurrentStep((prev) => prev + 1)
    } catch (err) {
      console.error('Form submission error:', err)
      // You might want to show an error message to the user here
      alert('Something went wrong. Please try again.')
    }
  }

  const handleSelect = (name: keyof FormData, value: string) => {
    console.log(`=== FIELD SELECTION DEBUG ===`)
    console.log(`Setting field "${name}" to value:`, value)
    console.log('Current step:', currentStep)
    console.log('All current form values before update:', getValues())

    // Map field names based on current step and value to avoid conflicts
    let mappedFieldName = name

    if (name === 'company_name') {
      // Step 1: business type values stored in company_name field
      const businessTypeValues = [
        'Car rental company',
        'Car dealership',
        'Transportation & logistics company',
        'Private fleet owner',
        'Other',
      ]

      if (businessTypeValues.includes(value)) {
        mappedFieldName = 'business_type'
      }
    } else if (name === 'objective') {
      // Map objective field based on value patterns and current step
      if (['Less than 20', '20 – 100', '100 – 500', 'More than 500'].includes(value)) {
        mappedFieldName = 'fleet'
      } else if (
        [
          'Manually (paper/excel)',
          'Local software solution',
          'No system in place',
          'Other',
        ].includes(value)
      ) {
        mappedFieldName = 'manage_operation'
      } else if (
        [
          'High operational costs',
          'Lack of visibility over vehicles',
          'Manual paperwork & errors',
          'Regulatory compliance',
          'Other',
        ].includes(value)
      ) {
        mappedFieldName = 'challenge'
      }
    }

    console.log(`Mapping "${name}" → "${mappedFieldName}" with value: "${value}"`)
    setValue(mappedFieldName as keyof FormData, value, { shouldValidate: true })

    // Log values after update
    setTimeout(() => {
      console.log('All current form values after update:', getValues())
      console.log(
        `Confirmed field "${mappedFieldName}" is now:`,
        getValues()[mappedFieldName as keyof FormData],
      )
    }, 100)
  }

  return (
    <div className="bg-white rounded-xl p-8 max-w-[560px] mx-auto shadow-[0_4px_16px_rgba(0,0,0,0.1)] border border-gray-200 flex flex-col gap-8 relative">
      <StepContainer
        allSteps={allStepsData?.map((stepObj: any) => ({
          step: stepObj.step,
          title:
            stepObj?.fields?.length > 0 && stepObj.fields[0].title
              ? stepObj.fields[0].title
              : `Step ${stepObj.step}`,
        }))}
        currentStep={currentStep}
      />

      {currentStepData?.formType !== 'final' ? (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          {currentStepData?.fields?.map((items: any, i: number) => (
            <div key={i} className="w-full">
              {items.title && <p className="font-bold text-2xl leading-10">{items.title}</p>}

              {currentStepData.formType === 'select' ? (
                <div
                  className={cn(
                    'flex flex-col gap-5 mb-5 mt-[20px]',
                    currentStepData.fields.length > 1 && 'flex-row',
                  )}
                >
                  {items.inputs.map((input: any, j: number) => {
                    // Determine the correct field name to check for selection state
                    let fieldToCheck = input.name

                    if (input.name === 'company_name') {
                      // Step 1: business type values stored in company_name field
                      const businessTypeValues = [
                        'Car rental company',
                        'Car dealership',
                        'Transportation & logistics company',
                        'Private fleet owner',
                        'Other',
                      ]

                      if (businessTypeValues.includes(input.label)) {
                        fieldToCheck = 'business_type'
                      }
                    } else if (input.name === 'objective') {
                      // Map objective field based on value patterns
                      if (
                        ['Less than 20', '20 – 100', '100 – 500', 'More than 500'].includes(
                          input.label,
                        )
                      ) {
                        fieldToCheck = 'fleet'
                      } else if (
                        [
                          'Manually (paper/excel)',
                          'Local software solution',
                          'No system in place',
                          'Other',
                        ].includes(input.label)
                      ) {
                        fieldToCheck = 'manage_operation'
                      } else if (
                        [
                          'High operational costs',
                          'Lack of visibility over vehicles',
                          'Manual paperwork & errors',
                          'Regulatory compliance',
                          'Other',
                        ].includes(input.label)
                      ) {
                        fieldToCheck = 'challenge'
                      }
                    }

                    const isSelected = watchedValues[fieldToCheck as keyof FormData] === input.label

                    return (
                      <div
                        key={j}
                        onClick={() => handleSelect(input.name, input.label)}
                        className={cn(
                          'w-full text-lg h-[75px] flex items-center px-6 justify-start cursor-pointer border rounded-[10px] transition-all duration-200',
                          isSelected && 'bg-primary text-white border-primary',
                          !isSelected && 'border-gray-300 hover:border-primary hover:bg-primary/5',
                          currentStepData.fields.length > 1 && 'justify-center',
                        )}
                      >
                        <p>{input.label}</p>
                      </div>
                    )
                  })}
                </div>
              ) : currentStepData.formType === 'form' ? (
                <div className="space-y-4 mt-4">
                  {items.inputs.map((input: any, j: number) => (
                    <div key={j}>
                      <Label htmlFor={input.name}>{input.label || input.name}</Label>
                      <Input id={input.name} {...register(input.name)} />
                      {errors[input.name as keyof FormData] && (
                        <p className="text-red-500">
                          {errors[input.name as keyof FormData]?.message as string}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ))}

          <div className="w-full flex justify-between mt-5">
            {currentStep > 1 && (
              <Button onClick={() => setCurrentStep(currentStep - 1)} variant="ghost">
                {locale === 'en' ? <ArrowLeft /> : <ArrowRight />}
              </Button>
            )}
            <Button
              type="button"
              onClick={() => {
                console.log('Button clicked - Current step formType:', currentStepData?.formType)
                console.log('Button clicked - Current values:', getValues())

                if (currentStepData?.formType === 'form') {
                  // For form steps, validate only the current step fields
                  const currentStepFieldNames =
                    currentStepData?.fields?.flatMap(
                      (field: any) => field.inputs?.map((input: any) => input.name) || [],
                    ) || []

                  console.log('Validating fields for current step:', currentStepFieldNames)

                  // Check if current step fields are filled
                  const currentValues = getValues()
                  const currentStepValid = currentStepFieldNames.every((fieldName: string) => {
                    const value = currentValues[fieldName as keyof FormData]
                    const isValid = value && value.trim() !== ''
                    console.log(`Field ${fieldName}: "${value}" - valid: ${isValid}`)
                    return isValid
                  })

                  console.log('Current step validation result:', currentStepValid)

                  if (currentStepValid) {
                    const data = getValues()
                    onSubmit(data)
                  } else {
                    console.log('Current step validation failed - some fields are empty')
                    alert('Please fill in all required fields')
                  }
                } else {
                  console.log('Non-form step, incrementing...')
                  setCurrentStep(currentStep + 1)
                }
              }}
              variant="outline"
            >
              {submitButtonText} {locale === 'en' ? <ArrowRight /> : <ArrowLeft />}
            </Button>
          </div>
        </form>
      ) : (
        <FinalStep
          formData={watchedValues as FormData}
          submissionThanks={submissionThanks}
          submissionMessage={submissionMessage}
          backToHomeText={backToHomeText}
        />
      )}
    </div>
  )
}

export default MultiStepForm
