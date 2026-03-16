import { story } from '../content/story'

export function HouseSection() {
  return (
    <section id="a-casa" className="py-14 px-6 border-t border-stone-100">
      <div className="max-w-2xl mx-auto">

        <p className="text-amber-700 text-xs font-medium tracking-widest uppercase mb-3">
          A mudança
        </p>
        <h2 className="text-stone-800 text-2xl md:text-3xl font-serif leading-snug mb-9">
          {story.houseTitle}
        </h2>

        <div className="space-y-5 mb-10">
          {story.houseParagraphs.map((p, i) => (
            <p key={i} className="text-stone-600 text-base leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        {/* Fotos da casa */}
        <div className="grid grid-cols-2 gap-3 mb-12">
          {[1, 2].map((i) => (
            <div key={i} className="rounded-lg overflow-hidden bg-stone-200 aspect-[4/3]">
              <img
                src={`/images/casa-${i}.jpg`}
                alt=""
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
            </div>
          ))}
        </div>

        {/* O que precisamos */}
        <p className="text-stone-800 font-serif text-xl mb-5">O que precisamos</p>
        <p className="text-stone-600 text-base leading-relaxed">
          {story.needsText}
        </p>

      </div>
    </section>
  )
}
