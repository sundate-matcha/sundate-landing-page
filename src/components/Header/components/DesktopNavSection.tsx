import { Link } from 'react-router-dom'

interface NavItem {
  href: string
  label: string
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
  return (
    <nav className={'hidden md:flex md:items-center'}>
      <div className={'flex items-center gap-6 mr-6'}>
        {items.map((item) => (
          <Link key={item.label} to={item.href} className={navLinkClassName}>
            {item.label}
          </Link>
        ))}
      </div>

      <button className={ctaButtonClassName} onClick={onBookingClick}>
        Reservation
      </button>
    </nav>
  )
}

export default DesktopNavSection
