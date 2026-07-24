import { useState } from 'react'
import { DiamondRow, Protea, AfricanSun, SAPatternBg } from '../components/SADecor'
import { StaticField } from '../components/StaticField'

const CATEGORIES = ['All', 'Landscapes', 'Team', 'Culture', 'Project', 'Food', 'Architecture']

type Photo = {
  id: string
  label: string
  caption: string
  category: string
  filename: string
}

function buildSlots(): Photo[] {
  return [
    { id: '1', label: 'Table Mountain / Cape Point', caption: 'Describe this view...', category: 'Landscapes', filename: 'table-mountain.jpg' },
    { id: '2', label: 'Chapman\'s Peak Drive', caption: 'Describe this view...', category: 'Landscapes', filename: 'chapmans-peak.jpg' },
    { id: '3', label: 'Team at Safe Cities Farm', caption: 'Describe this moment...', category: 'Team', filename: 'team-farm.jpg' },
    { id: '4', label: 'Group program outing', caption: 'Describe this moment...', category: 'Team', filename: 'group-outing.jpg' },
    { id: '5', label: 'Client interview / kickoff', caption: 'Describe what you saw...', category: 'Project', filename: 'client-meeting.jpg' },
    { id: '6', label: 'Final client presentation', caption: 'Describe this experience...', category: 'Project', filename: 'client-presentation.jpg' },
    { id: '7', label: 'Elsie in action', caption: 'Describe the demo...', category: 'Project', filename: 'elsie-demo.jpg' },
    { id: '8', label: 'Coding session', caption: 'Describe this session...', category: 'Project', filename: 'coding-session.jpg' },
    { id: '9', label: 'Braai / local food', caption: 'Describe this meal...', category: 'Food', filename: 'braai.jpg' },
    { id: '10', label: 'Cape Malay cuisine', caption: 'Describe the taste...', category: 'Food', filename: 'cape-malay-food.jpg' },
    { id: '11', label: 'Bo-Kaap houses', caption: 'Describe this place...', category: 'Architecture', filename: 'bo-kaap.jpg' },
    { id: '12', label: 'Safe Cities farm site', caption: 'Describe this space...', category: 'Architecture', filename: 'farm-site.jpg' },
    { id: '13', label: 'Sunrise / sunset', caption: 'Describe this moment...', category: 'Landscapes', filename: 'sunset.jpg' },
    { id: '14', label: 'Elsies River community', caption: 'Describe what you saw...', category: 'Culture', filename: 'elsies-river.jpg' },
    { id: '15', label: 'Favorite team moment', caption: 'Why is this your favorite?', category: 'Team', filename: 'favorite-team-moment.jpg' },
    { id: '16', label: 'One more memory', caption: 'Describe this memory...', category: 'All', filename: 'one-more-memory.jpg' },
  ]
}

function GalleryCard({ photo }: { photo: Photo }) {
  const [captionOpen, setCaptionOpen] = useState(false)
  const [autoFailed, setAutoFailed] = useState(false)

  const autoSrc = `/photos/gallery/${photo.filename}`
  const shown = !autoFailed ? autoSrc : null

  return (
    <div
      className="rounded-lg overflow-hidden flex flex-col"
      style={{ border: '1px solid var(--border)', background: 'var(--card)' }}
    >
      {/* Photo slot */}
      <div className="photo-slot relative" style={{ height: '200px', borderRadius: 0, border: 'none' }}>
        {shown ? (
          <img src={shown} alt={photo.label} className="w-full h-full object-cover absolute inset-0" onError={() => setAutoFailed(true)} />
        ) : (
          <>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            <span className="text-xs">{photo.label}</span>
          </>
        )}

        {/* Category badge */}
        <span
          className="absolute top-2 left-2 text-xs px-2 py-0.5 rounded"
          style={{ background: 'rgba(74,154,181,0.85)', color: 'white', backdropFilter: 'blur(4px)' }}
        >
          {photo.category}
        </span>
      </div>

      {/* Caption area */}
      <div className="p-3 flex flex-col gap-1">
        <button
          onClick={() => setCaptionOpen((o) => !o)}
          className="text-xs text-left flex items-center gap-1"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted-foreground)' }}
        >
          <span style={{ color: 'var(--sa-gold, #c8973a)' }}>✦</span>
          {captionOpen ? 'Hide caption' : 'Show caption'}
        </button>
        {captionOpen && (
          <StaticField
            rows={2}
            style={{ fontSize: '0.8125rem' }}
            value={photo.caption}
          />
        )}
      </div>
    </div>
  )
}

