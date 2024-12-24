import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Mariam A. Abdrabu</h3>
          <p className="text-sm mb-2">Virtual Assistant and Media Researcher</p>
          <p className="text-sm">Empowering efficiency and insights through virtual support and research</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <nav className="flex flex-col space-y-2">
            <button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })} className="hover:underline text-left">Home</button>
            <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:underline text-left">About</button>
            <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:underline text-left">Services</button>
            <button onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })} className="hover:underline text-left">Portfolio</button>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:underline text-left">Contact</button>
          </nav>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <Mail className="mr-2 h-4 w-4" />
              <p className="text-sm">mariam.abdrabu2@gmail.com</p>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-4 w-4" />
              <p className="text-sm">Cairo, Egypt</p>
            </div>
            <div className="mt-4">
              <a 
                href="https://www.behance.net/mariamabdrabu01" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm hover:underline"
              >
                Behance: behance.net/mariamabdrabu01
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-gray-200">
        <p className="text-center text-sm">&copy; {new Date().getFullYear()} Mariam A. Abdrabu. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

