import Menu from '@/components/Menu/Menu'
import HeaderBlack from '@/components/Header/HeaderBlack'
import FooterBlack from '@/components/Footer/FooterBlack'

export function MenuPage() {
  return (
    <>
      <div>
        <HeaderBlack />
      </div>

      <main>
        <div className="relative z-10">
          <Menu />
        </div>
      </main>

      <div>
        <FooterBlack />
      </div>
    </>
  )
}

export default MenuPage
