// payload/blocks/MultiStepFormContainer.ts
import { Block } from 'payload'

export const MultiStepFormContainer: Block = {
  slug: 'multiStepFormContainer',
  labels: {
    singular: 'Multi Step Form Container',
    plural: 'Multi Step Form Containers',
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'headline',
      type: 'text',
      defaultValue: '50,000+',
    },
    {
      name: 'subheadline',
      type: 'text',
      defaultValue: 'Joined the waiting list',
    },
    {
      name: 'steps',
      type: 'array',
      required: true,
      labels: {
        singular: 'Step',
        plural: 'Steps',
      },
      fields: [
        {
          name: 'step',
          type: 'number',
          required: true,
        },
        {
          name: 'formType',
          type: 'select',
          required: true,
          options: [
            { label: 'Select', value: 'select' },
            { label: 'Form', value: 'form' },
            { label: 'Final', value: 'final' },
          ],
        },
        {
          name: 'fields',
          type: 'array',
          labels: {
            singular: 'Field',
            plural: 'Fields',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'inputs',
              type: 'array',
              labels: {
                singular: 'Input',
                plural: 'Inputs',
              },
              fields: [
                {
                  name: 'name',
                  type: 'select',
                  required: true,
                  options: [
                    { label: 'Objective', value: 'objective' },
                    { label: 'Platforms', value: 'platforms' },
                    { label: 'Average Rate', value: 'averageRate' },
                    { label: 'Tenders per Month', value: 'tendersPerMonth' },
                    { label: 'Full Name', value: 'full_name' },
                    { label: 'Email', value: 'email' },
                    { label: 'Company Name', value: 'company_name' },
                    { label: 'Mobile', value: 'mobile' },
                  ],
                  admin: {
                    description:
                      'Pick one of the submission fields (each field should only be used once across the whole form)',
                  },
                },
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                  admin: {
                    description:
                      'The label shown on the form for this field (e.g. "Your Email Address")',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'submitButtonText',
      type: 'text',
      defaultValue: 'Next',
    },
    {
      name: 'submissionThanks',
      type: 'text',
      defaultValue: 'Thank you for your submission',
    },
    {
      name: 'submissionMessage',
      type: 'text',
      defaultValue: 'Our team will review your information and we will contact your email',
    },
    {
      name: 'backToHomeText',
      type: 'text',
      defaultValue: 'Back to Home page',
    },
  ],
}
