import React from 'react';
import bg from "../../public/bg-banner-arts.png";

export interface MenuSection {
    _id: string;
    menuName: string;
    description: string;
    items: [];
}
  
interface MenuNavProps {
    sections: MenuSection[];
    activeSection: MenuSection | null;
    setActiveSection: (section: MenuSection) => void;
}
  
export default function MenuNav({ sections, activeSection, setActiveSection }: MenuNavProps) {

  console.log(activeSection, 'hhhh');
  
    return (
        <div className="px-4 relative h-32 overflow-hidden">
          
            <img 
                className="absolute inset-0 w-full h-full object-cover" 
                src={bg} 
                alt="links"
            />
          
            <div className="absolute inset-0 bg-black/60"></div>
        
            <div className="relative z-10 flex h-full justify-center items-center space-x-4 flex-wrap">
                {sections.map((section) => (
                    <button
                        key={section._id}
                        onClick={() => setActiveSection(section)}
                        className={`px-8 py-3 border-2 border-brand hover:text-white hover:bg-brand rounded-md text-lg font-semibold transition-colors ${
                            activeSection?._id === section._id
                                ? 'bg-blue-500 text-white'
                                : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                        }`}
                    >
                        {section.menuName}
                    </button>
                ))}
            </div>
        </div>
    );
}




