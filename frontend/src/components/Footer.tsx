import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div> <div className="border-t border-zinc-800 bg-black ">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
            <div>
              © 2024 Deepnetsoft Solutions. All rights reserved.
            </div>
            <div className="flex gap-4">
              <Link to="/terms" className="hover:text-blue-500 transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="hover:text-blue-500 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div></div>
  )
}

export default Footer