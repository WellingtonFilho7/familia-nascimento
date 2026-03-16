import { useState } from 'react'
import { story } from '../content/story'

export function HouseSection() {
  const [photoVisible, setPhotoVisible] = useState(true)

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
            <p key={i} className="text-stone-600 leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        {photoVisible && (
          <div className="mb-12 rounded-xl overflow-hidden bg-stone-200 aspect-[4/3] md:aspect-[16/7]">
            <img
              src="/images/casa-1.jpeg"
              alt="A casa em Gurinhém"
              className="w-full h-full object-cover"
              onError={() => setPhotoVisible(false)}
            />
          </div>
        )}

        <p className="text-amber-700 text-xs font-medium tracking-widest uppercase mb-3">
          O que precisamos
        </p>
        <p className="text-stone-600 leading-relaxed">
          {story.needsText}
        </p>

      </div>
    </section>
  )
}
