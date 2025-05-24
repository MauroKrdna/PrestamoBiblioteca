import Navbar from "../components/Public/Navbar"
import HeroSection from "../components/Public/HeroSection"
import BenefitsSection from "../components/Public/BenefitsSection"
import FeaturedBooks from "../components/Public/FeaturedBooks"
import Footer from "../components/Public/Footer"


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
