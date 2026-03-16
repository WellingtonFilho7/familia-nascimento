import { QRCodeSVG } from 'qrcode.react'
import { campaign } from '../config/campaign'
import { story } from '../content/story'

export function SupportSection() {
  const whatsappUrl = `https://wa.me/${campaign.whatsappNumber}?text=${encodeURIComponent(campaign.whatsappMessage)}`

  return (
    <section id="como-ajudar" className="py-14 px-6 border-t border-stone-100">
      <div className="max-w-2xl mx-auto">

        <p className="text-amber-700 text-xs font-medium tracking-widest uppercase mb-3">
          Como ajudar
        </p>

        <p className="text-stone-600 text-base leading-relaxed mb-10 max-w-xl">
          {story.inviteText}
        </p>

        <div className="grid md:grid-cols-2 gap-5 mb-14">

          {/* Pix */}
          <div className="border border-stone-200 rounded-xl p-6">
            <p className="text-stone-700 text-sm font-medium mb-5">Pix</p>

            <div className="flex justify-center mb-5">
              <div className="bg-white border border-stone-100 rounded-lg p-3">
                <QRCodeSVG
                  value={`PIX:${campaign.pixKey}`}
                  size={140}
                  level="M"
                />
              </div>
            </div>

            <div className="bg-stone-50 rounded-lg px-4 py-3">
              <p className="text-stone-400 text-xs mb-1">Chave CPF</p>
              <p className="text-stone-700 font-mono text-sm">{campaign.pixKey}</p>
              <p className="text-stone-400 text-xs mt-2">{campaign.pixName}</p>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="border border-stone-200 rounded-xl p-6 flex flex-col justify-between gap-6">
            <div>
              <p className="text-stone-700 text-sm font-medium mb-3">WhatsApp</p>
              <p className="text-stone-500 text-sm leading-relaxed">
                Se quiser conversar antes, tirar dúvidas ou saber mais sobre o que está acontecendo em Gurinhém.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center border border-stone-300 hover:border-stone-500 text-stone-600 hover:text-stone-900 text-sm py-3 rounded-lg transition-colors"
            >
              Mandar mensagem
            </a>
          </div>

        </div>

        {/* Fechamento */}
        <div className="border-t border-stone-100 pt-10 space-y-1">
          <p className="text-stone-500 text-sm">{story.closing}</p>
          <p className="text-stone-500 text-sm italic">{story.signature}</p>
        </div>

      </div>
    </section>
  )
}
