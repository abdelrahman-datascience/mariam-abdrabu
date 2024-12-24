'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { motion } from 'framer-motion'

const AboutSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="about" className="py-16">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-6">
                <p className="mb-4">
                  Supporting professionals and researchers with organized, efficient, and innovative solutions that drive impactful outcomes.
                </p>
                <h3 className="text-xl font-semibold mb-2">Mission Statement</h3>
                <p className="mb-6">
                  My mission is to empower professionals and researchers by providing top-notch virtual assistance and media research services. I strive to deliver organized, efficient, and innovative solutions that drive impactful outcomes, enabling my clients to focus on their core competencies while I handle the crucial behind-the-scenes work.
                </p>
                <Button 
                  onClick={scrollToContact}
                  className="transform transition-all duration-300 hover:scale-105"
                >
                  Contact Me
                </Button>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative w-80 h-80">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/squarephoto.photoeditor.photosquare_2024102612353504-WA3GyjpeidPQ3dzR55QV4WyTjQ8aqG.png"
                alt="Mariam A. Abdrabu"
                fill
                className="object-cover rounded-2xl border-4 border-muted transition-transform duration-300 hover:scale-105"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

