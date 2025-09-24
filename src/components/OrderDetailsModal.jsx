import { useState, useEffect } from 'react'
import { priorityLevels } from '../data/mockData'
import LoadingSpinner from './LoadingSpinner'

const OrderDetailsModal = ({ order, onClose, onUpdateOrder }) => {
  const [activeTab, setActiveTab] = useState('details')
  const [newNote, setNewNote] = useState('')
  const [orderData, setOrderData] = useState(order)
  const [isLoading, setIsLoading] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  if (!order) return null

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      onClose()
      setIsClosing(false)
    }, 300)
  }

  const handleAddNote = async () => {
    if (!newNote.trim()) return

    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800))

    const note = {
      id: Date.now(),
      author: 'Jan Kowalski',
      date: new Date().toISOString(),
      content: newNote
    }

    const updatedOrder = {
      ...orderData,
      notes: [...orderData.notes, note]
    }

    setOrderData(updatedOrder)
    onUpdateOrder(updatedOrder)
    setNewNote('')
    setIsLoading(false)
  }

  const handleStatusChange = async (newStatus) => {
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const updatedOrder = {
      ...orderData,
      status: newStatus
    }
    setOrderData(updatedOrder)
    onUpdateOrder(updatedOrder)
    setIsLoading(false)
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('pl-PL')
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('pl-PL', {
      style: 'currency',
      currency: 'PLN'
    }).format(amount)
  }

  const tabs = [
    { id: 'details', label: 'Szczegóły', icon: '📋' },
    { id: 'technical', label: 'Dane techniczne', icon: '🔧' },
    { id: 'photos', label: 'Zdjęcia', icon: '📷' },
    { id: 'notes', label: 'Notatki', icon: '📝' },
    { id: 'diagnosis', label: 'Diagnostyka', icon: '🔍' }
  ]

  const statusOptions = [
    { value: 'reported', label: 'Zgłoszone', color: '#ef4444' },
    { value: 'in_repair', label: 'W naprawie', color: '#f59e0b' },
    { value: 'repaired', label: 'Naprawione', color: '#10b981' }
  ]

  return (
    <div className={`modal-overlay ${isClosing ? 'modal-closing' : ''}`} onClick={handleClose}>
      <div className={`modal-container ${isClosing ? 'modal-container-closing' : ''}`} onClick={(e) => e.stopPropagation()}>
        {isLoading && (
          <div className="modal-loading-overlay">
            <LoadingSpinner size="large" color="white" />
          </div>
        )}
        
        <div className="modal-header">
          <div className="modal-title-section">
            <h2 className="modal-title-animated">Zlecenie #{orderData.id}</h2>
            <div className="order-status-section">
              <select
                value={orderData.status}
                onChange={(e) => handleStatusChange(e.target.value)}
                className="status-select"
                disabled={isLoading}
              >
                {statusOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <span
                className="priority-badge priority-badge-animated"
                style={{ backgroundColor: priorityLevels[orderData.priority]?.color }}
              >
                {priorityLevels[orderData.priority]?.label}
              </span>
            </div>
          </div>
          <button className="modal-close" onClick={handleClose}>×</button>
        </div>

        <div className="modal-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              {tab.label}
              <div className="tab-indicator"></div>
            </button>
          ))}
        </div>

        <div className="modal-content">
          {activeTab === 'details' && (
            <div className="tab-content tab-content-animated">
              <div className="details-grid">
                <div className="detail-section detail-section-animated">
                  <h3>Informacje o kliencie</h3>
                  <div className="detail-item">
                    <label>Imię i nazwisko:</label>
                    <span>{orderData.customerName}</span>
                  </div>
                  <div className="detail-item">
                    <label>Telefon:</label>
                    <span>{orderData.customerPhone}</span>
                  </div>
                  <div className="detail-item">
                    <label>E-mail:</label>
                    <span>{orderData.customerEmail}</span>
                  </div>
                </div>

                <div className="detail-section detail-section-animated">
                  <h3>Informacje o zleceniu</h3>
                  <div className="detail-item">
                    <label>Typ usługi:</label>
                    <span>{orderData.serviceType}</span>
                  </div>
                  <div className="detail-item">
                    <label>Data zgłoszenia:</label>
                    <span>{formatDate(orderData.dateReported)}</span>
                  </div>
                  <div className="detail-item">
                    <label>Szacowany czas zakończenia:</label>
                    <span>{formatDate(orderData.estimatedCompletion)}</span>
                  </div>
                  <div className="detail-item">
                    <label>Koszt szacowany:</label>
                    <span>{formatCurrency(orderData.estimatedCost)}</span>
                  </div>
                  {orderData.actualCost && (
                    <div className="detail-item">
                      <label>Koszt rzeczywisty:</label>
                      <span>{formatCurrency(orderData.actualCost)}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="issue-section issue-section-animated">
                <h3>Opis problemu</h3>
                <p className="issue-description">{orderData.issue}</p>
              </div>
            </div>
          )}

          {activeTab === 'technical' && (
            <div className="tab-content tab-content-animated">
              <div className="technical-grid">
                <div className="detail-section detail-section-animated">
                  <h3>Dane pojazdu</h3>
                  <div className="detail-item">
                    <label>Marka i model:</label>
                    <span>{orderData.carModel}</span>
                  </div>
                  <div className="detail-item">
                    <label>Rok produkcji:</label>
                    <span>{orderData.carYear}</span>
                  </div>
                  <div className="detail-item">
                    <label>Numer rejestracyjny:</label>
                    <span>{orderData.licensePlate}</span>
                  </div>
                  <div className="detail-item">
                    <label>VIN:</label>
                    <span className="vin">{orderData.vin}</span>
                  </div>
                  <div className="detail-item">
                    <label>Przebieg:</label>
                    <span>{orderData.mileage?.toLocaleString('pl-PL')} km</span>
                  </div>
                  <div className="detail-item">
                    <label>Kolor:</label>
                    <span>{orderData.color}</span>
                  </div>
                </div>

                <div className="detail-section detail-section-animated">
                  <h3>Dane silnika</h3>
                  <div className="detail-item">
                    <label>Typ silnika:</label>
                    <span>{orderData.engineType}</span>
                  </div>
                  <div className="detail-item">
                    <label>Kod silnika:</label>
                    <span>{orderData.engineCode}</span>
                  </div>
                  <div className="detail-item">
                    <label>Rodzaj paliwa:</label>
                    <span>{orderData.fuelType}</span>
                  </div>
                  <div className="detail-item">
                    <label>Skrzynia biegów:</label>
                    <span>{orderData.transmission}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'photos' && (
            <div className="tab-content tab-content-animated">
              <div className="photos-grid">
                {orderData.photos?.map((photo, index) => (
                  <div key={photo.id} className="photo-item photo-item-animated" style={{ animationDelay: `${index * 100}ms` }}>
                    <img src={photo.url} alt={photo.caption} />
                    <div className="photo-info">
                      <p className="photo-caption">{photo.caption}</p>
                      <span className="photo-type">{photo.type}</span>
                    </div>
                  </div>
                ))}
                {(!orderData.photos || orderData.photos.length === 0) && (
                  <div className="no-photos">
                    <p>Brak zdjęć dla tego zlecenia</p>
                    <button className="btn btn-outline btn-animated">
                      <span>Dodaj zdjęcie</span>
                      <div className="btn-ripple"></div>
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'notes' && (
            <div className="tab-content tab-content-animated">
              <div className="notes-section">
                <div className="add-note-section add-note-section-animated">
                  <textarea
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    placeholder="Dodaj notatkę..."
                    rows="3"
                    className="note-input"
                    disabled={isLoading}
                  />
                  <button
                    onClick={handleAddNote}
                    className="btn btn-primary btn-animated"
                    disabled={!newNote.trim() || isLoading}
                  >
                    <span>Dodaj notatkę</span>
                    <div className="btn-ripple"></div>
                  </button>
                </div>

                <div className="notes-list">
                  {orderData.notes?.map((note, index) => (
                    <div key={note.id} className="note-item note-item-animated" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="note-header">
                        <span className="note-author">{note.author}</span>
                        <span className="note-date">{formatDate(note.date)}</span>
                      </div>
                      <p className="note-content">{note.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'diagnosis' && (
            <div className="tab-content tab-content-animated">
              <div className="diagnosis-section">
                <div className="detail-section detail-section-animated">
                  <h3>Wyniki diagnostyki</h3>
                  <div className="detail-item">
                    <label>Oględziny wizualne:</label>
                    <span>{orderData.inspectionResults?.visualInspection}</span>
                  </div>
                  <div className="detail-item">
                    <label>Kody błędów:</label>
                    <span>
                      {orderData.inspectionResults?.diagnosticCodes?.length > 0
                        ? orderData.inspectionResults.diagnosticCodes.join(', ')
                        : 'Brak kodów błędów'
                      }
                    </span>
                  </div>
                  <div className="detail-item">
                    <label>Wyniki testów:</label>
                    <span>{orderData.inspectionResults?.testResults}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default OrderDetailsModal