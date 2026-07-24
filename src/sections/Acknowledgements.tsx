import { DiamondRow, Protea, AfricanSun, SAPatternBg, NdebeleFrame, ZuluShield } from '../components/SADecor'
import { StaticField } from '../components/StaticField'

const HONOREES = [
  { name: 'Dr. Sanethia Thomas', icon: '🎓' },
  { name: 'Ping Neo', icon: '⭐' },
  { name: 'Naomi Harrell', icon: '💫' },
  { name: 'EDU Africa', icon: '🌍' },
  { name: 'Safe Cities Permaculture', icon: '🤝' },
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
        {/* Thank you section — everyone in one place */}
        <div
          className="rounded-lg overflow-hidden mb-14"
          style={{ border: '1px solid var(--border)', background: 'var(--card)' }}
        >
          <div
            className="flex items-center justify-center gap-4 px-6 py-5"
            style={{
              background: 'linear-gradient(90deg, var(--muted) 0%, var(--secondary) 50%, var(--background) 100%)',
              borderBottom: '1px solid var(--border)',
            }}
          >
            {HONOREES.map((person) => (
              <span key={person.name} style={{ fontSize: '1.75rem' }} title={person.name}>{person.icon}</span>
            ))}
          </div>

          <div className="px-6 py-6">
            <span className="section-label mb-1 block">To Everyone Who Made This Possible</span>
            <p className="text-xs mb-4" style={{ color: 'var(--muted-foreground)' }}>
              {HONOREES.map((p) => p.name).join(' · ')}
            </p>
            <StaticField
              rows={8}
              value="Thank you to Dr. Sanethia Thomas, our faculty advisor, for guiding Penguin Intelligence through every weekly check-in and pushing us to keep the client's actual needs at the center of the build. To Ping Neo and Naomi Harrell, for the program support and coordination — the logistics, structure, and behind-the-scenes work that kept three students accountable across ten weeks and a continent, and let us focus on the work in front of us. To EDU Africa, for the local infrastructure, knowledge, and on-the-ground partnership that made it possible for us to land in Cape Town and do work that actually mattered. And to Safe Cities Permaculture — for trusting three students with a real problem, for your patience during our first rough interviews, for honest usability feedback, and for welcoming us onto the farm in Elsies River. Building Elsie for you was the best part of this program."
            />
          </div>
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
