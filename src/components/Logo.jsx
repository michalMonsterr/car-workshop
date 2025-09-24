const Logo = ({ size = "default", className = "" }) => {
  const sizes = {
    small: { width: 120, height: 32 },
    default: { width: 160, height: 42 },
    large: { width: 200, height: 54 }
  }

  const { width, height } = sizes[size]

  return (
    <div className={`logo-container ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 200 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo-svg"
      >
        {/* Background gradient */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
          <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        
        {/* Car icon */}
        <g transform="translate(8, 8)">
          {/* Car body */}
          <path
            d="M6 20h4l2-6h12l2 6h4c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2h-2c0 1.7-1.3 3-3 3s-3-1.3-3-3H12c0 1.7-1.3 3-3 3s-3-1.3-3-3H4c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2z"
            fill="url(#logoGradient)"
          />
          
          {/* Wheels */}
          <circle cx="9" cy="29" r="2" fill="url(#accentGradient)" />
          <circle cx="23" cy="29" r="2" fill="url(#accentGradient)" />
          
          {/* Car details */}
          <rect x="10" y="16" width="12" height="3" rx="1" fill="rgba(255,255,255,0.3)" />
          <rect x="14" y="11" width="4" height="3" rx="1" fill="rgba(255,255,255,0.4)" />
          
          {/* Wrench overlay */}
          <g transform="translate(20, 4)">
            <path
              d="M9 12l4-4 1.5 1.5L11 13l2 2 3.5-3.5L18 13l-4 4-5-5z"
              fill="#ffffff"
              opacity="0.9"
            />
          </g>
        </g>
        
        {/* Text */}
        <text
          x="52"
          y="22"
          fontFamily="Inter, sans-serif"
          fontSize="18"
          fontWeight="800"
          fill="url(#logoGradient)"
          letterSpacing="-0.5px"
        >
          AutoMaster
        </text>
        
        <text
          x="52"
          y="38"
          fontFamily="Inter, sans-serif"
          fontSize="10"
          fontWeight="500"
          fill="#a1a1aa"
          letterSpacing="1px"
        >
          PROFESSIONAL SERVICE
        </text>
      </svg>
    </div>
  )
}

export default Logo