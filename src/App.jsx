import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Properties from './components/Properties'
import About from './components/About'
import Blog from './components/Blog'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Properties />
      <About />
      <Blog />
      <Services />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
