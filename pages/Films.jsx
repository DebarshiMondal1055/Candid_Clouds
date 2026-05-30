import React from 'react'

export const Films = () => {
  return (
    <div>
    <header
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay={true}
          loop={true}
          data-alt="Cinematic wide shot of a Mediterranean coast at sunset with warm golden light reflecting off the ripples of the deep blue water"
          src="src/assets/Landing_Page/hero_video.mp4"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90"
        ></div>
      </div>
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <span
          className="font-label text-[10px] uppercase tracking-[0.4em] text-on-surface/60 mb-6 block"
          >The Motion Collection</span
        >
        <h1
          className="text-5xl md:text-8xl font-headline tracking-tighter text-on-surface mb-8 leading-none"
        >
          Captured <br />
          <span className="italic font-normal">in Narrative</span>
        </h1>
        <p
          className="font-body text-lg text-on-surface-variant max-w-xl mx-auto mb-10 leading-relaxed font-light"
        >
          Bridging the gap between fine art photography and cinematic
          storytelling. Every frame a poem, every sequence a legacy.
        </p>
        <div className="flex justify-center gap-6">
          <button className="flex items-center gap-2 group">
            <span
              className="w-12 h-12 flex items-center justify-center rounded-full border border-outline/30 group-hover:bg-primary group-hover:text-on-primary transition-all duration-500"
            >
              <span
                className="material-symbols-outlined"
                data-icon="play_arrow"
                style={{ fontVariationSettings: '"FILL" 1' }}
                >play_arrow</span
              >
            </span>
            <span className="font-label text-xs uppercase tracking-widest font-bold"
              >Watch Reel</span
            >
          </button>
        </div>
      </div>
    </header>
    <section className="py-32 px-8 max-w-screen-2xl mx-auto bg-surface">
      <div
        className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-8"
      >
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-headline tracking-tighter mb-6">
            Short Stories
          </h2>
          <p className="font-body text-on-surface-variant text-lg">
            A curated selection of editorial films exploring texture, light, and
            the quiet moments between the movements.
          </p>
        </div>
        <div
          className="font-label text-[10px] uppercase tracking-widest border-b border-outline-variant/30 pb-2"
        >
          Filter by Genre: All Works
        </div>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24"
      >
        <div className="group">
          <div className="relative aspect-[16/9] overflow-hidden mb-8 shadow-sm">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-alt="Dreamy cinematic shot of a person walking through a misty pine forest in the early morning with soft diffused lighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbR0GWVcjtOMpdCW20oi-YZfFocNO0atJGt6SDyk4n9QjujtLyRux-NSVJ1cUDG89hSD70xYG722Tx5uEGG8Y8f1rMZhtyZ422x1t0nyJRJ7C1pTjpA54GESArfyNxhT9n35yZuNffByRh-e-SHBMG_F7VQIYOLC11qoEdVJv2KqyvGb62g7nB__XvNAQeVUi_nTxVuhG2wikKEwi1WiwnGMk3_19l810SJ_pTHjYZ9biprIppZd21fETNZqxk9AY9Q64ewZbvPwHR"
            />
            <div
              className="absolute inset-0 bg-on-background/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
            >
              <span
                className="material-symbols-outlined text-white text-5xl"
                data-icon="play_circle"
                >play_circle</span
              >
            </div>
          </div>
          <div className="px-2">
            <h3
              className="text-2xl font-headline mb-4 group-hover:text-primary transition-colors"
            >
              The Solstice Whispers
            </h3>
            <p
              className="font-body text-on-surface-variant text-sm mb-8 leading-relaxed"
            >
              An intimate exploration of silence in the Swedish highlands,
              documenting the transition from eternal day to the first shadows
              of winter through a grain-heavy 16mm aesthetic.
            </p>
            <button
              className="border border-outline-variant py-3 px-8 text-[10px] uppercase tracking-widest font-bold hover:bg-primary-container hover:text-on-primary-container hover:border-transparent transition-all duration-300"
            >
              View Film
            </button>
          </div>
        </div>
        <div className="group md:translate-y-16">
          <div className="relative aspect-[16/9] overflow-hidden mb-8 shadow-sm">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-alt="Editorial fashion scene in a sun-drenched minimalist atelier with heavy shadows and warm beige fabrics draped over marble chairs"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEczwLCY4eqN0ZJVuf1KhPOtFixgyLJZRSIKsK8Nfak0vBL63cjOZaGN5UOAgbhnbek7Uz_YP079TxlZXx5qY3xwgS2OJ5M_j47Z4ej45ELo0edbwEmp-wNFv47C_HEIOTxk7yZcGwJaXUFL80C1RPLE_7x8tqq7zbWA8TPPkBXMwaLdF7ZTvLrTe_4gdImc04d31l-AxdrcGPUFf7QrQvzBK7LlUVemv6OTxpkiTRdFBDVtfqz2yqx39UfYtHCBmd0ZQt_XwFQuQG"
            />
            <div
              className="absolute inset-0 bg-on-background/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
            >
              <span
                className="material-symbols-outlined text-white text-5xl"
                data-icon="play_circle"
                >play_circle</span
              >
            </div>
          </div>
          <div className="px-2">
            <h3
              className="text-2xl font-headline mb-4 group-hover:text-primary transition-colors"
            >
              Atelier in Light
            </h3>
            <p
              className="font-body text-on-surface-variant text-sm mb-8 leading-relaxed"
            >
              Following the process of an artisan weaver in Florence, this film
              captures the rhythmic dance of thread and sunlight, elevating
              everyday labor to a high-end visual symphony.
            </p>
            <button
              className="border border-outline-variant py-3 px-8 text-[10px] uppercase tracking-widest font-bold hover:bg-primary-container hover:text-on-primary-container hover:border-transparent transition-all duration-300"
            >
              View Film
            </button>
          </div>
        </div>
        <div className="group">
          <div className="relative aspect-[16/9] overflow-hidden mb-8 shadow-sm">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-alt="Macro shot of shimmering water surfaces and soft reflections of golden hour sunlight, ethereal and abstract mood"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_CLG-JVxEQNu9ZCIviJvyE6rehksB_N5idVfN4TqrYXNO3qlAl7Z4rb6g8lfz94kCk-HRI0kGbio0XvUV7z1a7LZaHkhnbK4uaj5d1azfZ63Q0WFIA9696AJ1agnWPY_B1IKSI3yaXupSxDN28-3oVRk-rVX6KNPDtt2BQ66eK8eG9LaKPnlLNCNHUzZpkFjIEl-JkLK0N-KazB2S_UIlr7Jb_O1dCSdAYK1oAytxrYs6o2fp31QYfQE8DvDo9A6VJg7t6XgpLMZD"
            />
            <div
              className="absolute inset-0 bg-on-background/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
            >
              <span
                className="material-symbols-outlined text-white text-5xl"
                data-icon="play_circle"
                >play_circle</span
              >
            </div>
          </div>
          <div className="px-2">
            <h3
              className="text-2xl font-headline mb-4 group-hover:text-primary transition-colors"
            >
              Liquid Amber
            </h3>
            <p
              className="font-body text-on-surface-variant text-sm mb-8 leading-relaxed"
            >
              A sensory study of the Aegean sea at dusk. The narrative is told
              entirely through the movement of light across water and the
              tactile sensation of the warm coastal breeze.
            </p>
            <button
              className="border border-outline-variant py-3 px-8 text-[10px] uppercase tracking-widest font-bold hover:bg-primary-container hover:text-on-primary-container hover:border-transparent transition-all duration-300"
            >
              View Film
            </button>
          </div>
        </div>
        <div className="group md:translate-y-16 lg:translate-y-0">
          <div className="relative aspect-[16/9] overflow-hidden mb-8 shadow-sm">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-alt="Vibrant urban scene at night with soft neon blurs and cinematic rain reflections on the dark pavement"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxyKdozx92HbS3jwoUM9585fl2TMNnVRkZcBKxlpTEdfoq9LBSxN6g-rAk8Aaozaf21gEegk1C0M4pJF2XvLlxf2kPPE6IZ2YN18sY1ZiW5KHfZS1-vUB0R_h9wkFveYI_eqT1odhWjJBcsYmxj0zuTRj3BrB3n17HtGrzBSvEXsia6g8RCEGnsmf8HZVvx-Et_0G4zGD6tGOpJ3CY9ot9doR6g3NDcr21AtUpb4qu3RyFCcQ-71iXCnVe254PvPfKSsh0vV_mzLNs"
            />
            <div
              className="absolute inset-0 bg-on-background/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
            >
              <span
                className="material-symbols-outlined text-white text-5xl"
                data-icon="play_circle"
                >play_circle</span
              >
            </div>
          </div>
          <div className="px-2">
            <h3
              className="text-2xl font-headline mb-4 group-hover:text-primary transition-colors"
            >
              Neon Nocturne
            </h3>
            <p
              className="font-body text-on-surface-variant text-sm mb-8 leading-relaxed"
            >
              A departure from the beige palette into the saturated shadows of
              Tokyo at night. Exploring loneliness and connection in the world's
              most populous urban landscape.
            </p>
            <button
              className="border border-outline-variant py-3 px-8 text-[10px] uppercase tracking-widest font-bold hover:bg-primary-container hover:text-on-primary-container hover:border-transparent transition-all duration-300"
            >
              View Film
            </button>
          </div>
        </div>
        <div className="group md:translate-y-0 lg:translate-y-16">
          <div className="relative aspect-[16/9] overflow-hidden mb-8 shadow-sm">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-alt="Interior of a historical library with tall oak shelves and shafts of dust-filled light hitting ancient book spines"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwzPjdWFqqgXQX5zQU_pQdEG9v2zDDsLL21mW0Kr0iZvr9st1KNjjS0bvvJeO4apllcCbZ2balrM6yoiNTDcRI3hjVRwNXWRCM7U4dklnybp4sxWhScn4HYw5xTHyXBf83_BNlSABoqnFdkZrjkedlh3ogkcMIrfuqDhqar1lYDbKYsqRUPQp2VkqGwvTpahB72tlr1tfm2Nue4DKsa636OldrepggpFJrMJLZSY0Ih0exObOKsTGZaf9R5LIGIs49wwuPbzzuIFGM"
            />
            <div
              className="absolute inset-0 bg-on-background/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
            >
              <span
                className="material-symbols-outlined text-white text-5xl"
                data-icon="play_circle"
                >play_circle</span
              >
            </div>
          </div>
          <div className="px-2">
            <h3
              className="text-2xl font-headline mb-4 group-hover:text-primary transition-colors"
            >
              The Architect's Dream
            </h3>
            <p
              className="font-body text-on-surface-variant text-sm mb-8 leading-relaxed"
            >
              A meditative walk through the brutalist structures of Paris,
              re-contextualized through a soft, feminine lens that finds the
              grace in concrete and cold steel.
            </p>
            <button
              className="border border-outline-variant py-3 px-8 text-[10px] uppercase tracking-widest font-bold hover:bg-primary-container hover:text-on-primary-container hover:border-transparent transition-all duration-300"
            >
              View Film
            </button>
          </div>
        </div>
        <div className="group md:translate-y-16 lg:translate-y-0">
          <div className="relative aspect-[16/9] overflow-hidden mb-8 shadow-sm">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-alt="Minimalist architectural shot of a desert home at dawn with clean lines and soft peach sky background"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcMHbba2UjKHbFk-OTGTU_bZaGbPZb_qiVSwBkBvvuVHSTuRZvb-wEXVE8RmIEa7P0sZsIb9SkaqVwy8qdJhnYGC18wWqSzUrprjyoosKScxeDftw2LNp5FJeuz3s8FwauT1Wcpy-q6sqDxklapTkV7KgJgp82jsRn9w4mLrEjK5lv57e8923xoDpk1tWg6dh6FRmSPgrM9rG4uQXoJJZuX3RqYOoigH0Ar-uDf9Yhb_qW4QBECLg1klHWn8vXTjiOGvg4a8oLY4fb"
            />
            <div
              className="absolute inset-0 bg-on-background/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
            >
              <span
                className="material-symbols-outlined text-white text-5xl"
                data-icon="play_circle"
                >play_circle</span
              >
            </div>
          </div>
          <div className="px-2">
            <h3
              className="text-2xl font-headline mb-4 group-hover:text-primary transition-colors"
            >
              Arid Geometry
            </h3>
            <p
              className="font-body text-on-surface-variant text-sm mb-8 leading-relaxed"
            >
              Exploring the intersection of modern architecture and the Mojave
              desert. This film focuses on the harsh contrast of geometric
              shadows and organic sand forms.
            </p>
            <button
              className="border border-outline-variant py-3 px-8 text-[10px] uppercase tracking-widest font-bold hover:bg-primary-container hover:text-on-primary-container hover:border-transparent transition-all duration-300"
            >
              View Film
            </button>
          </div>
        </div>
        <div className="group">
          <div className="relative aspect-[16/9] overflow-hidden mb-8 shadow-sm">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-alt="Artistic close up of an eye reflecting a vibrant sunrise over a mountain range, focus on the intricate iris details"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEczwLCY4eqN0ZJVuf1KhPOtFixgyLJZRSIKsK8Nfak0vBL63cjOZaGN5UOAgbhnbek7Uz_YP079TxlZXx5qY3xwgS2OJ5M_j47Z4ej45ELo0edbwEmp-wNFv47C_HEIOTxk7yZcGwJaXUFL80C1RPLE_7x8tqq7zbWA8TPPkBXMwaLdF7ZTvLrTe_4gdImc04d31l-AxdrcGPUFf7QrQvzBK7LlUVemv6OTxpkiTRdFBDVtfqz2yqx39UfYtHCBmd0ZQt_XwFQuQG"
            />
            <div
              className="absolute inset-0 bg-on-background/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
            >
              <span
                className="material-symbols-outlined text-white text-5xl"
                data-icon="play_circle"
                >play_circle</span
              >
            </div>
          </div>
          <div className="px-2">
            <h3
              className="text-2xl font-headline mb-4 group-hover:text-primary transition-colors"
            >
              Visions of Dawn
            </h3>
            <p
              className="font-body text-on-surface-variant text-sm mb-8 leading-relaxed"
            >
              Capturing the awakening of the world through a macro lens. A
              visual poem about the clarity that comes with the first light of a
              new day in the Alps.
            </p>
            <button
              className="border border-outline-variant py-3 px-8 text-[10px] uppercase tracking-widest font-bold hover:bg-primary-container hover:text-on-primary-container hover:border-transparent transition-all duration-300"
            >
              View Film
            </button>
          </div>
        </div>
        <div className="group md:translate-y-16 lg:translate-y-16">
          <div className="relative aspect-[16/9] overflow-hidden mb-8 shadow-sm">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-alt="High contrast black and white shot of a classic sail boat on a choppy ocean with dramatic sky"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEczwLCY4eqN0ZJVuf1KhPOtFixgyLJZRSIKsK8Nfak0vBL63cjOZaGN5UOAgbhnbek7Uz_YP079TxlZXx5qY3xwgS2OJ5M_j47Z4ej45ELo0edbwEmp-wNFv47C_HEIOTxk7yZcGwJaXUFL80C1RPLE_7x8tqq7zbWA8TPPkBXMwaLdF7ZTvLrTe_4gdImc04d31l-AxdrcGPUFf7QrQvzBK7LlUVemv6OTxpkiTRdFBDVtfqz2yqx39UfYtHCBmd0ZQt_XwFQuQG"
            />
            <div
              className="absolute inset-0 bg-on-background/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
            >
              <span
                className="material-symbols-outlined text-white text-5xl"
                data-icon="play_circle"
                >play_circle</span
              >
            </div>
          </div>
          <div className="px-2">
            <h3
              className="text-2xl font-headline mb-4 group-hover:text-primary transition-colors"
            >
              Monochrome Tides
            </h3>
            <p
              className="font-body text-on-surface-variant text-sm mb-8 leading-relaxed"
            >
              A raw, black and white narrative following a solo sailor's journey
              across the Atlantic. Focusing on the textures of canvas, salt, and
              endless horizons.
            </p>
            <button
              className="border border-outline-variant py-3 px-8 text-[10px] uppercase tracking-widest font-bold hover:bg-primary-container hover:text-on-primary-container hover:border-transparent transition-all duration-300"
            >
              View Film
            </button>
          </div>
        </div>
        <div className="group">
          <div className="relative aspect-[16/9] overflow-hidden mb-8 shadow-sm">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-alt="Cinematic shot of a vintage train passing through a lush green valley in Scotland during a light rainfall"
                src='https://lh3.googleusercontent.com/aida-public/AB6AXuAEczwLCY4eqN0ZJVuf1KhPOtFixgyLJZRSIKsK8Nfak0vBL63cjOZaGN5UOAgbhnbek7Uz_YP079TxlZXx5qY3xwgS2OJ5M_j47Z4ej45ELo0edbwEmp-wNFv47C_HEIOTxk7yZcGwJaXUFL80C1RPLE_7x8tqq7zbWA8TPPkBXMwaLdF7ZTvLrTe_4gdImc04d31l-AxdrcGPUFf7QrQvzBK7LlUVemv6OTxpkiTRdFBDVtfqz2yqx39UfYtHCBmd0ZQt_XwFQuQG'
            />
            <div
              className="absolute inset-0 bg-on-background/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
            >
              <span
                className="material-symbols-outlined text-white text-5xl"
                data-icon="play_circle"
                >play_circle</span
              >
            </div>
          </div>
          <div className="px-2">
            <h3
              className="text-2xl font-headline mb-4 group-hover:text-primary transition-colors"
            >
              The Highland Express
            </h3>
            <p
              className="font-body text-on-surface-variant text-sm mb-8 leading-relaxed"
            >
              A nostalgic look at the golden age of travel. This film captures
              the rhythmic clacking of tracks and the ethereal beauty of the
              Scottish mist.
            </p>
            <button
              className="border border-outline-variant py-3 px-8 text-[10px] uppercase tracking-widest font-bold hover:bg-primary-container hover:text-on-primary-container hover:border-transparent transition-all duration-300"
            >
              View Film
            </button>
          </div>
        </div>
      </div>
    </section>
    <section className="py-48 px-8 bg-surface-container-low text-center">
      <div className="max-w-4xl mx-auto">
        <span
          className="material-symbols-outlined text-primary text-4xl mb-12 block"
          data-icon="format_quote"
          >format_quote</span
        >
        <blockquote
          className="text-4xl md:text-6xl font-headline leading-tight tracking-tight text-on-surface mb-12 italic"
        >
          "Photography is the pause button of life, but film is the heartbeat
          that never stops."
        </blockquote>
        <p
          className="font-label text-xs uppercase tracking-widest text-primary font-bold"
        >
          — Julien Moretti, Creative Director
        </p>
      </div>
    </section>
    </div>
  )
}
