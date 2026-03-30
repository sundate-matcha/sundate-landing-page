import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Workshop from '@/components/Workshop/Workshop'

export function WorkshopPage() {
  return (
    <>
      <div>
        <Header />
      </div>

      <main>
        <div className="relative z-10">
          <Workshop />
        </div>
      </main>

      <div>
        <Footer />
      </div>
    </>
  )
}

export default WorkshopPage
