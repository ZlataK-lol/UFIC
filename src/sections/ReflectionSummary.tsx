import { DiamondRow, Protea, AfricanSun, SAPatternBg, NdebeleFrame, ZuluShield } from '../components/SADecor'
import { PhotoSlot } from '../components/PhotoSlot'
import { StaticField } from '../components/StaticField'

function Field({ label, value, placeholder, rows = 4 }: { label: string; value?: string; placeholder: string; rows?: number }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="section-label">{label}</label>
      <StaticField rows={rows} placeholder={placeholder} value={value} />
    </div>
  )
}

export default function ReflectionSummary() {
  return (
    <div style={{ backgroundColor: 'var(--background)' }}>
      {/* Header */}
      <div
        className="relative overflow-hidden py-20 px-8 text-center"
        style={{ background: 'linear-gradient(135deg, var(--secondary) 0%, var(--background) 50%, var(--muted) 100%)' }}
      >
        <SAPatternBg />
        <div className="absolute top-6 left-8 opacity-25"><AfricanSun size={90} opacity={1} /></div>
        <div className="absolute top-6 right-8 opacity-25"><ZuluShield size={60} opacity={1} /></div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-15"><Protea size={100} opacity={1} /></div>

        <div className="relative z-10">
          <DiamondRow count={9} />
          <h2
            className="mt-5 mb-3"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(2rem, 5vw, 3.25rem)', color: 'var(--foreground)', lineHeight: 1.15 }}
          >
            Reflection <em style={{ color: 'var(--accent)' }}>Summary</em>
          </h2>
          <p
            className="mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--muted-foreground)', maxWidth: '42ch', margin: '0 auto 1.5rem' }}
          >
            "Ubuntu ngumuntu ngabantu" — a person is a person through other people.
          </p>
          <DiamondRow count={9} />
        </div>
      </div>

      <div className="px-8 py-16 max-w-5xl mx-auto">
        {/* Opening reflection */}
        <div className="grid gap-10 mb-14" style={{ gridTemplateColumns: '1fr 1fr' }}>
          <div className="flex flex-col gap-5 justify-center">
            <span className="section-label">The Full Picture</span>
            <Field
              label="Reflection summary"
              value="I arrived in Cape Town having already interviewed our client remotely, but it was the six weeks on the ground — kickoff to final presentation — where the real transformation happened. I went from setting up a project environment someone else had started, to redesigning cloud infrastructure around constraints no documentation had warned me about, to standing in front of the client on July 12th explaining a platform I was genuinely proud of. Along the way, learning Cape Town's own history reframed how I saw the community I was building for, and taught me to lead with listening instead of assumption. By the final week, public speaking had gone from something I dreaded to something I could do with real confidence — not because the nerves disappeared, but because I'd done it often enough to trust myself through them. What I keep coming back to is that the technical growth and the personal growth weren't separate threads: learning to redesign infrastructure around constraints I didn't choose is the same skill as learning to be at ease in a room I didn't choose to be nervous in. I came home to my own version of reverse culture shock — proof, more than anything else could be, that the place, and the work, had actually changed me."
              placeholder="Write your complete reflection on the South Africa experience — who you were when you arrived, what you encountered, and who you became. This is your capstone statement."
              rows={10}
            />
          </div>
          <div className="flex flex-col gap-4">
            <PhotoSlot label="A photo that represents your transformation" src="/photos/transformation.jpg" height={280} />
            <StaticField
              rows={2}
              placeholder="Why did you choose this image to represent your journey?"
            />
          </div>
        </div>

        {/* Key themes */}
        <div className="mb-12">
          <span className="section-label mb-5 block">Core Themes of My Experience</span>
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                theme: 'Technology & Humanity',
                icon: '💻',
                text: 'The most useful thing I built wasn\'t the flashiest feature — it was making Elsie answer the specific question a non-technical staff member actually asked, instead of dumping every loosely related document at them. Good technology in this context meant subtracting friction for people with limited tech experience and unreliable connectivity, not adding features nobody asked for. I learned to measure a feature\'s value by how much friction it removed for the person actually using it, not by how impressive it looked in a demo.',
              },
              {
                theme: 'Cultural Humility',
                icon: '🌍',
                text: 'Learning Cape Town\'s history — Apartheid, and the history of slavery before it — early in the program meant I never approached Safe Cities as a blank slate. Cultural humility, to me now, isn\'t a feeling; it\'s a discipline of doing that homework before you assume you understand the community you\'re building for, and staying willing to be corrected once you\'re inside it.',
              },
              {
                theme: 'Collaboration Across Difference',
                icon: '🤝',
                text: 'Our client wasn\'t deeply technical, which meant collaboration meant translation — turning vague feature requests into specific, buildable acceptance criteria without ever making the client feel talked down to. I got better at this by treating every vague request as an unanswered question rather than a finished spec, and asking one more clarifying question than felt strictly necessary. That skill mattered as much as anything I wrote in code.',
              },
              {
                theme: 'Ubuntu — Community & Interdependence',
                icon: '☀️',
                text: 'Safe Cities exists because a community decided to invest in itself. Building their tools reminded me, concretely and repeatedly, that individual technical achievement means very little without a community it actually serves — Elsie only matters because Safe Cities\' staff and workers do. That\'s the frame I want to carry into every project after this one: ask who the work serves before asking how clever the solution is.',
              },
            ].map(({ theme, icon, text }) => (
              <div
                key={theme}
                className="p-5 rounded-lg"
                style={{ background: 'var(--card)', border: '1px solid var(--border)', borderTop: '3px solid var(--accent)' }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span>{icon}</span>
                  <span style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '1rem', color: 'var(--foreground)' }}>
                    {theme}
                  </span>
                </div>
                <StaticField rows={5} value={text} />
              </div>
            ))}
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
                ['How I viewed global development', 'I thought technology solutions were...'],
                ['My understanding of South Africa', 'Before I went, I assumed...'],
                ['My sense of self as a technologist', 'I saw myself as a developer who...'],
              ].map(([label, placeholder]) => (
                <div key={label as string} className="mb-4">
                  <label className="section-label">{label as string}</label>
                  <StaticField className="text-field mt-1" rows={2} placeholder={placeholder as string} />
                </div>
              ))}
            </div>
            <div className="p-6" style={{ background: 'var(--secondary)' }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }} />
                <span style={{ fontFamily: '"Playfair Display", Georgia, serif', color: 'var(--accent)' }}>After South Africa</span>
              </div>
              {[
                ['How I now view global development', 'I now understand that technology should...'],
                ['My understanding of South Africa', 'Now I know that South Africa is...'],
                ['My sense of self as a technologist', 'I now see myself as someone who...'],
              ].map(([label, placeholder]) => (
                <div key={label as string} className="mb-4">
                  <label className="section-label">{label as string}</label>
                  <StaticField className="text-field mt-1" rows={2} placeholder={placeholder as string} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Closing statement */}
        <NdebeleFrame>
          <div className="py-8 px-6 text-center">
            <Protea size={48} opacity={0.5} />
            <span className="section-label mb-3 block mt-2">Closing Statement</span>
            <StaticField
              className="text-field text-center"
              rows={6}
              style={{ fontSize: '1.0625rem', fontStyle: 'italic', fontFamily: '"Playfair Display", Georgia, serif', maxWidth: '600px', margin: '0 auto' }}
              value="This is a chapter in my life I will never forget. From the amazing experiences to the people. Technology in America is focused on fancy features and corporations. But in South Africa, technology is rooted in people and usability. The difference between the two is astronomical. I felt as though I was making a true difference, I was making changes that mattered. I got to see my program make actual improvements to the community, and I am forever grateful for the experience I had and for the knowledge I gained."
              placeholder="Your final words — a quote, a truth you carry, or simply how you choose to close this chapter of your story."
            />
            <div className="mt-5">
              <DiamondRow count={9} />
            </div>
          </div>
        </NdebeleFrame>
      </div>
    </div>
  )
}
