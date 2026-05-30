import React from 'react'

export const Footer = () => {
  return (
    <div>
        <footer className="w-full py-16 bg-[#f6f3ee] dark:bg-[#1c1c19] flex flex-col items-center gap-8 border-none">
        <div className="font-serif italic text-lg">L'ARTISTE</div>

        <div className="flex gap-8">
            <a
            className="font-['Manrope'] text-[10px] tracking-widest uppercase text-[#715b3e] underline underline-offset-4"
            href="#"
            >
            Editorial
            </a>

            <a
            className="font-['Manrope'] text-[10px] tracking-widest uppercase text-[#1c1c19]/60 hover:text-[#715b3e] transition-colors duration-500"
            href="#"
            >
            Instagram
            </a>

            <a
            className="font-['Manrope'] text-[10px] tracking-widest uppercase text-[#1c1c19]/60 hover:text-[#715b3e] transition-colors duration-500"
            href="#"
            >
            YouTube
            </a>

            <a
            className="font-['Manrope'] text-[10px] tracking-widest uppercase text-[#1c1c19]/60 hover:text-[#715b3e] transition-colors duration-500"
            href="#"
            >
            Privacy
            </a>

            <a
            className="font-['Manrope'] text-[10px] tracking-widest uppercase text-[#1c1c19]/60 hover:text-[#715b3e] transition-colors duration-500"
            href="#"
            >
            Terms
            </a>
        </div>

        <div className="font-['Manrope'] text-[10px] tracking-widest uppercase text-on-surface-variant/40 mt-4">
            © 2024 THE CURATED LIGHT STUDIO. ALL RIGHTS RESERVED.
        </div>
        </footer>
    </div>
  )
}
