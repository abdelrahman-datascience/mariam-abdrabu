'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

const HeroSection = () => {
  const [text, setText] = useState('')
  const fullText = "Empowering efficiency and insights through virtual support and research"

  useEffect(() => {
    let i = 0
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingEffect)
      }
    }, 50)

    return () => clearInterval(typingEffect)
  }, [])

  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-screen text-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/10 to-background -z-10"
      />
      <motion.h1 
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Mariam A. Abdrabu
        <motion.span
          className="absolute -top-6 -right-6 text-primary"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles size={24} />
        </motion.span>
      </motion.h1>
      <motion.h2 
        className="text-2xl md:text-3xl mb-6 text-muted-foreground"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Virtual Assistant and Media Researcher
      </motion.h2>
      <motion.p 
        className="text-lg mb-8 h-20 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {text}
      </motion.p>
      <motion.div
        className="space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Button asChild size="lg" className="group">
          <a href="#portfolio">
            View Portfolio
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
        <Button variant="outline" asChild size="lg">
          <a href="#contact">Contact Me</a>
        </Button>
      </motion.div>
      <motion.div
        className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      />
    </section>
  )
}

export default HeroSection

