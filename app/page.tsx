import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ClassesSection } from "@/components/classes-section"
import { ContentSection } from "@/components/content-section"
import { SignupSection } from "@/components/signup-section"
import { ImpactSection } from "@/components/impact-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ClassesSection />
        <ContentSection />
        <SignupSection />
        <ImpactSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
