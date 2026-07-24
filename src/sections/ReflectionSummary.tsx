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
            "Ubuntu ngumuntu ngabantu": a person is a person through other people.
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
              value="I arrived in Cape Town having already interviewed our client remotely, but it was the six weeks on the ground, kickoff to final presentation, where the real transformation happened. I went from setting up a project environment someone else had started, to redesigning cloud infrastructure around constraints no documentation had warned me about, to standing in front of the client on July 12th explaining a platform I was genuinely proud of. Along the way, learning Cape Town's own history reframed how I saw the community I was building for, and taught me to lead with listening instead of assumption. By the final week, public speaking had gone from something I dreaded to something I could do with real confidence, not because the nerves disappeared, but because I'd done it often enough to trust myself through them. What I keep coming back to is that the technical growth and the personal growth weren't separate threads: learning to redesign infrastructure around constraints I didn't choose is the same skill as learning to be at ease in a room I didn't choose to be nervous in. I came home to my own version of reverse culture shock, proof, more than anything else could be, that the place, and the work, had actually changed me."
              placeholder="Write your complete reflection on the South Africa experience, who you were when you arrived, what you encountered, and who you became. This is your capstone statement."
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
                text: 'The most useful thing I built wasn\'t the flashiest feature. It was making Elsie answer the specific question a non-technical staff member actually asked, instead of dumping every loosely related document at them. Good technology in this context meant subtracting friction for people with limited tech experience and unreliable connectivity, not adding features nobody asked for. I learned to measure a feature\'s value by how much friction it removed for the person actually using it, not by how impressive it looked in a demo.',
              },
              {
                theme: 'Cultural Humility',
                icon: '🌍',
                text: 'Learning Cape Town\'s history, including Apartheid and the history of slavery before it, early in the program meant I never approached Safe Cities as a blank slate. Cultural humility, to me now, isn\'t a feeling; it\'s a discipline of doing that homework before you assume you understand the community you\'re building for, and staying willing to be corrected once you\'re inside it.',
              },
              {
                theme: 'Collaboration Across Difference',
                icon: '🤝',
                text: 'Our client wasn\'t deeply technical, which meant collaboration meant translation: turning vague feature requests into specific, buildable acceptance criteria without ever making the client feel talked down to. I got better at this by treating every vague request as an unanswered question rather than a finished spec, and asking one more clarifying question than felt strictly necessary. That skill mattered as much as anything I wrote in code.',
              },
              {
                theme: 'Ubuntu: Community & Interdependence',
                icon: '☀️',
                text: 'Safe Cities exists because a community decided to invest in itself. Building their tools reminded me, concretely and repeatedly, that individual technical achievement means very little without a community it actually serves: Elsie only matters because Safe Cities\' staff and workers do. That\'s the frame I want to carry into every project after this one: ask who the work serves before asking how clever the solution is.',
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
          <div className="rounded-lg overflow-hidden" style={{ border: '1px solid var(--border)' }}>
            {/* Column headers */}
            <div className="grid grid-cols-2">
              <div className="px-6 pt-6 pb-2 flex items-center gap-2" style={{ background: 'var(--card)' }}>
                <div className="w-2 h-2 rounded-full" style={{ background: 'var(--muted-foreground)' }} />
                <span style={{ fontFamily: '"Playfair Display", Georgia, serif', color: 'var(--muted-foreground)' }}>Before South Africa</span>
              </div>
              <div className="px-6 pt-6 pb-2 flex items-center gap-2" style={{ background: 'var(--secondary)' }}>
                <div className="w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }} />
                <span style={{ fontFamily: '"Playfair Display", Georgia, serif', color: 'var(--accent)' }}>After South Africa</span>
              </div>
            </div>

            {/* Rows: before/after share a grid row so both sides line up */}
            {[
              {
                label: 'global development',
                before: 'Before this trip, I honestly hadn\'t thought much about global development at all. When I did think about technology and helping people, I pictured impressive apps and clever features, the kind of thing that looks good in a portfolio. I assumed you built the tool first and figured out if people actually needed it later, without thinking much about who was on the other end using it.',
                after: 'Now I actually understand what human-centered technology means, instead of just having heard the phrase. Elsie only worked once we stopped designing around what looked impressive and started designing around what Safe Cities staff actually needed. I don\'t see global development as charity anymore. I think it\'s necessary work, and helping people, wherever they are, should be something more of us make time for.',
              },
              {
                label: 'my understanding of South Africa',
                before: 'Before I went, most of what I knew about South Africa came from the warnings people give you before you travel there. I knew a little about Apartheid from school, but that was about it. I didn\'t know much about the culture, the food, the people, or how the history actually shaped daily life now. My picture of the country was mostly made up of other people\'s fears, not anything I\'d actually looked into myself.',
                after: 'Now I know South Africa has a depth and resilience that none of the warnings I heard before I left came close to describing. The stereotypes I showed up with mostly fell apart within the first couple of weeks, once I actually met people and saw how they lived, worked, and supported each other. I understand its history better too, and how much it still shapes the country today in ways that aren\'t always obvious from the outside.',
              },
              {
                label: 'my sense of self as a technologist',
                before: 'I saw myself as a developer who was good at building things fast and shipping features. Success, to me, meant a working app and a clean interface. I hadn\'t really stopped to ask whether the people using what I built actually needed it, or whether I was solving a problem they had versus a problem I just thought sounded interesting.',
                after: 'I see myself differently now. I still care about building things well, but I measure that by whether it actually helps the people using it, not by how impressive it looks. This trip also taught me how much I value community, and I think that\'s true for technology too: it should serve the people around it, not just the person who built it.',
              },
            ].map(({ label, before, after }) => (
              <div key={label} className="grid grid-cols-2">
                <div className="px-6 pb-6" style={{ background: 'var(--card)' }}>
                  <label className="section-label">Before: {label}</label>
                  <StaticField className="text-field mt-1" rows={3} value={before} />
                </div>
                <div className="px-6 pb-6" style={{ background: 'var(--secondary)' }}>
                  <label className="section-label">After: {label}</label>
                  <StaticField className="text-field mt-1" rows={3} value={after} />
                </div>
              </div>
            ))}
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
              placeholder="Your final words: a quote, a truth you carry, or simply how you choose to close this chapter of your story."
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
