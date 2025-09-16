import { Block } from 'payload'

export const MultiStepFormContainer: Block = {
  slug: 'msForm',
  labels: {
    singular: 'Multi Step Form Container',
    plural: 'Multi Step Form Containers',
  },
  fields: [
    { name: 'img', type: 'upload', relationTo: 'media', required: true },
    { name: 'head', type: 'text', defaultValue: '50,000+' },
    { name: 'sub', type: 'text', defaultValue: 'Joined the waiting list' },
    {
      name: 'steps',
      type: 'array',
      required: true,
      labels: { singular: 'Step', plural: 'Steps' },
      fields: [
        { name: 'stp', type: 'number', required: true },
        {
          name: 'fType',
          type: 'select',
          required: true,
          options: [
            { label: 'Select', value: 'select' },
            { label: 'Form', value: 'form' },
            { label: 'Final', value: 'final' },
          ],
        },
        {
          name: 'flds',
          type: 'array',
          labels: { singular: 'Field', plural: 'Fields' },
          fields: [
            { name: 'ttl', type: 'text', required: true },
            {
              name: 'inpts',
              type: 'array',
              labels: { singular: 'Input', plural: 'Inputs' },
              fields: [
                {
                  name: 'nm',
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
                  admin: { description: 'Pick one submission field (use only once)' },
                },
                {
                  name: 'lbl',
                  type: 'text',
                  required: true,
                  admin: { description: 'Label shown on the form' },
                },
              ],
            },
          ],
        },
      ],
    },
    { name: 'btn', type: 'text', defaultValue: 'Next' },
    { name: 'thanks', type: 'text', defaultValue: 'Thank you for your submission' },
    {
      name: 'msg',
      type: 'text',
      defaultValue: 'Our team will review your information and we will contact your email',
    },
    { name: 'back', type: 'text', defaultValue: 'Back to Home page' },
  ],
}
