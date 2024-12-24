import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import SkillsSection from '@/components/skills-section'
import PortfolioSection from '@/components/portfolio-section'
import ServicesSection from '@/components/services-section'
import AchievementsSection from '@/components/achievements-section'
import TestimonialsSection from '@/components/testimonials-section'
import ContactSection from '@/components/contact-section'
import BlogSection from '@/components/blog-section'
import FAQSection from '@/components/faq-section'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <ServicesSection />
      <AchievementsSection />
      <TestimonialsSection />
      <ContactSection />
      <BlogSection />
      <FAQSection />
    </div>
  )
}

