import ImgBgMobile from '@/assets/images/bg-mobile.png'
import ImgBgDesktop from '@/assets/images/image (2).png'

function BackgroundImage() {
  return (
    <section className={'relative w-full h-screen flex items-center justify-center'}>
      <picture className="inset-0 w-full h-full">
        <source media="(min-width: 768px)" srcSet={ImgBgDesktop} />
        <img
          src={ImgBgMobile}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </picture>
    </section>
  )
}

export default BackgroundImage
