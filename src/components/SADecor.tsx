/** Reusable South African decorative SVG components */

/** Protea flower — South Africa's national flower */
export function Protea({ size = 64, opacity = 0.18 }: { size?: number; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" style={{ opacity }}>
      {/* Outer petals */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
        <ellipse
          key={i}
          cx="50" cy="22" rx="5" ry="18"
          fill={i % 3 === 0 ? '#86C5D8' : i % 3 === 1 ? '#c8973a' : '#CAE9F5'}
          transform={`rotate(${deg} 50 50)`}
        />
      ))}
      {/* Inner circle */}
      <circle cx="50" cy="50" r="14" fill="#ADD8E6" />
      <circle cx="50" cy="50" r="9" fill="#4a9ab5" />
      <circle cx="50" cy="50" r="5" fill="#c8973a" />
    </svg>
  )
}

/** Ndebele-inspired diamond stripe divider */
export function NdebeleDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div className="ndebele-border" />
      <svg width="100%" height="16" preserveAspectRatio="none" viewBox="0 0 240 16">
        {Array.from({ length: 30 }).map((_, i) => (
          <polygon
            key={i}
            points={`${i * 8},0 ${i * 8 + 4},8 ${i * 8 + 8},0`}
            fill={i % 4 === 0 ? '#0f2d3d' : i % 4 === 1 ? '#86C5D8' : i % 4 === 2 ? '#c8973a' : '#CAE9F5'}
          />
        ))}
      </svg>
    </div>
  )
}

/** Small diamond accent row */
export function DiamondRow({ count = 5 }: { count?: number }) {
  const colors = ['#86C5D8', '#c8973a', '#4a9ab5', '#ADD8E6', '#0f2d3d']
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="10" height="10" viewBox="0 0 10 10">
          <polygon points="5,0 10,5 5,10 0,5" fill={colors[i % colors.length]} />
        </svg>
      ))}
    </div>
  )
}

/** Corner triangle accent (Ndebele-inspired) */
export function CornerAccent({ size = 40, corner = 'tl' }: { size?: number; corner?: 'tl' | 'tr' | 'bl' | 'br' }) {
  const transforms: Record<string, string> = {
    tl: 'rotate(0)',
    tr: 'rotate(90 20 20)',
    br: 'rotate(180 20 20)',
    bl: 'rotate(270 20 20)',
  }
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" style={{ opacity: 0.6 }}>
      <polygon points="0,0 40,0 0,40" fill="#86C5D8" transform={transforms[corner]} />
      <polygon points="0,0 24,0 0,24" fill="#c8973a" transform={transforms[corner]} />
      <polygon points="0,0 12,0 0,12" fill="#0f2d3d" transform={transforms[corner]} />
    </svg>
  )
}

/** Ndebele geometric border frame around a section */
export function NdebeleFrame({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Top border */}
      <div className="ndebele-border-thin" />
      {/* Side triangles */}
      <div className="absolute top-0 left-0"><CornerAccent corner="tl" size={32} /></div>
      <div className="absolute top-0 right-0"><CornerAccent corner="tr" size={32} /></div>
      <div className="px-2">{children}</div>
      {/* Bottom border */}
      <div className="ndebele-border-thin" />
      <div className="absolute bottom-0 left-0"><CornerAccent corner="bl" size={32} /></div>
      <div className="absolute bottom-0 right-0"><CornerAccent corner="br" size={32} /></div>
    </div>
  )
}

/** African sun motif */
export function AfricanSun({ size = 48, opacity = 0.15 }: { size?: number; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ opacity }}>
      <circle cx="50" cy="50" r="20" fill="#c8973a" />
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180
        const x1 = 50 + Math.cos(angle) * 24
        const y1 = 50 + Math.sin(angle) * 24
        const x2 = 50 + Math.cos(angle) * 42
        const y2 = 50 + Math.sin(angle) * 42
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#c8973a" strokeWidth="4" strokeLinecap="round" />
      })}
    </svg>
  )
}

/** Zulu-inspired shield silhouette */
export function ZuluShield({ size = 36, opacity = 0.2 }: { size?: number; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 80" style={{ opacity }}>
      <path
        d="M30 2 C10 8, 4 20, 4 35 C4 55, 15 70, 30 78 C45 70, 56 55, 56 35 C56 20, 50 8, 30 2Z"
        fill="#0f2d3d"
      />
      <path
        d="M30 10 C16 15, 12 24, 12 35 C12 50, 20 62, 30 70 C40 62, 48 50, 48 35 C48 24, 44 15, 30 10Z"
        fill="#86C5D8"
      />
      <rect x="28" y="6" width="4" height="68" fill="#c8973a" rx="1" />
      <rect x="12" y="30" width="36" height="4" fill="#c8973a" rx="1" />
    </svg>
  )
}

/** Geometric SA background pattern overlay */
export function SAPatternBg({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 0.04 }}
    >
      <defs>
        <pattern id="sa-geo" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <polygon points="30,0 60,30 30,60 0,30" fill="#0f2d3d" />
          <polygon points="30,10 50,30 30,50 10,30" fill="#86C5D8" />
          <polygon points="30,20 40,30 30,40 20,30" fill="#c8973a" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#sa-geo)" />
    </svg>
  )
}
