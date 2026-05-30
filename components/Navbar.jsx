import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
export const Navbar = () => {
  const location = useLocation()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <div>
      <header className="fixed top-0 w-full z-40 bg-[#fcf9f4]/70 dark:bg-[#1c1c19]/70 backdrop-blur-md">
        <div className="flex justify-between items-center px-8 py-6 w-full max-w-screen-2xl mx-auto">
          
          <div className="flex items-center gap-4">
            <span
              className="material-symbols-outlined text-[#715b3e] dark:text-[#caae8d] cursor-pointer hover:opacity-80 transition-opacity"
              data-icon="menu"
              onClick={() => setIsSidebarOpen(true)}
            >
              menu
            </span>
            <Link to={'/'}>
            <span className="text-2xl font-serif italic text-[#1c1c19] dark:text-[#fcf9f4]">
              Candid Clouds
            </span>
            </Link>
          </div>

          <nav className="hidden md:flex gap-8 items-center">
            <Link
              className={`font-['Manrope'] uppercase tracking-widest text-[10px] text-[#715b3e] dark:text-[#caae8d] ${location.pathname === '/editorial' ? 'border-b border-[#715b3e]' : ''} pb-1`}
              to={"/editorial"}
            >
              Editorial
            </Link>

            <Link
              className={`font-['Manrope'] uppercase tracking-widest text-[10px] text-[#715b3e] dark:text-[#caae8d] ${location.pathname === '/gallery' ? 'border-b border-[#715b3e]' : ''} pb-1`}
              to={"/gallery"}
            >
              Gallery
            </Link>

            <Link
              className={`font-['Manrope'] uppercase tracking-widest text-[10px] text-[#715b3e] dark:text-[#caae8d] ${location.pathname === '/films' ? 'border-b border-[#715b3e]' : ''} pb-1`}
              to={"/films"}
            >
              Films
            </Link>

            <Link
              className={`font-['Manrope'] uppercase tracking-widest text-[10px] text-[#715b3e] dark:text-[#caae8d] ${location.pathname === '/contact' ? 'border-b border-[#715b3e]' : ''} pb-1`}
              to={'/contact'}
            >
              Contact Us
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-4 mr-4">
              <a
                className="text-[#1c1c19] dark:text-[#fcf9f4] opacity-80 hover:opacity-100 transition-opacity"
                href="#"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              <a
                className="text-[#1c1c19] dark:text-[#fcf9f4] opacity-80 hover:opacity-100 transition-opacity"
                href="#"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 19.5 12 19.5 12 19.5s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>

            <button className="bg-[#715b3e] text-white px-5 py-2 text-[10px] tracking-widest uppercase font-bold hover:scale-95 transition-transform duration-300 ease-out">
              Contact Us
            </button>
          </div>

        </div>
      </header>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity" 
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full w-72 z-50 bg-[#fcf9f4]/80 dark:bg-[#1c1c19]/80 backdrop-blur-xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform flex flex-col ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} border-r border-[#715b3e]/10 shadow-2xl`}
      >
        <div className="p-8 flex justify-between items-center border-b border-[#715b3e]/10">
           <span className="text-xl font-serif italic text-[#1c1c19] dark:text-[#fcf9f4]">
              Menu
           </span>
           <span 
             className="material-symbols-outlined text-[#1c1c19] dark:text-[#fcf9f4] cursor-pointer hover:opacity-70 transition-opacity"
             onClick={() => setIsSidebarOpen(false)}
           >
             close
           </span>
        </div>
        <div className="flex flex-col p-8 gap-8 mt-4">
          <Link to="/our-team" className="font-['Manrope'] uppercase tracking-[0.2em] text-[11px] text-[#1c1c19] dark:text-[#fcf9f4] hover:text-[#715b3e] dark:hover:text-[#caae8d] transition-colors" onClick={() => setIsSidebarOpen(false)}>Our Team</Link>
          <Link to="/join-our-team" className="font-['Manrope'] uppercase tracking-[0.2em] text-[11px] text-[#1c1c19] dark:text-[#fcf9f4] hover:text-[#715b3e] dark:hover:text-[#caae8d] transition-colors" onClick={() => setIsSidebarOpen(false)}>Join our Team</Link>
          <Link to="/behind-the-lens" className="font-['Manrope'] uppercase tracking-[0.2em] text-[11px] text-[#1c1c19] dark:text-[#fcf9f4] hover:text-[#715b3e] dark:hover:text-[#caae8d] transition-colors" onClick={() => setIsSidebarOpen(false)}>Behind the Lens</Link>
        </div>
      </div>
    </div>
  )
}