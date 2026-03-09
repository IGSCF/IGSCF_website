import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Welcome from './components/Welcome'
import Programs from './components/Programs'
import Gallery from './components/Gallery'
import Connect from './components/Connect'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf6f0]">
      <Navbar />
      <Hero />
      <Welcome />
      <Programs />
      <Gallery />
      <Connect />
      <Testimonials />
      <Footer />
    </div>
  )
}
