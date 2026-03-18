
import Expertise from '../components/Expertise'
import FavStack from '../components/FavStack'
import Motivation from '../components/Motivation'
import PageTransition from '../components/PageTransition'
import About from '../Components/About'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import Work from '../Components/Work'
import Experience from '../Components/Experience'

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <Work />
      <Motivation />
      <Experience/>
      <Expertise />
      <FavStack />
      <About />
      <Footer />
    </PageTransition>
  )
}