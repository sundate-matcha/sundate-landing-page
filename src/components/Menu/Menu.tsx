import MyFigure from '@/components/MyFigure.tsx'
import A4Dessert from '@/assets/images/menu/A4_Dessert.png'
import AddOn from '@/assets/images/menu/add on.png'
import CoffeeMenu from '@/assets/images/menu/coffee menu.png'
import DairyMatchaMenu from '@/assets/images/menu/dairy matcha menu.png'
import FruityMatchaMenu from '@/assets/images/menu/fruity matcha menu.png'
import GenmaichaMenu from '@/assets/images/menu/genmaicha menu.png'
import HojichaMenu from '@/assets/images/menu/hojicha menu.png'
import MatchaMenu from '@/assets/images/menu/matcha menu.png'
import Vector from '@/assets/images/menu/vector.png'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const menuImages = {
  a4Dessert: A4Dessert,
  addOn: AddOn,
  coffeeMenu: CoffeeMenu,
  dairyMatchaMenu: DairyMatchaMenu,
  fruityMatchaMenu: FruityMatchaMenu,
  genmaichaMenu: GenmaichaMenu,
  hojichaMenu: HojichaMenu,
  matchaMenu: MatchaMenu,
  vector: Vector,
} as const

const menuSections = [
  {
    id: 'section1',
    mobileWidth: 220,
    items: [
      {
        imgSource: menuImages.matchaMenu,
        imgAlt:
          'Menu về những món ăn vặt của chúng tớ gồm khoai tây que lắc phô mai và tóp mỡ chiên mắm tỏi',
      },
    ],
  },
  {
    id: 'section2',
    mobileWidth: 300,
    items: [
      {
        imgSource: menuImages.fruityMatchaMenu,
        imgAlt: 'Menu về các loại matcha có chứa trái cây của chúng tớ',
      },
      {
        imgSource: menuImages.dairyMatchaMenu,
        imgAlt: 'Menu về các loại matcha có chứa sữa của chúng tớ',
      },
      {
        imgSource: menuImages.addOn,
        imgAlt: 'Menu về các món ăn vặt của chúng tớ',
      },
    ],
  },
  {
    id: 'section3',
    mobileWidth: 300,
    items: [
      {
        imgSource: menuImages.hojichaMenu,
        imgAlt: 'Menu về thức uống của chúng tớ gồm Matcha và Dalgona coffee',
      },
      {
        imgSource: menuImages.genmaichaMenu,
        imgAlt: 'Menu về thức uống của chúng tớ gồm Matcha và Dalgona coffee',
      },
      {
        imgSource: menuImages.coffeeMenu,
        imgAlt: 'Menu về thức uống của chúng tớ gồm Matcha và Dalgona coffee',
      },
    ],
  },
  {
    id: 'section4',
    mobileWidth: 300,
    items: [
      {
        imgSource: menuImages.a4Dessert,
        imgAlt:
          'Menu về những món ăn vặt của chúng tớ gồm khoai tây que lắc phô mai và tóp mỡ chiên mắm tỏi',
      },
    ],
  },
]

function Menu() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slideDirection, setSlideDirection] = useState(1)

  const goToPrevious = () => {
    setSlideDirection(-1)
    setCurrentSlide((prev) => (prev === 0 ? menuSections.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setSlideDirection(1)
    setCurrentSlide((prev) => (prev === menuSections.length - 1 ? 0 : prev + 1))
  }

  const currentSection = menuSections[currentSlide]
  return (
    <div
      id={'menu'}
      className={
        'bg-[#521813] px-4  md:px-6 h-screen items-center flex flex-row justify-center gap-10'
      }
    >
      {/* Desktop Layout */}
      <div
        className={
          'hidden md:flex w-full max-w-[1450px] overflow-hidden rounded-xl border-4 border-black bg-black'
        }
      >
        <div
          className={'flex flex-row md:items-stretch md:justify-start w-full'}
        >
          {/* section 1 */}
          <div className="md:w-[242.08px]">
            <MyFigure
              imgSource={menuImages.matchaMenu}
              imgAlt={
                'Menu về những món ăn vặt của chúng tớ gồm khoai tây que lắc phô mai và tóp mỡ chiên mắm tỏi'
              }
            />
          </div>
          {/* section 2 */}
          <div className="md:w-[339.88px]">
            <MyFigure
              imgSource={menuImages.fruityMatchaMenu}
              imgAlt={'Menu về các loại matcha có chứa trái cây của chúng tớ'}
            />
            <MyFigure
              imgSource={menuImages.dairyMatchaMenu}
              imgAlt={'Menu về các loại matcha có chứa sữa của chúng tớ'}
            />
            <MyFigure
              imgSource={menuImages.addOn}
              imgAlt={'Menu về các món ăn vặt của chúng tớ'}
            />
          </div>
          {/* section 3 */}
          <div className="md:w-[381.17px]">
            <MyFigure
              imgSource={menuImages.hojichaMenu}
              imgAlt={
                'Menu về thức uống của chúng tớ gồm Matcha và Dalgona' +
                ' coffee'
              }
            />
            <MyFigure
              imgSource={menuImages.genmaichaMenu}
              imgAlt={
                'Menu về thức uống của chúng tớ gồm Matcha và Dalgona' +
                ' coffee'
              }
            />
            <MyFigure
              imgSource={menuImages.coffeeMenu}
              imgAlt={
                'Menu về thức uống của chúng tớ gồm Matcha và Dalgona' +
                ' coffee'
              }
            />
          </div>
          {/* section 4 */}
          <div className="md:w-[482.06px]">
            <MyFigure
              imgSource={menuImages.a4Dessert}
              imgAlt={
                'Menu về những món ăn vặt của chúng tớ gồm khoai tây que lắc phô mai và tóp mỡ chiên mắm tỏi'
              }
            />
          </div>
        </div>
      </div>

      {/* Mobile Carousel Layout */}
      <div className="md:hidden flex flex-col items-center gap-4 w-full">
        <div className="flex items-center justify-between w-full">
          <button
            onClick={goToPrevious}
            aria-label="Previous slide"
            className="shrink-0 p-2 rounded-lg text-foreground transition-opacity"
          >
            <ChevronLeft size={30} />
          </button>

          <div
            className="overflow-hidden bg-transparent transition-[width] duration-500"
            style={{ width: `${currentSection.mobileWidth}px` }}
          >
            <AnimatePresence mode="wait" custom={slideDirection}>
              <motion.div
                key={currentSection.id}
                custom={slideDirection}
                initial={{ x: slideDirection > 0 ? '100%' : '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: slideDirection > 0 ? '-100%' : '100%' }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="flex flex-col"
              >
                {currentSection.items.map((item, idx) => (
                  <MyFigure
                    key={idx}
                    imgSource={item.imgSource}
                    imgAlt={item.imgAlt}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={goToNext}
            aria-label="Next slide"
            className="shrink-0 p-2 rounded-lg text-foreground transition-opacity"
          >
            <ChevronRight size={30} />
          </button>
        </div>

        {/* Navigation Buttons and Indicators */}
      </div>

      {/* Desktop Vector Section */}
      <div
        className={
          'hidden md:flex flex-col items-center gap-2 text-foreground text-6xl text-center '
        }
      >
        <img src={menuImages.vector} alt="Vector" />
        <p>Click Each Section</p>
        <p>To View</p>
      </div>
    </div>
  )
}

export default Menu
