import { CollectionConfig } from 'payload'

export const FormSubmissions: CollectionConfig = {
  slug: 'waiting-form-submissions',
  labels: {
    singular: 'Waiting List User',
    plural: 'Waiting List Users',
  },
  admin: {
    useAsTitle: 'full_name',
  },
  access: {
    read: () => true, // or restrict
    create: () => true,
  },
  fields: [
    { name: 'objective', type: 'text' },
    { name: 'platforms', type: 'text' },
    { name: 'averageRate', type: 'text' },
    { name: 'tendersPerMonth', type: 'text' },
    { name: 'full_name', type: 'text' },
    { name: 'email', type: 'email' },
    { name: 'company_name', type: 'text' },
    { name: 'mobile', type: 'text' },
  ],
}
