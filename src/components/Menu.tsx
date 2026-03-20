import MyFigure from '@/components/MyFigure.tsx'
import BoxReveal from '@/components/magicui/box-reveal.tsx'
import DrinkMenu from '../assets/images/drinks.png'
import SnackMenu from '../assets/images/snacks.png'

function Menu() {
  return (
    <div id={'menu'} className={'bg-white pt-5 md:pt-4 pb-3'}>
      <h2 className={'flex items-center justify-center text-3xl text-primary'}>
        <BoxReveal boxColor={'hsl(151.24, 100%, 23.73%)'} duration={0.4}>
          <span>Menu của chúng tớ</span>
        </BoxReveal>
      </h2>
      <div
        className={
          'flex flex-col md:flex-row items-center justify-between gap-5 mx-auto mt-5 w-4/5 lg:w-3/5'
        }
      >
        <MyFigure
          imgSource={DrinkMenu}
          imgAlt={
            'Menu về thức uống của chúng tớ gồm Matcha và Dalgona' + ' coffee'
          }
          imgCaption={'Menu đồ uống'}
        />

        <MyFigure
          imgSource={SnackMenu}
          imgAlt={
            'Menu về những món ăn vặt của chúng tớ gồm khoai tây que lắc phô mai và tóp mỡ chiên mắm tỏi'
          }
          imgCaption={'Menu món ăn vặt'}
        />
      </div>
    </div>
  )
}

export default Menu
