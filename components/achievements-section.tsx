import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Award, Book, Users } from 'lucide-react'

const achievements = [
  {
    title: 'Certificate of Achievement',
    description: 'Virtual Assistance from ALX (Score: 97.5)',
    icon: Award,
  },
  {
    title: 'ALX Arabia Tutor',
    description: 'Mentoring learners in AI Career Essentials and Virtual Assistant courses',
    icon: Users,
  },
  {
    title: 'Research Paper',
    description: 'Conditionally accepted by Arab Media & Society for publication',
    icon: Book,
  },
]

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <achievement.icon className="w-6 h-6 mr-2" />
                  {achievement.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AchievementsSection

