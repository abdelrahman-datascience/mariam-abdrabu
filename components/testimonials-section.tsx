'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    name: 'Mohamed A.',
    title: 'E-commerce Manager',
    text: "Mariam's organizational skills and dedication have made a remarkable difference in managing our projects.",
  },
  {
    name: 'Amr H.',
    title: 'Researcher',
    text: "Her support in editing and refining my research papers was invaluable and highly professional.",
  },
  {
    name: 'Sarah K.',
    title: 'Marketing Director',
    text: "Mariam's virtual assistance has significantly improved our team's productivity and workflow.",
  },
  {
    name: 'Ahmed R.',
    title: 'Academic Professor',
    text: "Her media research skills are exceptional. Mariam consistently delivers high-quality, insightful analysis.",
  },
  {
    name: 'Laila M.',
    title: 'Startup Founder',
    text: "Working with Mariam has been a game-changer for our startup. Her efficiency is unmatched.",
  },
]

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(timer)
  }, [currentIndex])

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section id="testimonials" className="py-16 bg-muted w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Clients Say
        </motion.h2>
        <div className="relative w-full max-w-6xl mx-auto">
          <Card className="bg-background shadow-lg">
            <CardContent className="p-6 sm:p-8 md:p-12">
              <Quote className="text-primary w-12 h-12 mb-6 mx-auto" />
              <div className="relative h-[200px] sm:h-[150px] overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    className="absolute w-full"
                  >
                    <blockquote className="text-center">
                      <p className="text-lg sm:text-xl md:text-2xl mb-4 italic">"{testimonials[currentIndex].text}"</p>
                      <footer className="mt-4">
                        <p className="font-semibold text-lg">{testimonials[currentIndex].name}</p>
                        <p className="text-sm md:text-base text-muted-foreground">{testimonials[currentIndex].title}</p>
                      </footer>
                    </blockquote>
                  </motion.div>
                </AnimatePresence>
              </div>
            </CardContent>
          </Card>
          <div className="flex justify-center mt-8 space-x-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

