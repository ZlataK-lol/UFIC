import { useState } from 'react'
import { PhotoSlot } from '../components/PhotoSlot'
import { StaticField } from '../components/StaticField'

function Field({ label, placeholder, rows = 3 }: { label: string; placeholder: string; rows?: number }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="section-label">{label}</label>
      <StaticField rows={rows} placeholder={placeholder} />
    </div>
  )
}

function Postcard({ number }: { number: number }) {
  return (
    <div
      className="flex flex-col gap-4 p-5 rounded"
      style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
    >
      <div className="flex items-center justify-between">
        <span className="section-label">Memory #{number}</span>
        <span style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '1.5rem', color: 'var(--border)' }}>
          ✉
        </span>
      </div>
      <PhotoSlot label={`Photo for memory #${number}`} src={`/photos/memory-${number}.jpg`} height={200} />
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <label className="section-label">Location</label>
          <StaticField placeholder="City / place name" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="section-label">Date</label>
          <StaticField placeholder="Month, Year" />
        </div>
      </div>
      <StaticField
        rows={4}
        placeholder="Describe this memory. What happened, who were you with, why does it stand out? Write as if sending a postcard to your past self."
      />
      <StaticField
        rows={2}
        placeholder="One sentence that captures the feeling of this moment…"
      />
    </div>
  )
}

