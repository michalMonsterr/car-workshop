import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Dziękujemy! Skontaktujemy się wkrótce.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Kontakt</h2>
          <p>Skontaktuj się z nami, aby uzyskać wycenę lub umówić wizytę</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-label">Adres</div>
              <div className="info-value">
                ul. Główna 123<br />
                00-001 Warszawa
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-label">Telefon</div>
              <div className="info-value">(22) 123-45-67</div>
            </div>
            
            <div className="info-item">
              <div className="info-label">E-mail</div>
              <div className="info-value">kontakt@automaster.pl</div>
            </div>
            
            <div className="info-item">
              <div className="info-label">Godziny otwarcia</div>
              <div className="info-value">
                Pon-Pt: 8:00-18:00<br />
                Sob: 9:00-16:00<br />
                Nie: Zamknięte
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Imię i nazwisko"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Adres e-mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Numer telefonu"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="form-group">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Wybierz usługę</option>
                <option value="engine">Naprawa silnika</option>
                <option value="brakes">Serwis hamulców</option>
                <option value="tires">Serwis opon</option>
                <option value="oil">Wymiana oleju</option>
                <option value="other">Inne</option>
              </select>
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Opisz problem lub zapytanie"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary btn-full">
              Wyślij wiadomość
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact