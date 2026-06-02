import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Over ons', href: '#about' },
  { label: 'Aanbod', href: '#offers' },
  { label: 'Inbreng', href: '#inbreng' },
  { label: 'Ophaalservice', href: '#ophaalservice' },
  { label: 'Openingstijden', href: '#hours' },
  { label: 'Contact', href: '#contact' }
]

const categories = [
  { title: 'Meubels', text: 'Van stoelen en tafels tot kasten met een karaktervolle tweede kans.' },
  { title: 'Lampen', text: 'Sfeervolle verlichting voor elk interieur, vintage en modern gecombineerd.' },
  { title: 'Woondecoratie', text: 'Decoratieve vondsten voor warmte, stijl en persoonlijkheid thuis.' },
  { title: 'Vazen & bloemen', text: 'Unieke vazen, potten en groene styling voor een fijn thuisgevoel.' },
  { title: 'Schilderijen & lijsten', text: 'Kunst en lijsten met karakter voor een persoonlijk interieur.' },
  { title: 'Curiosa', text: 'Kleurrijke schatten en bijzondere accessoires voor curiosa liefhebbers.' },
  { title: 'Vintage vondsten', text: 'Authentieke pareltjes met een verhaal die sfeer toevoegen.' },
  { title: 'Kleine huishoudelijke items', text: 'Praktische accessoires voor een stijlvol en duurzaam huishouden.' }
]

const uspItems = [
  { title: 'Unieke vintage vondsten', icon: '🕰️', detail: 'Altijd bijzondere items met een verhaal.' },
  { title: 'Betaalbare meubels & decoratie', icon: '🌿', detail: 'Duurzaam shoppen zonder hoge prijzen.' },
  { title: 'Lokale kringloopwinkel', icon: '📍', detail: 'Gevestigd in Halfweg met een warm buurtgevoel.' },
  { title: 'Snel contact via WhatsApp', icon: '💬', detail: 'Direct bereikbaar voor actuele voorraad en vragen.' }
]

const trustItems = [
  { title: 'Wisselend aanbod', text: 'Elke week nieuwe vondsten waardoor het altijd de moeite waard blijft om terug te komen.' },
  { title: 'Betaalbare prijzen', text: 'Kwaliteit en karakter die passen binnen een vriendelijk budget.' },
  { title: 'Persoonlijke service', text: 'Een warm welkom, eerlijk advies en aandacht voor uw wensen.' },
  { title: 'Lokale winkel met karakter', text: 'Een vertrouwde plek in Halfweg met een herkenbare eigen sfeer.' }
]

const pickupItems = [
  { title: 'Spullen ophalen aan huis', text: 'Voor meubels, decoratie en bruikbare tweedehands items.' },
  { title: 'Woning leegruimen', text: 'Hulp bij het leeghalen van woningen, kamers, schuren of opslag.' },
  { title: 'Eerst even overleggen', text: 'Stuur foto’s via WhatsApp, dan kijken wij samen wat mogelijk is.' }
]

const galleryImages = [
  { src: '/images/Hero-bloemen.jpeg', alt: 'Vazen en bloemen - vintage woonaccessoires bij Kringloop Het Pareltje in Amsterdam' },
  { src: '/images/Hero-woonkamer.jpeg', alt: 'Tweedehands meubels en woonkamerinrichting bij Kringloop Het Pareltje in Amsterdam' },
  { src: '/images/Over-ons-kroonluchter.jpeg', alt: 'Kroonluchter en verlichting - unieke verlichting bij Kringloop Het Pareltje' },
  { src: '/images/Overons-glaswerk.jpeg', alt: 'Decoratief glaswerk en servies bij Kringloop Het Pareltje' }
]

const whatsappLink =
  'https://wa.me/31659115178?text=Hallo%20Kringloop%20Het%20Pareltje,%20ik%20heb%20een%20vraag.'
const phoneLink = 'tel:+31659115178'
const emailLink = 'mailto:kringloophetpareltje2026@hotmail.com'
const mapsLink = 'https://www.google.com/maps/search/?api=1&query=Amsterdamsestraatweg%208A%201165MA%20Halfweg'
const mapsEmbed =
  'https://www.google.com/maps?q=Amsterdamsestraatweg+8A+1165MA+Halfweg&output=embed'

