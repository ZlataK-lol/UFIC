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
    contribution: 'Built the project overview, Persona 1, and one user story for the team\'s Project Proposal Pitch — delivered as a class lecture and presentation at EDU Africa\'s office — set up the existing project environment on my own machine, and helped write the team status report.',
    reflection: 'Learned how to step into a project that was already underway rather than starting from scratch — reading someone else\'s decisions instead of making my own from a blank page is its own skill, and week one was mostly building that muscle. Aika Swai\'s "South Africa in Context" workshop and our visit to the Slave Lodge gave me Cape Town\'s history — Apartheid and the history of slavery before it — early enough that it reframed how I saw the city from day one, and pushed me to learn from experience and listening rather than assumption for the rest of the program.',
    lesson: 'Learn from the people and history around you — don\'t let secondhand impressions stand in for actually finding out.',
    culture: [
      { activity: 'Aika Swai\'s "South Africa in Context" workshop and the Slave Lodge', note: 'The first real grounding in Cape Town\'s history — Apartheid and the slave trade that came before it — before I\'d even started meaningful project work, and it shaped how I approached everything after.' },
      { activity: 'Guest speaker Ronel Koekemoer on Grit GBV\'s work', note: 'A direct look at gender-based-violence advocacy in South Africa — a side of the country\'s challenges no orientation packet had prepared me for.' },
      { activity: 'Group dinner at Bay Harbour Market', note: 'An early, low-stakes meal that started turning "my cohort" into people I actually knew, before we\'d have to rely on each other for six more weeks.' },
    ],
  },
  {
    num: 2,
    dates: 'Jun 8 – Jun 14',
    title: 'Building the AI Assistant',
    color: '#86C5D8',
    time: 'Roughly 7–8 hours.',
    contribution: 'Built the AI chat frontend — new/save/delete chat controls and the sidebar — and connected the assistant\'s API key so it could read from Safe Cities\' Google Drive.',
    reflection: 'Learned how to prompt-engineer for genuinely useful AI output instead of just plausible-sounding output — those aren\'t the same thing, and the gap between them is where most of the real work lives. Also learned what actually goes into a production frontend build versus a prototype, and how to set guardrails so the assistant stayed inside its intended scope instead of confidently answering questions it had no business answering. A conversation with Lionel Davis and the guided District Six Museum walk that weekend made the history from week one concrete instead of abstract — hearing it from someone who lived it lands very differently than reading about it.',
    lesson: 'A good assistant needs boundaries as much as it needs capability — knowing what not to answer is part of the design, not an afterthought.',
    culture: [
      { activity: 'A conversation with Lionel Davis', note: 'Hearing District Six\'s history from someone who lived it landed very differently than reading about it — history stopped being background and started being personal.' },
      { activity: 'The Khayelitsha Experience and the 18 Gangster Museum', note: 'A community completely outside the tourist version of Cape Town, and an honest look at how Cape Flats gang culture came to exist in the first place.' },
      { activity: 'Guided District Six Museum & site walk, and Bo-Kaap', note: 'Walking the actual streets where forced removals happened made the history from week one concrete instead of abstract.' },
      { activity: 'Guest speaker Chesarae Pillay', note: 'Another perspective on working and building within South African communities, adding to a fuller picture week by week.' },
    ],
  },
  {
    num: 3,
    dates: 'Jun 15 – Jun 21',
    title: 'Automation & Visual Redesign',
    color: '#CAE9F5',
    time: 'Roughly 10–11 hours.',
    contribution: 'Set up a Google Apps Script so documents save automatically from a labeled email into Drive, then picked a new color palette and reworked the frontend for a more modern feel based on client direction. Also delivered Presentation 2: Project Update to the class, and helped prep for the High School Showcase at Curro Delft.',
    reflection: 'Learned the importance of heavy planning before development the hard way — after redesigning the home screen several times based on client direction that kept evolving, I learned to lock down exactly what I wanted built, and get sign-off on it, before writing the first line of a new screen. Youth Day fell right in the middle of this week, and having a national day of remembrance land mid-program was a reminder that the history we\'d been learning wasn\'t just historical — it\'s actively observed and honored today.',
    lesson: 'Plan before you build, or you\'ll end up building it twice.',
    culture: [
      { activity: 'Youth Day (June 16) — a public holiday commemorating the 1976 Soweto uprising', note: 'Having a national day of remembrance fall in the middle of our program was a reminder that the history we were learning wasn\'t just historical — it\'s actively observed and honored today.' },
      { activity: 'The Cape Malay Cooking Experience', note: 'Cooking a Cape Malay meal by hand taught me more about Cape Town\'s Muslim and Indonesian-heritage community in an afternoon than any reading could have.' },
      { activity: 'The High School Showcase at Curro Delft High School, and the Stellenbosch University visit', note: 'Talking with local students about our work was the first time I explained the project to people our own age outside the program — a good check on whether I could make it make sense to anyone.' },
    ],
  },
  {
    num: 4,
    dates: 'Jun 22 – Jun 28',
    title: 'Cloud Infrastructure on Azure',
    color: '#4a9ab5',
    time: 'Roughly 10–11 hours.',
    contribution: 'Attended an Amazon workshop on cloud and AI tooling early in the week, then configured Microsoft Azure AI Foundry using a $2,000 nonprofit grant, evaluated AI models on cost, efficiency, and safety, and deployed models across two regions after discovering key models weren\'t available in South Africa.',
    reflection: 'Learned how to problem-solve without reliable vendor support close at hand, and how to restructure a project around real-world regional constraints instead of what the documentation quietly assumes about where you\'re deploying from. Evaluating models on cost, efficiency, and safety against a fixed $2,000 grant also taught me to treat budget as a design constraint from the start, not an afterthought to optimize once something already works. The !Khwa ttu San Heritage Centre visit this week reframed how far back the region\'s history actually goes — long before anything we\'d covered so far.',
    lesson: 'Resilience means redesigning around constraints, not waiting for the ideal setup.',
    culture: [
      { activity: '!Khwa ttu San Heritage Centre', note: 'Learning about San culture and history — the region\'s original inhabitants — was a perspective the rest of the program hadn\'t covered yet, and it reframed how far back Cape Town\'s layered history actually goes.' },
      { activity: 'Chapman\'s Peak Drive, Cape Point, Boulders Penguin Colony, and the Kalk Bay/Fish Hoek/St James coastline', note: 'A full day of the Cape Peninsula\'s natural side, a reminder of why people fight to protect and share this landscape in the first place.' },
      { activity: 'Guest speaker Joseph Maboko', note: 'One more voice added to the running conversation about what building responsibly in South Africa actually requires.' },
    ],
  },
  {
    num: 5,
    dates: 'Jun 29 – Jul 5',
    title: 'Testing & Iteration',
    color: '#86C5D8',
    time: 'About 8–9 hours — 2–3 hours researching and running usability testing, 2 hours setting up Microsoft account details, and 3 hours fixing smaller site issues, plus coordinating team meetings and status updates throughout the week.',
    contribution: 'Delivered Presentation 3: Project Update to the class, then helped run usability testing using SUS and other user-analysis tools, including interviewing a classmate and helping put together the report. Set up Microsoft account details for the client, including budget-warning email alerts and other account configuration. Also fixed a number of smaller site issues — cleaning up wording, updating program information, swapping in new company photos, and requiring a photo on marketplace posts. Alongside this, planned team meetings and kept everyone up to date on where the project stood.',
    reflection: 'Learned how to actually conduct usability testing — not just run through a checklist, but make sure a program is accessible and genuinely useful to different kinds of users, not just functional in the abstract. Also learned how to voice concerns during peer testing constructively: several classmates asked me to review their sites, and I had to learn to pair honest criticism with real compliments so the feedback landed without anyone feeling attacked. Beyond that, learned how to take testing responses and actually translate them into concrete changes to the site, plus a handful of new Microsoft account features, like setting up budget-watching alerts. A guest lecture on AI in education from Louise Nivison landed right in the middle of our own AI build — a useful reminder that the ethical questions around AI weren\'t unique to our project.',
    lesson: 'Usability testing only works if you\'re honest in both directions — as a tester, give feedback people can actually act on, and as the one being tested, be willing to change the site because of what you hear.',
    culture: [
      { activity: 'Guest speaker Louise Nivison on AI in education', note: 'A useful outside perspective right in the middle of our own AI build — a reminder that the ethical questions around AI weren\'t unique to our project.' },
      { activity: 'Aquila Day Safari', note: 'Seeing the Karoo landscape and its wildlife was as far from Cape Town\'s urban history as the program got — a different register of the country entirely.' },
      { activity: 'Hout Bay Harbour Market and the Seal Island Boat Cruise', note: 'A lower-key weekend that still added a piece of the fishing-community side of the Cape I hadn\'t seen yet.' },
    ],
  },
  {
    num: 6,
    dates: 'Jul 6 – Jul 12',
    title: 'Final Presentations & Client Testing',
    color: '#ADD8E6',
    time: 'About 9 hours — 7 on presentation prep, 2 speaking with the client.',
    contribution: 'Completed slides for the final presentations, tested with the client after usability testing to measure how much more efficient the app made their process, and walked them through specific features in detail. Also completed Transformation Questionnaire 2 and sat through a reflection & feedback session as part of the program\'s formal close.',
    reflection: 'Learned a lot about myself as a presenter in this final week — noticeably less stressed walking into a big presentation than I\'d been back in week one, and able to actually enjoy the client conversation instead of just surviving it. Also learned to ask very specific questions of a non-technical client, translating vague concerns like "it feels slow" or "this is confusing" into concrete, buildable feature requirements — a translation skill that took the full six weeks to sharpen. Djembe drumming and dinner at GOLD the night before our final presentations felt like the right send-off before the highest-stakes week of the internship.',
    lesson: 'Confidence in front of a room is built one presentation at a time — this was my last week in Cape Town, and it felt like the right note to end on.',
    culture: [
      { activity: 'Djembe drumming and dinner at GOLD', note: 'A hands-on, communal send-off that felt like the right note to end the cultural side of the program on, right before the highest-stakes week of the internship.' },
      { activity: 'Final stakeholder presentations, the reflection & feedback session, and Transformation Questionnaire 2', note: 'The formal close to the program — a chance to put a number and a narrative on six weeks that had been too dense to fully summarize in the moment.' },
      { activity: 'Departure from Cape Town on July 12th', note: 'Leaving made the reverse culture shock I\'d feel coming home concrete before I\'d even landed: I was leaving a place that had, without my fully noticing when, become familiar.' },
    ],
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
                      Week {week.num} &middot; {week.dates}
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

                    {/* Culture & community */}
                    {week.culture && week.culture.length > 0 && (
                      <div className="mt-5">
                        <label className="section-label mb-2 block">Culture & Community This Week</label>
                        <div className="flex flex-col gap-2.5">
                          {week.culture.map((c) => (
                            <div
                              key={c.activity}
                              className="text-sm"
                              style={{ color: 'var(--foreground)', lineHeight: 1.6, paddingLeft: '0.875rem', borderLeft: '2px solid var(--accent)' }}
                            >
                              <span style={{ fontWeight: 700 }}>{c.activity}</span> — <span style={{ color: 'var(--muted-foreground)' }}>{c.note}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

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
