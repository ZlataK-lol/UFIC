import { useState } from 'react'
import { StaticField } from '../components/StaticField'

function InputField({ label, value, placeholder, wide = false }: { label: string; value?: string; placeholder: string; wide?: boolean }) {
  return (
    <div className={`flex flex-col gap-1.5 ${wide ? 'col-span-2' : ''}`}>
      <label className="section-label">{label}</label>
      <StaticField placeholder={placeholder} value={value} />
    </div>
  )
}

function Field({ label, value, placeholder, rows = 3 }: { label: string; value?: string; placeholder: string; rows?: number }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="section-label">{label}</label>
      <StaticField rows={rows} placeholder={placeholder} value={value} />
    </div>
  )
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(true)
  return (
    <div style={{ border: '1px solid var(--border)', borderRadius: '4px', overflow: 'hidden' }}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-5 py-3 text-left"
        style={{ background: 'var(--secondary)', cursor: 'pointer', border: 'none' }}
      >
        <span style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '1rem', color: 'var(--foreground)' }}>
          {title}
        </span>
        <span style={{ color: 'var(--accent)', fontSize: '1.1rem' }}>{open ? '−' : '+'}</span>
      </button>
      {open && <div className="p-5 flex flex-col gap-4" style={{ background: 'var(--card)' }}>{children}</div>}
    </div>
  )
}

function RepeatEntry({ fields, defaults = [] }: { fields: Array<{ label: string; placeholder: string }>; defaults?: Array<Record<string, string>> }) {
  const [count, setCount] = useState(Math.max(2, defaults.length))
  return (
    <div className="flex flex-col gap-5">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="grid grid-cols-2 gap-4 pb-4" style={{ borderBottom: i < count - 1 ? '1px dashed var(--border)' : 'none' }}>
          {fields.map((f) => (
            <div key={f.label} className="flex flex-col gap-1">
              <label className="section-label">{f.label} {i + 1}</label>
              <StaticField placeholder={f.placeholder} value={defaults[i]?.[f.label]} />
            </div>
          ))}
        </div>
      ))}
      <button
        onClick={() => setCount((c) => c + 1)}
        className="self-start text-xs px-3 py-1.5 rounded transition-colors"
        style={{
          background: 'var(--secondary)',
          border: '1px solid var(--border)',
          color: 'var(--muted-foreground)',
          cursor: 'pointer',
        }}
      >
        + Add another
      </button>
    </div>
  )
}

