import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Login from './components/Login'
import MechanicsDashboard from './components/MechanicsDashboard'
import LoadingSpinner from './components/LoadingSpinner'
import './styles/global.css'

const HomePage = () => (
  <>
    <Hero />
    <Services />
    <About />
    <Contact />
  </>
)

const AppContent = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [location.pathname])

  const showFooter = location.pathname !== '/dashboard'

  if (isLoading) {
    return (
      <div className="loading-screen">
        <LoadingSpinner size="large" />
        <p>Ładowanie...</p>
      </div>
    )
  }

  return (
    <div className="App">
      <Header isScrolled={isScrolled} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<MechanicsDashboard />} />
      </Routes>
      {showFooter && <Footer />}
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <Router basename='/car-workshop'>
        <AppContent />
      </Router>
    </AuthProvider>
  )
}

export default App