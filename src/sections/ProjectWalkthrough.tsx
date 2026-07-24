import { useState } from 'react'
import { DiamondRow, Protea, SAPatternBg, NdebeleFrame } from '../components/SADecor'
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

const SCREENS = [
  {
    id: 'home',
    label: 'Home Screen',
    file: 'home',
    text: 'The public landing page for Safe Cities: a hero banner introducing the Elsies River permaculture program, a "Who We Are" section, and six programme cards covering skills training, permaculture, youth leadership, wellness, and media.',
    journey: 'This is the page anyone lands on first, logged in or not. Scroll past the hero banner to read who Safe Cities is and what each of the six programmes actually covers, then use "Explore our programmes" or "Visit the marketplace" to jump straight into the site instead of hunting through the nav bar.',
    technical: 'Built as a static marketing-style page that shares the same nav shell as the rest of the app. The six programme cards are just data mapped into one card component, so adding a seventh programme later means adding one object to a list, not touching the layout.',
  },
  {
    id: 'auth',
    label: 'Login / Auth',
    file: 'auth',
    text: 'A username/password login gate in front of the app, with a password reset link and an option to create a new account for staff who don\'t have one yet.',
    journey: 'Type in your username and password (there\'s a Show toggle on the password field so you can check it before submitting) and hit Log in. Once you\'re in, your account details live under Profile in the top nav, where you can update your username, email, or password without logging back out first.',
    technical: 'Plain form-based auth, no third-party login. Once you\'re authenticated, that same account object drives the "Hi, [name]" greeting and Log out button that follow you across every other screen.',
  },
  {
    id: 'ai-assistant',
    label: 'Elsie: AI Assistant',
    file: 'ai-assistant',
    text: 'Elsie\'s chat interface: ask a question in plain English and get an answer pulled from Safe Cities\' actual uploaded documents, with the source file cited underneath so you can go check it yourself.',
    journey: 'Type a question the way you\'d text a person, like "tell me about worms" or "what animals are found on the farm." Elsie answers in a few seconds and tags which document she pulled it from at the bottom. Past conversations sit in the sidebar under Recents so you can pick one back up later, you can star the useful ones under Favorites, start fresh with + New chat, or check "Include my tasks" if you want her factoring your assigned tasks into the answer.',
    technical: 'The refusal behavior is as deliberate as the correct answers: when Elsie doesn\'t have a document that answers something, like a task-assignment question with no matching source, she says so directly and lists what she does have on file instead of guessing.',
  },
  {
    id: 'tasks',
    label: 'Task Management',
    file: 'task-management',
    text: 'The farm\'s task list: every task shows who it\'s assigned to, when it\'s due, and whether it\'s open, completed, or overdue, and admins can filter by status or by user.',
    journey: 'Click + New task, name it, set a due date and time, assign it to yourself or someone else, and add a note if there\'s context worth leaving, like why something\'s running late. Once it\'s live, anyone can Reschedule, Edit, mark it Complete, or Delete it right from the list; completed tasks move to their own tab, where they can be Reopened if something needs redoing.',
    technical: 'Open, Completed, and Overdue are all just different filtered views over the same task data, not separate pages, so editing a task in one place updates it everywhere it shows up.',
  },
  {
    id: 'documents',
    label: 'Document Library',
    file: 'document-library',
    text: 'The shared document library, organized into folders like Animals, Composting and Worms, and Plants, where staff upload the PDFs and Word docs that Elsie reads from.',
    journey: 'Click into a folder, like Composting and Worms, to see what\'s inside, then View or Download any file, or hit Upload file to add a new one. The AI button next to a file or folder tells Elsie to actually read it so she can start answering from it, and Refresh AI re-syncs everything if documents changed since she last checked.',
    technical: 'This library is the other half of the Elsie feature: whatever gets uploaded and marked for the assistant here is exactly what she\'s allowed to cite from, so keeping folders organized isn\'t just tidiness, it directly controls what she does and doesn\'t know.',
  },
  {
    id: 'marketplace',
    label: 'Marketplace',
    file: 'marketplace',
    text: 'A community marketplace where staff and workers post things for sale or trade, like firewood, produce, or even farm excursions, each with a photo and a price in Rand.',
    journey: 'Browse or search listings by title or location, and narrow results with the Min R / Max R price filters. To sell something yourself, click + Post a listing, add a title, price, location, a short description, and a required photo, then hit Post listing. Messages is where buyer and seller conversations about a listing actually happen.',
    technical: 'Listings require a photo before they\'ll post, which cuts down on low-effort or spam posts, and the My listings / Archived tabs let a seller manage their own posts separately from browsing everyone else\'s.',
  },
]