export default function Resume() {
  return (
    <div className="px-8 py-20 max-w-5xl mx-auto">
      <div className="flex items-baseline gap-4 mb-4">
        <span className="section-label">Section 02</span>
        <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '2.25rem', color: 'var(--foreground)' }}>
          Resume & Academic Profile
        </h2>
      </div>
      <p className="text-sm mb-10" style={{ color: 'var(--muted-foreground)', maxWidth: '60ch' }}>
        Document your academic background, work experience, and skills — both before and enriched by your time abroad.
      </p>

      <div className="flex flex-col gap-6">
        {/* Contact / Identity */}
        <Block title="Contact & Identity">
          <div className="grid grid-cols-2 gap-4">
            <InputField label="Full Name" value="Zlata Kovrigina" placeholder="Your full name" />
            <InputField label="Email" value="zkovrigina@ufl.edu" placeholder="your@email.com" />
            <InputField label="LinkedIn" value="linkedin.com/in/zlatakovrigina" placeholder="linkedin.com/in/yourname" />
            <InputField label="Portfolio / Website" value="github.com/ZlataK-lol" placeholder="yourwebsite.com" />
          </div>
          <Field
            label="Personal Statement"
            value="I'm a Computer Science student pursuing an AI certificate at the University of Florida, drawn to building technology that solves real problems for people who need it most. Building an AI assistant for a Cape Town nonprofit taught me that good engineering starts with listening — and that resilience means designing around the constraints you're actually given, not the ones you wish you had."
            placeholder="A concise statement (2–3 sentences) about your academic identity and aspirations, informed by your study abroad experience."
            rows={4}
          />
        </Block>

        {/* Education */}
        <Block title="Education">
          <div className="flex flex-col gap-6">
            {/* Home university */}
            <div>
              <span className="section-label mb-2 block">Home University</span>
              <div className="grid grid-cols-2 gap-4">
                <InputField label="Institution" value="University of Florida" placeholder="University name" />
                <InputField label="Degree" value="B.S. in Computer Science, AI Certificate" placeholder="e.g. B.A. in History" />
                <InputField label="GPA" value="4.0 / 4.0" placeholder="e.g. 3.7 / 4.0" />
                <InputField label="Expected Graduation" value="May 2029" placeholder="e.g. May 2025" />
              </div>
            </div>
            {/* Abroad university */}
            <div style={{ borderTop: '1px dashed var(--border)', paddingTop: '1.25rem' }}>
              <span className="section-label mb-2 block">Abroad Placement</span>
              <div className="grid grid-cols-2 gap-4">
                <InputField label="Institution" value="UF International Scholars Program (with EDU Africa)" placeholder="Host university / program" />
                <InputField label="Location" value="Cape Town, South Africa" placeholder="City, Country" />
                <InputField label="Dates" value="May – July 2026" placeholder="e.g. Jan – May 2024" />
                <InputField label="Program / Focus" value="Applied software engineering practicum for a nonprofit client" placeholder="e.g. Mediterranean Studies" />
              </div>
              <Field
                label="Courses taken abroad"
                value="This was a project-based practicum rather than enrolled coursework — my abroad time was spent as a Frontend Developer & AI Chatbot Design Intern for Safe Cities Permaculture (see Work Experience below), not in a classroom."
                placeholder="List the courses you enrolled in, their titles, and a brief description of what you studied in each."
                rows={4}
              />
            </div>
          </div>
        </Block>

        {/* Work & Internship Experience */}
        <Block title="Work & Internship Experience">
          <RepeatEntry
            fields={[
              { label: 'Organization', placeholder: 'Company / org name' },
              { label: 'Role / Title', placeholder: 'Your position' },
              { label: 'Location', placeholder: 'City, Country (or Remote)' },
              { label: 'Dates', placeholder: 'Start – End' },
            ]}
            defaults={[
              { 'Organization': 'Safe Cities', 'Role / Title': 'Frontend Developer and AI Chatbot Design Intern', 'Location': 'Cape Town, South Africa', 'Dates': 'May 2026 – Present' },
              { 'Organization': 'Eagle Harbor Aquatics', 'Role / Title': 'Lead Lifeguard and Swim Instructor', 'Location': 'Fleming Island, FL', 'Dates': 'June 2023 – Present' },
            ]}
          />
          <Field
            label="Key responsibilities & accomplishments"
            value="At Safe Cities: developed frontend features and UI for a community-focused mobile application, implemented an AI-powered chatbot integrating the Anthropic Claude API, built responsive interfaces for auth, scheduling, task management, reporting, and marketplace features, and participated in system testing and iterative improvement throughout the build. At Eagle Harbor Aquatics: 350+ hours managing and training new lifeguards in safety protocols, holding Red Cross Lifeguarding/CPR/AED and Basic Swim Instructor certifications."
            placeholder="Describe your roles and what you achieved. Include any positions held during or connected to your abroad experience."
            rows={5}
          />
        </Block>

        {/* Extracurriculars & Volunteer */}
        <Block title="Extracurriculars & Volunteer Work">
          <RepeatEntry
            fields={[
              { label: 'Organization / Activity', placeholder: 'Name of club, group, or cause' },
              { label: 'Role', placeholder: 'Member, President, Volunteer…' },
              { label: 'Location', placeholder: 'Where was this?' },
              { label: 'Dates', placeholder: 'Start – End' },
            ]}
            defaults={[
              { 'Organization / Activity': 'Women in Computer Science and Engineering (WiCSE)', 'Role': 'Outreach Director', 'Location': 'University of Florida', 'Dates': 'Aug 2025 – Present' },
              { 'Organization / Activity': 'WingHacks Hackathon — PhishHook', 'Role': 'Frontend Developer', 'Location': 'University of Florida', 'Dates': 'May 2026' },
              { 'Organization / Activity': 'Russian Cultural Club', 'Role': 'Member', 'Location': 'University of Florida', 'Dates': 'Jan 2026 – Present' },
            ]}
          />
          <Field
            label="Impact & reflections"
            value="As Outreach Director for WiCSE, I coordinate outreach initiatives and hackathons to grow participation in CS/CE — including recruiting mentors and judges and leading workshops, work that runs in parallel with GatorAI. At WingHacks, I designed the frontend for PhishHook, an anti-phishing website with an interactive multi-level phishing simulator and an AI-generated audio comprehension quiz. These activities, alongside my time abroad, sharpened the same skill: building for people whose needs are different from my own default assumptions."
            placeholder="What did you contribute? How did these activities shape your abroad experience or your professional outlook?"
            rows={4}
          />
        </Block>

        {/* Skills */}
        <Block title="Skills & Competencies">
          <div className="grid grid-cols-2 gap-4">
            <Field label="Languages" value="English (native), Spanish (conversational), Russian (conversational)" placeholder="List languages and proficiency levels (beginner, intermediate, fluent…)" rows={3} />
            <Field label="Technical Skills" value="React Native, Expo Router, Next.js, TypeScript, Tailwind CSS, Node.js/Express, MongoDB, Socket.IO, Anthropic Claude API, Microsoft Azure AI Foundry, RAG pipelines, Google Drive API" placeholder="Software, tools, platforms, research methods…" rows={3} />
            <Field label="Cross-cultural Competencies" value="Communicating technical concepts to non-technical stakeholders across a real language and cultural gap; adapting UI/UX decisions to explicit client feedback rather than my own assumptions; navigating Cape Town's history and context as an outsider building for a local community." placeholder="Skills gained from navigating a new culture, language barrier, unfamiliar systems…" rows={3} />
            <Field label="Soft Skills Developed Abroad" value="Public speaking and presenting under real client stakes (a documented shift from pre-trip anxiety to confidence by the final presentations); resilience when infrastructure didn't work as documented; asking sharper, more specific questions of non-technical collaborators." placeholder="Adaptability, independence, communication, empathy — with specific examples." rows={3} />
          </div>
        </Block>

        {/* Awards & Recognition */}
        <Block title="Awards, Scholarships & Recognition">
          <RepeatEntry
            fields={[
              { label: 'Award / Scholarship', placeholder: 'Name of award' },
              { label: 'Granting Organization', placeholder: 'Who gave it' },
              { label: 'Amount / Value', placeholder: 'e.g. $5,000 or honorary' },
              { label: 'Year', placeholder: 'Year received' },
            ]}
          />
        </Block>
      </div>
    </div>
  )
}