function FeaturedPhoto({ photo }: { photo: Photo }) {
  const [autoFailed, setAutoFailed] = useState(false)
  const autoSrc = `/photos/gallery/${photo.filename}`
  const shown = !autoFailed ? autoSrc : null
  return (
    <div
      className="photo-slot rounded-lg"
      style={{ height: '380px', border: '2px dashed var(--accent)' }}
    >
      {shown ? (
        <img
          src={shown}
          alt="Featured"
          className="w-full h-full object-cover absolute inset-0 rounded-lg"
          onError={() => setAutoFailed(true)}
        />
      ) : (
        <>
          <Protea size={60} opacity={0.3} />
          <span className="text-sm">Your most iconic South Africa photo</span>
          <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>This is the gallery hero image</span>
        </>
      )}
    </div>
  )
}

export default function PhotoGallery() {
  const [photos] = useState<Photo[]>(buildSlots())
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All' ? photos : photos.filter((p) => p.category === activeCategory)

  return (
    <div style={{ backgroundColor: 'var(--background)' }}>
      {/* Header */}
      <div
        className="relative overflow-hidden py-16 px-8 text-center"
        style={{ background: 'linear-gradient(135deg, var(--secondary) 0%, var(--background) 100%)' }}
      >
        <SAPatternBg />
        <div className="absolute top-4 left-8 opacity-30"><Protea size={70} opacity={1} /></div>
        <div className="absolute top-4 right-8 opacity-30"><AfricanSun size={70} opacity={1} /></div>
        <div className="relative z-10">
          <DiamondRow count={9} />
          <h2
            className="mt-4 mb-2"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: 'var(--foreground)' }}
          >
            Moments from <em style={{ color: 'var(--accent)' }}>South Africa</em>
          </h2>
          <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
            A visual record of the places, people, and experiences that made this trip unforgettable.
          </p>
        </div>
      </div>

      <div className="px-8 py-12 max-w-6xl mx-auto">
        {/* Featured / hero photo */}
        <div className="mb-10">
          <span className="section-label mb-3 block">Featured Photo</span>
          <FeaturedPhoto photo={photos[0]} />
          <StaticField
            className="text-field mt-3"
            rows={2}
            placeholder="Caption for your featured photo — what made this moment the one?"
          />
        </div>

        {/* Category filter */}
        <div className="flex items-center gap-3 mb-6 flex-wrap">
          <span className="section-label">Filter by</span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="text-xs px-3 py-1.5 rounded-full transition-colors"
              style={{
                background: activeCategory === cat ? 'var(--accent)' : 'var(--secondary)',
                color: activeCategory === cat ? 'white' : 'var(--muted-foreground)',
                border: '1px solid var(--border)',
                cursor: 'pointer',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))' }}>
          {filtered.map((photo) => (
            <GalleryCard key={photo.id} photo={photo} />
          ))}
        </div>

        {/* Reflection on photos */}
        <div
          className="mt-14 p-6 rounded-lg"
          style={{ background: 'var(--secondary)', border: '1px solid var(--border)' }}
        >
          <span className="section-label mb-4 block">If these photos could speak…</span>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="section-label">The photo that captures it all</label>
              <StaticField rows={4} placeholder="Which photo best encapsulates your entire experience, and why? What story does it tell without words?" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="section-label">What the camera couldn't capture</label>
              <StaticField rows={4} placeholder="Describe a moment, feeling, or experience that no photo could ever do justice — something that lives only in your memory." />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
