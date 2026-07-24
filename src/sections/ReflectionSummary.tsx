import { useState } from 'react'
import { DiamondRow, Protea, AfricanSun, SAPatternBg, NdebeleFrame, ZuluShield } from '../components/SADecor'
import { PhotoSlot } from '../components/PhotoSlot'

function Field({ label, value, placeholder, rows = 4 }: { label: string; value?: string; placeholder: string; rows?: number }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="section-label">{label}</label>
      <textarea className="text-field" rows={rows} placeholder={placeholder} defaultValue={value} />
    </div>
  )
}

function RatingRow({ label }: { label: string }) {
  const [val, setVal] = useState(0)
  return (
    <div className="flex items-center justify-between gap-4 py-2.5" style={{ borderBottom: '1px dashed var(--border)' }}>
      <span className="text-sm diamond" style={{ color: 'var(--foreground)' }}>{label}</span>
      <div className="flex gap-1.5">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            onClick={() => setVal(n)}
            className="w-8 h-8 rounded-full text-xs font-semibold transition-all"
            style={{
              background: n <= val ? 'var(--accent)' : 'var(--secondary)',
              border: n <= val ? '2px solid var(--accent)' : '1.5px solid var(--border)',
              color: n <= val ? 'white' : 'var(--muted-foreground)',
              cursor: 'pointer',
              transform: n <= val ? 'scale(1.1)' : 'scale(1)',
            }}
          >
            {n}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function ReflectionSummary() {
  return (
    <div style={{ backgroundColor: 'var(--background)' }}>
      {/* Header */}
      <div
        className="relative overflow-hidden py-20 px-8 text-center"
        style={{ background: 'linear-gradient(135deg, var(--secondary) 0%, var(--background) 50%, var(--muted) 100%)' }}
      >
        <SAPatternBg />
        <div className="absolute top-6 left-8 opacity-25"><AfricanSun size={90} opacity={1} /></div>
        <div className="absolute top-6 right-8 opacity-25"><ZuluShield size={60} opacity={1} /></div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-15"><Protea size={100} opacity={1} /></div>

        <div className="relative z-10">
          <DiamondRow count={9} />
          <h2
            className="mt-5 mb-3"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(2rem, 5vw, 3.25rem)', color: 'var(--foreground)', lineHeight: 1.15 }}
          >
            Reflection <em style={{ color: 'var(--accent)' }}>Summary</em>
          </h2>
          <p
            className="mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--muted-foreground)', maxWidth: '42ch', margin: '0 auto 1.5rem' }}
          >
            "Ubuntu ngumuntu ngabantu" — a person is a person through other people.
          </p>
          <DiamondRow count={9} />
        </div>
      </div>

      <div className="px-8 py-16 max-w-5xl mx-auto">
        {/* Opening reflection */}
        <div className="grid gap-10 mb-14" style={{ gridTemplateColumns: '1fr 1fr' }}>
          <div className="flex flex-col gap-5 justify-center">
            <span className="section-label">The Full Picture</span>
            <Field
              label="Reflection summary"
              value="I arrived in Cape Town having already interviewed our client remotely, but it was the six weeks on the ground — kickoff to final presentation — where the real transformation happened. I went from setting up a project environment someone else had started, to redesigning cloud infrastructure around constraints no documentation had warned me about, to standing in front of the client on July 12th explaining a platform I was genuinely proud of. Along the way, learning Cape Town's own history reframed how I saw the community I was building for, and by the final week, public speaking had gone from something I dreaded to something I could do with real confidence. I came home to my own version of reverse culture shock — proof that the place, and the work, had actually changed me."
              placeholder="Write your complete reflection on the South Africa experience — who you were when you arrived, what you encountered, and who you became. This is your capstone statement."
              rows={10}
            />
          </div>
          <div className="flex flex-col gap-4">
            <PhotoSlot label="A photo that represents your transformation" src="/photos/transformation.jpg" height={280} />
            <textarea
              className="text-field"
              rows={2}
              placeholder="Why did you choose this image to represent your journey?"
            />
          </div>
        </div>

        {/* Key themes */}
        <div className="mb-12">
          <span className="section-label mb-5 block">Core Themes of My Experience</span>
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                theme: 'Technology & Humanity',
                icon: '💻',
                text: 'The most useful thing I built wasn\'t the flashiest — it was making Elsie answer the specific question a non-technical staff member actually asked, instead of dumping every document at them. Good technology in this context meant subtracting friction for people with limited tech experience and unreliable connectivity, not adding features.',
              },
              {
                theme: 'Cultural Humility',
                icon: '🌍',
                text: 'Learning Cape Town\'s history — Apartheid, the history of slavery — early in the program meant I never approached Safe Cities as a blank slate. Cultural humility, to me now, means doing that homework before you assume you understand the community you\'re building for.',
              },
              {
                theme: 'Collaboration Across Difference',
                icon: '🤝',
                text: 'Our client wasn\'t deeply technical, which meant collaboration meant translation — turning vague feature requests into specific acceptance criteria without making the client feel talked down to. That skill mattered as much as anything I wrote in code.',
              },
              {
                theme: 'Ubuntu — Community & Interdependence',
                icon: '☀️',
                text: 'Safe Cities exists because a community decided to invest in itself. Building their tools reminded me that individual technical achievement means very little without a community it actually serves — Elsie only matters because Safe Cities\' staff and workers do.',
              },
            ].map(({ theme, icon, text }) => (
              <div
                key={theme}
                className="p-5 rounded-lg"
                style={{ background: 'var(--card)', border: '1px solid var(--border)', borderTop: '3px solid var(--accent)' }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span>{icon}</span>
                  <span style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '1rem', color: 'var(--foreground)' }}>
                    {theme}
                  </span>
                </div>
                <textarea className="text-field" rows={5} defaultValue={text} />
              </div>
            ))}
          </div>
        </div>

        {/* Self-assessment */}
        <div
          className="p-6 rounded-lg mb-12"
          style={{ background: 'var(--secondary)', border: '1px solid var(--border)' }}
        >
          <div className="flex items-center gap-3 mb-5">
            <DiamondRow count={3} />
            <span className="section-label">Self-Assessment (1 = not at all · 5 = completely)</span>
          </div>
          <div className="grid grid-cols-2 gap-x-10">
            <div>
              {[
                'I engaged authentically with South African culture',
                'I contributed meaningfully to the project',
                'I practiced empathy and cultural humility',
                'I grew as a software developer',
                'I challenged my own biases and assumptions',
              ].map((l) => <RatingRow key={l} label={l} />)}
            </div>
            <div>
              {[
                'I was a strong team collaborator',
                'I made the most of every opportunity',
                'I developed real cross-cultural competency',
                'The application we built will have lasting impact',
                'I would recommend this program to others',
              ].map((l) => <RatingRow key={l} label={l} />)}
            </div>
          </div>
        </div>

        {/* Before & after */}
        <div className="mb-12">
          <span className="section-label mb-5 block">Before & After</span>
          <div className="grid grid-cols-2 gap-0 rounded-lg overflow-hidden" style={{ border: '1px solid var(--border)' }}>
            <div className="p-6" style={{ background: 'var(--card)' }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full" style={{ background: 'var(--muted-foreground)' }} />
                <span style={{ fontFamily: '"Playfair Display", Georgia, serif', color: 'var(--muted-foreground)' }}>Before South Africa</span>
              </div>
              {[
                ['How I viewed global development', 'I thought technology solutions were...'],
                ['My understanding of South Africa', 'Before I went, I assumed...'],
                ['My sense of self as a technologist', 'I saw myself as a developer who...'],
              ].map(([label, placeholder]) => (
                <div key={label as string} className="mb-4">
                  <label className="section-label">{label as string}</label>
                  <textarea className="text-field mt-1" rows={2} placeholder={placeholder as string} />
                </div>
              ))}
            </div>
            <div className="p-6" style={{ background: 'var(--secondary)' }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }} />
                <span style={{ fontFamily: '"Playfair Display", Georgia, serif', color: 'var(--accent)' }}>After South Africa</span>
              </div>
              {[
                ['How I now view global development', 'I now understand that technology should...'],
                ['My understanding of South Africa', 'Now I know that South Africa is...'],
                ['My sense of self as a technologist', 'I now see myself as someone who...'],
              ].map(([label, placeholder]) => (
                <div key={label as string} className="mb-4">
                  <label className="section-label">{label as string}</label>
                  <textarea className="text-field mt-1" rows={2} placeholder={placeholder as string} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Letters */}
        <div
          className="p-6 rounded-lg mb-12"
          style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
        >
          <span className="section-label mb-5 block">Letters</span>
          <div className="grid grid-cols-2 gap-6">
            <Field
              label="A letter to your pre-departure self"
              placeholder="Dear me before South Africa — here is what I wish I had known. What would you warn, reassure, or encourage yourself about?"
              rows={8}
            />
            <Field
              label="A letter to a future program participant"
              placeholder="To someone about to embark on this same journey to South Africa — what do you want them to know, feel, prepare for?"
              rows={8}
            />
          </div>
        </div>

        {/* Closing statement */}
        <NdebeleFrame>
          <div className="py-8 px-6 text-center">
            <Protea size={48} opacity={0.5} />
            <span className="section-label mb-3 block mt-2">Closing Statement</span>
            <textarea
              className="text-field text-center"
              rows={6}
              style={{ fontSize: '1.0625rem', fontStyle: 'italic', fontFamily: '"Playfair Display", Georgia, serif', maxWidth: '600px', margin: '0 auto' }}
              placeholder="Your final words — a quote, a truth you carry, or simply how you choose to close this chapter of your story."
            />
            <div className="mt-5">
              <DiamondRow count={9} />
            </div>
          </div>
        </NdebeleFrame>
      </div>
    </div>
  )
}
