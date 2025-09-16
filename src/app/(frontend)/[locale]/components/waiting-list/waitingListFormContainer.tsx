import Image from 'next/image'
import React from 'react'
import MultiStepForm from './MultiStepForm'

const waitingListFormContainer = () => {
  return (
    <div className="w-full grid lg:grid-cols-2 grid-cols-1 mt-[50px]">
      <div>
        <Image src={''} width={800} height={800} className="w-[75%]" alt="img"></Image>
        <div className="text-end relative -top-5">
          <p className="inline-block bg-gradient-to-r from-[#00b3a4] via-[#00a5b6] via-[#008bd6] via-[#5861db] to-[#8150d4] bg-clip-text text-transparent leading-[60px] pb-2 text-[72px] font-semibold [text-rendering:optimizeLegibility]">
            50,000+
          </p>
          <p className="text-[28px] text-[#cfd1d4]">Joined the waiting list</p>
        </div>
      </div>
      <div>
        <MultiStepForm
          allStepsData={[
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
          ]}
        />
      </div>
    </div>
  )
}

export default waitingListFormContainer
