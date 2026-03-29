import { useEffect, useState } from 'react'
import MobileMenuToggle, {
  MobileNavDrawer,
} from './components/MobileNavSection'
import DesktopNavSection from './components/DesktopNavSection'
import Logo from '../../assets/images/logo.png'
import LogoText from '../../assets/images/typeface.png'

const NAV_ITEMS = [
  { href: '/', label: 'About Us' },
  { href: '/menu', label: 'Menu' },
  { href: '/', label: 'Workshop' },
  // { href: '#contact', label: 'Contact' },
]

const NAV_LINK_CLASS =
  'text-4xl relative px-4 hover:border-b-0 duration-200 before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-foreground before:transition-all before:duration-300 hover:before:left-0 hover:before:w-full'

const CTA_BUTTON_CLASS =
  'text-4xl px-4 py-2 rounded-lg md:bg-foreground bg-background md:text-background text-foreground transition-all duration-200 '

function HeaderBlack() {
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
      className={`px-4 md:px-20 py-6 flex items-center justify-between w-full h-[10%] z-50 text-foreground fixed top-0 left-0 transition-colors duration-500 bg-black`}
    >
      <a
        href={'/'}
        className={
          'cursor-pointer justify-center flex items-center gap-4 flex-row '
        }
      >
        <img src={Logo} alt="Sundate Logo" className={'md:h-14 h-10'} />

        <img
          src={LogoText}
          alt="Sundate Logo Text"
          className={'md:h-14 h-10'}
        />
      </a>

      <MobileMenuToggle
        isOpen={isDrawerOpen}
        onToggle={() => setIsDrawerOpen((currentValue) => !currentValue)}
      />

      <DesktopNavSection
        items={NAV_ITEMS}
        navLinkClassName={NAV_LINK_CLASS}
        ctaButtonClassName={CTA_BUTTON_CLASS}
        onBookingClick={handleBookingClick}
      />

      <MobileNavDrawer
        isOpen={isDrawerOpen}
        items={NAV_ITEMS}
        ctaButtonClassName={CTA_BUTTON_CLASS}
        onClose={closeDrawer}
        onBookingClick={handleBookingClick}
      />
    </header>
  )
}

export default HeaderBlack
