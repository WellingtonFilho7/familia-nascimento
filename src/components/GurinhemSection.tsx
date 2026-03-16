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
            <p key={i} className="text-stone-600 leading-relaxed">
              {p}
            </p>
          ))}
        </div>

      </div>
    </section>
  )
}
