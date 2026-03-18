import About from "../Components/About";
import Experience from "../Components/Experience";
import Expertise from "../Components/Expertise";
import FavStack from "../Components/FavStack";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Motivation from "../Components/Motivation";
import PageTransition from "../components/PageTransition";
import Work from "../Components/Work";


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