export default function Abroad() {
  const [postcardCount, setPostcardCount] = useState(4)

  return (
    <div style={{ backgroundColor: 'var(--card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="px-8 py-20 max-w-5xl mx-auto">
        <div className="flex items-baseline gap-4 mb-4">
          <span className="section-label">Section 03</span>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '2.25rem', color: 'var(--foreground)' }}>
            My Time Abroad
          </h2>
        </div>
        <p className="text-sm mb-12" style={{ color: 'var(--muted-foreground)', maxWidth: '60ch' }}>
          A record of your days, travels, friendships, and everything in between. Fill in as much or as little as you like.
        </p>

        {/* Big overview */}
        <div className="grid gap-8 mb-14" style={{ gridTemplateColumns: '1fr 1fr' }}>
          <Field
            label="The city / place: an overview"
            placeholder="Describe where you lived. The neighborhood, the rhythm of daily life, the sounds and smells. What made this place feel unique?"
            rows={6}
          />
          <div className="flex flex-col gap-4">
            <PhotoSlot label="Your city / neighborhood" src="/photos/city-neighborhood.jpg" height={200} />
            <PhotoSlot label="Your home away from home" src="/photos/home-away-from-home.jpg" height={180} />
          </div>
        </div>

        {/* Academic life */}
        <div
          className="p-6 rounded mb-12"
          style={{ background: 'var(--secondary)', border: '1px solid var(--border)' }}
        >
          <span className="section-label mb-4 block">Academic Life</span>
          <div className="grid gap-6" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
            <PhotoSlot label="Your classroom / campus" src="/photos/classroom-campus.jpg" height={160} />
            <PhotoSlot label="A study spot you loved" src="/photos/study-spot.jpg" height={160} />
            <PhotoSlot label="Academic event or excursion" src="/photos/academic-event.jpg" height={160} />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <Field label="Classes & professors" placeholder="Which courses did you love? Who were your professors? What surprised you about the academic culture?" rows={4} />
            <Field label="Academic challenges & growth" placeholder="What was difficult academically? How did you adapt to a different educational system or language?" rows={4} />
          </div>
          <Field label="Most memorable academic experience" placeholder="A field trip, a guest lecture, a project: describe the single most memorable academic moment." rows={3} />
        </div>

        {/* Daily life */}
        <div className="mb-12">
          <span className="section-label mb-4 block">Daily Life & Routines</span>
          <div className="grid gap-6" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div className="flex flex-col gap-4">
              <PhotoSlot label="Your morning routine spot" src="/photos/morning-routine.jpg" height={180} />
              <Field label="A typical weekday" placeholder="Walk us through a normal weekday: morning coffee, commute, classes, evenings. What did routine feel like in a foreign place?" rows={5} />
            </div>
            <div className="flex flex-col gap-4">
              <PhotoSlot label="Weekend adventure" src="/photos/weekend-adventure.jpg" height={180} />
              <Field label="Weekends & free time" placeholder="How did you spend your weekends? Exploring, resting, traveling? What were your favorite ways to recharge?" rows={5} />
            </div>
          </div>
        </div>

        {/* Food & culture */}
        <div className="mb-12">
          <span className="section-label mb-4 block">Food, Culture & Local Life</span>
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { l: 'Favorite meal', f: 'favorite-meal.jpg' },
              { l: 'Local market', f: 'local-market.jpg' },
              { l: 'Street food', f: 'street-food.jpg' },
              { l: 'A cultural experience', f: 'cultural-experience.jpg' },
            ].map(({ l, f }) => (
              <PhotoSlot key={l} label={l} src={`/photos/${f}`} height={160} />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Food & eating culture" placeholder="What did you eat? What local dishes did you try, love, or find challenging? How was eating a cultural experience in itself?" rows={4} />
            <Field label="Cultural experiences & events" placeholder="Festivals, markets, performances, religious observances: what did you witness or participate in that broadened your world?" rows={4} />
            <Field label="Language & communication" placeholder="Did you learn or use the local language? Describe moments of connection or confusion across language barriers." rows={4} />
            <Field label="Surprising cultural differences" placeholder="What caught you off guard? Small daily differences, social norms, etiquette: what made you rethink your assumptions?" rows={4} />
          </div>
        </div>

        {/* Travel */}
        <div className="mb-12">
          <span className="section-label mb-4 block">Travel & Exploration</span>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[
              { l: 'Destination 1', f: 'destination-1.jpg' },
              { l: 'Destination 2', f: 'destination-2.jpg' },
              { l: 'Destination 3', f: 'destination-3.jpg' },
              { l: 'Destination 4', f: 'destination-4.jpg' },
              { l: 'Destination 5', f: 'destination-5.jpg' },
              { l: 'A hidden gem', f: 'hidden-gem.jpg' },
            ].map(({ l, f }) => (
              <PhotoSlot key={l} label={l} src={`/photos/${f}`} height={180} />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Places I visited" placeholder="List all the cities, towns, and countries you traveled to. Star the ones that left the biggest mark." rows={4} />
            <Field label="Best travel memory" placeholder="Describe your most memorable travel experience in vivid detail. What made it special?" rows={4} />
            <Field label="A place that surprised me" placeholder="Somewhere you didn't expect to love, or somewhere that didn't live up to expectations. What did you discover?" rows={3} />
            <Field label="Travel challenges" placeholder="Getting lost, missed trains, language fails, travel fatigue: what went wrong, and what did you learn from it?" rows={3} />
          </div>
        </div>

        {/* People & friendships */}
        <div className="mb-14">
          <span className="section-label mb-4 block">People & Friendships</span>
          <div className="grid gap-6" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <PhotoSlot label="Your friend group" src="/photos/friend-group.jpg" height={160} />
                <PhotoSlot label="A local you met" src="/photos/local-met.jpg" height={160} />
              </div>
              <Field label="The people I met" placeholder="Describe the community you built: fellow international students, local friends, roommates, host family. How did these relationships form?" rows={4} />
            </div>
            <div className="flex flex-col gap-4">
              <PhotoSlot label="A memorable gathering" src="/photos/memorable-gathering.jpg" height={200} />
              <Field label="A friendship that mattered" placeholder="Tell the story of one relationship that changed you: how you met, what you shared, what you learned from each other." rows={4} />
            </div>
          </div>
        </div>

        {/* Postcard memories */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <span className="section-label">Memory Postcards</span>
            <button
              onClick={() => setPostcardCount((c) => c + 1)}
              className="text-xs px-3 py-1.5 rounded transition-colors"
              style={{
                background: 'var(--secondary)',
                border: '1px solid var(--border)',
                color: 'var(--muted-foreground)',
                cursor: 'pointer',
              }}
            >
              + Add memory
            </button>
          </div>
          <div className="grid gap-6" style={{ gridTemplateColumns: '1fr 1fr' }}>
            {Array.from({ length: postcardCount }).map((_, i) => (
              <Postcard key={i} number={i + 1} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
