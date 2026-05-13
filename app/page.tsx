import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ServicesSection } from "@/components/services-section"
import { WebProjectsSection } from "@/components/web-projects-section"
import { WorkflowsSection } from "@/components/workflows-section"
import { GallerySection } from "@/components/gallery-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ParticlesBackground } from "@/components/particles-background"

export default function Home() {
  return (
    <main className="relative">
      <ParticlesBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <WebProjectsSection />
      <WorkflowsSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
