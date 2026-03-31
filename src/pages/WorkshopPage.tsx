import Footer from '@/components/navigation/Footer/Footer'
import Header from '@/components/navigation/Header/Header'
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
