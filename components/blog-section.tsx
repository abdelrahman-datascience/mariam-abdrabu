import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const blogPosts = [
  {
    title: "The Intersection of Media Studies and Virtual Assistance",
    summary: "Exploring how media research skills enhance virtual assistance services...",
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    title: "How Research Assistants Drive Academic Excellence",
    summary: "Discussing the crucial role of research assistants in academic success...",
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    title: "Digital Tools for Effective Media Research",
    summary: "A comprehensive guide to the latest digital tools for media research...",
    image: '/placeholder.svg?height=400&width=600',
  },
]

const BlogSection = () => {
  return (
    <section id="blog" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden">
              <Image 
                src={post.image} 
                alt={post.title} 
                width={600} 
                height={400} 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-bold mb-2">{post.title}</h3>
                <p className="text-sm mb-4">{post.summary}</p>
                <Button variant="outline">Read More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection

