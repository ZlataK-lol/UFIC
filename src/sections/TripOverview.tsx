import { Protea, DiamondRow, AfricanSun, SAPatternBg, ZuluShield } from '../components/SADecor'
import { PhotoSlot } from '../components/PhotoSlot'
import { StaticField } from '../components/StaticField'

function Field({ label, value, placeholder, rows = 3 }: { label: string; value?: string; placeholder: string; rows?: number }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="section-label">{label}</label>
      <StaticField rows={rows} placeholder={placeholder} value={value} />
    </div>
  )
}

const STATS = [
  { value: '6', label: 'Weeks in Cape Town', icon: '📅' },
  { value: '1', label: 'Partner Nonprofit', icon: '🗺️' },
  { value: '3', label: 'Project Team Members', icon: '👥' },
  { value: '4', label: 'Core App Modules Built', icon: '💻' },
]

export default function TripOverview() {
  return (
    <div style={{ backgroundColor: 'var(--background)' }}>
      {/* Hero banner */}
      <div
        className="relative overflow-hidden py-20 px-8"
        style={{ background: 'linear-gradient(135deg, var(--secondary) 0%, var(--background) 60%, var(--muted) 100%)' }}
      >
        <SAPatternBg />
        {/* Corner decorations */}
        <div className="absolute top-6 left-6 opacity-40"><Protea size={80} opacity={1} /></div>
        <div className="absolute top-6 right-6 opacity-40"><AfricanSun size={80} opacity={1} /></div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-20"><ZuluShield size={60} opacity={1} /></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <DiamondRow count={7} />
          <h2
            className="mt-4 mb-2"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              color: 'var(--foreground)',
              lineHeight: 1.15,
            }}
          >
            Trip & Project <em style={{ color: 'var(--accent)' }}>Overview</em>
          </h2>
          <p className="text-sm mb-6" style={{ color: 'var(--muted-foreground)' }}>
            A snapshot of the journey, the mission, and the work we accomplished together.
          </p>
          <DiamondRow count={7} />
        </div>
      </div>

      <div className="px-8 py-16 max-w-5xl mx-auto">
        {/* Quick stats */}
        <div className="grid grid-cols-4 gap-4 mb-14">
          {STATS.map(({ value, label, icon }) => (
            <div
              key={label}
              className="sa-card text-center"
              style={{ borderLeft: '4px solid var(--sa-gold, #c8973a)' }}
            >
              <div className="text-2xl mb-1">{icon}</div>
              <div
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: '1.75rem',
                  color: 'var(--accent)',
                  lineHeight: 1,
                }}
              >
                <div
                  className="w-full text-center text-2xl font-bold"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif', color: 'var(--accent)' }}
                >
                  {value}
                </div>
              </div>
              <div className="text-xs mt-1" style={{ color: 'var(--muted-foreground)' }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Trip overview */}
        <div className="grid gap-10 mb-14" style={{ gridTemplateColumns: '1fr 1fr' }}>
          <div className="flex flex-col gap-5">
            <span className="section-label">About the Program</span>
            <Field
              label="Program name & organization"
              placeholder="e.g. EDU Africa Summer Research Program: describe the program, who runs it, and what its mission is."
              value="UF SWE and UX Global Internship, a University of Florida study abroad program run in partnership with EDU Africa that pairs CS/CE students with a real nonprofit client for a semester-long software build, from client discovery through final handoff."
              rows={4}
            />
            <Field
              label="Where we went"
              placeholder="Cities, regions, and sites visited across South Africa. Include Cape Town, any townships, universities, or field sites."
              value="Based in Cape Town for the full program, with our project site at Safe Cities Permaculture in Elsies River, Western Cape. As a group, we also explored Chapman's Peak Drive and other sites across the Cape Peninsula."
              rows={4}
            />
            <Field
              label="Who we worked with"
              placeholder="Partner organizations, local universities, community groups, mentors on the ground. Describe the collaborative relationships."
              value="Safe Cities Permaculture, a Cape Town nonprofit focused on community transformation and skills development. On the UF side: Dr. Sanethia Thomas (faculty advisor), Ping Neo and Naomi Harrell (program support), and EDU Africa as the on-the-ground program partner."
              rows={4}
            />
          </div>
          <div className="flex flex-col gap-4">
            <PhotoSlot label="Curiocity, Cape Town" src="/photos/curiosity.jpg" height={220} fit="contain" />
            <div className="grid grid-cols-2 gap-4">
              <PhotoSlot label="EDU Africa" src="/photos/edu-africa-logo.jpg" height={140} fit="contain" />
              <PhotoSlot label="Safe Cities Permaculture" src="/photos/safe-cities-logo.jpg" height={140} fit="contain" />
            </div>
          </div>
        </div>

        {/* Project overview */}
        <div
          className="p-6 rounded-lg mb-10 relative overflow-hidden"
          style={{ background: 'var(--secondary)', border: '1px solid var(--border)' }}
        >
          <div className="absolute top-4 right-4 opacity-10"><Protea size={100} opacity={1} /></div>
          <span className="section-label mb-4 block">The Project We Built</span>
          <div className="grid grid-cols-2 gap-6 relative z-10">
            <Field
              label="Project name"
              placeholder="What was the application called?"
              value="AFC Estate: home to Elsie, the Safe Cities AI Assistant"
              rows={1}
            />
            <Field
              label="Problem being solved"
              placeholder="What real-world problem in South Africa did this project address?"
              value="Safe Cities staff were losing real time hunting through Drive folders, PDFs, and meeting notes for routine answers, a bottleneck for field staff who needed timely information and often didn't have it."
              rows={1}
            />
            <Field
              label="Project description"
              placeholder="Describe the application at a high level: what does it do, who uses it, and why does it matter to the South African context?"
              value="AFC Estate is a farm-management web app for Safe Cities Permaculture, with auth, a document library, task and schedule management, a marketplace, and messaging. Its centerpiece is Elsie, a RAG-based AI assistant that answers natural-language staff questions grounded in the organization's own Google Drive documents and cites its sources, so knowledge that used to live in scattered folders is now a conversation away."
              rows={5}
            />
            <Field
              label="Our team's role"
              placeholder="What was your team specifically responsible for? How did you contribute to the larger project ecosystem?"
              value="As Penguin Intelligence (Zlata Kovrigina, Adam Makled, Anthony Vargas), we owned the build end-to-end: client discovery and interviews, frontend and AI-assistant UX, backend and API work, cloud infrastructure (migrating the AI service from Google to a Microsoft Azure grant), and usability testing with the client and peers before handoff."
              rows={5}
            />
            <Field
              label="Technologies & tools used"
              placeholder="List the tech stack, frameworks, APIs, and any tools specific to your project (e.g. React, Firebase, Google Maps API…)"
              value="React/React Native + Expo (later rebuilt in plain HTML/CSS/JS for speed), Node.js/Express, MongoDB, Python/FastAPI AI service, Microsoft Azure AI Foundry (DeepSeek-V4-Flash chat model, text-embedding-3-small, Azure AI Search with hybrid vector + keyword retrieval), Google Drive API, Vercel hosting."
              rows={3}
            />
            <Field
              label="Impact & intended users"
              placeholder="Who benefits from this application? What community or population does it serve? What change does it enable?"
              value="Safe Cities Permaculture's program staff and field workers in Elsies River, people who often have limited tech experience and unreliable connectivity, but need fast, trustworthy answers to run community and farming programs without hunting through folders."
              rows={3}
            />
          </div>
        </div>

        {/* Timeline */}
        <div>
          <span className="section-label mb-5 block">Program Timeline</span>
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-0.5"
              style={{ background: 'linear-gradient(to bottom, var(--accent), var(--border))' }}
            />
            <div className="flex flex-col gap-0">
              {[
                { week: 'Before Departure', label: 'Remote Planning & Client Interview', text: 'Prepared interview questions, scheduled and conducted our first client interview with Safe Cities remotely, and began shaping a project plan before departure.' },
                { week: 'Jun 1 – Jun 7', label: 'Arrival & Kickoff', text: 'Landed in Cape Town on May 31st. Delivered our kickoff presentation (project overview, personas, user stories) and set up the existing project environment on our machines.' },
                { week: 'Jun 8 – Jun 21', label: 'Building the AI Assistant', text: 'Built the first version of Elsie, connected it to Safe Cities\' Google Drive, and automated document intake via an email-to-Drive script.' },
                { week: 'Jun 22 – Jul 5', label: 'Cloud Migration & Testing', text: 'Migrated the AI service to Microsoft Azure AI Foundry using a $2,000 nonprofit grant, then ran usability testing with the client and peers.' },
                { week: 'Jul 6 – Jul 12', label: 'Final Presentations & Departure', text: 'Delivered final presentations, walked the client through the finished platform in detail, and left Cape Town on July 12th, our last week in-country.' },
                { week: 'After Jul 12', label: 'Documentation & Coming Home', text: 'Made instructional videos for Safe Cities staff back home, wrapped up documentation with the team, and worked through the adjustment of reverse culture shock.' },
              ].map(({ week, label, text }, i) => (
                <div key={week} className="flex gap-6 pb-8 relative">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold z-10"
                    style={{ background: 'var(--accent)', color: 'white', border: '3px solid var(--background)' }}
                  >
                    W{i + 1}
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="section-label">{week}</span>
                      <span style={{ color: 'var(--foreground)', fontWeight: 600, fontSize: '0.875rem' }}>{label}</span>
                    </div>
                    <StaticField rows={2} value={text} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
