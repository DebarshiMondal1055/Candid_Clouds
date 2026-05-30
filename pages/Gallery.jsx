import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

export const Gallery = () => {
  return (
    <main>
      <style>
        {`
          .swiper-button-next,   .swiper-button-prev {
            color: #fafafa !important;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            width: 3rem !important;
            height: 3rem !important;
            padding: 0.5rem !important;
            border-radius: 50%;
            transition: all 0.3s ease;
 
          }
          .swiper-button-next:hover, .swiper-button-prev:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: scale(1.05);
          }
          .swiper-button-next::after, .swiper-button-prev::after {
            font-size: 1.25rem !important;
            font-weight: 600;
          }
          .swiper-pagination-bullet {
            background: rgba(255, 255, 255, 0.4) !important;
            opacity: 1 !important;
            transition: all 0.3s ease;
          }
          .swiper-pagination-bullet-active {
            background: #fafafa !important;
            box-shadow: 0 0 8px rgba(255, 255, 255, 0.6);
            transform: scale(1.2);
          }
        `}
      </style>
      <section
        className="h-screen w-full relative overflow-hidden bg-surface-container"
      >
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay, EffectCoverflow]}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          speed={1200}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 1.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="w-full h-full"
        >
          <SwiperSlide className="w-full md:w-[70%] lg:w-[50%] h-full relative">
            <img
              alt="Editorial Portrait"
              className="w-full h-full object-cover"
              data-alt="high-end editorial portrait of a woman with dramatic golden hour lighting and soft shadows in a minimalist stone studio"
              src='src\assets\Gallery_Page\wedding_2.jpg'
            />
            <div
              className="absolute inset-0 bg-black/20 flex flex-col justify-end p-12 md:p-24"
            >
              <span
                className="font-label text-white/80 text-[10px] tracking-[0.3em] uppercase mb-4"
                >Summer Series 01</span
              >
              <h2
                className="font-headline text-white text-5xl md:text-8xl tracking-tighter leading-none italic"
              >
                Aurelian Muse
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full md:w-[70%] lg:w-[50%] h-full relative">
            <img
              alt="Editorial Portrait"
              className="w-full h-full object-cover"
              data-alt="cinematic fashion photography of a model wearing silk garments against a warm sand dune background at sunset"
                src='src\assets\Gallery_Page\wedding_3.webp'
            />
            <div
              className="absolute inset-0 bg-black/20 flex flex-col justify-end p-12 md:p-24"
            >
              <span
                className="font-label text-white/80 text-[10px] tracking-[0.3em] uppercase mb-4"
                >Textural Form</span
              >
              <h2
                className="font-headline text-white text-5xl md:text-8xl tracking-tighter leading-none italic"
              >
                Desert Silence
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full md:w-[70%] lg:w-[50%] h-full relative">
            <img
              alt="Editorial Portrait"
              className="w-full h-full object-cover"
              data-alt="close-up artistic photography of a person's profile bathed in soft warm light through a linen curtain texture"
               src='src\assets\Gallery_Page\wedding.jpg'
               />
            <div
              className="absolute inset-0 bg-black/20 flex flex-col justify-end p-12 md:p-24"
            >
              <span
                className="font-label text-white/80 text-[10px] tracking-[0.3em] uppercase mb-4"
                >Light Play</span
              >
              <h2
                className="font-headline text-white text-5xl md:text-8xl tracking-tighter leading-none italic"
              >
                Veiled Light
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full md:w-[70%] lg:w-[50%] h-full relative">
            <img
              alt="Editorial Portrait"
              className="w-full h-full object-cover"
              data-alt="sophisticated black and white portrait of a woman with high contrast and elegant composition in a luxury setting"
                src='src\assets\Gallery_Page\maternity.webp'

            />
            <div
              className="absolute inset-0 bg-black/20 flex flex-col justify-end p-12 md:p-24"
            >
              <span
                className="font-label text-white/80 text-[10px] tracking-[0.3em] uppercase mb-4"
                >Monochrome Soul</span
              >
              <h2
                className="font-headline text-white text-5xl md:text-8xl tracking-tighter leading-none italic"
              >
                Shadow Work
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full md:w-[70%] lg:w-[50%] h-full relative">
            <img
              alt="Editorial Portrait"
              className="w-full h-full object-cover"
              data-alt="dreamy fashion editorial photo of a person in a blooming flower field with soft ethereal morning light"
                src='src\assets\Gallery_Page\baby_shower.webp'
                />
            <div
              className="absolute inset-0 bg-black/20 flex flex-col justify-end p-12 md:p-24"
            >
              <span
                className="font-label text-white/80 text-[10px] tracking-[0.3em] uppercase mb-4"
                >Nature Bloom</span
              >
              <h2
                className="font-headline text-white text-5xl md:text-8xl tracking-tighter leading-none italic"
              >
                Flora Ethos
              </h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto">
          <header
            className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8"
          >
            <div>
              <span
                className="font-label text-primary text-[10px] tracking-[0.2em] uppercase"
                >Archive 2024</span
              >
              <h3
                className="font-headline text-4xl md:text-6xl text-on-surface mt-2 tracking-tighter"
              >
                The Gallery
              </h3>
            </div>
            <div className="flex gap-8 border-b border-outline-variant/30 pb-2">
              <button
                className="font-label text-[10px] tracking-widest uppercase text-primary font-bold"
              >
                ALL WORKS
              </button>
              <button
                className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant hover:text-primary transition-colors"
              >
                PORTRAITS
              </button>
              <button
                className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant hover:text-primary transition-colors"
              >
                CEREMONIES
              </button>
              <button
                className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant hover:text-primary transition-colors"
              >
                COMMERCIAL
              </button>
            </div>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-8">
            <div className="space-y-4">
              <div
                className="aspect-[4/5] bg-surface-container-low overflow-hidden"
              >
                <img
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  data-alt="minimalist fashion portrait in studio with soft beige lighting"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKF4mA2QhpWFPVCGQKxlffKSAR83YZz_6JoGY52A4HCqMZsxPnSUp0TnlKSeXjVmZyKQzBHqZ5tnd-AzyCSoj-gwAJHkX9wNXE4kdpHwIRFOHom6pDm1HMa9O6L1td7pS-SJfmlspndF19mcIaV0InYKaJxzM3-BI5X2wdSTbN9jdCTU_hxmJtJzKTC0S8YAK-cTMQcikNxUCJLTEaSjUJ_BFq5PINZe7cXgsADW9MvpEm5kSPS7Vk12D5E8gVPDToc8DcwHqUysed"
                />
              </div>
              <p className="font-headline italic text-on-surface text-lg">
                Silk &amp; Stone
              </p>
              <p
                className="font-headline italic text-on-surface-variant text-sm mt-2 mb-4 leading-relaxed opacity-80"
              >
                A study in the tactile harmony between raw architectural stone
                and the fluid grace of draped ivory silk.
              </p>
              <a
                className="font-label text-[10px] tracking-[0.2em] uppercase text-primary font-bold hover:opacity-70 transition-opacity"
                href="#"
                >EXPLORE</a
              >
            </div>
            <div className="space-y-4 md:mt-12">
              <div
                className="aspect-[3/4] bg-surface-container-low overflow-hidden"
              >
                <img
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  data-alt="street style fashion photography with warm golden afternoon light on classic architecture"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHrflUGMSiVwZsuI_ykySpjxZvf1waSUeRmaMDvmcl6I4iO5M_IENPdcp7EHG-BQWJA05P52dZU6Sw3_C83peAOuJnGVv1CwQLWDhO7iGeg99sRsY-6sftD8lnR6HkzQb30P_MW6mQOheRuFUsgPqlKJ327Ai5p8JLkw0tVnVTzm_Ugqk6rrk89hOmTHoCHSpT8HfyMPMOwV3skoARwdIZ_5xthXXIsJoDCtsy4iNv024VK4eDS12jqZwpw5CDx26b5BiXZ8zxLIV-"
                />
              </div>
              <p className="font-headline italic text-on-surface text-lg">
                Parisian Noon
              </p>
              <p
                className="font-headline italic text-on-surface-variant text-sm mt-2 mb-4 leading-relaxed opacity-80"
              >
                Capturing the fleeting warmth of the meridian sun as it dances
                across historic limestone facades in the heart of Paris.
              </p>
              <a
                className="font-label text-[10px] tracking-[0.2em] uppercase text-primary font-bold hover:opacity-70 transition-opacity"
                href="#"
                >EXPLORE</a
              >
            </div>
            <div className="space-y-4">
              <div
                className="aspect-[4/5] bg-surface-container-low overflow-hidden"
              >
                <img
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  data-alt="professional editorial portrait of a man in a tailored suit against a neutral interior background"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5hQrE0-YqVnv1YFlMtSjx9ojcZlPduzwrwiOT6zht0YNmWVnlxxWt9_0ue3T0rJuMu5SHTqkrXKisZRuZpWch6fNny_QQ6MOE4jVhTAz08TMSCcDvIQS46GEUNEYiDc23mkyHgOuTfwL-lMqGHlpQ9O5Cg_rqNEsPtIqfefkHvf_qYGTaYPQZE74f4CGz4c4WPaVXyccEtLlnOTUm3ut6GIKiEcXT08vpsHnH6aa9kH0UDWpu5RnaD8X7tUtouPBKNdL4XhH0o14A"
                />
              </div>
              <p className="font-headline italic text-on-surface text-lg">
                Modern Tailor
              </p>
              <p
                className="font-headline italic text-on-surface-variant text-sm mt-2 mb-4 leading-relaxed opacity-80"
              >
                An exploration of contemporary masculinity through the lens of
                traditional tailoring and sharp, intentional shadows.
              </p>
              <a
                className="font-label text-[10px] tracking-[0.2em] uppercase text-primary font-bold hover:opacity-70 transition-opacity"
                href="#"
                >EXPLORE</a
              >
            </div>
            <div className="space-y-4">
              <div
                className="aspect-[1/1] bg-surface-container-low overflow-hidden"
              >
                <img
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  data-alt="artistic macro shot of botanical elements with soft focus and cream tones"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM95xCTMZIWdrQ6IM2Td2pvi3yzCPSmJsYAIuh2Zw1TphRGzCAPoaGzaR71sEN5oq9l1yjMHzYTb1uQpES1Sul9FGPrndkJpuHO8cb5FaFU6AxU86YfcHIeNyb2epxrjpwW6-ot15kDzzdwiICV2pE34zjSDMi1W2p925w3MMKxbgvY13g629sGzMhgK8SHbp0YXi6yYwPB2ygBWp4xCNVZVKJwHpOmtS2R6NoiQ6JNvT-io45KpdrUCv9cjHGXvYMQdopYktHKFvw"
                />
              </div>
              <p className="font-headline italic text-on-surface text-lg">
                Ephemeral Bloom
              </p>
              <p
                className="font-headline italic text-on-surface-variant text-sm mt-2 mb-4 leading-relaxed opacity-80"
              >
                A macro perspective on the delicate geometry of nature, where
                sharp edges meet the softest morning light.
              </p>
              <a
                className="font-label text-[10px] tracking-[0.2em] uppercase text-primary font-bold hover:opacity-70 transition-opacity"
                href="#"
                >EXPLORE</a
              >
            </div>
            <div className="space-y-4 md:-mt-12">
              <div
                className="aspect-[4/5] bg-surface-container-low overflow-hidden"
              >
                <img
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  data-alt="elegant woman in vintage clothing walking through sun-drenched gardens"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPG1XBqVohcq5CKXnUxPQBBtFa_huwB2N2qFDdh-Iv--6NxJdeWwI6Bvw_Rk0LXd5g8NUsqPVqRDsbSaiLqi_mO7DoS7Lt6zQNbz06pqHFQ8ppAkvkeZUlxEGXfalleBg957YLFqpzDMKeR4Xv45t4MQXvwCIpl4ZeUGytYHFTxwNDcPBNSVUHEaHv0-TiD84_E1cre22kfJ17Ax4IjzRAjG074SIHqnaqoSpvZw4SLvUB92OiD_VaDPlVe6ClVD536BCbBgTtsLB5"
                />
              </div>
              <p className="font-headline italic text-on-surface text-lg">
                Heritage Walk
              </p>
              <p
                className="font-headline italic text-on-surface-variant text-sm mt-2 mb-4 leading-relaxed opacity-80"
              >
                Reliving the quiet grandeur of a bygone era through
                monochromatic textures and the stillness of a secret garden.
              </p>
              <a
                className="font-label text-[10px] tracking-[0.2em] uppercase text-primary font-bold hover:opacity-70 transition-opacity"
                href="#"
                >EXPLORE</a
              >
            </div>
            <div className="space-y-4">
              <div
                className="aspect-[3/4] bg-surface-container-low overflow-hidden"
              >
                <img
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  data-alt="abstract close-up of silk fabric moving in light air with golden reflections"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDyEuL3TaVhLSuAaFD9V37S3H5g4NHqH7JZqQmypNQrzb2Aqciw6PPxyxgciPDoGK6zBGF8j1suHOXMZugQn9nPD4j8MuukGVDt7dRJFi2lvDXxKjJJyfgq8g_QXzA7f_m7yvfRQrljwUwcLCo7Mo6aJ06A55QP4n8kaUEhRsPzJ4WSlwaOSWaPTiFUjM1El_y2LAoW2WY-bN15IFyvAaPPoKDp4gUfKsdyzJ31GDoPgC70eZpoJzJLtM5G80nvHuyg2roWg2TPJPp"
                />
              </div>
              <p className="font-headline italic text-on-surface text-lg">
                Liquid Gold
              </p>
              <p
                className="font-headline italic text-on-surface-variant text-sm mt-2 mb-4 leading-relaxed opacity-80"
              >
                Capturing the ethereal movement of molten light reflected in the
                ripples of fine-spun metallic threads.
              </p>
              <a
                className="font-label text-[10px] tracking-[0.2em] uppercase text-primary font-bold hover:opacity-70 transition-opacity"
                href="#"
                >EXPLORE</a
              >
            </div>
            <div className="space-y-4">
              <div
                className="aspect-[4/5] bg-surface-container-low overflow-hidden"
              >
                <img
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  data-alt="dramatic beauty portrait with soft focus and warm highlights on skin"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfSTJfNzD7j0idnRQJiCioIueCNfeT0aox-aeNfrkYQ6zw5X1sQ0NOVV7fPDE1rznXTOSW-vRVI9BsWgTKX9UI2764J9sbLonmpYCuRYq0VEsPIiNF7Li7yVgfHL7INWtjmxwXgzLYzguZqHm-wIx25A0aisWf6JcC-ohseW9YiYAOsEEKtSzl8XNwsFr2aysfiDQGic-bH0QB6PZFeJVFU40njL5kviT1XdR-vQy-Daj9BxwV4ogUUJPeA9rZQ0xqu1ydST377rkH"
                />
              </div>
              <p className="font-headline italic text-on-surface text-lg">
                Luminal Soul
              </p>
              <p
                className="font-headline italic text-on-surface-variant text-sm mt-2 mb-4 leading-relaxed opacity-80"
              >
                A profound look into the depth of the human gaze, illuminated by
                a singular source of warmth.
              </p>
              <a
                className="font-label text-[10px] tracking-[0.2em] uppercase text-primary font-bold hover:opacity-70 transition-opacity"
                href="#"
                >EXPLORE</a
              >
            </div>
            <div className="space-y-4">
              <div
                className="aspect-[3/4] bg-surface-container-low overflow-hidden"
              >
                <img
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  data-alt="fashion editorial model posing in high-end minimalist interior with travertine walls"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm0Fnn9JxI7NLMwCHDLnf6Xy9MjKdOuq4Wfh9uA9JHPM4TjWVwDE9SUPm_lzcnXWhwEs4HrDW1wUGi2AMtLpP2ZZsFR0EaYkjqtWKd7uBmFCTP1qs7CGQG5K25Zd9b0Np4mxTDrZjfkzGZcHw_hndBMBeg8nwikBdxURldJrglUTSkQkABqlpmoBrFrNaR3Tu9guIqYRRrN09jPtLutFFXL24Wc-r8oCAfR9hdUrgkrk1skhxhCNf_FV_Giy2J91Bp_06LAZimXCyn"
                />
              </div>
              <p className="font-headline italic text-on-surface text-lg">
                Archival Space
              </p>
              <p
                className="font-headline italic text-on-surface-variant text-sm mt-2 mb-4 leading-relaxed opacity-80"
              >
                The interaction of human form and rigid geometry within a space
                defined by light and travertine.
              </p>
              <a
                className="font-label text-[10px] tracking-[0.2em] uppercase text-primary font-bold hover:opacity-70 transition-opacity"
                href="#"
                >EXPLORE</a
              >
            </div>
            <div className="space-y-4 md:mt-12">
              <div
                className="aspect-[4/5] bg-surface-container-low overflow-hidden"
              >
                <img
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  data-alt="modern luxury building architecture at sunset with glowing golden glass windows"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-KshOh8AX1GXHKatIwF6Ck9XSeYPdDw_S1TBQXXnZPwvOoh53Skx3FzTVrPxxAJz_WAD4HaLPKoYeQz7LkbtgTEsHJ3tpVCOhMA7YI_jNqFNSr50bXzhENuP6LjDtOMNi1VK09r47UqE1NOzDwDgRjgydQ_ws3KD4eTMUVAcMVUfUcaunxHNBNKNvh9l6B64PXkhioY9P0CQhsLTw5pW_22dc4QpcmBwifhFIlDsTy7oQgWR7PPG7mflc69xDGhPwx67KqFn45S_L"
                />
              </div>
              <p className="font-headline italic text-on-surface text-lg">
                Linear Sunset
              </p>
              <p
                className="font-headline italic text-on-surface-variant text-sm mt-2 mb-4 leading-relaxed opacity-80"
              >
                Where modern glass meets the ancient sun, creating a linear
                symphony of gold and shadow.
              </p>
              <a
                className="font-label text-[10px] tracking-[0.2em] uppercase text-primary font-bold hover:opacity-70 transition-opacity"
                href="#"
                >EXPLORE</a
              >
            </div>
            <div className="space-y-4">
              <div
                className="aspect-[1/1] bg-surface-container-low overflow-hidden"
              >
                <img
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  data-alt="close up of hands holding a camera in soft warm afternoon light"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_pzZESK4tv-Jp39P7TuVCeYX_NdLE7EJCtOr9NpGAihD73KDm3dFqWBmu5TsJJ2Dw31DqJqlkqHIDX7z9TD2uFSm0xfcVYXysuFgbvJg0kgbiQj2w1cB_vYg1JgwxjfvLDmx6Wu75LBUbx88mxZJ53bvWY88Ior4cygP1Y8nW5E5fnRXXk3w4y2CwGA7HSwT_Sa6YgZozWKaWCpw-FKKwNjYlm0Ox2XmWdN72S4yVzFQvg7I3HA131oRqKItEZcf0TQFWwPz9_oEr"
                />
              </div>
              <p className="font-headline italic text-on-surface text-lg">
                The Observer
              </p>
              <p
                className="font-headline italic text-on-surface-variant text-sm mt-2 mb-4 leading-relaxed opacity-80"
              >
                A silent witness to the act of creation, focusing on the
                intimate connection between the eye and the lens.
              </p>
              <a
                className="font-label text-[10px] tracking-[0.2em] uppercase text-primary font-bold hover:opacity-70 transition-opacity"
                href="#"
                >EXPLORE</a
              >
            </div>
            <div className="space-y-4">
              <div
                className="aspect-[4/5] bg-surface-container-low overflow-hidden"
              >
                <img
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  data-alt="masculine editorial portrait with moody shadows and high contrast lighting"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjv6B1GaqCVIh9N270J7fgTHs3PIMhWGgOvOAmvub2e13KYEUZeh2zuH3OxpQO-Wb7IxHoscanJBUO7YWG1GPnkYSHpyphMbN4LgkXCq9fAJHpi7ljtQCr59B-MRU6F850wHLxybdGIAzMNuOQ178cwpHtQSUx_p8IjwC5wVOvN8dIMUE4kQ2RTm7Fp6pcV_3lvWaT1XRGQmqrPdJ8rVg3AnY2VZ-jyAXM6aFlb9MNtSA5dyhggkWR86ut4UkpkIQ4pq552aPWWIMi"
                />
              </div>
              <p className="font-headline italic text-on-surface text-lg">
                Quiet Gaze
              </p>
              <p
                className="font-headline italic text-on-surface-variant text-sm mt-2 mb-4 leading-relaxed opacity-80"
              >
                A moody contemplation of stillness and strength, set against a
                backdrop of deep, atmospheric shadows.
              </p>
              <a
                className="font-label text-[10px] tracking-[0.2em] uppercase text-primary font-bold hover:opacity-70 transition-opacity"
                href="#"
                >EXPLORE</a
              >
            </div>
            <div className="space-y-4 md:-mt-12">
              <div
                className="aspect-[3/4] bg-surface-container-low overflow-hidden"
              >
                <img
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  data-alt="fashion garments hanging in an art gallery like setting with soft beige tones"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTD27eCn7isvrWhHXwpkEittGZquM2Oj8huuS8QK03No610RNN9uPe-QJs9dQUswLAv3rxhDLvmNVnCYf_ATNsqKPILaUKm_BLAdqkP9hQY4xnvyV1UaXUszeBN4WrZpqSyXGvhecWkGyYieedoyg3B6R0rB90He3jHYRW9s5L2bEdacr3W14dQVpFQAcaHP4ysBBaI1GiSzVDZL--WaEv6YPoeCQSaY90Q4jOjqDf7giEWbAwpLqmzuO5BsEeJ_AMgSTs3qzcNlqZ"
                />
              </div>
              <p className="font-headline italic text-on-surface text-lg">
                Textile Art
              </p>
              <p
                className="font-headline italic text-on-surface-variant text-sm mt-2 mb-4 leading-relaxed opacity-80"
              >
                Treating garment design as sculpture, this piece captures the
                intricate dialogue between fabric and form.
              </p>
              <a
                className="font-label text-[10px] tracking-[0.2em] uppercase text-primary font-bold hover:opacity-70 transition-opacity"
                href="#"
                >EXPLORE</a
              >
            </div>
          </div>
          <div className="mt-32 flex justify-center">
            <button
              className="group relative px-12 py-4 text-primary overflow-hidden"
            >
              <span
                className="relative z-10 font-label tracking-[0.2em] uppercase text-[12px] font-bold"
                >Discover More Works</span
              >
              <div
                className="absolute bottom-0 left-0 w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"
              ></div>
            </button>
          </div>
        </div>
      </section>
      <section className="py-48 bg-surface-container-low relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-32">
            <span
              className="font-label text-primary text-[10px] tracking-[0.2em] uppercase"
              >Voices of the Muse</span
            >
            <h3
              className="font-headline text-4xl md:text-6xl text-on-surface mt-2 tracking-tighter"
            >
              What do our customers say
            </h3>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-start"
          >
            <div
              className="md:col-start-1 md:col-span-5 lg:col-span-4 translate-y-0 md:-translate-y-8"
            >
              <div
                className="p-10 bg-surface-container-lowest shadow-[0_20px_50px_rgba(28,28,25,0.05)] transition-transform hover:-translate-y-2 border border-outline-variant/10"
              >
                <p
                  className="font-headline text-lg italic text-on-surface leading-relaxed mb-6"
                >
                  "Their eye for light is unparalleled. Our campaign felt like a
                  collection of renaissance paintings rather than just
                  photographs."
                </p>
                <p
                  className="font-label text-[10px] tracking-widest uppercase text-primary font-bold"
                >
                  MARCUS V. | CREATIVE DIRECTOR
                </p>
              </div>
            </div>
            <div
              className="md:col-start-7 md:col-span-5 lg:col-start-6 lg:col-span-4 translate-y-0 md:translate-y-16"
            >
              <div
                className="p-8 bg-surface-container-high transition-transform hover:-translate-y-2 border border-outline-variant/10"
              >
                <p
                  className="font-headline text-md italic text-on-surface-variant leading-relaxed mb-4"
                >
                  "The experience was as serene as the results. They captured my
                  essence in a way no one else has."
                </p>
                <p
                  className="font-label text-[9px] tracking-widest uppercase text-tertiary"
                >
                  ELARA K. | PRIVATE CLIENT
                </p>
              </div>
            </div>
            <div
              className="md:col-start-2 md:col-span-6 lg:col-start-4 lg:col-span-6 translate-y-0 md:translate-y-40 lg:translate-y-32"
            >
              <div
                className="p-12 bg-surface shadow-[0_30px_60px_rgba(28,28,25,0.03)] transition-transform hover:-translate-y-2 border border-outline-variant/10"
              >
                <p
                  className="font-headline text-xl italic text-on-surface leading-snug mb-6"
                >
                  "L'Artiste doesn't just take photos; they curate an
                  atmosphere. Truly high-end editorial work that stands out in a
                  digital world."
                </p>
                <p
                  className="font-label text-[10px] tracking-widest uppercase text-primary font-bold"
                >
                  SARAH J. | VOGUE CONTRIBUTOR
                </p>
              </div>
            </div>
            <div
              className="hidden lg:block lg:col-start-10 lg:col-span-3 lg:-translate-y-12"
            >
              <div
                className="p-6 bg-surface-container-low outline outline-1 outline-outline-variant/20 transition-transform hover:-translate-y-2"
              >
                <p
                  className="font-headline text-sm italic text-stone-500 leading-relaxed mb-4"
                >
                  "Pure craftsmanship. Every frame is a masterpiece of light and
                  shadow."
                </p>
                <p
                  className="font-label text-[8px] tracking-widest uppercase text-stone-400"
                >
                  JULIEN D. | ARCHITECT
                </p>
              </div>
            </div>
          </div>
          <div className="h-16 md:h-64 lg:h-48"></div>
        </div>
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-primary-container opacity-10 blur-3xl rounded-full"
        ></div>
      </section>
    </main>
  )
}
