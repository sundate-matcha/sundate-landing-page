import About from '@/components/About/About'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

export function AboutPage() {
  return (
    <>
      <div>
        <Header />
      </div>

      <main>
        <div className="relative z-10">
          <About />
        </div>
      </main>

      <div>
        <Footer />
      </div>
    </>
  )
}

export default AboutPage
