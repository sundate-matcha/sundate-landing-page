import { useEffect, useState } from 'react'
import { MenuIcon, XIcon } from 'lucide-react'
import Logo from '../../assets/images/logo.png'
import LogoText from '../../assets/images/typeface.png'

const NAV_ITEMS = [
  { href: '#aboutus', label: 'About Us' },
  { href: '#menu', label: 'Menu' },
  { href: '#', label: 'Workshop' },
  { href: '#contact', label: 'Contact' },
]

const NAV_LINK_CLASS =
  'relative px-4 hover:border-b-0 duration-200 before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-foreground before:transition-all before:duration-300 hover:before:left-0 hover:before:w-full'

const CTA_BUTTON_CLASS =
  'px-4 py-2 border-2 border-solid border-black rounded-lg bg-foreground text-background transition-all duration-200 shadow-[4px_6px_0_rgb(0,0,0)] hover:shadow-[2px_3px_0_rgb(0,0,0)] hover:translate-x-0.5 hover:translate-y-0.5 active:saturate-50'

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleBookingClick = () => {
    window.open('https://sundate-reservation.vercel.app', '_blank')
  }

  useEffect(() => {
    if (!isDrawerOpen) {
      return
    }

    const currentBodyOverflow = document.body.style.overflow
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDrawerOpen(false)
      }
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = currentBodyOverflow
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isDrawerOpen])

  const closeDrawer = () => setIsDrawerOpen(false)

  return (
    <header
      className={
        'px-4 md:px-[20%] py-6 flex items-center justify-between bg-transparent w-full z-50 text-foreground'
      }
    >
      <a
        href={'#'}
        className={
          'cursor-pointer justify-center flex items-center gap-4 flex-row '
        }
      >
        <img src={Logo} alt="Sundate Logo" className={'h-10'} />

        <img src={LogoText} alt="Sundate Logo Text" className={'h-10'} />
      </a>

      <button
        type="button"
        aria-label={
          isDrawerOpen ? 'Đóng menu điều hướng' : 'Mở menu điều hướng'
        }
        aria-expanded={isDrawerOpen}
        aria-controls="mobile-nav-drawer"
        className={
          'md:hidden inline-flex items-center justify-center size-10 bg-transparent text-primary-foreground'
        }
        onClick={() => setIsDrawerOpen((currentValue) => !currentValue)}
      >
        {isDrawerOpen ? (
          <XIcon className={'size-5'} />
        ) : (
          <MenuIcon className={'size-5'} />
        )}
      </button>

      <nav className={'hidden md:flex md:items-center'}>
        {NAV_ITEMS.map((item) => (
          <a key={item.label} href={item.href} className={NAV_LINK_CLASS}>
            {item.label}
          </a>
        ))}
        <button className={CTA_BUTTON_CLASS} onClick={handleBookingClick}>
          Đặt bàn ngay
        </button>
      </nav>

      <div
        className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          isDrawerOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          type="button"
          aria-label="Đóng menu"
          className={'absolute inset-0 bg-black/45'}
          onClick={closeDrawer}
        />

        <aside
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          className={`absolute right-0 top-0 h-full w-[min(80vw,320px)] bg-white text-primary shadow-2xl transform transition-transform duration-300 ${
            isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className={'flex items-center justify-end px-5 py-4 '}>
            <button
              type="button"
              aria-label="Đóng drawer"
              className={
                'inline-flex items-center justify-center size-9 rounded-lg border border-primary/20 bg-transparent text-primary shadow-sm'
              }
              onClick={closeDrawer}
            >
              <XIcon className={'size-5'} />
            </button>
          </div>

          <nav className={'px-5 py-6 flex flex-col gap-4'}>
            {NAV_ITEMS.map((item) => (
              <a
                key={`mobile-${item.label}`}
                href={item.href}
                className={'text-lg border-b border-black/10 pb-2'}
                onClick={closeDrawer}
              >
                {item.label}
              </a>
            ))}

            <button
              className={`${CTA_BUTTON_CLASS} mt-2 w-full`}
              onClick={() => {
                closeDrawer()
                handleBookingClick()
              }}
            >
              Đặt bàn ngay
            </button>
          </nav>
        </aside>
      </div>
    </header>
  )
}

export default Header
