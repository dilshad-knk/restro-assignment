import React from 'react'
import bg from '../../public/hero.jpeg'

const Hero = () => {
  return (
    
<>

<div className="relative">

  <img 
    src={bg}
    alt="Menu Hero" 
    className="absolute inset-0 w-full h-full object-cover"
  />
  

  <div className="absolute inset-0 bg-black/60 z-10"></div>
  

  <div className="container mx-auto px-4 py-16 min-h-[400px] flex flex-col items-center justify-center relative z-20">
    <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 md:mb-6 text-center">MENU</h1>
    <p className="text-base md:text-lg text-zinc-200 text-center max-w-2xl">
      Please take a look at our menu featuring food, drinks, and brunch. If you&apos;d like to
      place an order, use the &quot;Order Online&quot; button located below the menu.
    </p>
  </div>
</div>
</>
  )
}

export default Hero