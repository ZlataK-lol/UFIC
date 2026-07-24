import { useState } from 'react'
import { PhotoSlot } from '../components/PhotoSlot'

function Field({ label, value, placeholder, rows = 4 }: { label: string; value?: string; placeholder: string; rows?: number }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="section-label">{label}</label>
      <textarea readOnly className="text-field" rows={rows} placeholder={placeholder} defaultValue={value} />
    </div>
  )
}

function RatingRow({ label }: { label: string }) {
  const [val, setVal] = useState(0)
  return (
    <div className="flex items-center justify-between gap-4 py-2" style={{ borderBottom: '1px dashed var(--border)' }}>
      <span className="text-sm" style={{ color: 'var(--foreground)' }}>{label}</span>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            onClick={() => setVal(n)}
            className="w-7 h-7 rounded-full text-xs transition-colors"
            style={{
              background: n <= val ? 'var(--accent)' : 'var(--secondary)',
              border: '1px solid var(--border)',
              color: n <= val ? 'var(--accent-foreground)' : 'var(--muted-foreground)',
              cursor: 'pointer',
            }}
          >
            {n}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function Reflection() {
  return (
    <div className="px-8 py-20 max-w-5xl mx-auto">
      <div className="flex items-baseline gap-4 mb-4">
        <span className="section-label">Section 04</span>
        <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '2.25rem', color: 'var(--foreground)' }}>
          Final Reflection
        </h2>
      </div>
      <p className="text-sm mb-12" style={{ color: 'var(--muted-foreground)', maxWidth: '60ch' }}>
        Looking back with clear eyes — what you gained, how you changed, and where you go from here.
      </p>

      {/* Hero closing image + opening reflection */}
      <div className="grid gap-8 mb-14" style={{ gridTemplateColumns: '1fr 1fr' }}>
        <div className="flex flex-col gap-4">
          <PhotoSlot label="Your most meaningful photo from the whole trip" src="/photos/most-meaningful.jpg" height={320} />
          <textarea
            readOnly
            className="text-field"
            rows={2}
            placeholder="Caption: why this photo above all others?"
          />
        </div>
        <div className="flex flex-col gap-4 justify-center">
          <Field
            label="Opening reflection"
            placeholder="If you had to capture the entire experience in one paragraph — what would you say? Write from the heart, without editing yourself."
            rows={8}
          />
        </div>
      </div>

      {/* Growth & change */}
      <div
        className="p-6 rounded mb-12"
        style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
      >
        <span className="section-label mb-5 block">Personal Growth & Change</span>
        <div className="grid grid-cols-2 gap-6">
          <Field label="How I changed as a person" value="I went from feeling real dread before presentations to being genuinely comfortable presenting by my final week in Cape Town — a shift I noticed and named myself during our last presentation push." placeholder="Compare who you were before you left to who you are now. What shifted — your values, perspectives, confidence, priorities?" rows={5} />
          <Field label="What I learned about myself" placeholder="What did living abroad reveal about you that you didn't know before? Strengths, weaknesses, what matters to you?" rows={5} />
          <Field label="How my worldview shifted" value="Learning Cape Town's history — Apartheid, the history of slavery — reframed how I saw the city and the community we were building for, and pushed me to draw conclusions from experience and listening rather than assumption." placeholder="What assumptions did you examine? What do you understand about the world — and your country — differently now?" rows={4} />
          <Field label="Moments of real challenge" value="Discovering mid-build that key Azure AI models weren't available in the South Africa region meant redesigning our deployment across regions with no real playbook to follow — and translating a non-technical client's vague concerns into concrete, buildable feature requests took real patience each time." placeholder="When was the hardest moment? How did you get through it? What did that teach you about resilience?" rows={4} />
        </div>
      </div>

      {/* Self-assessment ratings */}
      <div
        className="p-6 rounded mb-12"
        style={{ background: 'var(--secondary)', border: '1px solid var(--border)' }}
      >
        <span className="section-label mb-4 block">Self-Assessment (1 = not at all, 5 = tremendously)</span>
        <div className="grid grid-cols-2 gap-x-10">
          <div>
            {[
              'I stepped outside my comfort zone',
              'I engaged with local culture authentically',
              'I built meaningful relationships',
              'I grew academically',
              'I managed homesickness well',
            ].map((l) => <RatingRow key={l} label={l} />)}
          </div>
          <div>
            {[
              'I was open to new experiences',
              'I practiced independence and self-reliance',
              'I developed language skills',
              'I managed my time and responsibilities',
              'Overall, I made the most of this opportunity',
            ].map((l) => <RatingRow key={l} label={l} />)}
          </div>
        </div>
        <div className="mt-6">
          <Field label="Anything you'd rate yourself poorly on — and why?" placeholder="Be honest. What do you wish you'd done more of, less of, or differently? This is your space to be real with yourself." rows={3} />
        </div>
      </div>

      {/* Academic & professional impact */}
      <div className="grid grid-cols-2 gap-8 mb-12">
        <Field label="Academic impact" placeholder="How did studying abroad enrich your field of study? New perspectives, methodologies, case studies, or sources you encountered." rows={5} />
        <Field label="Professional development" value="Working across the full stack — frontend, AI integration, and cloud infrastructure — while managing a real nonprofit client gave me hands-on experience I couldn't get from coursework alone, and directly shaped what I want out of a technology career." placeholder="How does this experience connect to your career path? Skills, networks, or realizations that will shape your professional life." rows={5} />
        <Field label="Reentry & coming home" value="Coming home was its own adjustment. I'd grown used to life in Cape Town, and moving back proved to be a whole new challenge on its own — one I didn't fully expect after being so focused on the trip itself." placeholder="What was it like to return? What did you struggle with? What did you miss most about being abroad — and what felt good about home?" rows={4} />
        <Field label="Reverse culture shock" value="Yes — after growing accustomed to a new environment and pace of life in Cape Town, acclimatizing back to my routine at home took real effort, and caught me somewhat off guard." placeholder="Did you experience reverse culture shock? What felt strange or frustrating about returning to your home country or campus?" rows={4} />
      </div>

      {/* Photos of return */}
      <div className="mb-12">
        <span className="section-label mb-4 block">The Last Days & Coming Home</span>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <PhotoSlot label="Last day in the city" src="/photos/last-day.jpg" height={200} />
          <PhotoSlot label="Goodbyes with friends" src="/photos/goodbyes.jpg" height={200} />
          <PhotoSlot label="Arrival back home" src="/photos/arrival-home.jpg" height={200} />
        </div>
        <Field label="The last days" placeholder="Describe your final days abroad. The farewells, the last meals, the emotional weight of leaving. What did you promise yourself you'd remember?" rows={4} />
      </div>

      {/* Letters */}
      <div
        className="p-6 rounded mb-12"
        style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
      >
        <span className="section-label mb-5 block">Letters</span>
        <div className="grid grid-cols-2 gap-6">
          <Field
            label="A letter to your pre-departure self"
            placeholder="Dear me before the trip — here's what I wish I'd known. What advice, reassurance, or warnings would you give yourself?"
            rows={8}
          />
          <Field
            label="A letter to a future student going abroad"
            placeholder="To someone about to embark on this same journey — what do you want them to know? What advice would you give a stranger?"
            rows={8}
          />
        </div>
      </div>

      {/* Gratitude & goals */}
      <div className="grid grid-cols-2 gap-8 mb-14">
        <Field
          label="What I am most grateful for"
          placeholder="Three to five things — moments, people, experiences, realisations — that you are genuinely and deeply grateful for from this experience."
          rows={6}
        />
        <Field
          label="Goals & intentions going forward"
          placeholder="What do you want to carry with you? What changes do you intend to make in your life, studies, or outlook because of what you experienced abroad?"
          rows={6}
        />
      </div>

      {/* Closing quote / final words */}
      <div
        className="p-8 rounded text-center"
        style={{ background: 'var(--secondary)', border: '1px solid var(--border)' }}
      >
        <span className="section-label mb-4 block">Closing Words</span>
        <p
          className="mb-6 text-sm"
          style={{ color: 'var(--muted-foreground)' }}
        >
          A quote, poem, or passage that captures your experience — or simply your own final words.
        </p>
        <textarea
          readOnly
          className="text-field text-center"
          rows={5}
          style={{ fontSize: '1.0625rem', fontStyle: 'italic', fontFamily: '"Playfair Display", Georgia, serif' }}
          placeholder='"Not all those who wander are lost." — or your own words…'
        />
        <div className="mt-6">
          <PhotoSlot label="A final photo to close the chapter" src="/photos/final-photo.jpg" height={280} />
        </div>
      </div>
    </div>
  )
}
