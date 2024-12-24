import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin } from 'lucide-react'

const ContactSection = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="mr-2" />
                  <p>mariam.abdrabu2@gmail.com</p>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2" />
                  <p>Cairo, Egypt</p>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold mb-2">Connect with me:</h4>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/mariam-a-abdrabu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
                  <a href="https://www.behance.net/mariamabdrabu01" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Behance</a>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <form className="space-y-4">
                <div>
                  <Input type="text" placeholder="Your Name" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" />
                </div>
                <div>
                  <Textarea placeholder="Your Message" />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

