import { useEffect, useRef, useState } from 'react'

const AnimatedSection = ({ children, animation = "fadeInUp", delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`animated-section ${isVisible ? `animate-${animation}` : ''} ${className}`}
    >
      {children}
    </div>
  )
}

export default AnimatedSection