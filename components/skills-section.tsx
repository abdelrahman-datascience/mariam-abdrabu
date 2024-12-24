'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skills = [
  { name: 'Virtual Assistance', level: 90 },
  { name: 'Media Research and Analysis', level: 85 },
  { name: 'Data Entry and Organization', level: 95 },
  { name: 'Document Creation and Editing', level: 90 },
  { name: 'File and Project Management', level: 88 },
  { name: 'Tutoring and Academic Support', level: 92 },
]

const SkillCard = ({ skill, index }: { skill: { name: string; level: number }; index: number }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (inView) {
      controls.start('visible')
      setProgress(skill.level)
    }
  }, [controls, inView, skill.level])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
        hidden: { opacity: 0, y: 50 }
      }}
    >
      <Card>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
          <Progress value={progress} className="w-full transition-all duration-1000 ease-out" />
        </CardContent>
      </Card>
    </motion.div>
  )
}

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection

