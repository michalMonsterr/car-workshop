const LoadingSpinner = ({ size = "default", color = "primary" }) => {
  const sizes = {
    small: 20,
    default: 32,
    large: 48
  }

  const colors = {
    primary: "var(--accent-primary)",
    white: "#ffffff",
    secondary: "var(--text-secondary)"
  }

  return (
    <div className="loading-spinner-container">
      <svg
        className="loading-spinner"
        width={sizes[size]}
        height={sizes[size]}
        viewBox="0 0 50 50"
      >
        <circle
          className="loading-spinner-track"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="4"
        />
        <circle
          className="loading-spinner-fill"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke={colors[color]}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="31.416"
          strokeDashoffset="31.416"
        />
      </svg>
    </div>
  )
}

export default LoadingSpinner