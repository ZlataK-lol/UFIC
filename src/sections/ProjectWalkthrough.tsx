import { useState } from 'react'
import { DiamondRow, Protea, SAPatternBg, NdebeleFrame } from '../components/SADecor'
import { PhotoSlot } from '../components/PhotoSlot'

function Field({ label, value, placeholder, rows = 3 }: { label: string; value?: string; placeholder: string; rows?: number }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="section-label">{label}</label>
      <textarea className="text-field" rows={rows} placeholder={placeholder} defaultValue={value} />
    </div>
  )
}

const SCREENS = [
  { id: 'home', label: 'Home Screen', file: 'home', text: 'The landing dashboard staff see after logging in — quick links to tasks, documents, the marketplace, and Elsie.' },
  { id: 'auth', label: 'Login / Auth', file: 'auth', text: 'Simple username/password auth with role-based access, so admins and workers see different capabilities.' },
  { id: 'ai-assistant', label: 'Elsie — AI Assistant', file: 'ai-assistant', text: 'The chat interface for Elsie. Answers are grounded in Safe Cities\' own Drive documents, printed word-by-word, with sources cited and full conversation history saved and searchable.' },
  { id: 'tasks', label: 'Task Management', file: 'task-management', text: 'Admins assign tasks to specific workers; each worker only sees their own. Tasks can be reopened, marked overdue, or completed, with notes and images attached.' },
  { id: 'documents', label: 'Document Library', file: 'document-library', text: 'A single synced system between the website and Safe Cities\' Google Drive — add a file to either one and it appears in both, with in-browser viewing for PDFs and Word docs.' },
  { id: 'marketplace', label: 'Marketplace', file: 'marketplace', text: 'Community listings with photos, price ranges, and in-app messaging for buying, selling, and trading within the Safe Cities community.' },
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

      <div className="px-8 py-14 max-w-5xl mx-auto">
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
              <input type="text" className="text-field" defaultValue="AFC Estate (featuring Elsie, the AI Assistant)" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="section-label">Type</label>
              <input type="text" className="text-field" defaultValue="Web app (originally React Native + Expo, rebuilt in HTML/CSS/JS)" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="section-label">Primary Users</label>
              <input type="text" className="text-field" defaultValue="Safe Cities Permaculture program staff and field workers in Elsies River, Cape Town" />
            </div>
          </div>
        </div>

        {/* Problem → Solution */}
        <div className="grid gap-6 mb-12" style={{ gridTemplateColumns: '1fr auto 1fr' }}>
          <div className="sa-card flex flex-col gap-3">
            <span className="section-label">🔍 The Problem</span>
            <textarea
              className="text-field"
              rows={5}
              defaultValue="Safe Cities staff were spending significant time manually searching through Drive folders, PDFs, and meeting notes to answer routine questions — a real bottleneck for field staff who needed timely answers, especially those with limited tech experience or unreliable internet access."
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
            <textarea
              className="text-field"
              rows={5}
              defaultValue="Elsie, a RAG-based AI assistant built into the existing app. Staff ask questions in plain English and get answers grounded in Safe Cities' own documents, with sources cited so answers can be trusted and verified rather than taken on faith."
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
            <PhotoSlot label="Architecture diagram / system diagram" src="/screenshots/architecture-diagram.jpg" height={200} />
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
              <div key={screen.id} className="grid gap-8" style={{ gridTemplateColumns: '1fr 1fr' }}>
                {/* Screenshots */}
                <div className="flex flex-col gap-4">
                  <span className="section-label">{screen.label}</span>
                  <PhotoSlot label={`${screen.label} — screenshot 1`} src={`/screenshots/${screen.file}-1.jpg`} height={260} />
                  <PhotoSlot label={`${screen.label} — screenshot 2`} src={`/screenshots/${screen.file}-2.jpg`} height={200} />
                </div>

                {/* Description */}
                <div className="flex flex-col gap-5 pt-7">
                  <Field
                    label="What this screen does"
                    value={screen.text}
                    placeholder=""
                    rows={4}
                  />
                  <Field
                    label="User journey at this step"
                    placeholder="Walk through the user experience on this screen — what do they see, do, and feel?"
                    rows={3}
                  />
                  <Field
                    label="Technical implementation notes"
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
              <input type="text" className="text-field" style={{ maxWidth: '400px' }} defaultValue="https://afc-estate.vercel.app" />
            </div>
            <div className="mt-4">
              <Field label="Demo narration / script" placeholder="Describe what happens in your demo video, or walk through the demo as if narrating it to a stakeholder." rows={4} />
            </div>
          </div>
        </NdebeleFrame>

        {/* Challenges & learnings */}
        <div className="grid grid-cols-2 gap-6 mb-10">
          <Field label="Biggest technical challenge" value="Discovering mid-project that key Azure AI models weren't available in the South Africa region — we had to redesign the deployment across two regions and later fuse keyword + vector search (Reciprocal Rank Fusion) after finding the assistant missed answers that existed but ranked outside the top results by meaning alone." placeholder="" rows={5} />
          <Field label="What you'd do differently" value="Migrate off the original Google Gemini + Render setup earlier — the cold-start warmup delays and black-box ranking cost real usability points in testing before we moved to Azure." placeholder="" rows={5} />
          <Field label="Most proud of" value="That the assistant is literally named Elsie, after one of our own early user personas — and that fixing the retrieval (hybrid search) meant she could finally answer real staff questions like ones about worm-composting practices that vector search alone had missed." placeholder="" rows={4} />
          <Field label="Impact after the program" value="Handed off with recorded instructional videos and documentation so Safe Cities staff could run the platform independently, with the AI service live on Azure (grant-funded, so no ongoing cost to the nonprofit) rather than dependent on our continued involvement." placeholder="" rows={4} />
        </div>
      </div>
    </div>
  )
}
