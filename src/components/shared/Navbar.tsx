'use client'

import { cn } from '@/utilities/ui'
import Image from 'next/image'
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from 'react'
import { UrlObject } from 'url'
import logo from '../../../public/logos/logo.png'
import { Button } from '../ui/button'
import LanguageSwitcher from './LanguageSwitcher'
import LocaleLink from './LocaleLink'
type NavbarButton = {
  href: string
  label: ReactNode
  variant: 'primary' | 'outline' | string
}

const Navbar = ({ navbar, locale }: { navbar: any; locale: string }) => {
  return (
    <div className="border-b  backdrop-blur-xl sticky top-0 z-50">
      <nav
        className={cn(
          'flex items-center justify-between px-6 py-3  mx-auto container ',
          // locale === 'ar' && 'flex-row-reverse',
        )}
      >
        {/* Logo */}
        <LocaleLink href="/" className="flex items-center">
          {/* {navbar?.logo && ( */}
          {}
          <Image src={logo} alt={'logo'} className="h-8 w-full object-contain" />
          {/* )} */}
        </LocaleLink>

        <div
          className={cn(
            'flex gap-20',
            // locale === 'ar' && 'flex-row-reverse'
          )}
        >
          {/* Navigation Links */}
          <div
            className={cn(
              'hidden md:flex items-center gap-8',
              // locale === 'ar' && 'flex-row-reverse',
            )}
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
                  className="text-gray-800 hover:text-primary transition-colors"
                >
                  {link.label}
                </LocaleLink>
              ),
            )}
          </div>

          {/* Right Side */}
          <div
            className={cn(
              'flex items-center gap-4',
              //  locale === 'ar' && 'flex-row-reverse'
            )}
          >
            <div>
              <LanguageSwitcher />
            </div>
            {navbar?.buttons?.map((btn: NavbarButton, i: number) => (
              <LocaleLink key={i} href={btn.href}>
                <Button
                  className={btn.variant === 'outline' ? 'h-[44px] text-[14px]' : ''}
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
