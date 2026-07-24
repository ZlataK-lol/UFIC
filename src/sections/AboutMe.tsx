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
            <Field
              label="Who I am"
              value="I was born in Moscow, Russia, and moved to the US when I was six. Being born in another country and growing up bilingual made me genuinely curious about cultures and languages, and I find real joy in meeting other people who share my passion for travel. I went into computer science because my father is a software engineer, and watching his passion for the work became my own. He taught me how to problem-solve from a young age, and we started practicing code together early enough that the underlying logic became second nature before I ever took a class in it. Outside of school, I love being in the water and any water sport I can get my hands on."
              placeholder="Tell us about yourself: your background, your interests, what drives you as a person and a technologist."
              rows={4}
            />
            <Field
              label="Why South Africa, why this program"
              value="The program first caught my attention because of its AI and software UX component, but it was the culture that ultimately convinced me to apply. After hearing Dr. Thomas speak about it at a WiCSE meeting, I realized this program would be perfect for me, a chance to grow two of my genuine interests at once, technology and culture, while learning about people whose lives looked nothing like my own."
              placeholder="What drew you to this specific program? Was it a lifelong curiosity, a recommendation, or something you read? What made you say yes?"
              rows={4}
            />
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
                org: 'WingHacks Hackathon: PhishHook',
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
                description: 'Built frontend features and an AI-powered chatbot for a Cape Town nonprofit\'s community app (see Trip & Project Overview). It\'s the internship that shaped most of what\'s on this site, and taught me to design for users with real constraints, not the constraints coursework assumes.',
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
            <Field
              label="My goals before departing"
              value="I was not expecting to learn that much personally on the trip. I was hoping to develop myself professionally and allow my career to take off, however, I underestimated the power of culture and community to be as strong as it was. Africa changed me more personally than it did professionally, however, changes in both of those areas were monumental. I wanted real technical experience I could point to and use to launch my tech career, and I expected that to be the main takeaway. I still got that career boost, but it ended up being the smaller half of what I actually gained from the trip."
              placeholder="What were you hoping to gain: academically, professionally, personally? What did you set out to prove or discover?"
              rows={5}
            />
            <Field
              label="Fears & anxieties going in"
              value="I was nervous to go as I had never truly been that far away from home before. It was scary to think that I would be in a new continent with complete strangers that I had not met before. I was also nervous going into South Africa as you hear a lot of negative things prior to travelling there. However, I gained amazing friends and was able to see the true beauty of Africa for myself and was able to make my own conclusions. I was also nervous about the language barrier and whether I would be able to communicate easily with everyone I met, and I worried about how reliable the internet and technology would be for the kind of work I needed to do. In the end, none of those fears held me back the way I expected them to."
              placeholder="What made you nervous? Language barriers, unfamiliar environments, being far from home, technology culture differences?"
              rows={5}
            />
          </div>
        </div>

        {/* Before & after */}
        <div className="mb-12">
          <span className="section-label mb-5 block">Before & After</span>
          <div className="grid grid-cols-2 gap-0 rounded-lg overflow-hidden" style={{ border: '1px solid var(--border)' }}>
            <div className="p-6" style={{ background: 'var(--card)' }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full" style={{ background: 'var(--muted-foreground)' }} />
                <span style={{ fontFamily: '"Playfair Display", Georgia, serif', color: 'var(--muted-foreground)' }}>Before South Africa</span>
              </div>
              {[
                { label: 'How I saw this trip', value: 'A resume line, a way to sharpen my software and AI skills and give my tech career a head start.' },
                { label: 'How I understood culture and belonging', value: 'Curious about other cultures and languages from growing up bilingual, but still mostly reading about other communities from the outside.' },
                { label: 'What I expected from being far from home', value: 'Nervous about strangers, a new continent, unreliable technology, and everything people warn you about South Africa before you\'ve ever been.' },
              ].map(({ label, value }) => (
                <div key={label} className="mb-4">
                  <label className="section-label">{label}</label>
                  <StaticField className="text-field mt-1" rows={2} value={value} />
                </div>
              ))}
            </div>
            <div className="p-6" style={{ background: 'var(--secondary)' }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }} />
                <span style={{ fontFamily: '"Playfair Display", Georgia, serif', color: 'var(--accent)' }}>After South Africa</span>
              </div>
              {[
                { label: 'How I see this trip now', value: 'The place that taught me culture and community can change you faster and deeper than any curriculum. The career growth was only half of what I actually gained.' },
                { label: 'How I understand culture and belonging now', value: 'Someone who has actually built something for a community she wasn\'t born into, and learned that curiosity has to be paired with humility, not just interest.' },
                { label: 'What being far from home actually taught me', value: 'Genuinely amazed by the friends I made and the beauty I saw for myself, proof that my own conclusions were worth more than anyone else\'s warnings.' },
              ].map(({ label, value }) => (
                <div key={label} className="mb-4">
                  <label className="section-label">{label}</label>
                  <StaticField className="text-field mt-1" rows={2} value={value} />
                </div>
              ))}
            </div>
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
