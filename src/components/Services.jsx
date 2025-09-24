import AnimatedSection from './AnimatedSection'

const Services = () => {
  const services = [
    {
      title: 'Naprawa silników',
      description: 'Kompleksowa diagnostyka i naprawa silników',
      price: 'Od 200 zł',
      icon: '🔧'
    },
    {
      title: 'Serwis opon',
      description: 'Montaż, wyważanie i geometria kół',
      price: 'Od 120 zł',
      icon: '🛞'
    },
    {
      title: 'Akumulator i elektrika',
      description: 'Wymiana akumulatora i naprawa układów elektrycznych',
      price: 'Od 150 zł',
      icon: '🔋'
    },
    {
      title: 'Serwis hamulców',
      description: 'Wymiana klocków i konserwacja układu hamulcowego',
      price: 'Od 250 zł',
      icon: '🛡️'
    },
    {
      title: 'Wymiana oleju',
      description: 'Szybka i profesjonalna wymiana oleju',
      price: 'Od 80 zł',
      icon: '🛢️'
    },
    {
      title: 'Naprawa klimatyzacji',
      description: 'Diagnostyka i naprawa systemów klimatyzacji',
      price: 'Od 180 zł',
      icon: '❄️'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <AnimatedSection animation="fadeInUp" delay={100}>
          <div className="section-header">
            <h2>Nasze usługi</h2>
            <p>Kompleksowe rozwiązania motoryzacyjne dla wszystkich potrzeb</p>
          </div>
        </AnimatedSection>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <AnimatedSection 
              key={index} 
              animation="fadeInUp" 
              delay={index * 100}
              className="service-card-wrapper"
            >
              <div className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-price">{service.price}</div>
                <button className="btn btn-outline btn-animated">
                  <span>Dowiedz się więcej</span>
                  <div className="btn-ripple"></div>
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services