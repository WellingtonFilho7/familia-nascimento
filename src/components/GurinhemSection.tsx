import { story } from '../content/story'

export function GurinhemSection() {
  return (
    <section id="gurinhém" className="py-14 px-6 border-t border-stone-100">
      <div className="max-w-2xl mx-auto">

        <p className="text-amber-700 text-xs font-medium tracking-widest uppercase mb-3">
          O trabalho
        </p>
        <h2 className="text-stone-800 text-2xl md:text-3xl font-serif leading-snug mb-9">
          {story.gurinhemTitle}
        </h2>

        <div className="space-y-5">
          {story.gurinhemParagraphs.map((p, i) => (
            <p key={i} className="text-stone-600 text-base leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        {/* Grade de fotos da comunidade */}
        <div className="mt-12 grid grid-cols-3 gap-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-lg overflow-hidden bg-stone-200 aspect-square">
              <img
                src={`/images/comunidade-${i}.jpg`}
                alt=""
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
