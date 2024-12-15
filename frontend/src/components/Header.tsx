
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
        <div className="container mx-auto px-4">
          <div className="flex justify-between ">
          
            <Link to="/" className="flex items-end translate-y-[43%] gap-1">
              <img className='aspect-auto h-14' src={logo} alt="logo" />
              <div className="text-white">
                <span className="text-blue-500 font-bold">DEEP</span>{' '}
                <span className="font-bold">NET</span>
                <div className="text-zinc-400 -mt-1">SOFT</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-end  space-x-8 md:mb-3">
           
              {links.map((link : {nav: string,link:string},i)=>(
                <Link key={i} to={link.link} className="text-white White hover:text-brand transition-colors tracking-widest">
                    {link.nav}
                </Link> 
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-zinc-400 hover:text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}

              {isMobileMenuOpen &&  <nav className="top-[100px] flex flex-col items-center space-x-8">
           
             
            </nav>}
            </button>

 {isMobileMenuOpen && (
        <div className="md:hidden bg-zinc-900">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
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