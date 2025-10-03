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
    { name: 'business_type', type: 'text', label: 'Business Type' },
    { name: 'fleet', type: 'text', label: 'Fleet' },
    { name: 'manage_operation', type: 'text', label: 'Manage Operation' },
    { name: 'challenge', type: 'text', label: 'Challenge' },
    { name: 'full_name', type: 'text', label: 'Full Name' },
    { name: 'email', type: 'email', label: 'Email' },
    { name: 'company_name', type: 'text', label: 'Company Name' },
    { name: 'mobile', type: 'text', label: 'Mobile' },
  ],
}

/**
 *
 */ /**
 * 
 * [
                    { label: 'Business Type', value: 'businessType' },
                    { label: 'Fleet', value: 'fleet' },
                    { label: 'Manage Operation', value: 'manageOperation' },
                    { label: 'Challenge', value: 'challenge' },
                    { label: 'Full Name', value: 'full_name' },
                    { label: 'Email', value: 'email' },
                    { label: 'Company Name', value: 'company_name' },
                    { label: 'Mobile', value: 'mobile' },
                  ]
 */