const socialLinks = [
  {
    label: 'Facebook',
    href: '#',
    aria: 'Facebook van Kringloop Het Pareltje',
    className: 'social-button--facebook',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.9h2.54V9.8c0-2.5 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34v6.99C18.34 21.12 22 16.99 22 12z" />
      </svg>
    )
  },
  {
    label: 'Instagram',
    href: '#',
    aria: 'Instagram van Kringloop Het Pareltje',
    className: 'social-button--instagram',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Z" stroke="white" strokeWidth="1.8" />
        <path d="M12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z" stroke="white" strokeWidth="1.8" />
        <path d="M17.5 6.5h.01" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  },
  {
    label: 'TikTok',
    href: '#',
    aria: 'TikTok van Kringloop Het Pareltje',
    className: 'social-button--tiktok',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.32 5.26c-1.37-.77-2.26-2.21-2.42-3.76h-2.06v13.62c0 1.04-.84 1.88-1.88 1.88-1.04 0-1.88-.84-1.88-1.88 0-1.04.84-1.88 1.88-1.88.24 0 .48.04.71.13v-2.08c-.23-.02-.47-.04-.71-.04-2.49 0-4.51 2.02-4.51 4.51 0 2.49 2.02 4.51 4.51 4.51 2.49 0 4.51-2.02 4.51-4.51V8.08c.89.65 1.99 1.04 3.18 1.04v-2.06c-.66 0-1.29-.14-1.87-.4v-.4z" />
      </svg>
    )
  }
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="text-brown bg-cream">
      <header className="sticky top-0 z-50 border-b border-b-sand/80 bg-cream/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="font-display text-2xl font-semibold tracking-tight text-cocoa">
            Het Pareltje
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-brown transition hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <div className="social-links">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.aria}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-button ${item.className}`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-gold px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-[#a37330] md:inline-flex"
            >
              Neem contact op via WhatsApp
            </a>
            <button
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sand bg-white text-brown shadow-sm md:hidden"
              aria-label="Menu"
              aria-expanded={menuOpen}
            >
              <span className="text-xl">☰</span>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="border-t border-sand bg-cream/98 md:hidden">
            <div className="flex flex-col gap-4 px-6 py-5">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base text-brown transition hover:text-gold"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gold px-4 py-3 text-sm font-semibold text-white shadow-soft text-center"
              >
                Neem contact op via WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden pb-12 pt-10 sm:pb-16">
          <div className="absolute inset-x-0 top-0 h-60 bg-gradient-to-b from-sand/40 to-transparent" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <div className="space-y-6">
              <p className="inline-flex rounded-full border border-sand bg-white/90 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-cocoa shadow-soft">
                Nieuw aanbod wisselt regelmatig
              </p>
              <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-cocoa sm:text-5xl lg:text-6xl">
                Iedere week nieuwe tweedehands schatten in Halfweg
              </h1>
              <p className="max-w-2xl text-base leading-8 text-[#4d3e2f] sm:text-lg">
                Van meubels en woondecoratie tot unieke vintage vondsten. Als lokale kringloopwinkel in de regio Amsterdam bieden we tweedehands meubels, vintage woonaccessoires en betaalbare meubels voor elk interieur. Ook voor het aanbieden of laten ophalen van spullen kunt u eenvoudig contact opnemen.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#offers"
                  className="inline-flex items-center justify-center rounded-full bg-brown px-7 py-3 text-sm font-semibold text-cream shadow-soft transition hover:-translate-y-0.5 hover:bg-[#352318]"
                >
                  Bekijk ons aanbod
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-brown bg-white px-7 py-3 text-sm font-semibold text-brown shadow-soft transition hover:-translate-y-0.5 hover:border-gold hover:text-gold"
                >
                  Stuur een WhatsApp bericht
                </a>
              </div>
            </div>

            <div className="hero">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.24em] text-sand">Lokaal en vertrouwd</p>
                <h2 className="font-display text-2xl font-semibold text-cocoa">Warm, persoonlijk en dichtbij</h2>
                <p className="text-sm leading-7 text-[#5c4a3b]">
                  Het Pareltje biedt een vriendelijke winkelbeleving in Halfweg met een wisselend aanbod aan duurzame tweedehands spullen.
                </p>
              </div>
              <div className="hero-image-container">
                <img
                  src="/images/Hero-woonkamer.jpeg"
                  alt="Tweedehands meubels en woonkamerinrichting bij Kringloop Het Pareltje in Amsterdam"
                  loading="lazy"
                  onError={(e) => {e.target.style.display = 'none'}}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {uspItems.map((item) => (
              <article
                key={item.title}
                className="group rounded-3xl border border-sand bg-white/90 p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-xl"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-sand text-2xl transition group-hover:bg-gold">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-xl text-cocoa">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5c4a3b]">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="border-t border-sand/70 bg-[#f7f0e7] py-12">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.24em] text-brown">Over ons</p>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-cocoa sm:text-4xl">
                Kringloop met warmte, stijl en karakter
              </h2>
              <p className="max-w-2xl text-base leading-8 text-[#4d3e2f]">
                Kringloopwinkel Het Pareltje is een lokale winkel in Halfweg waar gebruikte meubels, woonaccessoires en bijzondere items een tweede leven krijgen. Iedere week kan het aanbod veranderen, waardoor er altijd iets nieuws te ontdekken is.
              </p>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-3xl bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-xl">
                  <h3 className="font-semibold text-lg text-cocoa">Gevarieerd aanbod</h3>
                  <p className="mt-3 text-sm text-[#5c4a3b]">Van decoratie tot meubels: ontdek steeds weer andere pareltjes.</p>
                </div>
                <div className="rounded-3xl bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-xl">
                  <h3 className="font-semibold text-lg text-cocoa">Lokaal vertrouwen</h3>
                  <p className="mt-3 text-sm text-[#5c4a3b]">Persoonlijke service, heldere communicatie en een vriendelijke winkelervaring.</p>
                </div>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 sm:grid-rows-2">
              <div className="rounded-[32px] bg-white p-6 shadow-soft">
                <p className="text-sm uppercase tracking-[0.24em] text-sand">Waarom langskomen?</p>
                <ul className="mt-5 space-y-4 text-sm text-[#5c4a3b]">
                  <li>• Iedere week andere vondsten</li>
                  <li>• Duurzamer kopen door hergebruik</li>
                  <li>• Betaalbare spullen met karakter</li>
                </ul>
              </div>
              <div className="rounded-[32px] bg-white p-6 shadow-soft">
                <p className="text-sm uppercase tracking-[0.24em] text-sand">Bezoek onze winkel</p>
                <p className="mt-4 text-sm leading-7 text-[#5c4a3b]">Amsterdamsestraatweg 8A in Halfweg is een charmante plek om op ontdekking te gaan. Kom langs en laat u inspireren.</p>
              </div>
              <div className="col-span-full overflow-hidden rounded-[28px] border border-sand bg-gray-200 shadow-soft">
                <div className="relative h-full min-h-[300px]">
                  <img
                    src="/images/Over-ons-kroonluchter.jpeg"
                    alt="Kroonluchter en interieur details"
                    loading="lazy"
                    className="w-full h-full object-cover"
                    onError={(e) => {e.target.style.display = 'none'}}
                  />
                  <div className="absolute inset-0 bg-[#3b2f26]/60 p-6 flex items-end">
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-sand">Sfeervolle winkel</p>
                      <p className="mt-4 text-sm leading-7 text-white">Een warme entourage met mooie tweedehands meubels en accessoires die je meteen wil laten zien.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="offers" className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.24em] text-brown">Aanbod</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-cocoa sm:text-4xl">Onze categorieën — tweedehands meubels & vintage woonaccessoires</h2>
            <p className="mt-4 text-sm leading-7 text-[#5c4a3b]">Een rijke selectie van meubels, verlichting en vintage accessoires die uw interieur karakter geeft.</p>
            <div className="mt-6 overflow-hidden rounded-[28px] border border-sand bg-gray-200 shadow-soft">
              <img src="/images/Overons-glaswerk.jpeg" alt="Glaswerk en decoratieve collectie" loading="lazy" className="gallery-image" onError={(e) => {e.target.style.display = 'none'}} />
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {categories.map((item) => (
              <article key={item.title} className="rounded-[32px] border border-sand bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
                <h3 className="font-semibold text-xl text-cocoa">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5c4a3b]">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="trust" className="border-t border-sand/70 bg-[#f7f0e7] py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <p className="text-sm uppercase tracking-[0.24em] text-brown">Waarom klanten terugkomen</p>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-cocoa sm:text-4xl">Sfeervol, betrouwbaar en dichtbij — uw lokale kringloopwinkel</h2>
              <p className="mt-4 text-sm leading-7 text-[#5c4a3b]">Onze vaste bezoekers waarderen het wisselende aanbod, de persoonlijke aandacht en de warme uitstraling van de winkel.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {trustItems.map((item) => (
                <article key={item.title} className="rounded-[32px] border border-sand bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
                  <h3 className="font-semibold text-xl text-cocoa">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#5c4a3b]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.24em] text-brown">Binnenkijken bij Het Pareltje</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-cocoa sm:text-4xl">Een impressie van onze winkel en vondsten</h2>
            <p className="mt-4 text-sm leading-7 text-[#5c4a3b]">Ontdek de warme sfeer, de kleurrijke details en de inspirerende tweedehands items die u bij ons vindt.</p>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <div key={image.src} className="gallery-item overflow-hidden rounded-[28px] border border-sand bg-gray-200 shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
                <img src={image.src} alt={image.alt} loading="lazy" className="gallery-image" />
              </div>
            ))}
          </div>
        </section>

        <section id="inbreng" className="border-t border-sand/70 bg-[#f7f0e7] py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 rounded-[40px] border border-sand bg-white p-8 shadow-soft sm:grid-cols-2 sm:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-brown">Inbreng</p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-cocoa sm:text-4xl">Spullen aanbieden</h2>
                <p className="mt-5 max-w-xl text-sm leading-7 text-[#5c4a3b]">Heeft u nette meubels, decoratie of andere bruikbare spullen die een tweede leven verdienen? Neem contact met ons op via WhatsApp of telefoon.</p>
              </div>
              <div className="flex flex-col gap-4">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="rounded-full bg-gold px-5 py-4 text-center text-sm font-semibold text-white shadow-soft transition hover:bg-[#a37330]">
                  Neem contact op via WhatsApp
                </a>
                <a href={phoneLink} className="rounded-full border border-brown bg-white px-5 py-4 text-center text-sm font-semibold text-brown shadow-soft transition hover:border-gold hover:text-gold">
                  Bel de winkel
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="ophaalservice" className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.24em] text-brown">Ophaalservice</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-cocoa sm:text-4xl">Ophaalservice & woningontruiming</h2>
            <p className="mt-4 text-sm leading-7 text-[#5c4a3b]">Heeft u meubels, decoratie of andere bruikbare spullen die een tweede leven verdienen? Het Pareltje kan spullen bij u thuis ophalen. Ook bij het leegruimen van woningen, kamers, schuren of opslagruimtes denken wij graag met u mee.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {pickupItems.map((item) => (
              <article key={item.title} className="rounded-[32px] border border-sand bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
                <h3 className="font-semibold text-xl text-cocoa">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5c4a3b]">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-brown px-6 py-4 text-sm font-semibold text-cream shadow-soft transition hover:bg-[#2f1f17]">
              Stuur een WhatsApp bericht
            </a>
            <a href={phoneLink} className="inline-flex items-center justify-center rounded-full border border-brown bg-white px-6 py-4 text-sm font-semibold text-brown shadow-soft transition hover:border-gold hover:text-gold">
              Bel voor overleg
            </a>
          </div>
        </section>

        <section id="hours" className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[40px] border border-sand bg-white p-8 shadow-soft">
              <p className="text-sm uppercase tracking-[0.24em] text-brown">Openingstijden</p>
              <div className="mt-6 space-y-4 text-sm text-[#5c4a3b]">
                <div className="flex items-center justify-between rounded-3xl bg-cream/90 px-5 py-4">
                  <span>Maandag t/m vrijdag</span>
                  <strong>11:00 - 18:00</strong>
                </div>
                <div className="flex items-center justify-between rounded-3xl bg-cream/90 px-5 py-4">
                  <span>Zaterdag</span>
                  <strong>11:00 - 17:00</strong>
                </div>
                <div className="flex items-center justify-between rounded-3xl bg-cream/90 px-5 py-4">
                  <span>Zondag</span>
                  <strong>Gesloten</strong>
                </div>
              </div>
              <p className="mt-6 text-sm leading-7 text-[#5c4a3b]">Wilt u zeker weten of een item nog beschikbaar is? Stuur ons gerust een WhatsApp.</p>
            </div>
            <div className="rounded-[40px] border border-sand bg-white p-6 shadow-soft">
              <p className="text-sm uppercase tracking-[0.24em] text-brown">Google Maps</p>
              <div className="mt-6 overflow-hidden rounded-[32px] border border-sand">
                <iframe
                  title="Google Maps locatie van Kringloopwinkel Het Pareltje"
                  src={mapsEmbed}
                  className="h-80 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="mt-6 text-sm leading-7 text-[#5c4a3b]">Kom langs in Halfweg of stuur een bericht om te vragen naar specifieke items en beschikbaarheid.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-sand/70 bg-[#f7f0e7] py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_0.8fr]">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.24em] text-brown">Contact</p>
                <h2 className="font-display text-3xl font-semibold tracking-tight text-cocoa sm:text-4xl">Bezoek of neem contact op</h2>
                <div className="space-y-4 rounded-[32px] border border-sand bg-white p-6 shadow-soft">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brown">Adres</p>
                  <p className="text-sm leading-7 text-[#5c4a3b]">Amsterdamsestraatweg 8A, 1165 MA Halfweg</p>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brown">Telefoon</p>
                  <a href={phoneLink} className="text-sm leading-7 text-brown hover:text-gold">0659115178</a>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brown">E-mail</p>
                  <a href={emailLink} className="text-sm leading-7 text-brown hover:text-gold">kringloophetpareltje2026@hotmail.com</a>
                </div>
                <div className="mt-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-brown">Volg ons</p>
                  <div className="social-links mt-4">
                    {socialLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        aria-label={item.aria}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`social-button ${item.className}`}
                      >
                        {item.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="rounded-full bg-brown px-6 py-4 text-center text-sm font-semibold text-cream shadow-soft transition hover:bg-[#2f1f17]">
                  Direct WhatsApp contact
                </a>
                <a href={phoneLink} className="rounded-full border border-brown bg-white px-6 py-4 text-center text-sm font-semibold text-brown shadow-soft transition hover:border-gold hover:text-gold">
                  Bellen
                </a>
                <a href={emailLink} className="rounded-full border border-sand bg-white px-6 py-4 text-center text-sm font-semibold text-brown shadow-soft transition hover:border-gold hover:text-gold">
                  E-mail sturen
                </a>
                <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="rounded-full border border-brown bg-white px-6 py-4 text-center text-sm font-semibold text-brown shadow-soft transition hover:border-gold hover:text-gold">
                  Route in Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-sand/70 bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="font-display text-2xl font-semibold text-cocoa">Kringloopwinkel Het Pareltje</p>
              <p className="mt-4 text-sm leading-7 text-[#5c4a3b]">Unieke tweedehands vondsten met karakter.</p>
            </div>
            <div className="space-y-2 text-sm text-[#5c4a3b]">
              <p className="font-semibold text-brown">Adres</p>
              <p>Amsterdamsestraatweg 8A</p>
              <p>1165 MA Halfweg</p>
            </div>
            <div className="space-y-2 text-sm text-[#5c4a3b]">
              <p className="font-semibold text-brown">Openingstijden</p>
              <p>Ma-Vr 11:00 - 18:00</p>
              <p>Za 11:00 - 17:00</p>
              <p>Zo gesloten</p>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-4 rounded-[32px] border border-sand bg-cream p-6 text-sm shadow-soft sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold text-brown">Direct contact</p>
              <p className="mt-2 text-[#5c4a3b]">Stuur een WhatsAppbericht voor de nieuwste aanwinsten en actuele beschikbaarheid.</p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-brown px-5 py-3 text-sm font-semibold text-cream shadow-soft transition hover:bg-[#2f1f17]">
                Vraag informatie aan
              </a>
              <div className="social-links">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.aria}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-button ${item.className}`}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-sand/60 pt-6">
            <nav className="flex flex-wrap gap-4 text-sm text-[#5c4a3b]">
              <a href="#home" className="hover:text-gold">Home</a>
              <a href="#about" className="hover:text-gold">Over ons</a>
              <a href="#offers" className="hover:text-gold">Aanbod</a>
              <a href="#inbreng" className="hover:text-gold">Inbreng</a>
              <a href="#ophaalservice" className="hover:text-gold">Ophaalservice</a>
              <a href="#contact" className="hover:text-gold">Contact</a>
            </nav>
          </div>
        </div>
      </footer>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-6 z-40 whatsapp-float inline-flex items-center gap-2 rounded-full bg-[#25d366] px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#1da754] hover:shadow-xl"
      >
        <span className="text-lg">💬</span>
        <span className="hidden sm:inline">Vraag via WhatsApp</span>
        <span className="sm:hidden">WhatsApp</span>
      </a>
    </div>
  )
}

export default App
