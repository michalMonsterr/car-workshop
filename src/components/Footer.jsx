const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>AutoMaster</h3>
            <p>Twój zaufany partner motoryzacyjny</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Usługi</h4>
              <ul>
                <li><a href="#services">Naprawa silników</a></li>
                <li><a href="#services">Serwis hamulców</a></li>
                <li><a href="#services">Wymiana oleju</a></li>
                <li><a href="#services">Serwis opon</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Firma</h4>
              <ul>
                <li><a href="#about">O nas</a></li>
                <li><a href="#contact">Kontakt</a></li>
                <li><a href="#">Kariera</a></li>
                <li><a href="#">Opinie</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Śledź nas</h4>
              <div className="social-links">
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} AutoMaster. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer