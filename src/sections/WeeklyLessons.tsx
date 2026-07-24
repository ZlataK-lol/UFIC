import { useState } from 'react'
import { DiamondRow, NdebeleFrame, Protea, SAPatternBg } from '../components/SADecor'
import { PhotoSlot } from '../components/PhotoSlot'
import { StaticField } from '../components/StaticField'

// Covers only the weeks physically in Cape Town: kickoff through final
// presentations. Planning and the client interview happened before
// departure, and documentation/wrap-up happened after returning home —
// both live in other sections, not here. Last week in-country ended July 12.
const WEEKS = [
  {
    num: 1,
    dates: 'Jun 1 – Jun 7',
    title: 'Kickoff & Environment Setup',
    color: '#4a9ab5',
    time: 'About 8 hours — 4 on the kickoff presentation, 4 on environment setup.',
    contribution: 'Built the project overview, Persona 1, and one user story for the team\'s kickoff presentation, set up the existing project environment on my own machine, and helped write the team status report.',
    reflection: 'Learned how to step into a project that was already underway rather than starting from scratch — reading someone else\'s decisions instead of making my own from a blank page is its own skill, and week one was mostly building that muscle. Also learned about Cape Town\'s history — Apartheid and the history of slavery before it — early enough that it reframed how I saw the city from day one, and pushed me to learn from experience and listening rather than assumption for the rest of the program.',
    lesson: 'Learn from the people and history around you — don\'t let secondhand impressions stand in for actually finding out.',
  },
  {
    num: 2,
    dates: 'Jun 8 – Jun 14',
    title: 'Building the AI Assistant',
    color: '#86C5D8',
    time: 'Roughly 7–8 hours.',
    contribution: 'Built the AI chat frontend — new/save/delete chat controls and the sidebar — and connected the assistant\'s API key so it could read from Safe Cities\' Google Drive.',
    reflection: 'Learned how to prompt-engineer for genuinely useful AI output instead of just plausible-sounding output — those aren\'t the same thing, and the gap between them is where most of the real work lives. Also learned what actually goes into a production frontend build versus a prototype, and how to set guardrails so the assistant stayed inside its intended scope instead of confidently answering questions it had no business answering.',
    lesson: 'A good assistant needs boundaries as much as it needs capability — knowing what not to answer is part of the design, not an afterthought.',
  },
  {
    num: 3,
    dates: 'Jun 15 – Jun 21',
    title: 'Automation & Visual Redesign',
    color: '#CAE9F5',
    time: 'Roughly 10–11 hours.',
    contribution: 'Set up a Google Apps Script so documents save automatically from a labeled email into Drive, then picked a new color palette and reworked the frontend for a more modern feel based on client direction.',
    reflection: 'Learned the importance of heavy planning before development the hard way — after redesigning the home screen several times based on client direction that kept evolving, I learned to lock down exactly what I wanted built, and get sign-off on it, before writing the first line of a new screen.',
    lesson: 'Plan before you build, or you\'ll end up building it twice.',
  },
  {
    num: 4,
    dates: 'Jun 22 – Jun 28',
    title: 'Cloud Infrastructure on Azure',
    color: '#4a9ab5',
    time: 'Roughly 10–11 hours.',
    contribution: 'Configured Microsoft Azure AI Foundry using a $2,000 nonprofit grant, evaluated AI models on cost, efficiency, and safety, and deployed models across two regions after discovering key models weren\'t available in South Africa.',
    reflection: 'Learned how to problem-solve without reliable vendor support close at hand, and how to restructure a project around real-world regional constraints instead of what the documentation quietly assumes about where you\'re deploying from. Evaluating models on cost, efficiency, and safety against a fixed $2,000 grant also taught me to treat budget as a design constraint from the start, not an afterthought to optimize once something already works.',
    lesson: 'Resilience means redesigning around constraints, not waiting for the ideal setup.',
  },
  {
    num: 5,
    dates: 'Jun 29 – Jul 5',
    title: 'Testing & Iteration',
    color: '#86C5D8',
    time: 'Not individually recorded this week.',
    contribution: 'As a team: optimized the homepage UI, merged the Google Drive and website document systems into one synced source of truth, and conducted two peer usability tests plus one client usability test.',
    reflection: 'No individual reflection was submitted for this week — only a team-level status report exists. This is a real gap in the record, not a placeholder to gloss over.',
    lesson: '',
    incomplete: true,
  },
  {
    num: 6,
    dates: 'Jul 6 – Jul 12',
    title: 'Final Presentations & Client Testing',
    color: '#ADD8E6',
    time: 'About 9 hours — 7 on presentation prep, 2 speaking with the client.',
    contribution: 'Completed slides for the final presentations, tested with the client after usability testing to measure how much more efficient the app made their process, and walked them through specific features in detail.',
    reflection: 'Learned a lot about myself as a presenter in this final week — noticeably less stressed walking into a big presentation than I\'d been back in week one, and able to actually enjoy the client conversation instead of just surviving it. Also learned to ask very specific questions of a non-technical client, translating vague concerns like "it feels slow" or "this is confusing" into concrete, buildable feature requirements — a translation skill that took the full six weeks to sharpen.',
    lesson: 'Confidence in front of a room is built one presentation at a time — this was my last week in Cape Town, and it felt like the right note to end on.',
  },
]

export default function WeeklyLessons() {
  const [openWeek, setOpenWeek] = useState<number | null>(null)

  return (
    <div style={{ backgroundColor: 'var(--card)' }}>
      {/* Header */}
      <div
        className="relative overflow-hidden py-16 px-8 text-center"
        style={{ background: 'linear-gradient(135deg, var(--muted) 0%, var(--secondary) 100%)' }}
      >
        <SAPatternBg />
        <div className="relative z-10">
          <DiamondRow count={6} />
          <h2
            className="mt-4 mb-2"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: 'var(--foreground)' }}
          >
            Lessons Gained <em style={{ color: 'var(--accent)' }}>Week by Week</em>
          </h2>
          <p className="text-sm" style={{ color: 'var(--muted-foreground)', maxWidth: '50ch', margin: '0 auto' }}>
            Six weeks on the ground in Cape Town, from our kickoff presentation to our final client demo on July 12th.
          </p>
        </div>
      </div>

      <div className="px-8 py-14 max-w-5xl mx-auto">
        {/* Week cards */}
        <div className="flex flex-col gap-6">
          {WEEKS.map((week) => {
            const isOpen = openWeek === week.num
            return (
              <div key={week.num} className="week-card">
                {/* Week header */}
                <button
                  className="w-full flex items-center gap-5 px-6 py-5 text-left"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', borderBottom: isOpen ? '1px solid var(--border)' : 'none' }}
                  onClick={() => setOpenWeek(isOpen ? null : week.num)}
                >
                  {/* Week number badge */}
                  <div
                    className="flex-shrink-0 flex items-center justify-center rounded-full w-12 h-12 font-bold text-white text-sm"
                    style={{ background: week.color }}
                  >
                    W{week.num}
                  </div>
                  <div className="flex-1">
                    <div className="section-label mb-0.5">
                      Week {week.num} &middot; {week.dates}{week.incomplete ? ' — record incomplete' : ''}
                    </div>
                    <div style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '1.15rem', color: 'var(--foreground)' }}>
                      {week.title}
                    </div>
                  </div>
                  {/* Decorative diamonds */}
                  <DiamondRow count={3} />
                  <span style={{ color: 'var(--accent)', fontSize: '1.25rem', marginLeft: '0.5rem' }}>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 py-6" style={{ background: 'var(--background)' }}>
                    {/* Photos row */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <PhotoSlot label={`Week ${week.num} highlight 1`} src={`/photos/week-${week.num}-1.jpg`} height={150} />
                      <PhotoSlot label={`Week ${week.num} highlight 2`} src={`/photos/week-${week.num}-2.jpg`} height={150} />
                      <PhotoSlot label={`Week ${week.num} highlight 3`} src={`/photos/week-${week.num}-3.jpg`} height={150} />
                    </div>

                    {/* Real report fields */}
                    <div className="grid grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="section-label">Time dedicated</label>
                        <StaticField rows={2} value={week.time} />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="section-label">Contribution to the project</label>
                        <StaticField rows={4} value={week.contribution} />
                      </div>
                      <div className="flex flex-col gap-1.5" style={{ gridColumn: '1 / -1' }}>
                        <label className="section-label">Reflection & lessons learned</label>
                        <StaticField rows={4} value={week.reflection} />
                      </div>
                    </div>

                    {/* Big lesson callout */}
                    {week.lesson && (
                      <NdebeleFrame className="mt-6">
                        <div className="py-5 px-6">
                          <div className="flex items-center gap-3 mb-3">
                            <Protea size={28} opacity={0.7} />
                            <span className="section-label">✦ The Lesson of Week {week.num}</span>
                          </div>
                          <StaticField
                            rows={2}
                            style={{ fontSize: '1rem', fontStyle: 'italic', fontFamily: '"Playfair Display", Georgia, serif' }}
                            value={week.lesson}
                          />
                        </div>
                      </NdebeleFrame>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Cross-week reflection */}
        <div
          className="mt-12 p-6 rounded-lg relative overflow-hidden"
          style={{ background: 'var(--secondary)', border: '1px solid var(--border)' }}
        >
          <div className="absolute top-3 right-3 opacity-10"><Protea size={90} opacity={1} /></div>
          <span className="section-label mb-4 block">Across All Weeks — Looking Back</span>
          <div className="grid grid-cols-2 gap-5 relative z-10">
            <div className="flex flex-col gap-1.5">
              <label className="section-label">The arc of my growth</label>
              <StaticField
                rows={5}
                value="I arrived already having interviewed the client remotely, but the six weeks on the ground were where the work — and the growth — actually happened. I went from setting up someone else's project environment in week one, to redesigning the AI assistant's cloud infrastructure around constraints nobody had planned for in week four, to presenting confidently to the client on July 12th in a way that would have felt completely out of reach back in week one. Looking at it week by week rather than all at once, the growth doesn't look like a single turning point — it looks like six small, deliberate corrections that added up."
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="section-label">Lessons I'll carry into my career</label>
              <StaticField
                rows={5}
                value="Plan before you build, especially when a day of planning would save you from redoing the same screen three times. Real infrastructure is messy — resilience means redesigning around the constraints you're actually given, not waiting for ideal conditions that may never show up. Presentation skills are built the same way software is: through iteration, not talent, and the only way to get comfortable in front of a client is to keep showing up in front of one. And technical achievement means little in isolation — the work only matters as much as the community it actually serves."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
