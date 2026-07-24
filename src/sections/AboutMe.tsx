import { Protea, DiamondRow, SAPatternBg } from '../components/SADecor'
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

export default function AboutMe() {
  return (
    <div style={{ backgroundColor: 'var(--card)' }}>
      {/* Header */}
      <div
        className="relative overflow-hidden py-14 px-8"
        style={{ background: 'linear-gradient(135deg, var(--secondary) 0%, var(--card) 100%)' }}
      >
        <SAPatternBg />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-1">
            <DiamondRow count={3} />
            <span className="section-label">Section 01</span>
          </div>
          <h2
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '2.5rem', color: 'var(--foreground)', lineHeight: 1.1 }}
          >
            About <em style={{ color: 'var(--accent)' }}>Me</em>
          </h2>
        </div>
      </div>

      <div className="px-8 py-14 max-w-5xl mx-auto">
        {/* Profile + identity */}
        <div className="grid gap-10 mb-12" style={{ gridTemplateColumns: '260px 1fr' }}>
          <div className="flex flex-col gap-4">
            <PhotoSlot label="Your portrait" src="/photos/portrait.jpg" height={300} />
            <PhotoSlot label="Another photo of you" src="/photos/portrait-2.jpg" height={180} />
            <div className="flex justify-center"><Protea size={48} opacity={0.5} /></div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Full Name', value: 'Zlata Kovrigina' },
                { label: 'Hometown', value: 'Fleming Island, Florida' },
                { label: 'Major / Field of Study', value: 'Computer Science (AI Certificate)' },
                { label: 'Year in School', value: 'Sophomore' },
                { label: 'Home University', value: 'University of Florida' },
                { label: 'Languages Spoken', value: 'English, Spanish, Russian' },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-1">
                  <label className="section-label">{label}</label>
                  <StaticField value={value} />
                </div>
              ))}
            </div>
            <Field label="Who I am" placeholder="Tell us about yourself — your background, your interests, what drives you as a person and a technologist." rows={4} />
            <Field label="Why South Africa, why this program" placeholder="What drew you to this specific program? Was it a lifelong curiosity, a recommendation, or something you read? What made you say yes?" rows={4} />
          </div>
        </div>

        {/* School involvement & activities */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <Protea size={32} opacity={0.7} />
            <span className="section-label">School Involvement & Activities</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                org: 'Women in Computer Science and Engineering (WiCSE)',
                role: 'Outreach Director',
                dates: 'Aug 2025 – Present',
                description: 'Recruit mentors and judges and lead workshops to grow participation in CS/CE at UF, work that runs in parallel with GatorAI. It\'s taught me how to build community around a technical field before people already feel like they belong in it.',
              },
              {
                org: 'WingHacks Hackathon — PhishHook',
                role: 'Frontend Developer',
                dates: 'May 2026',
                description: 'Designed the frontend for PhishHook, an anti-phishing website with an interactive multi-level phishing simulator and an AI-generated audio comprehension quiz. Building under a hackathon clock taught me to make fast, defensible design decisions instead of waiting for the perfect one.',
              },
              {
                org: 'Russian Cultural Club',
                role: 'Member',
                dates: 'Jan 2026 – Present',
                description: 'A space to stay connected to my heritage and language on campus. Being part of it kept a piece of home present even while I was preparing to spend a summer building for a community on another continent.',
              },
              {
                org: 'Safe Cities Permaculture',
                role: 'Frontend Developer & AI Chatbot Design Intern',
                dates: 'May 2026 – Present',
                description: 'Built frontend features and an AI-powered chatbot for a Cape Town nonprofit\'s community app (see Trip & Project Overview). It\'s the internship that shaped most of what\'s on this site, and taught me to design for users with real constraints — not the constraints coursework assumes.',
              },
              {
                org: 'Eagle Harbor Aquatics',
                role: 'Lead Lifeguard and Swim Instructor',
                dates: 'June 2023 – Present',
                description: '350+ hours managing and training new lifeguards in safety protocols, holding Red Cross Lifeguarding/CPR/AED and Basic Swim Instructor certifications. Years of calm, high-stakes communication here turned out to be direct preparation for presenting to a nonprofit client under real pressure.',
              },
            ].map(({ org, role, dates, description }) => (
              <div key={org} className="sa-card flex flex-col gap-2">
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--foreground)', fontSize: '0.9375rem' }}>{org}</div>
                  <div className="section-label mt-1">{role}</div>
                  <div className="text-xs mt-1" style={{ color: 'var(--muted-foreground)' }}>{dates}</div>
                </div>
                <p className="text-sm" style={{ color: 'var(--foreground)', lineHeight: 1.6 }}>{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Deeper reflection */}
        <div
          className="p-6 rounded-lg mb-12"
          style={{ background: 'var(--secondary)', border: '1px solid var(--border)' }}
        >
          <div className="flex items-center gap-3 mb-5">
            <Protea size={32} opacity={0.7} />
            <span className="section-label">Going Deeper</span>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <Field label="My goals before departing" placeholder="What were you hoping to gain — academically, professionally, personally? What did you set out to prove or discover?" rows={5} />
            <Field label="Fears & anxieties going in" placeholder="What made you nervous? Language barriers, unfamiliar environments, being far from home, technology culture differences?" rows={5} />
            <Field label="My support system back home" placeholder="Who cheered you on? How did family, friends, or mentors support your decision to go to South Africa?" rows={4} />
            <Field label="What I packed (literally & symbolically)" placeholder="What essentials did you bring? And what mindset, habits, or assumptions did you carry as invisible luggage?" rows={4} />
          </div>
        </div>

        {/* Pre-departure photos */}
        <div>
          <span className="section-label mb-4 block">Before Departure</span>
          <div className="grid grid-cols-4 gap-4">
            {[
              { l: 'Before the trip', f: 'before-the-trip.jpg' },
              { l: 'With family', f: 'with-family.jpg' },
              { l: 'With friends', f: 'with-friends.jpg' },
              { l: 'Packing / prep day', f: 'packing-day.jpg' },
            ].map(({ l, f }) => (
              <PhotoSlot key={l} label={l} src={`/photos/${f}`} height={160} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
