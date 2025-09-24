import AnimatedSection from './AnimatedSection'
import ParticleBackground from './ParticleBackground'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <ParticleBackground />
      <div className="container">
        <AnimatedSection animation="fadeInUp" delay={200}>
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="hero-title-line">Profesjonalne naprawy</span>
                <span className="hero-title-line hero-title-accent">i serwis samochodowy</span>
              </h1>
              <p className="hero-subtitle">
                Specjalistyczne usługi motoryzacyjne z ponad 20-letnim doświadczeniem. 
                Jakość, uczciwe ceny i gwarancja zadowolenia.
              </p>
              <div className="hero-buttons">
                <a href="#contact" className="btn btn-primary btn-animated">
                  <span>Umów wizytę</span>
                  <div className="btn-ripple"></div>
                </a>
                <a href="#services" className="btn btn-secondary btn-animated">
                  <span>Nasze usługi</span>
                  <div className="btn-ripple"></div>
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default Hero