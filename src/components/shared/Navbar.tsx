'use client'

import { cn } from '@/utilities/ui'
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from 'react'
import { UrlObject } from 'url'
import { Button } from '../ui/button'
import LanguageSwitcher from './LanguageSwitcher'
import LocaleLink from './LocaleLink'

type NavbarButton = {
  href: string
  label: ReactNode
  variant: 'primary' | 'outline' | string
}

const Navbar = ({ navbar }: { navbar: any }) => {
  const [lang, setLang] = useState('en')
  return (
    <div className="border-b bg-white">
      <nav
        className={cn(
          'flex items-center justify-between px-6 py-3  mx-auto container ',
          lang === 'ar' && 'flex-row-reverse',
        )}
      >
        {/* Logo */}
        <LocaleLink href="/home" className="flex items-center">
          {navbar?.logo && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={navbar.logo?.url}
              alt={navbar.logo?.alt || 'Logo'}
              className="h-8 w-auto object-contain"
            />
          )}
        </LocaleLink>

        <div className={cn('flex gap-20', lang === 'ar' && 'flex-row-reverse')}>
          {/* Navigation Links */}
          <div
            className={cn('hidden md:flex items-center gap-8', lang === 'ar' && 'flex-row-reverse')}
          >
            {navbar?.navLinks?.map(
              (
                link: {
                  href: string | UrlObject
                  label:
                    | string
                    | number
                    | bigint
                    | boolean
                    | ReactElement<unknown, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | Promise<
                        | string
                        | number
                        | bigint
                        | boolean
                        | ReactPortal
                        | ReactElement<unknown, string | JSXElementConstructor<any>>
                        | Iterable<ReactNode>
                        | null
                        | undefined
                      >
                    | null
                    | undefined
                },
                i: Key | null | undefined,
              ) => (
                <LocaleLink
                  key={i}
                  href={link.href}
                  className="text-gray-800 hover:text-teal-500 transition-colors"
                >
                  {link.label}
                </LocaleLink>
              ),
            )}
          </div>

          {/* Right Side */}
          <div className={cn('flex items-center gap-4', lang === 'ar' && 'flex-row-reverse')}>
            <LanguageSwitcher setLang={setLang} />
            {navbar?.buttons?.map((btn: NavbarButton, i: number) => (
              <LocaleLink key={i} href={btn.href}>
                <Button
                  className={
                    btn.variant === 'primary'
                      ? 'bg-teal-500 hover:bg-teal-600 text-white px-6'
                      : 'border-black text-gray-800 px-6 rounded-[8px] hover:bg-teal-500 hover:border-none hover:text-white'
                  }
                  variant={btn.variant === 'outline' ? 'outline' : 'default'}
                >
                  {btn.label}
                </Button>
              </LocaleLink>
            ))}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
