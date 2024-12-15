
import { Phone, Mail, MapPin, Facebook, Twitter, Youtube, Instagram } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-zinc-800 rounded-lg p-6">
            <h3 className="text-blue-500 font-semibold mb-4 text-center">CONNECT WITH US</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 text-zinc-500" />
                <span className="text-zinc-300">+91 9567843340</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 text-zinc-500" />
                <span className="text-zinc-300">info@deepnetsoft.com</span>
              </div>
            </div>
          </div>

          <div className="border border-zinc-800 rounded-lg p-6 flex flex-col items-center justify-center">
            <div className="mb-4">
              <div className="flex items-center justify-center mb-4">
                <div className="w-10 h-10 bg-blue-500 transform rotate-45"></div>
              </div>
              <div className="text-center">
                <span className="text-blue-500 font-bold">DEEP</span>{' '}
                <span className="font-bold">NET</span>{' '}
                <span className="text-zinc-500">SOFT</span>
              </div>
            </div>
            <div className="flex gap-4">
              <Link to="#" className="text-zinc-500 hover:text-blue-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link to="#" className="text-zinc-500 hover:text-blue-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link to="#" className="text-zinc-500 hover:text-blue-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
              <Link to="#" className="text-zinc-500 hover:text-blue-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

           <div className="border border-zinc-800 rounded-lg p-6">
            <h3 className="text-blue-500 font-semibold mb-4 text-center">FIND US</h3>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-zinc-500 flex-shrink-0" />
              <span className="text-zinc-300 text-center">
                First floor, Geo infopark,<br />
                Infopark EXPY, Kakkanad
              </span>
            </div>
          </div>
        </div>
      </div>

 </div>
  )
}

