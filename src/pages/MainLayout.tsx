import Header from '@/components/Header/Header'
// import DockNav from '@/components/DockNav.tsx'
import Footer from '@/components/Footer/Footer'
import BackgroundImage from '@/components/BackgroundImage/BackgroundImage'
// import Hero from '@/components/Hero.tsx'

// This is for dark mode if needed
// import {ModeToggle} from "@/components/mode-toggle";

export function MainLayout() {
  return (
    <>
      <div>
        <Header />
      </div>

      <main>
        <BackgroundImage />
      </main>
      <div>
        <Footer />
      </div>
    </>
  )
}