export default function ProjectWalkthrough() {
  const [activeScreen, setActiveScreen] = useState('home')

  return (
    <div style={{ backgroundColor: 'var(--card)' }}>
      {/* Header */}
      <div
        className="relative overflow-hidden py-16 px-8 text-center"
        style={{ background: 'linear-gradient(135deg, var(--muted) 0%, var(--secondary) 60%, var(--background) 100%)' }}
      >
        <SAPatternBg />
        <div className="relative z-10">
          <DiamondRow count={9} />
          <h2
            className="mt-4 mb-2"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: 'var(--foreground)' }}
          >
            Application <em style={{ color: 'var(--accent)' }}>Walkthrough</em>
          </h2>
          <p className="text-sm" style={{ color: 'var(--muted-foreground)', maxWidth: '50ch', margin: '0 auto' }}>
            A screen-by-screen tour of the application we designed and built in South Africa.
          </p>
        </div>
      </div>

      <div className="px-8 py-14 max-w-7xl mx-auto">
        {/* Project identity */}
        <div
          className="p-6 rounded-lg mb-12 relative overflow-hidden"
          style={{ background: 'var(--secondary)', border: '1px solid var(--border)' }}
        >
          <div className="absolute top-3 right-3 opacity-10"><Protea size={100} opacity={1} /></div>
          <span className="section-label mb-4 block">Project Identity</span>
          <div className="grid grid-cols-3 gap-5 relative z-10">
            <div className="flex flex-col gap-1.5">
              <label className="section-label">App Name</label>
              <StaticField value="AFC Estate (featuring Elsie, the AI Assistant)" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="section-label">Type</label>
              <StaticField value="Web app (originally React Native + Expo, rebuilt in HTML/CSS/JS)" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="section-label">Primary Users</label>
              <StaticField value="Safe Cities Permaculture program staff and field workers in Elsies River, Cape Town" />
            </div>
          </div>
        </div>

        {/* Problem → Solution */}
        <div className="grid gap-6 mb-12" style={{ gridTemplateColumns: '1fr auto 1fr' }}>
          <div className="sa-card flex flex-col gap-3">
            <span className="section-label">🔍 The Problem</span>
            <StaticField
              rows={5}
              value="Safe Cities staff were losing real time manually searching through Drive folders, PDFs, and meeting notes to answer routine questions, a genuine bottleneck for field staff who needed timely answers, especially those with limited tech experience or unreliable internet access."
            />
          </div>
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center gap-1">
              {['→', '→', '→'].map((a, i) => (
                <span key={i} style={{ color: 'var(--sa-gold, #c8973a)', fontSize: '1.5rem' }}>{a}</span>
              ))}
            </div>
          </div>
          <div
            className="flex flex-col gap-3 p-5 rounded"
            style={{ background: 'var(--card)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent)' }}
          >
            <span className="section-label">💡 The Solution</span>
            <StaticField
              rows={5}
              value="Elsie, a RAG-based AI assistant built into the existing app. Staff ask questions in plain English and get answers grounded in Safe Cities' own documents, with sources cited so answers can be checked and trusted rather than taken on faith."
            />
          </div>
        </div>

        {/* Architecture / Tech stack */}
        <div className="mb-12">
          <span className="section-label mb-4 block">Technical Architecture</span>
          <div className="grid grid-cols-2 gap-6">
            <Field label="Frontend" value="Originally React Native + Expo; later rebuilt from scratch in plain HTML/CSS/JS for speed, even on low-end phones." rows={3} placeholder="" />
            <Field label="Backend / API" value="Node.js/Express for the main app; a separate Python/FastAPI service for AI chat, summarization, and reporting endpoints." rows={3} placeholder="" />
            <Field label="Key integrations" value="Google Drive API (document corpus + email-to-Drive automation), Microsoft Azure AI Foundry (DeepSeek-V4-Flash + text-embedding-3-small), Azure AI Search (hybrid vector + keyword retrieval)." rows={3} placeholder="" />
            <Field label="Deployment" value="MongoDB Atlas for data, hosted app on Vercel, AI service migrated from Google/Render to Microsoft Azure for reliability and to remove cold-start warmup delays." rows={3} placeholder="" />
          </div>
          <div className="mt-5">
            <PhotoSlot label="Architecture diagram / system diagram" src="/screenshots/architecture-diagram.jpg" aspectRatio="21 / 9" fit="contain" />
          </div>
        </div>

        {/* Screen-by-screen walkthrough */}
        <div className="mb-12">
          <span className="section-label mb-2 block">Screen-by-Screen Tour</span>
          <p className="text-sm mb-6" style={{ color: 'var(--muted-foreground)' }}>
            Click a screen to add screenshots and describe it in detail.
          </p>

          {/* Screen tabs */}
          <div className="flex gap-2 flex-wrap mb-6">
            {SCREENS.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveScreen(s.id)}
                className="text-xs px-3 py-2 rounded transition-colors"
                style={{
                  background: activeScreen === s.id ? 'var(--accent)' : 'var(--secondary)',
                  color: activeScreen === s.id ? 'white' : 'var(--muted-foreground)',
                  border: '1px solid var(--border)',
                  cursor: 'pointer',
                }}
              >
                {s.label}
              </button>
            ))}
          </div>

          {SCREENS.map((screen) => (
            activeScreen === screen.id && (
              <div key={screen.id} className="flex flex-col gap-6">
                <span className="section-label">{screen.label}</span>

                {/* Screenshots: full width, real aspect ratio, nothing cropped or stretched */}
                <div className="grid gap-4" style={{ gridTemplateColumns: '1fr 1fr' }}>
                  <PhotoSlot label={`${screen.label}: screenshot 1`} src={`/screenshots/${screen.file}-1.jpg`} aspectRatio="2 / 1" fit="contain" />
                  <PhotoSlot label={`${screen.label}: screenshot 2`} src={`/screenshots/${screen.file}-2.jpg`} aspectRatio="2 / 1" fit="contain" />
                </div>

                {/* Description */}
                <div className="grid gap-5" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
                  <Field
                    label="What this screen does"
                    value={screen.text}
                    placeholder=""
                    rows={4}
                  />
                  <Field
                    label="User journey at this step"
                    value={screen.journey}
                    placeholder="Walk through the user experience on this screen: what do they see, do, and feel?"
                    rows={3}
                  />
                  <Field
                    label="Technical implementation notes"
                    value={screen.technical}
                    placeholder="Any notable implementation choices, challenges solved, or interesting technical details for this screen?"
                    rows={3}
                  />
                </div>
              </div>
            )
          ))}
        </div>

        {/* Demo video placeholder */}
        <NdebeleFrame className="mb-12">
          <div className="py-8 px-6">
            <span className="section-label mb-3 block">Demo Video / Live Link</span>
            <div
              className="rounded flex flex-col items-center justify-center gap-3 py-12"
              style={{ background: 'var(--secondary)', border: '1px dashed var(--border)' }}
            >
              <span style={{ fontSize: '2.5rem' }}>▶</span>
              <span className="text-sm" style={{ color: 'var(--muted-foreground)' }}>Paste a YouTube / Vimeo link or describe your demo</span>
              <StaticField value="https://afc-estate.vercel.app" style={{ maxWidth: '400px' }} />
            </div>
            <div className="mt-4">
              <Field label="Demo narration / script" placeholder="Describe what happens in your demo video, or walk through the demo as if narrating it to a stakeholder." rows={4} />
            </div>
          </div>
        </NdebeleFrame>

        {/* Challenges & learnings */}
        <div className="grid grid-cols-2 gap-6 mb-10">
          <Field label="Biggest technical challenge" value="Discovering mid-project that key Azure AI models weren't available in the South Africa region meant redesigning the deployment across two regions with almost no notice and no clean playbook for it. Later, usability testing surfaced a second, subtler problem: the assistant was missing answers that existed in Safe Cities' documents but ranked outside the top results by semantic similarity alone. Fixing that meant learning and implementing Reciprocal Rank Fusion to combine keyword and vector search, which taught me that a working retrieval pipeline and a genuinely useful one are two different engineering problems." placeholder="" rows={5} />
          <Field label="What you'd do differently" value="Migrate off the original Google Gemini + Render setup earlier. The cold-start warmup delays and black-box ranking behavior quietly cost us real usability points in testing, and in hindsight the signs were there weeks before we finally moved to Azure. The lesson: when infrastructure keeps fighting you, that's data, not bad luck. Treat repeated friction as a signal to re-evaluate the stack, not a problem to keep working around." placeholder="" rows={5} />
          <Field label="Most proud of" value="Securing the Microsoft Azure AI Foundry grant: $2,000 in AI credits that keep Elsie running for Safe Cities at no ongoing cost to the nonprofit, long after we've left. That's proud of in a different way than a clever feature: it's the one thing on this project that keeps paying off after the handoff. I'm also proud that the assistant is literally named Elsie, after one of our own early user personas, and that fixing retrieval (hybrid search) meant she could finally answer real staff questions, like ones about worm-composting practices, that vector search alone had quietly missed." placeholder="" rows={4} />
          <Field label="Impact after the program" value="Handed off with recorded instructional videos and full documentation so Safe Cities staff could run the platform independently, not dependent on us being reachable after we left. The AI service stays live on Azure under grant funding, so there's no ongoing cost to the nonprofit. That constraint shaped the whole handoff: building something that works without its builders in the room is a harder goal than building something that works in a demo, and it's the standard I'd hold myself to on any project now." placeholder="" rows={4} />
        </div>
      </div>
    </div>
  )
}
