import { useEffect, useState } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import instance from "./axios/axios"
import MenuNav from "./components/MenuNav"

import { MenuSection } from "./components/MenuNav"
import MenuContent from "./components/MenuContent"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  const [menuSections, setMenuSections] = useState<MenuSection[]>([])
  const [activeSection, setActiveSection] = useState<MenuSection | null>( menuSections.length > 0 ? menuSections[0] : null);


  const fetchMenu = async()=>{

    try {
      const result = await instance.get('/menus')
      
      
      
      setMenuSections(result.data)
      
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
  
  
   fetchMenu()
  }, [])

  useEffect(() => {
  if (menuSections.length > 0) {
    setActiveSection(menuSections[0]);
  }
}, [menuSections]);
  
  return (
   <> 
   <div className="">
      <Header/>
      <Hero/>
       <MenuNav 
        sections={menuSections} 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />
      <MenuContent activeSection={activeSection}/>
      <Contact/>
      <Footer/>
   </div>
    </>
  )
}

export default App
