/**
 * Renders fixed text as a plain block instead of an <input>/<textarea>.
 * Height follows content (no internal scrollbar), and there's nothing to click into or edit.
 */
export function StaticField({
  value,
  placeholder,
  rows = 1,
  className = 'text-field',
  style,
}: {
  value?: string
  placeholder?: string
  rows?: number
  className?: string
  style?: React.CSSProperties
}) {
  const hasValue = Boolean(value)
  return (
    <div
      className={className}
      style={{
        whiteSpace: 'pre-wrap',
        minHeight: `calc(${rows} * 1.7em + 1.5rem)`,
        ...(hasValue ? {} : { color: 'var(--muted-foreground)', fontStyle: 'italic' }),
        ...style,
      }}
    >
      {hasValue ? value : placeholder}
    </div>
  )
}
