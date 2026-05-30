import React from 'react'

export const Contact = () => {
  return (
    <div>
    <main
      className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-32 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover brightness-95 contrast-75"
          data-alt="Minimalist architectural interior with clean lines, high ceilings, large windows casting soft diagonal sun shadows on warm beige stone walls."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG-J_LNTV7u6PDQsgOT3U5rLr6qE0x1H63Q1kfD5mX0nc068bi1gjfr_OZEFmBcrdmkKw8v6SEEqM933kt8KYcNqJY56RTIXmIWyovROB8Bi6hrstNfqbBrhFGSuiYe5c2e8Pu1excMC6cp7EfnP8SqhljwYwhspHitxSkuGttomFgXelNF4xJy68MsWGg4njFYp7_pSZ7bQCUAzZmP4PdTePSJQLC0OdOCLAX1BMseh8LCVLPd6cFg6y9QtOUBFgFJftv2_-7KdO8"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-stone-50/20 via-transparent to-stone-50/40"
        ></div>
      </div>
      <div
        className="relative z-10 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        <div className="lg:col-span-5 text-left space-y-8 hidden lg:block">
          <div className="space-y-2">
            <span
              className="label-md font-label uppercase tracking-widest text-primary text-xs font-semibold"
              >Inquiry Portal</span
            >
            <h2
              className="text-6xl font-headline font-bold text-on-surface tracking-tighter leading-tight"
            >
              Documenting <br /><i className="font-normal">Your Legacy</i>.
            </h2>
          </div>
          <p
            className="text-on-surface-variant max-w-sm text-lg leading-relaxed font-light"
          >
            From global editorial campaigns to intimate portraits, we craft
            visual narratives that transcend time. Share your vision with us.
          </p>
          <div className="pt-8 space-y-4">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div
                className="w-12 h-px bg-outline-variant group-hover:w-16 transition-all duration-500"
              ></div>
              <span
                className="text-xs uppercase tracking-widest font-semibold text-primary"
                >Paris / New York / London</span
              >
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 flex justify-center">
          <div
            className="w-full max-w-xl glass-panel bg-surface/70 p-8 md:p-12 rounded-xl shadow-[0_20px_50px_rgba(28,28,25,0.05)] border border-white/20"
          >
            <div className="mb-10 text-center lg:text-left">
              <h3 className="text-3xl font-headline text-on-surface mb-2">
                Connect with the Studio
              </h3>
              <p
                className="text-sm text-on-surface-variant font-medium tracking-wide"
              >
                PLEASE COMPLETE THE FORM BELOW FOR TAILORED CONSULTATIONS.
              </p>
            </div>
            <form action="#" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label
                    className="text-[10px] uppercase tracking-widest font-bold text-primary ml-1"
                    >Full Name</label
                  >
                  <input
                    className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-primary-container rounded-md px-4 py-3 placeholder:text-stone-300 text-on-surface text-sm transition-all duration-300"
                    placeholder="ALEXANDRE DUMAS"
                    type="text"
                  />
                </div>
                <div className="space-y-1">
                  <label
                    className="text-[10px] uppercase tracking-widest font-bold text-primary ml-1"
                    >Email Address</label
                  >
                  <input
                    className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-primary-container rounded-md px-4 py-3 placeholder:text-stone-300 text-on-surface text-sm transition-all duration-300"
                    placeholder="ALEX@STUDIO.COM"
                    type="email"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label
                    className="text-[10px] uppercase tracking-widest font-bold text-primary ml-1"
                    >Phone Number</label
                  >
                  <input
                    className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-primary-container rounded-md px-4 py-3 placeholder:text-stone-300 text-on-surface text-sm transition-all duration-300"
                    placeholder="+33 00 00 00 00"
                    type="tel"
                  />
                </div>
                <div className="space-y-1">
                  <label
                    className="text-[10px] uppercase tracking-widest font-bold text-primary ml-1"
                    >Location</label
                  >
                  <input
                    className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-primary-container rounded-md px-4 py-3 placeholder:text-stone-300 text-on-surface text-sm transition-all duration-300"
                    placeholder="CITY, COUNTRY"
                    type="text"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label
                    className="text-[10px] uppercase tracking-widest font-bold text-primary ml-1"
                    >Event Dates</label
                  >
                  <input
                    className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-primary-container rounded-md px-4 py-3 placeholder:text-stone-300 text-on-surface text-sm transition-all duration-300"
                    placeholder="OCTOBER 2024"
                    type="text"
                  />
                </div>
                <div className="space-y-1">
                  <label
                    className="text-[10px] uppercase tracking-widest font-bold text-primary ml-1"
                    >Services looking for</label
                  >
                  <select
                    className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-primary-container rounded-md px-4 py-3 text-on-surface text-sm transition-all duration-300"
                    defaultValue=""
                  >
                    <option disabled value="">
                      SELECT A SERVICE
                    </option>
                    <option value="editorial">Editorial</option>
                    <option value="portrait">Portrait</option>
                    <option value="commercial">Commercial</option>
                    <option value="landscape">Landscape</option>
                  </select>
                </div>
              </div>
              <div className="space-y-1">
                <label
                  className="text-[10px] uppercase tracking-widest font-bold text-primary ml-1"
                  >Project Vision</label
                >
                <textarea
                  className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-primary-container rounded-md px-4 py-3 placeholder:text-stone-300 text-on-surface text-sm transition-all duration-300"
                  placeholder="DESCRIBE THE ESSENCE OF THE SHOOT..."
                  rows="3"
                ></textarea>
              </div>
              <div className="pt-4 flex flex-col md:flex-row gap-4">
                <button
                  className="editorial-gradient flex-1 py-4 rounded-md text-on-primary text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg shadow-primary/20 hover:brightness-110 transition-all duration-300"
                  type="submit"
                >
                  Submit Inquiry
                </button>
                <button
                  className="flex-1 py-4 border border-outline-variant/30 rounded-md text-primary text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-surface-container-high transition-all duration-300 group"
                  type="button"
                >
                  <span className="flex items-center justify-center gap-2">
                    Direct Message
                    <span className="material-symbols-outlined text-[16px]"
                      >arrow_forward</span
                    >
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
    <nav
      className="md:hidden fixed bottom-0 left-0 w-full bg-stone-50/70 dark:bg-stone-900/70 backdrop-blur-xl flex justify-around items-center px-4 pb-6 z-50 no-line-rule background-shift shadow-[0_-10px_40px_rgba(28,28,25,0.03)]"
    >
      <div
        className="flex flex-col items-center justify-center text-stone-400 dark:text-stone-500 pt-2 scale-95 active:scale-90 transition-transform"
      >
        <span className="material-symbols-outlined">grid_view</span>
        <span className="font-sans text-[10px] uppercase tracking-widest mt-1"
          >GALLERY</span
        >
      </div>
      <div
        className="flex flex-col items-center justify-center text-stone-400 dark:text-stone-500 pt-2 scale-95 active:scale-90 transition-transform"
      >
        <span className="material-symbols-outlined">camera</span>
        <span className="font-sans text-[10px] uppercase tracking-widest mt-1"
          >SESSIONS</span
        >
      </div>
      <div
        className="flex flex-col items-center justify-center text-stone-400 dark:text-stone-500 pt-2 scale-95 active:scale-90 transition-transform"
      >
        <span className="material-symbols-outlined">auto_stories</span>
        <span className="font-sans text-[10px] uppercase tracking-widest mt-1"
          >STORY</span
        >
      </div>
      <div
        className="flex flex-col items-center justify-center text-stone-900 dark:text-stone-50 border-t-2 border-[#715b3e] pt-2 scale-95 active:scale-90 transition-transform"
      >
        <span
          className="material-symbols-outlined"
          style={{ fontVariationSettings: '"FILL" 1' }}
          >mail</span
        >
        <span className="font-sans text-[10px] uppercase tracking-widest mt-1"
          >CONTACT</span
        >
      </div>
    </nav>
    </div>
  )
}
