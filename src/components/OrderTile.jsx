const OrderTile = ({ order, onDragStart, onViewDetails }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return '#ef4444'
      case 'medium': return '#f59e0b'
      case 'low': return '#10b981'
      default: return '#6b7280'
    }
  }

  const getPriorityLabel = (priority) => {
    switch (priority) {
      case 'high': return 'Wysoki'
      case 'medium': return 'Średni'
      case 'low': return 'Niski'
      default: return priority
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('pl-PL')
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('pl-PL', {
      style: 'currency',
      currency: 'PLN'
    }).format(amount)
  }

  return (
    <div
      className="order-tile"
      draggable
      onDragStart={(e) => onDragStart(e, order)}
    >
      <div className="order-header">
        <span className="order-id">#{order.id}</span>
        <span 
          className="priority-badge"
          style={{ backgroundColor: getPriorityColor(order.priority) }}
        >
          {getPriorityLabel(order.priority)}
        </span>
      </div>
      
      <div className="order-content">
        <h4>{order.customerName}</h4>
        <p className="car-model">{order.carModel}</p>
        <p className="service-type">{order.serviceType}</p>
        <p className="issue">{order.issue}</p>
        
        <div className="order-details">
          <div className="detail-item">
            <span className="label">Przebieg:</span>
            <span className="value">{order.mileage?.toLocaleString('pl-PL')} km</span>
          </div>
          <div className="detail-item">
            <span className="label">Koszt:</span>
            <span className="value">{formatCurrency(order.estimatedCost)}</span>
          </div>
        </div>
        
        <div className="order-meta">
          <span className="date">Zgłoszono: {formatDate(order.dateReported)}</span>
          <button 
            className="view-details-btn"
            onClick={() => onViewDetails(order)}
          >
            Zobacz szczegóły
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrderTile