import { ReactNode } from 'react'

export interface Step {
  step: number
  title: string
}

export interface FormData {
  objective: string
  platforms: string
  averageRate: string
  tendersPerMonth: string
  full_name: string
  email: string
  company_name: string
  mobile: string
}
export type NavbarButton = {
  href: string
  label: ReactNode
  variant: 'primary' | 'outline' | string
}
