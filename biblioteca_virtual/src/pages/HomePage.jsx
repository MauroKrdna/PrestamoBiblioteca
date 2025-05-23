import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import BenefitsSection from "../components/BenefitsSection"
import FeaturedBooks from "../components/FeaturedBooks"
import Footer from "../components/Footer"


export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedBooks />
      <BenefitsSection />
      <Footer />
    </>
  )
}
