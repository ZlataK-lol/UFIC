import { useState } from 'react'
import { PhotoSlot } from '../components/PhotoSlot'
import { StaticField } from '../components/StaticField'

function Field({ label, value, placeholder, rows = 4 }: { label: string; value?: string; placeholder: string; rows?: number }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="section-label">{label}</label>
      <StaticField rows={rows} placeholder={placeholder} value={value} />
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
          <StaticField
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
          <Field label="How I changed as a person" value="I went from real dread before presentations to being genuinely comfortable in front of a room by my final week in Cape Town — a shift gradual enough that I almost missed it, until I noticed and named it myself during our last presentation push. It wasn't confidence that appeared overnight; it was six weeks of doing the uncomfortable thing repeatedly until it stopped being the scariest part of the day." placeholder="Compare who you were before you left to who you are now. What shifted — your values, perspectives, confidence, priorities?" rows={5} />
          <Field label="What I learned about myself" value="That I do my best problem-solving out loud, with someone else in the room — Cape Town made that unavoidable, since half our hardest technical decisions got made mid-conversation with Adam or Anthony rather than alone at a laptop. I also learned I default to over-preparing for the wrong things: I'd rehearse a presentation four times and still get caught off guard by a simple client question I hadn't considered, which taught me that anticipating what someone else actually needs to know matters more than polishing what I already planned to say." placeholder="What did living abroad reveal about you that you didn't know before? Strengths, weaknesses, what matters to you?" rows={5} />
          <Field label="How my worldview shifted" value="Learning Cape Town's history — Apartheid, and the history of slavery before it — reframed how I saw the city and the community we were building for. It made clear how much context I was missing walking in, and it pushed me to draw conclusions from experience and listening rather than the assumptions I'd arrived with. I came away with a much stronger instinct to do that homework before entering any community I don't already understand — not just abroad, but at home too." placeholder="What assumptions did you examine? What do you understand about the world — and your country — differently now?" rows={4} />
          <Field label="Moments of real challenge" value="Discovering mid-build that key Azure AI models weren't available in the South Africa region meant redesigning our deployment across regions with no real playbook to follow — just documentation that assumed a setup we didn't have. Translating a non-technical client's vague concerns into concrete, buildable feature requests took real patience every single time; it never got fully easy, but I got noticeably faster at hearing 'it feels clunky' and turning it into an actual, scoped fix by the later weeks." placeholder="When was the hardest moment? How did you get through it? What did that teach you about resilience?" rows={4} />
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
        <Field label="Academic impact" value="Coursework teaches you the shape of a RAG pipeline or a hybrid search algorithm in the abstract; building Elsie taught me what actually breaks when you deploy that shape against a real client's Drive full of inconsistent, unlabeled documents. It grounded the theory from my AI certificate coursework in a system where correctness is measured by whether a real Safe Cities staff member gets the right answer — not by whether a test case passes." placeholder="How did studying abroad enrich your field of study? New perspectives, methodologies, case studies, or sources you encountered." rows={5} />
        <Field label="Professional development" value="Working across the full stack — frontend, AI integration, and cloud infrastructure — while managing a real nonprofit client gave me hands-on experience no coursework could substitute for, and it directly shaped what I want out of a technology career. I found I care less about which layer of the stack I'm in and more about staying close enough to the end user to know whether what I built actually helped them — that's the thread I want to keep pulling professionally." placeholder="How does this experience connect to your career path? Skills, networks, or realizations that will shape your professional life." rows={5} />
        <Field label="Reentry & coming home" value="Coming home was its own adjustment, one I hadn't budgeted any emotional energy for because I'd spent it all preparing to leave. I'd grown used to the rhythm of life in Cape Town — the pace, the people, the routines we'd built around the project — and moving back turned out to be a real challenge in its own right, not just a return to normal. I didn't expect that, having been so focused on the trip itself that I never really planned for the other side of it." placeholder="What was it like to return? What did you struggle with? What did you miss most about being abroad — and what felt good about home?" rows={4} />
        <Field label="Reverse culture shock" value="Yes. After growing accustomed to a new environment and a different pace of life in Cape Town, acclimatizing back to my routine at home took real, deliberate effort, and it caught me more off guard than I expected. Nobody really warns you that the hard part of going abroad isn't leaving — it's figuring out how to be at home again once you're not quite the same person who left." placeholder="Did you experience reverse culture shock? What felt strange or frustrating about returning to your home country or campus?" rows={4} />
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
        <StaticField
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
