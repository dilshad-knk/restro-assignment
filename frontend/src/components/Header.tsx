
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, Links } from 'react-router-dom'
import logo from "../../public/logo.png"
const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const links = [
    {nav : "HOME" , link : "#"},
   { nav : "MENU" , link : "#"},
   {nav : "MAKE A RESERVATION" , link : "#"},
    {nav : "CONTACT US" , link : "#",}
  ]

  return (
    <header className="px-section h-[100px] bg-secondary">
        <div className="h-full px-4">
          <div className="flex justify-between md:items-end h-full ">
          
            <Link to="/" className="flex items-end translate-y-[30%] gap-1 z-50">
              <img className='aspect-auto h-24' src={logo} alt="logo" />
              <div className="text-white">
                <span className="text-blue-500 text-3xl font-bold">DEEP</span>{' '}
                <span className="font-bold text-3xl">NET</span>
                <div className="text-zinc-400 text-3xl -mt-1">SOFT</div>
              </div>
            </Link>

            <nav className="hidden md:flex items-end  space-x-8 md:mb-3">
           
              {links.map((link : {nav: string,link:string},i)=>(
                <Link key={i} to={link.link} className="text-white White hover:text-brand transition-colors tracking-widest">
                    {link.nav}
                </Link> 
              ))}
            </nav>

            <button 
              className="md:hidden ms-auto text-zinc-400 hover:text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}

             
           
           
            </button>

 {isMobileMenuOpen && (
        <div className="md:hidden bg-zinc-900 mt-[100px] z-50">
          <nav className="px-4 py-4 bg-black flex flex-col space-y-4">
          {links.map((link : {nav: string,link:string},i)=>(
                <Link key={i} to={link.link} className="text-zinc-400 hover:text-brand transition-colors">
                    {link.nav}
                </Link> 
              ))}
          </nav>
        </div>
      )}          </div>
        </div>
      </header>
  )
}

export default Header