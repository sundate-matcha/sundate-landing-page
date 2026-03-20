import Header from '@/components/Header/Header'
// import DockNav from '@/components/DockNav.tsx'
import Footer from '@/components/Footer.tsx'
import Menu from '@/components/Menu.tsx'
import ImgBgMobile from '../assets/images/chawan_photo.jpg'
import ImgBgDesktop from '../assets/images/chawan_photo1.jpg'
// import Hero from '@/components/Hero.tsx'

// This is for dark mode if needed
// import {ModeToggle} from "@/components/mode-toggle";

export function MainLayout() {
  return (
    // [calc(100vh_-_74px)]: 100% of the viewport height minus the height of the DockNav
    <>
      <div>
        <Header />
      </div>

      <main>
        <picture className="fixed inset-0 -z-10">
          <source media="(min-width: 768px)" srcSet={ImgBgDesktop} />
          <img
            src={ImgBgMobile}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </picture>
        <div className="relative z-10 mt-[100vh]">
          <Menu />
        </div>
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </>
  )
}
