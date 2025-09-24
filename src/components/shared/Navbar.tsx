'use client'

import { NavbarButton } from '@/type'
import { cn } from '@/utilities/ui'
import Image from 'next/image'
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from 'react'
import { UrlObject } from 'url'
import logo from '../../../public/logos/logo2.png'
import { Button } from '../ui/button'
import LanguageSwitcher from './LanguageSwitcher'
import LocaleLink from './LocaleLink'
import MobileNavbar from './MobileNavbar'

const Navbar = ({ navbar, locale }: { navbar: any; locale: string }) => {
  const resolvedNavLogo =
    navbar?.logo && typeof navbar.logo === 'object' && 'url' in navbar.logo ? navbar.logo : null
  const navLogoWidth =
    resolvedNavLogo?.width ||
    resolvedNavLogo?.sizes?.medium?.width ||
    resolvedNavLogo?.sizes?.small?.width ||
    160
  const navLogoHeight =
    resolvedNavLogo?.height ||
    resolvedNavLogo?.sizes?.medium?.height ||
    resolvedNavLogo?.sizes?.small?.height ||
    40

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
          {resolvedNavLogo?.url ? (
            <Image
              src={resolvedNavLogo.url}
              alt={resolvedNavLogo.alt || 'logo'}
              width={navLogoWidth}
              height={navLogoHeight}
              className="h-8 w-auto object-contain"
              priority
            />
          ) : (
            <Image src={logo} alt="logo" className="h-8 w-auto object-contain" priority />
          )}
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
              'flex items-center gap-1 md:gap-4',
              //  locale === 'ar' && 'flex-row-reverse'
            )}
          >
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
            {navbar?.buttons?.map((btn: NavbarButton, i: number) => (
              <LocaleLink key={i} href={btn.href}>
                <Button
                  className={
                    btn.variant === 'outline' ? 'h-[44px] text-[14px] hidden md:block' : ''
                  }
                  variant={btn.variant === 'outline' ? 'outline' : 'default'}
                >
                  {btn.label}
                </Button>
              </LocaleLink>
            ))}

            <div className="block md:hidden">
              <MobileNavbar navbar={navbar} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
