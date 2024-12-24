'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: "What services do you offer as a Virtual Assistant?",
    answer: "As a Virtual Assistant, I offer a wide range of services including scheduling, email management, task organization, data entry, document creation and editing, and project management.",
  },
  {
    question: "What is your experience in Media Research?",
    answer: "I have extensive experience in media research, particularly focusing on media studies and digital communication. I've conducted in-depth research and analysis for various academic projects and have assisted in preparing research papers for publication.",
  },
  {
    question: "How can your Research Assistance benefit academics and researchers?",
    answer: "My Research Assistance services include data organization, formatting, and refining manuscripts for publication. I can help streamline the research process, ensure proper citation and formatting, and assist in preparing papers for submission to academic journals.",
  },
  {
    question: "What tools do you use for project management and organization?",
    answer: "I'm proficient in various project management and organization tools such as Trello, Asana, Microsoft Office Suite, and Google Workspace. I adapt to the tools preferred by my clients to ensure seamless collaboration.",
  },
  {
    question: "How do you ensure confidentiality when handling sensitive information?",
    answer: "I take confidentiality very seriously. I sign Non-Disclosure Agreements (NDAs) when required and follow strict data protection protocols. All client information is kept secure and is never shared with third parties.",
  },
]

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-md transition-shadow duration-300">
                <button
                  className="w-full px-6 py-4 flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-medium text-left">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 flex-shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="h-5 w-5 flex-shrink-0 ml-4" />
                    )}
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CardContent className="px-6 pb-4">
                        <p>{faq.answer}</p>
                      </CardContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection

