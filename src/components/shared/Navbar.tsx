'use client'

import { cn } from '@/utilities/ui'
import { Globe } from 'lucide-react'
import Link from 'next/link'
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from 'react'
import { UrlObject } from 'url'
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'

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
        <Link href="/home" className="flex items-center">
          <div className="text-2xl font-bold text-teal-500 leading-tight">
            {navbar?.logo?.line1}
            <br />
            {navbar?.logo?.line2}
          </div>
        </Link>

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
                <Link
                  key={i}
                  href={link.href}
                  className="text-gray-800 hover:text-teal-500 transition-colors"
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>

          {/* Right Side */}
          <div className={cn('flex items-center gap-4', lang === 'ar' && 'flex-row-reverse')}>
            <DropdownMenu>
              <DropdownMenuTrigger className="focus:outline-none">
                {' '}
                <Globe className="w-5 h-5 text-gray-600" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="rounded-lg p-3 ">
                <DropdownMenuItem
                  className="w-full bg-[#f7f7f7] px-[15px] py-[10px] text-base focus:outline-none mb-4 hover:!bg-green-100 cursor-pointer"
                  value="ar"
                  onClick={() => setLang('ar')}
                >
                  العربية
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="w-full bg-[#f7f7f7] px-[15px] py-[10px] text-base focus:outline-none mb-4 hover:!bg-green-100 cursor-pointer"
                  value="en"
                  onClick={() => setLang('en')}
                >
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {navbar?.buttons?.map((btn: NavbarButton, i: number) => (
              <Link key={i} href={btn.href}>
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
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
