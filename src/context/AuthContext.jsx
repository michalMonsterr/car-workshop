import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const savedUser = localStorage.getItem('mechanic')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const login = (credentials) => {
    const { username, password } = credentials
    
    const mechanics = [
      { id: 1, username: 'jan_kowalski', password: 'haslo123', name: 'Jan Kowalski', specialization: 'Naprawa silników' },
      { id: 2, username: 'anna_nowak', password: 'haslo123', name: 'Anna Nowak', specialization: 'Układy hamulcowe' },
      { id: 3, username: 'piotr_wisniewski', password: 'haslo123', name: 'Piotr Wiśniewski', specialization: 'Elektrika' },
    ]
    
    const mechanic = mechanics.find(m => m.username === username && m.password === password)
    
    if (mechanic) {
      const userData = { ...mechanic }
      delete userData.password
      setUser(userData)
      localStorage.setItem('mechanic', JSON.stringify(userData))
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('mechanic')
  }

  const value = {
    user,
    login,
    logout,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}