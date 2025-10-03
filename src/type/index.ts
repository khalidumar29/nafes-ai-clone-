import { ReactNode } from 'react'

export interface Step {
  step: number
  title: string
}

export interface FormData {
  business_type: string
  fleet: string
  manage_operation: string
  challenge: string
  full_name: string
  email: string
  company_name: string
  mobile: string
  // Legacy fields - will be removed after data migration
  objective?: string
  platforms?: string
  averageRate?: string
  tendersPerMonth?: string
}
export type NavbarButton = {
  href: string
  label: ReactNode
  variant: 'primary' | 'outline' | string
}
