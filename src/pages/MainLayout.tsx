import Header from '@/components/Header/Header'
// import DockNav from '@/components/DockNav.tsx'
import Footer from '@/components/Footer/Footer'
import Menu from '@/components/Menu/Menu'
import About from '@/components/About/About'
import BackgroundImage from '@/components/BackgroundImage/BackgroundImage'
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
        <BackgroundImage />
        {/* <div className="relative z-10 justify-center items-center flex">
          <Intro />
        </div> */}
        <div className="relative z-10">
          <About />
        </div>
        <div className="relative z-10">
          <Menu />
        </div>
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </>
  )
}
