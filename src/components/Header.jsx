import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Logo from './Logo'

const Header = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user } = useAuth()
  const location = useLocation()

  if (location.pathname === '/dashboard') {
    return null
  }

  const navItems = [
    { href: '#home', label: 'Strona główna' },
    { href: '#services', label: 'Usługi' },
    { href: '#about', label: 'O nas' },
    { href: '#contact', label: 'Kontakt' }
  ]

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-brand">
          <Link to="/car-workshop/">
            <Logo size="default" />
          </Link>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          {navItems.map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Link 
            to="/login" 
            className="nav-link mechanic-login"
            onClick={() => setIsMenuOpen(false)}
          >
            {user ? 'Panel' : 'Panel mechanika'}
          </Link>
        </nav>

        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header