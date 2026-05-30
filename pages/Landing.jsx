import React from 'react'
import birthdayImg from '../src/assets/Landing_Page/birthday.webp'
import familyPortraitsImg from '../src/assets/Landing_Page/family_portraits.webp'
import namingCeremonyImg from '../src/assets/Landing_Page/naming_ceremony.webp'
import heroVideo from '../src/assets/Landing_Page/hero_video.mp4'

export const Landing = () => {
  return (
    <div>
      <main>
        {/* Section 1: Hero Section */}
        <section
          className="relative h-screen w-full flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-surface-dim relative">
              <video
                className="w-full h-full object-cover opacity-60 mix-blend-multiply"
                data-alt="Cinematic wide shot of a high-fashion model walking through a sun-drenched minimalist architecture setting with dramatic shadows and light"
                src={heroVideo}
                autoPlay
                loop
                muted
                playsInline
              />
              <div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/40"
              ></div>
            </div>
          </div>
          <div className="relative z-10 text-center px-6 max-w-4xl">
            <span
              className="font-label uppercase tracking-[0.4em] text-[10px] text-primary mb-6 block"
            >The Curated Light Studio</span
            >
            <h1
              className="font-headline text-5xl md:text-8xl text-on-surface leading-tight tracking-tight mb-8 italic"
            >
              Capturing the <br />
              <span className="font-normal not-italic">Silent Dialogue</span>
            </h1>
            <div className="flex flex-col items-center gap-6">
              <p
                className="font-body text-sm md:text-base text-on-surface-variant max-w-md leading-relaxed"
              >
                High-end editorial photography that transcends the visual, weaving
                narratives of light, shadow, and human essence.
              </p>
              <div className="w-px h-24 bg-primary/30 mt-4"></div>
            </div>
          </div>
        </section>
        {/* Section 2: Abstract Editorial Gallery */}
        <section className="py-32 px-6 md:px-24 bg-surface overflow-hidden">
          <div className="max-w-screen-2xl mx-auto relative">
            <div
              className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
            >
              <div className="max-w-xl">
                <h2
                  className="font-headline text-4xl md:text-6xl text-on-surface mb-6"
                >
                  Editorial <br />Manifesto
                </h2>
                <p className="font-body text-on-surface-variant leading-loose italic">
                  Exploring the boundaries between high-fashion and fine art
                  through a lens of intentional asymmetry.
                </p>
              </div>
              <span
                className="font-label text-[10px] tracking-[0.2em] uppercase text-primary border-b border-primary/20 pb-2"
              >Volume 01 // 2024</span
              >
            </div>
            {/* Bento-inspired Asymmetric Grid */}
            <div className="grid grid-cols-12 gap-4 md:gap-8 relative">
              {/* Overlapping Elements */}
              <div className="col-span-12 md:col-span-7 relative z-10">
                <div
                  className="aspect-[4/5] bg-surface-container-low overflow-hidden"
                >
                  <img
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                    data-alt="Avant-garde fashion portrait of a person with sculptural metallic jewelry in a stark white minimalist studio with sharp shadows"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU7T5U8wSYi0vJpxuCAHCXl9FZIo0ZOGojAAp6Qg9DPJAsazCDruqePbs9ETe7GJ4cJdX2eoCx3w2u_MhG2jwJ4OgzYxMDjb-KvJ9EfdkYyhZdXKuqgpL6vmpjcgZQb4sxWStoNM7JkkXtuimTHKmFWaKNqbj7i-tJxSVNECLVJFjXeHUuRoSLRj8Gdm6IxZi6dcp_i-YOIMQRjCl9yWvn2GaZ0U9s-GBFI9aJAHxDfTzE4LuVcouRyOaZMc-x-j7VvzAaN_1JbQW8"
                  />
                </div>
                <div
                  className="absolute -bottom-12 -right-8 md:-right-16 bg-surface-container-lowest p-8 shadow-2xl shadow-on-surface/5 max-w-xs z-20 hidden md:block"
                >
                  <p
                    className="font-label text-[10px] tracking-widest uppercase text-primary mb-4"
                  >
                    Paris Fashion Week
                  </p>
                  <p className="font-headline text-xl italic leading-snug">
                    "The interplay of texture and absence."
                  </p>
                </div>
              </div>
              <div className="col-span-12 md:col-span-5 flex flex-col gap-8 md:pt-32">
                <div
                  className="aspect-square bg-surface-container-high overflow-hidden relative"
                >
                  <img
                    className="w-full h-full object-cover"
                    data-alt="Close-up artistic shot of flowing silk fabric caught in mid-air against a warm golden hour sunset light"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1UFx9H2VheN-9naFru1E5Q6sRKzfgCVzEjLFqyPRv-04Ke2v-Trw2-R1k0aFIgvHi19Z0q7JNnBDP4PPhwTuu3hpLQtw6eWNqCa-lX1q8AORZPtjhMcBizJYBBJRUrmC1x6ZJ0KYKxl9yfZwvrnjNIyiZUJVp2sKgb-eyrhBg1jRjkI57B48Oyck-0_iEW_7swMlAou5QxqzXiev2Yjb-4tqebOwJXWyM5pILSFBny53HI16t3AtFZEjvXAJQKfTFNYQpD8q2duvL"
                  />
                  <div
                    className="absolute inset-0 bg-primary/10 mix-blend-overlay"
                  ></div>
                </div>
                <div
                  className="flex items-start gap-4 p-4 border-l border-primary/10"
                >
                  <span className="font-headline text-4xl text-primary/20 italic"
                  >02</span
                  >
                  <p
                    className="font-body text-xs leading-relaxed text-on-surface-variant uppercase tracking-wider"
                  >
                    Captured in the limestone quarries of Provence, where light
                    behaves as a physical medium.
                  </p>
                </div>
              </div>
              {/* Offset Row */}
              <div className="col-span-12 md:col-span-4 md:-mt-24 z-20">
                <div className="aspect-[3/4] bg-surface-container overflow-hidden">
                  <img
                    className="w-full h-full object-cover grayscale brightness-110"
                    data-alt="Black and white high-contrast portrait of an elegant woman looking through a sheer lace veil in soft natural lighting"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPNuvqQYRaEJj612hUiPb_bxuZLcKUFMj4xllX1bL0xvbDeHjh95d5jqitBMkjLkrxyhlVAailko1dVqMF15Fe4A0Ui6zWcBgEA8QCEshf1hwkHsT1XipefG9kZOHvb8ELVa9A3btETG9LIfSSYpy09JRTSB54Optv0q7GCpGF00u3XdR0hoCNDt85ZDKmKjUeEHQWHmcRl11USlWx3COfGa2s5YOJFhvyUv0nUub20Qw88EZrREHQWzO63-6bw9Sf55lEYNYoFNSf"
                  />
                </div>
              </div>
              <div
                className="col-span-12 md:col-span-8 flex items-center justify-center p-8 md:p-16 border border-primary/10"
              >
                <div className="max-w-lg">
                  <h3
                    className="font-headline text-3xl md:text-4xl text-on-surface mb-6 italic"
                  >
                    The Curated Vision
                  </h3>
                  <p
                    className="font-headline text-lg md:text-xl text-on-surface-variant leading-relaxed opacity-90"
                  >
                    At the intersection of light and shadow, our studio captures
                    the raw, unspoken narratives of the human experience. We
                    specialize in high-end editorial and portrait photography,
                    where every frame is a curated dialogue between the subject
                    and the lens.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 3: Domains Section */}
        <section className="py-32 bg-surface-container-low">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-24 text-center">
            <h2 className="font-headline text-3xl md:text-5xl mb-20">Our Domains</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Editorial Card */}
              <div
                className="group bg-surface-container-lowest p-10 flex flex-col items-center text-center hover:bg-primary transition-colors duration-500 ease-out"
              >
                <span
                  className="material-symbols-outlined text-primary group-hover:text-white mb-8 text-4xl"
                  data-icon="auto_awesome"
                >auto_awesome</span
                >
                <h3
                  className="font-headline text-xl mb-4 group-hover:text-white transition-colors duration-500"
                >
                  Editorial
                </h3>
                <p
                  className="font-body text-xs text-on-surface-variant group-hover:text-white/80 transition-colors duration-500 leading-loose"
                >
                  Narrative-driven visual storytelling for high-end fashion
                  monographs and global publications.
                </p>
                <div
                  className="mt-8 w-8 h-px bg-primary/20 group-hover:bg-white/40 transition-colors"
                ></div>
              </div>
              {/* Portrait Card */}
              <div
                className="group bg-surface-container-lowest p-10 flex flex-col items-center text-center hover:bg-primary transition-colors duration-500 ease-out"
              >
                <span
                  className="material-symbols-outlined text-primary group-hover:text-white mb-8 text-4xl"
                  data-icon="person"
                >person</span
                >
                <h3
                  className="font-headline text-xl mb-4 group-hover:text-white transition-colors duration-500"
                >
                  Portrait
                </h3>
                <p
                  className="font-body text-xs text-on-surface-variant group-hover:text-white/80 transition-colors duration-500 leading-loose"
                >
                  Intimate studies of the human spirit, focused on authenticity
                  and the quiet moments in between.
                </p>
                <div
                  className="mt-8 w-8 h-px bg-primary/20 group-hover:bg-white/40 transition-colors"
                ></div>
              </div>
              {/* Commercial Card */}
              <div
                className="group bg-surface-container-lowest p-10 flex flex-col items-center text-center hover:bg-primary transition-colors duration-500 ease-out"
              >
                <span
                  className="material-symbols-outlined text-primary group-hover:text-white mb-8 text-4xl"
                  data-icon="campaign"
                >campaign</span
                >
                <h3
                  className="font-headline text-xl mb-4 group-hover:text-white transition-colors duration-500"
                >
                  Commercial
                </h3>
                <p
                  className="font-body text-xs text-on-surface-variant group-hover:text-white/80 transition-colors duration-500 leading-loose"
                >
                  Refining brand identities through high-impact imagery that
                  balances luxury and conversion.
                </p>
                <div
                  className="mt-8 w-8 h-px bg-primary/20 group-hover:bg-white/40 transition-colors"
                ></div>
              </div>
              {/* Landscape Card */}
              <div
                className="group bg-surface-container-lowest p-10 flex flex-col items-center text-center hover:bg-primary transition-colors duration-500 ease-out"
              >
                <span
                  className="material-symbols-outlined text-primary group-hover:text-white mb-8 text-4xl"
                  data-icon="landscape"
                >landscape</span
                >
                <h3
                  className="font-headline text-xl mb-4 group-hover:text-white transition-colors duration-500"
                >
                  Landscape
                </h3>
                <p
                  className="font-body text-xs text-on-surface-variant group-hover:text-white/80 transition-colors duration-500 leading-loose"
                >
                  Cinematic explorations of nature's grandeur, treated with the
                  same precision as fine art.
                </p>
                <div
                  className="mt-8 w-8 h-px bg-primary/20 group-hover:bg-white/40 transition-colors"
                ></div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 4: Moments in Focus Gallery */}
        <section className="py-32 bg-surface">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-24">
            <div className="text-center mb-20">
              <h2
                className="font-headline text-4xl md:text-6xl text-on-surface italic"
              >
                Moments in Focus
              </h2>
              <div className="w-24 h-px bg-primary/30 mx-auto mt-8"></div>
            </div>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-0"
            >
              {/* Gallery Item 1 */}
              <div
                className="aspect-[4/3] overflow-hidden bg-surface-container-high group cursor-crosshair"
              >
                <img
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
                  data-alt="Architectural fashion photography featuring beige tones and soft shadows"
                  src={birthdayImg}
                />
              </div>
              {/* Gallery Item 2 */}
              <div
                className="aspect-[4/3] overflow-hidden bg-surface-container-high group cursor-crosshair"
              >
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  data-alt="Minimalist editorial portrait with warm beige lighting"
                  src={familyPortraitsImg}
                />
              </div>
              {/* Gallery Item 3 */}
              <div
                className="aspect-[4/3] overflow-hidden bg-surface-container-high group cursor-crosshair"
              >
                <img
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
                  data-alt="Close up of fabric textures in royal beige palette"
                  src={namingCeremonyImg}
                />
              </div>
              {/* Gallery Item 4 */}
              <div
                className="aspect-[4/3] overflow-hidden bg-surface-container-high group cursor-crosshair"
              >
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  data-alt="High fashion silhouette against minimalist wall"
                  src={birthdayImg}
                />
              </div>
              {/* Gallery Item 5 */}
              <div
                className="aspect-[4/3] overflow-hidden bg-surface-container-high group cursor-crosshair"
              >
                <img
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
                  data-alt="Abstract shadow play in a high-end studio setting"
                  src={familyPortraitsImg}
                />
              </div>
              {/* Gallery Item 6 */}
              <div
                className="aspect-[4/3] overflow-hidden bg-surface-container-high group cursor-crosshair"
              >
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  data-alt="Portrait study with warm light and shadow interplay"
                  src={namingCeremonyImg}
                />
              </div>
              {/* Gallery Item 7 */}
              <div
                className="aspect-[4/3] overflow-hidden bg-surface-container-high group cursor-crosshair"
              >
                <img
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
                  data-alt="Cinematic landscape fragment in beige tones"
                  src={birthdayImg}
                />
              </div>
              {/* Gallery Item 8 */}
              <div
                className="aspect-[4/3] overflow-hidden bg-surface-container-high group cursor-crosshair"
              >
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  data-alt="Editorial fashion piece highlighting texture and light"
                  src={familyPortraitsImg}
                />
              </div>
              {/* Gallery Item 9 */}
              <div
                className="aspect-[4/3] overflow-hidden bg-surface-container-high group cursor-crosshair"
              >
                <img
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
                  data-alt="Final gallery piece focusing on artistic detail"
                  src={namingCeremonyImg}
                />
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-32 px-6">
          <div
            className="max-w-4xl mx-auto bg-primary-container p-12 md:p-24 text-center"
          >
            <h2
              className="font-headline text-3xl md:text-5xl text-on-primary-container mb-8"
            >
              Ready to Curate Your Light?
            </h2>
            <button
              className="bg-primary text-white font-label uppercase tracking-widest text-xs px-10 py-5 hover:scale-105 transition-transform duration-500 shadow-xl shadow-primary/20"
            >
              Start a Conversation
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}