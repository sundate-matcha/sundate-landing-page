import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

interface NavItem {
  href: string
  label: string
  children?: NavItem[]
}

interface DesktopNavSectionProps {
  items: NavItem[]
  navLinkClassName: string
  ctaButtonClassName: string
  onBookingClick: () => void
}

function DesktopNavSection({
  items,
  navLinkClassName,
  ctaButtonClassName,
  onBookingClick,
}: DesktopNavSectionProps) {
  const [openDropdownLabel, setOpenDropdownLabel] = useState<string | null>(
    null,
  )
  const navContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!navContainerRef.current) {
        return
      }

      if (!navContainerRef.current.contains(event.target as Node)) {
        setOpenDropdownLabel(null)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  return (
    <nav className={'hidden md:flex md:items-center'}>
      <div ref={navContainerRef} className={'flex items-center gap-6 mr-6'}>
        {items.map((item) => {
          if (!item.children || item.children.length === 0) {
            return (
              <Link
                key={item.label}
                to={item.href}
                className={navLinkClassName}
              >
                {item.label}
              </Link>
            )
          }

          const isOpen = openDropdownLabel === item.label

          return (
            <div key={item.label} className="relative">
              <button
                type="button"
                className={`${navLinkClassName} inline-flex items-center gap-1`}
                aria-expanded={isOpen}
                aria-haspopup="menu"
                onClick={() =>
                  setOpenDropdownLabel((currentLabel) =>
                    currentLabel === item.label ? null : item.label,
                  )
                }
              >
                <span>{item.label}</span>
                <ChevronDown
                  className={`size-4 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen ? (
                <div className="absolute mt-2 min-w-[220px] rounded-lg bg-background shadow-xl z-50">
                  {item.children.map((child) => (
                    <Link
                      key={`${item.label}-${child.label}`}
                      to={child.href}
                      className="block px-3 py-2 text-3xl text-foreground hover:bg-foreground hover:text-background rounded-lg "
                      onClick={() => setOpenDropdownLabel(null)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          )
        })}
      </div>

      <button className={ctaButtonClassName} onClick={onBookingClick}>
        Reservation
      </button>
    </nav>
  )
}

export default DesktopNavSection
