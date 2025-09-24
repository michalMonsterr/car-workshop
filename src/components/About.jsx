import AnimatedSection from './AnimatedSection'
import AnimatedCounter from './AnimatedCounter'

const About = () => {
  const stats = [
    { number: 20, label: 'Lat doświadczenia', suffix: '+' },
    { number: 5000, label: 'Naprawionych aut', suffix: '+' },
    { number: 98, label: 'Zadowolonych klientów', suffix: '%' },
    { number: 24, label: 'Pomoc w nagłych wypadkach', suffix: '/7' }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <AnimatedSection animation="fadeInLeft" delay={100}>
            <div className="about-text">
              <h2>O AutoMaster</h2>
              <p>
                Z ponad dwudziestoletnim doświadczeniem w naprawach i serwisie samochodowym, 
                AutoMaster jest zaufanym wyborem właścicieli samochodów w regionie. 
                Nasi certyfikowani technicy używają najnowocześniejszego sprzętu i oryginalnych części, 
                aby zapewnić optymalne działanie Twojego pojazdu.
              </p>
              <p>
                Wierzymy w przejrzyste ceny, wysoką jakość wykonania i wyjątkową obsługę klienta. 
                Każda naprawa objęta jest naszą gwarancją zadowolenia, ponieważ Twoje bezpieczeństwo 
                i zaufanie są dla nas najważniejsze.
              </p>
              
              <div className="features">
                <div className="feature">
                  <span className="feature-icon">✓</span>
                  <span>Certyfikowani technicy</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">✓</span>
                  <span>Najnowocześniejszy sprzęt diagnostyczny</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">✓</span>
                  <span>Oryginalne części i gwarancja</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeInRight" delay={200}>
            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat">
                  <div className="stat-number">
                    <AnimatedCounter 
                      end={stat.number} 
                      suffix={stat.suffix}
                      duration={2000 + index * 200}
                    />
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default About