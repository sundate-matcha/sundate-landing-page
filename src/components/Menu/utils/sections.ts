import menuImages from '@/components/Menu/utils/images.ts'

const images = menuImages.mobile

const menuSections = [
  {
    id: 'section1',
    mobileWidth: 48,
    items: [
      {
        imgSource: images.matchaMenu,
        imgAlt:
          'Menu về những món ăn vặt của chúng tớ gồm khoai tây que lắc phô mai và tóp mỡ chiên mắm tỏi',
      },
    ],
  },
  {
    id: 'section2',
    mobileWidth: 55,
    items: [
      {
        imgSource: images.fruityMatchaMenu,
        imgAlt: 'Menu về các loại matcha có chứa trái cây của chúng tớ',
      },
      {
        imgSource: images.dairyMatchaMenu,
        imgAlt: 'Menu về các loại matcha có chứa sữa của chúng tớ',
      },
      {
        imgSource: images.addOn,
        imgAlt: 'Menu về các món ăn vặt của chúng tớ',
      },
    ],
  },
  {
    id: 'section3',
    mobileWidth: 60,
    items: [
      {
        imgSource: images.hojichaMenu,
        imgAlt: 'Menu về thức uống của chúng tớ gồm Matcha và Dalgona coffee',
      },
      {
        imgSource: images.genmaichaMenu,
        imgAlt: 'Menu về thức uống của chúng tớ gồm Matcha và Dalgona coffee',
      },
      {
        imgSource: images.coffeeMenu,
        imgAlt: 'Menu về thức uống của chúng tớ gồm Matcha và Dalgona coffee',
      },
    ],
  },
  {
    id: 'section4',
    mobileWidth: 75,
    items: [
      {
        imgSource: images.a4Dessert,
        imgAlt:
          'Menu về những món ăn vặt của chúng tớ gồm khoai tây que lắc phô mai và tóp mỡ chiên mắm tỏi',
      },
    ],
  },
]

export default menuSections
