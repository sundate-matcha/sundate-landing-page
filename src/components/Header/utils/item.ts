const NAV_ITEMS = [
  { href: '/about', label: 'About Us' },
  {
    href: '/menu',
    label: 'Menu',
    children: [
      { href: '/menu?type=main', label: 'Main Menu' },
      { href: '/menu?type=seasonal', label: 'Seasonal Menu' },
    ],
  },
  { href: '/workshop', label: 'Workshop' },
  // { href: '#contact', label: 'Contact' },
]

export default NAV_ITEMS
