import { useState } from 'react'
import { withBase } from '../lib/withBase'

/**
 * A static photo slot that shows the image at `src` (e.g. "/photos/team-farm.jpg").
 * Falls back to the dashed placeholder if that file doesn't exist.
 *
 * To add or change a photo: drop a file with the matching name into `public/photos`
 * (or `public/screenshots` for app screens) and redeploy. No upload happens in the browser.
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
  const [autoFailed, setAutoFailed] = useState(false)

  const shown = src && !autoFailed ? withBase(src) : null

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
    </div>
  )
}
