import { DiamondRow, Protea, AfricanSun, SAPatternBg, NdebeleFrame, ZuluShield } from '../components/SADecor'
import { StaticField } from '../components/StaticField'

const HONOREES = [
  {
    name: 'Dr. Sanethia Thomas',
    role: 'Program Faculty Advisor',
    icon: '🎓',
    message: 'Thank you for advising Penguin Intelligence through every weekly check-in, for pushing us to keep the client\'s actual needs at the center of the build, and for the structure that kept three students accountable across ten weeks and a continent.',
  },
  {
    name: 'Ping Neo',
    role: 'Program Coordinator / Mentor',
    icon: '⭐',
    message: 'Thank you for the support that kept this program running smoothly behind the scenes, from logistics to guidance, so we could focus on the work in front of us.',
  },
  {
    name: 'Naomi Harrell',
    role: 'Program Support & Coordination',
    icon: '💫',
    message: 'Thank you for the coordination and support that made this experience possible — the kind of behind-the-scenes work that students rarely see but always depend on.',
  },
  {
    name: 'EDU Africa',
    role: 'Program Partner Organization',
    icon: '🌍',
    message: 'Thank you for the local infrastructure, knowledge, and mission that made it possible for a group of UF students to land in Cape Town and do work that actually mattered.',
  },
  {
    name: 'Safe Cities Permaculture',
    role: 'Elsies River, Western Cape — Community Transformation & Skills Development',
    icon: '🤝',
    message: 'Thank you for trusting three students with a real problem — for the patience during our first rough interviews, for the honest usability feedback, and for welcoming us onto the farm. Building Elsie for you was the best part of this program.',
  },
]

export default function Acknowledgements() {
  return (
    <div style={{ backgroundColor: 'var(--secondary)' }}>
      {/* Hero banner */}
      <div
        className="relative overflow-hidden py-20 px-8 text-center"
        style={{
          background: 'linear-gradient(160deg, #0f2d3d 0%, #1a4a6a 40%, #2a6a8a 70%, var(--accent) 100%)',
        }}
      >
        <SAPatternBg className="opacity-10" />

        {/* Decorative elements */}
        <div className="absolute top-8 left-8 opacity-20"><Protea size={100} opacity={1} /></div>
        <div className="absolute top-8 right-8 opacity-20"><AfricanSun size={100} opacity={1} /></div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-10"><ZuluShield size={80} opacity={1} /></div>

        <div className="relative z-10">
          <DiamondRow count={9} />
          <h2
            className="mt-6 mb-3"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: '#F0F8FF',
              lineHeight: 1.15,
            }}
          >
            With Gratitude
          </h2>
          <p
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: '1.15rem',
              fontStyle: 'italic',
              color: 'rgba(240,248,255,0.75)',
              maxWidth: '50ch',
              margin: '0 auto 1.5rem',
            }}
          >
            None of this would have been possible without the people who believed in this program,
            and in us.
          </p>
          <DiamondRow count={9} />
        </div>
      </div>

      {/* Ndebele stripe */}
      <div className="ndebele-border" />

      <div className="px-8 py-16 max-w-5xl mx-auto">
        {/* Thank you cards */}
        <div className="flex flex-col gap-6 mb-14">
          {HONOREES.map((person, i) => (
            <div
              key={person.name}
              className="rounded-lg overflow-hidden"
              style={{ border: '1px solid var(--border)', background: 'var(--card)' }}
            >
              {/* Card header */}
              <div
                className="flex items-center gap-5 px-6 py-4"
                style={{
                  background: i % 2 === 0
                    ? 'linear-gradient(90deg, var(--muted) 0%, var(--secondary) 100%)'
                    : 'linear-gradient(90deg, var(--secondary) 0%, var(--background) 100%)',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                <span style={{ fontSize: '2rem' }}>{person.icon}</span>
                <div className="flex-1">
                  <div style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '1.2rem', color: 'var(--foreground)', fontWeight: 700 }}>
                    {person.name}
                  </div>
                  <div className="section-label mt-0.5">{person.role}</div>
                </div>
                <DiamondRow count={3} />
              </div>

              {/* Thank-you message area */}
              <div className="px-6 py-5">
                <label className="section-label mb-2 block">Personal message of thanks</label>
                <StaticField rows={4} value={person.message} />
              </div>
            </div>
          ))}
        </div>

        {/* Additional thanks */}
        <div
          className="p-6 rounded-lg mb-12"
          style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
        >
          <span className="section-label mb-4 block">Additional Acknowledgements</span>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="section-label">Teammates</label>
              <StaticField
                rows={5}
                value="Adam Makled (Senior, Comp Sci — Team Lead & Backend Developer) kept the project structured and owned the harder backend and AI-service work, including the Azure migration. Anthony Vargas (Sophomore, Comp Eng — Scrum Master) kept our sprints organized and took on video editing for our handoff documentation. I'll remember how naturally we split up hard problems without anyone having to ask."
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="section-label">Local community & South African hosts</label>
              <StaticField
                rows={5}
                value="Thank you to the Safe Cities Permaculture staff and farm workers in Elsies River who welcomed us onto the farm, patiently answered our questions during usability testing, and were honest with us about what wasn't working yet — that honesty made the platform better."
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="section-label">Family & friends back home</label>
              <StaticField
                rows={4}
                placeholder="Who supported you from afar — who did you call when you were overwhelmed or excited? What did their support mean while you were abroad?"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="section-label">Others to thank</label>
              <StaticField
                rows={4}
                placeholder="Anyone else who played a role — a professor who inspired you, a scholarship that funded you, a book that prepared you, a stranger who showed you kindness."
              />
            </div>
          </div>
        </div>

        {/* Closing ubuntu moment */}
        <NdebeleFrame>
          <div
            className="relative overflow-hidden py-12 px-8 text-center"
            style={{ background: 'linear-gradient(135deg, #0f2d3d 0%, #1a4a6a 100%)' }}
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-5">
              <Protea size={280} opacity={1} />
            </div>
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <Protea size={56} opacity={0.9} />
              </div>
              <DiamondRow count={9} />
              <blockquote
                className="mt-6 mb-4"
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: 'clamp(1.25rem, 3vw, 2rem)',
                  color: '#F0F8FF',
                  fontStyle: 'italic',
                  lineHeight: 1.4,
                  maxWidth: '36ch',
                  margin: '1.5rem auto',
                }}
              >
                "Ubuntu — I am because we are."
              </blockquote>
              <p className="text-xs tracking-widest mb-5" style={{ color: 'rgba(202,233,245,0.6)', letterSpacing: '0.2em' }}>
                NGUNI BANTU PROVERB &nbsp;·&nbsp; SOUTH AFRICA
              </p>
              <DiamondRow count={9} />
              <div className="mt-8">
                <StaticField
                  className="text-field text-center"
                  rows={4}
                  style={{
                    background: 'rgba(240,248,255,0.08)',
                    border: '1px solid rgba(173,216,230,0.3)',
                    color: '#F0F8FF',
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: '1rem',
                    maxWidth: '500px',
                    margin: '0 auto',
                    display: 'block',
                  }}
                  placeholder="Your own closing words of gratitude — to South Africa, to everyone who made this possible, and to the person you became."
                />
              </div>
            </div>
          </div>
        </NdebeleFrame>
      </div>
    </div>
  )
}
