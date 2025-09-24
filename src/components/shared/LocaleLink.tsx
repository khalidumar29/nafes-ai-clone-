'use client'
import { cn } from '@/utilities/ui'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface LocaleLinkProps extends LinkProps {
  children: ReactNode
  className?: string
}

const LocaleLink = ({ href, children, className, ...props }: LocaleLinkProps) => {
  const pathname = usePathname()
  const segments = pathname.split('/')
  const currentLocale = segments[1] || 'en'
  const hrefString = typeof href === 'string' ? href : '/'

  // Check if the href is an external URL (contains protocol) or an absolute URL with different domain
  const isExternalUrl =
    hrefString.startsWith('http://') ||
    hrefString.startsWith('https://') ||
    hrefString.startsWith('//')

  // If it's an external URL, use it as-is without locale prefix
  const finalHref = isExternalUrl
    ? hrefString
    : `/${currentLocale}${hrefString.startsWith('/') ? '' : '/'}${hrefString}`

  return (
    <Link href={finalHref} className={cn(className)} {...props}>
      {children}
    </Link>
  )
}

export default LocaleLink
