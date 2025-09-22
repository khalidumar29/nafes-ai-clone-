import { NavbarButton } from '@/type'
import { cn } from '@/utilities/ui'
import { Menu, X } from 'lucide-react'
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from 'react'
import { UrlObject } from 'url'
import { Button } from '../ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from '../ui/drawer'
import LanguageSwitcher from './LanguageSwitcher'
import LocaleLink from './LocaleLink'

const MobileNavbar = ({ navbar }: { navbar: any }) => {
  const onClick = () => {}
  return (
    <Drawer direction="left">
      <DrawerTrigger className="cursor-pointer" asChild>
        <Menu size={35} />
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerClose asChild>
              <X className="cursor-pointer" />
            </DrawerClose>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div
              className={cn(
                'md:hidden flex flex-col items-center gap-8',
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
                  <DrawerClose key={i} asChild>
                    <LocaleLink
                      href={link.href}
                      className="text-gray-800 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </LocaleLink>
                  </DrawerClose>
                ),
              )}
              <LanguageSwitcher />
            </div>

            {/* <div className="mt-3 h-[120px]"></div> */}
          </div>
          <DrawerFooter className="flex flex-row w-full items-center justify-center">
            {navbar?.buttons?.map((btn: NavbarButton, i: number) => (
              <LocaleLink key={i} href={btn.href}>
                <DrawerClose asChild>
                  <Button
                    className={btn.variant === 'outline' ? 'h-[44px] text-[14px]' : ''}
                    variant={btn.variant === 'outline' ? 'outline' : 'default'}
                  >
                    {btn.label}
                  </Button>
                </DrawerClose>
              </LocaleLink>
            ))}
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default MobileNavbar
