import MyFigure from '@/components/MyFigure.tsx'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import menuSections from './utils/sections'
import menuImages from './utils/images'

const images = menuImages.desktop

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
        'bg-[#521813] px-2 md:px-6 pb-4 md:pb-0 h-screen items-center flex flex-row justify-center gap-10'
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
            <MyFigure imgSource={images.matchaMenu} />
          </div>
          {/* section 2 */}
          <div className="md:w-[339.88px]">
            <MyFigure imgSource={images.fruityMatchaMenu} />
            <MyFigure imgSource={images.dairyMatchaMenu} />
            <MyFigure imgSource={images.addOn} />
          </div>
          {/* section 3 */}
          <div className="md:w-[381.17px]">
            <MyFigure imgSource={images.hojichaMenu} />
            <MyFigure imgSource={images.genmaichaMenu} />
            <MyFigure imgSource={images.coffeeMenu} />
          </div>
          {/* section 4 */}
          <div className="md:w-[482.06px]">
            <MyFigure imgSource={images.a4Dessert} />
          </div>
        </div>
      </div>

      {/* Mobile Carousel Layout */}
      <div className="md:hidden flex flex-col items-center gap-4 w-full">
        <div className="flex items-center justify-between w-full">
          <button
            onClick={goToPrevious}
            aria-label="Previous slide"
            className="shrink-0 rounded-lg text-foreground transition-opacity"
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
                  <MyFigure key={idx} imgSource={item.imgSource} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={goToNext}
            aria-label="Next slide"
            className="shrink-0 rounded-lg text-foreground transition-opacity"
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
        <img src={images.vector} alt="Vector" />
        <p>Click Each Section</p>
        <p>To View</p>
      </div>
    </div>
  )
}

export default Menu
