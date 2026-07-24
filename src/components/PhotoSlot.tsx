import { useState } from 'react'
import { withBase } from '../lib/withBase'
import { SAPatternBg } from './SADecor'

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
  aspectRatio,
  fit = 'cover',
}: {
  label: string
  src?: string
  height?: number
  tall?: boolean
  aspectRatio?: string
  fit?: 'cover' | 'contain'
}) {
  const [autoFailed, setAutoFailed] = useState(false)

  const shown = src && !autoFailed ? withBase(src) : null
  const boxStyle = {
    ...(aspectRatio ? { aspectRatio } : tall ? { aspectRatio: '3 / 4' } : { height }),
    ...(shown && fit === 'contain' ? { background: '#4a9ab5' } : {}),
  }

  return (
    <div className="photo-slot" style={boxStyle}>
      {shown ? (
        <>
          {fit === 'contain' && <SAPatternBg className="opacity-40" />}
          <img
            src={shown}
            alt={label}
            className={fit === 'contain' ? 'w-full h-full object-contain absolute inset-0' : 'w-full h-full object-cover absolute inset-0'}
            onError={() => setAutoFailed(true)}
          />
        </>
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
