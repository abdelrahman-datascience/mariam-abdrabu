'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { motion } from 'framer-motion'

const portfolioItems = [
  {
    title: 'Virtual Assistant Services',
    description: 'Successfully managed scheduling, Zoom meetings, and administrative tasks for professionals to streamline their workflow.',
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    title: 'Media Research',
    description: 'Conducted in-depth research and analysis for academic projects, focusing on media studies and digital communication.',
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    title: 'Research Assistance',
    description: 'Assisted in editing, formatting, and revising research papers, including work conditionally accepted for publication by Arab Media & Society.',
    image: '/placeholder.svg?height=400&width=600',
  },
]

const PortfolioSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="portfolio" className="py-16">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card 
                className="overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    width={600} 
                    height={400} 
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                  >
                    <Button 
                      variant="secondary"
                      className="transform transition-all duration-300 hover:scale-110"
                    >
                      View Project
                    </Button>
                  </motion.div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection

