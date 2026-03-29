// Mobile images
import A4DessertMobile from '@/assets/images/menu/mobile/A4_Dessert.png'
import AddOnMobile from '@/assets/images/menu/mobile/add on.png'
import CoffeeMenuMobile from '@/assets/images/menu/mobile/coffee menu.png'
import DairyMatchaMenuMobile from '@/assets/images/menu/mobile/dairy matcha menu.png'
import FruityMatchaMenuMobile from '@/assets/images/menu/mobile/fruity matcha menu.png'
import GenmaichaMenuMobile from '@/assets/images/menu/mobile/genmaicha menu.png'
import HojichaMenuMobile from '@/assets/images/menu/mobile/hojicha menu.png'
import MatchaMenuMobile from '@/assets/images/menu/mobile/matcha menu.png'
// Desktop images
import A4Dessert from '@/assets/images/menu/desktop/A4_Dessert.png'
import AddOn from '@/assets/images/menu/desktop/add on.png'
import CoffeeMenu from '@/assets/images/menu/desktop/coffee menu.png'
import DairyMatchaMenu from '@/assets/images/menu/desktop/dairy matcha menu.png'
import FruityMatchaMenu from '@/assets/images/menu/desktop/fruity matcha menu.png'
import GenmaichaMenu from '@/assets/images/menu/desktop/genmaicha menu.png'
import HojichaMenu from '@/assets/images/menu/desktop/hojicha menu.png'
import MatchaMenu from '@/assets/images/menu/desktop/matcha menu.png'
import Vector from '@/assets/images/menu/desktop/vector.png'

const menuImages = {
  desktop: {
    a4Dessert: A4Dessert,
    addOn: AddOn,
    coffeeMenu: CoffeeMenu,
    dairyMatchaMenu: DairyMatchaMenu,
    fruityMatchaMenu: FruityMatchaMenu,
    genmaichaMenu: GenmaichaMenu,
    hojichaMenu: HojichaMenu,
    matchaMenu: MatchaMenu,
    vector: Vector,
  },
  mobile: {
    a4Dessert: A4DessertMobile,
    addOn: AddOnMobile,
    coffeeMenu: CoffeeMenuMobile,
    dairyMatchaMenu: DairyMatchaMenuMobile,
    fruityMatchaMenu: FruityMatchaMenuMobile,
    genmaichaMenu: GenmaichaMenuMobile,
    hojichaMenu: HojichaMenuMobile,
    matchaMenu: MatchaMenuMobile,
  },
} as const

export default menuImages