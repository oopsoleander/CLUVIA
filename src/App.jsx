import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Events from "./components/Events"
import AnimatedStats from "./components/AnimatedStats"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="app">

      {/* Navigation */}
      <Navbar />

      {/* Hero / Landing Section */}
      <Hero />

      {/* Event Listings */}
      <Events />

      {/* Social Proof / Stats */}
      <AnimatedStats />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <Footer />

    </div>
  )
}
