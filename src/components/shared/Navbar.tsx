'use client'

import { Globe } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from 'react'
import { UrlObject } from 'url'

type NavbarButton = {
  href: string
  label: ReactNode
  variant: 'primary' | 'outline' | string
}

const Navbar = ({ navbar }: { navbar: any }) => {
  return (
    <div className="border-b bg-white">
      <nav className="flex items-center justify-between px-6 py-3 mx-auto container">
        {/* Logo */}
        <Link href="/home" className="flex items-center">
          <div className="text-2xl font-bold text-teal-500 leading-tight">
            {navbar?.logo?.line1}
            <br />
            {navbar?.logo?.line2}
          </div>
        </Link>

        <div className="flex gap-20">
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
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
          <div className="flex items-center space-x-4">
            <Globe className="w-5 h-5 text-gray-600" />
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
