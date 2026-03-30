// import MyFigure from '@/components/MyFigure.tsx'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
// import { AnimatePresence, motion } from 'framer-motion'
import menuSections from './utils/sections'
// import menuImages from './utils/images'

// const images = menuImages.desktop

function SeasonalMenu() {
  const [currentSlide, setCurrentSlide] = useState(0)
  // const [slideDirection, setSlideDirection] = useState(1)

  // const goToPrevious = () => {
  //   setSlideDirection(-1)
  //   setCurrentSlide((prev) => (prev === 0 ? menuSections.length - 1 : prev - 1))
  // }

  // const goToNext = () => {
  //   setSlideDirection(1)
  //   setCurrentSlide((prev) => (prev === menuSections.length - 1 ? 0 : prev + 1))
  // }

  const currentSection = menuSections[currentSlide]
  return (
    <div
      id={'menu'}
      className={
        'bg-[#521813] px-2 md:px-6 py-8 md:py-12 h-screen items-center flex flex-col justify-center  md:gap-10 gap-4'
      }
    >
      {/* Desktop Layout */}
      <div className="hidden md:flex flex-row h-[500px] w-[1450px] gap-10">
        <div
          className={
            'w-full h-full overflow-hidden rounded-xl border-4 border-black bg-black/50'
          }
        ></div>
        <div
          className={
            'w-full h-full overflow-hidden rounded-xl border-4 border-black bg-black/50'
          }
        ></div>
        <div
          className={
            'w-full h-full overflow-hidden rounded-xl border-4 border-black bg-black/50'
          }
        ></div>
      </div>

      {/* Mobile Carousel Layout */}
      <div className="md:hidden flex flex-col items-center gap-4 w-full">
        <div className="flex items-center justify-between w-full">
          <button
            // onClick={goToPrevious}
            aria-label="Previous slide"
            className="shrink-0 rounded-lg text-foreground transition-opacity"
          >
            <ChevronLeft size={30} />
          </button>

          <div className="overflow-hidden bg-transparent transition-[width] w-[70%] duration-500 h-[500px] flex items-center justify-center">
            <div
              className={
                'w-full h-full overflow-hidden rounded-xl border-4 border-black bg-black/50'
              }
            ></div>
          </div>

          <button
            // onClick={goToNext}
            aria-label="Next slide"
            className="shrink-0 rounded-lg text-foreground transition-opacity"
          >
            <ChevronRight size={30} />
          </button>
        </div>

        {/* Navigation Buttons and Indicators */}
      </div>

      {/* Desktop Vector Section */}
      <div className={'flex items-center text-foreground text-6xl'}>
        <p>Seasonal Menu</p>
      </div>
    </div>
  )
}

export default SeasonalMenu
