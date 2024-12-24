import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, FileText, Search, Database, PenTool, BookOpen } from 'lucide-react'

const services = [
  {
    title: 'Virtual Assistance',
    description: 'Administrative support, including managing schedules, emails, and meetings to enhance productivity.',
    icon: Calendar,
  },
  {
    title: 'Media Research',
    description: 'Conducting and compiling thorough research for media studies, journalism, and academic projects.',
    icon: Search,
  },
  {
    title: 'Research Assistance',
    description: 'Supporting researchers with data organization, formatting, and refining manuscripts for publication.',
    icon: FileText,
  },
  {
    title: 'Data Management',
    description: 'Organizing and maintaining databases, spreadsheets, and digital filing systems for efficient access.',
    icon: Database,
  },
  {
    title: 'Content Creation',
    description: 'Developing and editing professional content for various platforms and purposes.',
    icon: PenTool,
  },
  {
    title: 'Academic Support',
    description: 'Providing comprehensive assistance for academic research, writing, and publication processes.',
    icon: BookOpen,
  },
]

const ServicesSection = () => {
  return (
    <section id="services" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <service.icon className="h-5 w-5" />
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{service.description}</p>
                <Button variant="outline">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

