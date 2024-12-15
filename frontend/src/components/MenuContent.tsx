
import { MenuSection } from './MenuNav';
import drinks1 from "../../public/drinks1.png"
import drinks2 from "../../public/drinks2.png"
import bg from "../../public/bg-grain.png"
interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuContentProps {
  activeSection: MenuSection | null;
}




export default function MenuContent({activeSection}: MenuContentProps) {
  return (
<div  style={{ backgroundImage: `url(${bg})` }}>
    <div className="relative w-full max-w-4xl mx-auto p-8">
    
      <div className="absolute -left-11 -top-11 z-50">
        <img
          src={drinks1}
          alt="Decorative cocktail"
          width={150}
          height={120}
          className="object-contain"
        />
      </div>

      
      <div className="relative border border-zinc-700 p-8 rounded-sm bg-black/40">
       
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
            <span className="inline-block mx-4">—</span>
           {activeSection?.description}
            <span className="inline-block mx-4">—</span>
          </h2>
        </div>

     
        <div className="space-y-8">
            {activeSection?.items.map((item : MenuItem,i)=>(
                <>

                 <div key={i} className="flex justify-between items-baseline">
            <div className="flex-1">
              <div className="flex items-baseline">
                <h3 className="text-xl text-white font-semibold">{item.name}</h3>
                <div className="flex-1 mx-2 border-b border-dotted border-zinc-700"></div>
                <span className="text-white font-semibold">${item.price}</span>
              </div>
              <p className="text-sm text-zinc-400 mt-1">
               {item.description}
              </p>
            </div>
          </div>
                </>
            ))}
         

         
        </div>

        
        <div className="absolute -right-4 -bottom-4">
          <img
            src={drinks2}
            alt="Decorative cocktail"
            width={100}
            height={150}
            className="object-contain"
          />
        </div>
      </div>
    </div>
</div>
  );
}

