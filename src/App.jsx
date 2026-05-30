import './App.css'
import { Navbar } from '../components/Navbar.jsx' 
import { Footer } from '../components/Footer.jsx'
import { Landing } from '../pages/Landing.jsx'
import { Route, Routes } from 'react-router-dom'
import { Gallery } from '../pages/Gallery.jsx'
import { Films } from '../pages/Films.jsx'
import { Contact } from '../pages/Contact.jsx'
import { Editorial } from '../pages/Editorial.jsx'
import { OurTeam } from '../pages/OurTeam.jsx'
function App() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container"> 
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/films" element={<Films/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/editorial" element={<Editorial/>} />
        <Route path="/our-team" element={<OurTeam/>}/>
      </Routes>

      <Footer />
    </div>
  )
}

export default App