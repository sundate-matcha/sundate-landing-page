import MyFigure from '@/components/MyFigure.tsx'
import DrinkMenu from '@/assets/images/chawan_photo.jpg'
import SnackMenu from '@/assets/images/chawan_photo.jpg'

function Menu() {
  return (
    <div id={'menu'} className={'bg-foreground py-28 md:py-40'}>
      <div
        className={
          'flex flex-col gap-6 md:items-center md:justify-between mx-auto w-[min(1200px,92%)]'
        }
      >
        <h2
          className={
            'text-4xl font-black leading-none tracking-tight text-black md:text-6xl'
          }
        >
          Menu
        </h2>
        <p className={'max-w-xl text-sm leading-7 text-black/80 md:text-base'}>
          Sundate la khong gian am thuc va gap go, noi moi bua an duoc tao nen
          tu nguyen lieu tuoi, huong vi tron ven va su cham chut trong tung chi
          tiet. Chung toi tin rang am thuc ngon nhat khi duoc chia se cung nhau
          trong mot khong gian am cung, thoai mai va day nang luong tich cuc.
        </p>
      </div>

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
