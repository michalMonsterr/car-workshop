import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import OrderTile from './OrderTile'
import OrderDetailsModal from './OrderDetailsModal'
import Logo from './Logo'
import { mockOrders } from '../data/mockData'
import '../styles/dashboard.css'

const MechanicsDashboard = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [orders, setOrders] = useState([])
  const [draggedOrder, setDraggedOrder] = useState(null)
  const [selectedOrder, setSelectedOrder] = useState(null)

  useEffect(() => {
    if (!user) {
      navigate('/login')
      return
    }
    
    const mechanicOrders = mockOrders.filter(order => order.mechanicId === user.id)
    setOrders(mechanicOrders)
  }, [user, navigate])

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const handleDragStart = (e, order) => {
    setDraggedOrder(order)
    e.dataTransfer.effectAllowed = 'move'
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }

  const handleDrop = (e, newStatus) => {
    e.preventDefault()
    
    if (draggedOrder) {
      const updatedOrders = orders.map(order =>
        order.id === draggedOrder.id
          ? { ...order, status: newStatus }
          : order
      )
      setOrders(updatedOrders)
      setDraggedOrder(null)
    }
  }

  const handleViewDetails = (order) => {
    setSelectedOrder(order)
  }

  const handleUpdateOrder = (updatedOrder) => {
    const updatedOrders = orders.map(order =>
      order.id === updatedOrder.id ? updatedOrder : order
    )
    setOrders(updatedOrders)
  }

  const getOrdersByStatus = (status) => {
    return orders.filter(order => order.status === status)
  }

  const getStatusTitle = (status) => {
    switch (status) {
      case 'reported': return 'Zgłoszone'
      case 'in_repair': return 'W naprawie'
      case 'repaired': return 'Naprawione'
      default: return status
    }
  }

  const getStatusCount = (status) => {
    return getOrdersByStatus(status).length
  }

  const getTotalRevenue = () => {
    return orders
      .filter(order => order.status === 'repaired' && order.actualCost)
      .reduce((sum, order) => sum + order.actualCost, 0)
  }

  if (!user) {
    return <div>Ładowanie...</div>
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="container">
          <div className="header-content">
            <div className="header-left">
              <Logo size="small" />
              <div className="welcome-section">
                <h1>Witaj, {user.name}</h1>
                <p>Specjalizacja: {user.specialization}</p>
              </div>
            </div>
            <div className="header-actions">
              <button onClick={handleLogout} className="btn btn-outline">
                Wyloguj się
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="container">
          <div className="dashboard-stats">
            <div className="stat-card">
              <div className="stat-icon">📋</div>
              <h3>{getStatusCount('reported')}</h3>
              <p>Nowe zgłoszenia</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🔧</div>
              <h3>{getStatusCount('in_repair')}</h3>
              <p>W trakcie</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">✅</div>
              <h3>{getStatusCount('repaired')}</h3>
              <p>Ukończone</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">💰</div>
              <h3>{getTotalRevenue().toLocaleString('pl-PL', { style: 'currency', currency: 'PLN' })}</h3>
              <p>Przychód</p>
            </div>
          </div>

          <div className="kanban-board">
            {['reported', 'in_repair', 'repaired'].map(status => (
              <div
                key={status}
                className={`kanban-column ${status}`}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, status)}
              >
                <div className="column-header">
                  <h3>{getStatusTitle(status)}</h3>
                  <span className="count">{getStatusCount(status)}</span>
                </div>
                
                <div className="column-content">
                  {getOrdersByStatus(status).map(order => (
                    <OrderTile
                      key={order.id}
                      order={order}
                      onDragStart={handleDragStart}
                      onViewDetails={handleViewDetails}
                    />
                  ))}
                  
                  {getOrdersByStatus(status).length === 0 && (
                    <div className="empty-column">
                      <p>Brak zleceń w tej kategorii</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedOrder && (
        <OrderDetailsModal
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
          onUpdateOrder={handleUpdateOrder}
        />
      )}
    </div>
  )
}

export default MechanicsDashboard