import { useState } from 'react'
import { XIcon, MenuIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

interface NavItem {
  href: string
  label: string
  children?: NavItem[]
}

interface MobileMenuToggleProps {
  isOpen: boolean
  onToggle: () => void
}

interface MobileNavDrawerProps {
  isOpen: boolean
  items: NavItem[]
  ctaButtonClassName: string
  onClose: () => void
  onBookingClick: () => void
}

function MobileNavSection({ isOpen, onToggle }: MobileMenuToggleProps) {
  return (
    <button
      type="button"
      aria-label={isOpen ? 'Đóng menu điều hướng' : 'Mở menu điều hướng'}
      aria-expanded={isOpen}
      aria-controls="mobile-nav-drawer"
      className="md:hidden inline-flex items-center justify-center size-10 bg-transparent text-foreground"
      onClick={onToggle}
    >
      <MenuIcon className="size-8" />
    </button>
  )
}

export function MobileNavDrawer({
  isOpen,
  items,
  ctaButtonClassName,
  onClose,
  onBookingClick,
}: MobileNavDrawerProps) {
  const [openSubmenuLabel, setOpenSubmenuLabel] = useState<string | null>(null)

  return (
    <div
      className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
        isOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`}
    >
      <button
        type="button"
        aria-label="Đóng menu"
        className={'absolute inset-0 bg-black/45'}
        onClick={onClose}
      />

      <aside
        id="mobile-nav-drawer"
        role="dialog"
        aria-modal="true"
        className={`absolute right-0 top-0 h-full w-[min(80vw,320px)] bg-foreground shadow-2xl transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className={'flex items-center justify-end px-5 py-4 '}>
          <button
            type="button"
            aria-label="Đóng drawer"
            className={
              'inline-flex items-center justify-center size-9 rounded-lg border border-primary/20 bg-transparent text-primary shadow-sm'
            }
            onClick={onClose}
          >
            <XIcon className={'size-5'} />
          </button>
        </div>

        <nav className={'px-5 py-6 flex flex-col gap-4'}>
          {items.map((item) => {
            if (!item.children || item.children.length === 0) {
              return (
                <Link
                  key={`mobile-${item.label}`}
                  to={item.href}
                  className={'text-4xl text-background pb-2'}
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              )
            }

            const isSubmenuOpen = openSubmenuLabel === item.label

            return (
              <div key={`mobile-parent-${item.label}`} className="pb-2">
                <button
                  type="button"
                  className="w-full flex items-center justify-between text-4xl text-background"
                  aria-expanded={isSubmenuOpen}
                  aria-haspopup="menu"
                  onClick={() =>
                    setOpenSubmenuLabel((currentLabel) =>
                      currentLabel === item.label ? null : item.label,
                    )
                  }
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={`size-6 transition-transform duration-200 ${
                      isSubmenuOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isSubmenuOpen ? (
                  <div className="mt-2 ml-2 flex flex-col gap-2 border-l border-background/30 pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={`mobile-child-${item.label}-${child.label}`}
                        to={child.href}
                        className="text-3xl text-background/90"
                        onClick={onClose}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            )
          })}

          <button
            className={`${ctaButtonClassName} mt-2 w-full`}
            onClick={() => {
              onClose()
              onBookingClick()
            }}
          >
            Reservation
          </button>
        </nav>
      </aside>
    </div>
  )
}

export default MobileNavSection
