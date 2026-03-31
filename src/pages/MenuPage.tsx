import Menu from '@/components/Menu/Menu'
import SeasonalMenu from '@/components/Menu/SeasonalMenu'
import HeaderBlack from '@/components/navigation/Header/HeaderBlack'
import FooterBlack from '@/components/navigation/Footer/FooterBlack'
import { useSearchParams } from 'react-router-dom'

export function MenuPage() {
  const [searchParams] = useSearchParams()
  const menuType = searchParams.get('type')
  const isSeasonalMenu = menuType === 'seasonal'

  return (
    <>
      <div>
        <HeaderBlack />
      </div>

      <main>
        <div className="relative z-10">
          {isSeasonalMenu ? <SeasonalMenu /> : <Menu />}
        </div>
      </main>

      <div>
        <FooterBlack />
      </div>
    </>
  )
}

export default MenuPage
