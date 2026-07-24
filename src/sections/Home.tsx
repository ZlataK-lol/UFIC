import { Protea, DiamondRow, AfricanSun, SAPatternBg, NdebeleDivider, ZuluShield } from '../components/SADecor'
import { PhotoSlot } from '../components/PhotoSlot'
import { StaticField } from '../components/StaticField'

export default function Home() {
  return (
    <div style={{ backgroundColor: 'var(--background)' }}>
      {/* Full-bleed hero */}
      <div
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(160deg, #0f2d3d 0%, #1a4a6a 35%, var(--accent) 70%, var(--muted) 100%)',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <SAPatternBg />

        {/* Decorative SA elements */}
        <div className="absolute top-8 left-8 opacity-20"><Protea size={120} opacity={1} /></div>
        <div className="absolute top-8 right-8 opacity-20"><AfricanSun size={100} opacity={1} /></div>
        <div className="absolute bottom-8 left-16 opacity-15"><ZuluShield size={80} opacity={1} /></div>
        <div className="absolute bottom-8 right-16 opacity-15"><Protea size={80} opacity={1} /></div>

        {/* Scattered small diamonds */}
        {[
          { top: '20%', left: '15%' }, { top: '60%', left: '25%' },
          { top: '30%', right: '20%' }, { top: '70%', right: '15%' },
          { top: '45%', left: '40%' },
        ].map((pos, i) => (
          <div
            key={i}
            className="absolute opacity-20"
            style={pos as React.CSSProperties}
          >
            <svg width="14" height="14" viewBox="0 0 14 14">
              <polygon points="7,0 14,7 7,14 0,7" fill={i % 2 === 0 ? '#c8973a' : '#ADD8E6'} />
            </svg>
          </div>
        ))}

        <div className="relative z-10 max-w-5xl mx-auto px-8 py-20 w-full">
          <div className="grid gap-12" style={{ gridTemplateColumns: '1fr 1fr' }}>
            {/* Left: text */}
            <div className="flex flex-col justify-center gap-6">
              <DiamondRow count={5} />
              <div>
                <div className="section-label" style={{ color: 'rgba(202,233,245,0.7)' }}>Study Abroad Portfolio</div>
                <h1
                  className="leading-tight mt-2"
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
                    color: '#F0F8FF',
                    lineHeight: 1.08,
                  }}
                >
                  South Africa
                  <br />
                  <em style={{ color: '#ADD8E6' }}>2026</em>
                </h1>
              </div>
              <p
                style={{
                  color: 'rgba(240,248,255,0.75)',
                  maxWidth: '38ch',
                  lineHeight: 1.7,
                  fontSize: '1rem',
                }}
              >
                Six weeks in Cape Town. A nonprofit that needed better tools.
                A team called Penguin Intelligence. An AI assistant we ended up
                naming Elsie. This is that story.
              </p>

              {/* Quick facts */}
              <div
                className="grid grid-cols-2 gap-3 p-5 rounded-lg"
                style={{ background: 'rgba(240,248,255,0.08)', border: '1px solid rgba(173,216,230,0.25)', backdropFilter: 'blur(4px)' }}
              >
                {[
                  { label: 'Destination', value: 'Cape Town, South Africa' },
                  { label: 'Program', value: 'UF SWE and UX Global Internship' },
                  { label: 'Duration', value: 'May – July 2026' },
                  { label: 'Project', value: 'Safe Cities AI Assistant ("Elsie")' },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <div className="section-label" style={{ color: 'rgba(173,216,230,0.8)' }}>{label}</div>
                    <StaticField
                      value={value}
                      className="text-field mt-1"
                      style={{
                        background: 'rgba(240,248,255,0.06)',
                        border: '1px solid rgba(173,216,230,0.25)',
                        color: '#F0F8FF',
                        fontSize: '0.875rem',
                        padding: '0.4rem 0.6rem',
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: cover photo */}
            <div className="flex flex-col gap-4">
              <PhotoSlot label="Your cover photo — South Africa" src="/photos/cover.jpg" tall />
              <StaticField
                rows={2}
                placeholder="Caption: where was this photo taken?"
                style={{ background: 'rgba(240,248,255,0.08)', border: '1px solid rgba(173,216,230,0.2)', color: '#F0F8FF' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Ndebele stripe */}
      <NdebeleDivider />

      {/* Intro section */}
      <div className="px-8 py-16 max-w-5xl mx-auto">
        <div className="grid gap-10" style={{ gridTemplateColumns: '1fr 1fr' }}>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <Protea size={36} opacity={0.8} />
              <span className="section-label">Introduction</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="section-label">In your own words</label>
              <StaticField
                rows={7}
                value="I chose South Africa as the destination for my trip because it had AI incorporated into the class, and I wanted to learn how to use AI responsibly on a global scale. I knew I would learn a lot professionally, but I also wanted to pick a place that would challenge my worldview and allow me to become more culturally aware. I knew that going to a country with a culture more similar to mine would not allow me to grow as quickly as picking a country completely different from what I am used to. I wanted to challenge myself and the knowledge I had, and South Africa seemed like the perfect place to begin."
                placeholder="Write a short introduction — who you are, what this program was, and why you chose South Africa. Set the scene for the reader."
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="section-label">What I hoped to find</label>
              <StaticField
                rows={4}
                value="I did not know what to expect in terms of climate, culture, history, or nature. I was expecting much warmer weather than I received; it was surprising to land in South Africa and find it so cold outside. For culture, I expected a very friendly culture, but I did not know much about South African customs or beliefs. For history, I expected a deep and scarred history; however, I did not know how much the past still affects the present in the country. For nature, I knew South Africa had many mountains, but I truly underestimated the beauty of Cape Town and the nature it provided."
                placeholder="What were your expectations, hopes, or intentions before you left? What were you searching for?"
              />
            </div>
          </div>

          {/* Arrival photos */}
          <div className="flex flex-col gap-4">
            <span className="section-label">First Moments</span>
            <PhotoSlot label="Arrival / first impression" src="/photos/arrival.jpg" />
            <div className="grid grid-cols-2 gap-4">
              <PhotoSlot label="Landing / airport" src="/photos/landing-airport.jpg" />
              <PhotoSlot label="First view of SA" src="/photos/first-view-sa.jpg" />
            </div>
            <StaticField
              rows={3}
              placeholder="Describe the moment you landed. What did you see, hear, feel in those first hours in South Africa?"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
