'use client'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import { cn } from '@/utilities/ui'

interface LocaleLinkProps extends LinkProps {
  children: ReactNode
  className?: string
}

const LocaleLink = ({ href, children, className, ...props }: LocaleLinkProps) => {
  const pathname = usePathname()
  const segments = pathname.split('/')
  const currentLocale = segments[1] || 'en'
  const hrefString = typeof href === 'string' ? href : '/'

  const localizedHref = `/${currentLocale}${hrefString.startsWith('/') ? '' : '/'}${hrefString}`

  return (
    <Link href={localizedHref} className={cn(className)} {...props}>
      {children}
    </Link>
  )
}

export default LocaleLink
