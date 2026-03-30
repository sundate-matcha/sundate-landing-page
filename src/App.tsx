// import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainLayout } from './pages/MainLayout.tsx'
import MenuPage from './pages/MenuPage.tsx'
import Loader from '@/components/Loader'
import { useEffect, useState } from 'react'
import { WorkshopPage } from './pages/WorkshopPage.tsx'
import { AboutPage } from './pages/AboutPage.tsx'

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/workshop" element={<WorkshopPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  )
}

export default App
