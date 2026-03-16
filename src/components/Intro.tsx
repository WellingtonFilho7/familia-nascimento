import { campaign } from '../config/campaign'
import { story } from '../content/story'

export function Intro() {
  return (
    <section className="pt-16 pb-12 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Foto da família */}
        <div className="mb-10 rounded-xl overflow-hidden bg-stone-200 aspect-[4/3] md:aspect-[16/7]">
          <img
            src="/images/familia.jpg"
            alt="Wellington, Dyanna e os filhos"
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
        </div>

        <p className="text-amber-700 text-xs font-medium tracking-widest uppercase mb-3">
          {campaign.location}
        </p>

        <h1 className="text-stone-800 text-3xl md:text-4xl font-serif leading-snug mb-8">
          {campaign.coupleName}
        </h1>

        <div className="space-y-5">
          {story.opening.map((p, i) => (
            <p key={i} className="text-stone-600 text-lg leading-relaxed">
              {p}
            </p>
          ))}
        </div>

      </div>
    </section>
  )
}
