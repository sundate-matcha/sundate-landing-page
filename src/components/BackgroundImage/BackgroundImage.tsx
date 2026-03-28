import ImgBgMobile from '@/assets/images/bg-mobile.png'
import ImgBgDesktop from '@/assets/images/image (2).png'

function BackgroundImage() {
  return (
    <picture className="inset-0 -z-10 h-screen">
      <source media="(min-width: 768px)" srcSet={ImgBgDesktop} />
      <img
        src={ImgBgMobile}
        alt="Background"
        className="w-full h-full object-cover"
      />
    </picture>
  )
}

export default BackgroundImage
