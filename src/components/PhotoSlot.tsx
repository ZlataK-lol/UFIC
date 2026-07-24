import { useState } from 'react'

/**
 * A photo slot that:
 * 1. Tries to auto-load an image from `src` (e.g. "/photos/team-farm.jpg") if provided.
 * 2. Falls back to the dashed placeholder + manual upload button if that file doesn't exist.
 * 3. A manual upload always overrides the auto-loaded image for that session.
 *
 * To add your own photo: drop a file with the matching name into `public/photos`
 * (or `public/screenshots` for app screens) — no code changes needed.
 * See PHOTO_GUIDE.md in the project root for the full list of expected filenames.
 */
export function PhotoSlot({
  label,
  src,
  height = 220,
  tall = false,
}: {
  label: string
  src?: string
  height?: number
  tall?: boolean
}) {
  const [preview, setPreview] = useState<string | null>(null)
  const [autoFailed, setAutoFailed] = useState(false)

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) setPreview(URL.createObjectURL(file))
  }

  const shown = preview || (src && !autoFailed ? src : null)

  return (
    <div className="photo-slot" style={tall ? { aspectRatio: '3 / 4' } : { height }}>
      {shown ? (
        <img
          src={shown}
          alt={label}
          className="w-full h-full object-cover absolute inset-0"
          onError={() => setAutoFailed(true)}
        />
      ) : (
        <>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
          <span>{label}</span>
        </>
      )}
      <input type="file" accept="image/*" onChange={handleFile} title="Upload photo" />
    </div>
  )
}
