import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const success = login(credentials)
    
    if (success) {
      navigate('/dashboard')
    } else {
      setError('Nieprawidłowa nazwa użytkownika lub hasło')
    }
    
    setLoading(false)
  }

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h2>Panel mechanika</h2>
          <p>Zaloguj się, aby uzyskać dostęp do panelu zarządzania</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}
          
          <div className="form-group">
            <label htmlFor="username">Nazwa użytkownika</label>
            <input
              type="text"
              id="username"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Hasło</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>

          <button 
            type="submit" 
            className="btn btn-primary btn-full"
            disabled={loading}
          >
            {loading ? 'Logowanie...' : 'Zaloguj się'}
          </button>
        </form>

        <div className="demo-credentials">
          <h4>Dane demonstracyjne:</h4>
          <p><strong>Użytkownik:</strong> jan_kowalski | <strong>Hasło:</strong> haslo123</p>
          <p><strong>Użytkownik:</strong> anna_nowak | <strong>Hasło:</strong> haslo123</p>
          <p><strong>Użytkownik:</strong> piotr_wisniewski | <strong>Hasło:</strong> haslo123</p>
        </div>
      </div>
    </div>
  )
}

export default Login