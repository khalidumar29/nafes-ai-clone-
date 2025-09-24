import Image from 'next/image'
import img from '../../../public/images/image.png'
import logo from '../../../public/logos/logo2.png'
import LocaleLink from './LocaleLink'
export default async function Footer({ footer }: { footer: any }) {
  const resolvedFooterLogo =
    footer?.logo && typeof footer.logo === 'object' && 'url' in footer.logo ? footer.logo : null
  const footerLogoWidth =
    resolvedFooterLogo?.width ||
    resolvedFooterLogo?.sizes?.large?.width ||
    resolvedFooterLogo?.sizes?.medium?.width ||
    resolvedFooterLogo?.sizes?.small?.width ||
    1200
  const footerLogoHeight =
    resolvedFooterLogo?.height ||
    resolvedFooterLogo?.sizes?.large?.height ||
    resolvedFooterLogo?.sizes?.medium?.height ||
    resolvedFooterLogo?.sizes?.small?.height ||
    800

  return (
    <footer className="relative bg-[linear-gradient(270deg,rgba(91,57,187,.1),rgba(207,231,255,0.7),hsla(0,0%,100%,.1))] border-t border-solid border-[#d7dae2] pt-[50px]">
      <div className="container lg:max-h-[26em] md:max-h-[22em] max-h-[20em] overflow-hidden">
        <div className="flex items-center justify-between mb-5">
          <ul className="flex flex-col gap-5">
            {footer?.links?.map((link: any, i: number) => (
              <LocaleLink key={i} href={link.url}>
                <li>{link.label}</li>
              </LocaleLink>
            ))}
          </ul>
          <Image src={img} className="w-[10em]" alt="Footer logo" />
        </div>

        {/* Socials */}
        <div className="flex items-center space-x-4 my-5">
          {footer?.socials?.map((s: any, i: number) => (
            <a
              key={i}
              href={s.url}
              className="w-8 h-8 flex items-center justify-center rounded hover:opacity-80 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.icon && typeof s.icon !== 'string' && (
                <Image
                  src={s.icon.url}
                  alt={`${s.platform} icon`}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              )}
            </a>
          ))}
        </div>

        {/* Legal + Note */}
        <div className="flex justify-between">
          <div className="flex gap-5">
            {footer?.legalLinks?.map((link: any, i: number) => (
              <LocaleLink key={i} href={link.url}>
                {link.label}
              </LocaleLink>
            ))}
          </div>
          <div>
            <p>{footer?.footerNote}</p>
          </div>
          </div>

        <div className="mt-[50px]">
          {/* <FooterImage /> */}
          {resolvedFooterLogo?.url ? (
            <Image
              src={resolvedFooterLogo.url}
              alt={resolvedFooterLogo.alt || 'logo'}
              width={footerLogoWidth}
              height={footerLogoHeight}
              className="w-full h-full object-contain"
            />
          ) : (
            <Image src={logo} alt="logo" width={1200} height={800} className="w-full h-full" />
          )}
        </div>
      </div>
    </footer>
  )
}
