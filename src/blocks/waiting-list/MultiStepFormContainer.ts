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
        { name: 'stp', label: 'Step', type: 'number', required: true },
        {
          name: 'fType',
          label: 'Field Type',
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
          label: 'Fields',
          type: 'array',
          labels: { singular: 'Field', plural: 'Fields' },
          fields: [
            { name: 'ttl', label: 'Title', type: 'text', required: true },
            {
              name: 'inpts',
              label: 'Inputs',
              type: 'array',
              labels: { singular: 'Input', plural: 'Inputs' },
              fields: [
                {
                  name: 'nm',
                  label: 'Name',
                  type: 'select',
                  required: true,
                  options: [
                    { label: 'Business Type', value: 'business_type' },
                    { label: 'Fleet', value: 'fleet' },
                    { label: 'Manage Operation', value: 'manage_operation' },
                    { label: 'Challenge', value: 'challenge' },
                    { label: 'Full Name', value: 'full_name' },
                    { label: 'Email', value: 'email' },
                    { label: 'Company Name', value: 'company_name' },
                    { label: 'Mobile', value: 'mobile' },
                    // Legacy values that exist in database - will be removed after migration
                    { label: 'Manage Operation (Legacy)', value: 'manageOperation' },
                    { label: 'Objective (Legacy)', value: 'objective' },
                    { label: 'Platforms (Legacy)', value: 'platforms' },
                    { label: 'Average Rate (Legacy)', value: 'averageRate' },
                    { label: 'Tenders Per Month (Legacy)', value: 'tendersPerMonth' },
                  ],
                  admin: { description: 'Pick one submission field (use only once)' },
                },
                {
                  name: 'lbl',
                  label: 'Label',
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
    { name: 'btn', label: 'Button Text', type: 'text', defaultValue: 'Next' },
    {
      name: 'thanks',
      label: 'Thank You Message',
      type: 'text',
      defaultValue: 'Thank you for your submission',
    },
    {
      name: 'msg',
      label: 'Message',
      type: 'text',
      defaultValue: 'Our team will review your information and we will contact your email',
    },
    { name: 'back', label: 'Back to Home page', type: 'text', defaultValue: 'Back to Home page' },
  ],
}
