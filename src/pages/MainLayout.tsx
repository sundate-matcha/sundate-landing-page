import Footer from '@/components/navigation/Footer/Footer'
import Header from '@/components/navigation/Header/Header'
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
