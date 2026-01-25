
import { useNavigate, useLocation } from "react-router-dom";
import {Menu, X} from "lucide-react";
import { useEffect, useState } from "react";
const Navigation = () => {
    const route = useLocation();
    useEffect(()=>{
        console.log('route', route);
    });
    const navigate = useNavigate();
    const tabs = ['Explore', 'About', 'Blog', 'Upcoming', 'Reference'
    ]
   const [isOpen, setIsOpen] = useState(false);
   
    return (
        <nav className="fixed 
       
        top-0 left-0 right-0 z-60 px-4 py-5 flex flex-row bg-blue-400/60 backdrop-blur-2xl   rounded-bl-xl rounded-br-xl">
<p onClick={()=>{navigate('/')}} className="text-blue-500 cursor-pointer font-bold text-2xl ml-5 font-inter ">Resource-Salem</p>
<div className="flex-1"></div>
<div className="flex flex-row gap-10 mr-10">
<div className="md:flex flex-row  hidden gap-6">
    {tabs.map((entry) =>
<p onClick={() => navigate(entry == 'Upcoming' ? "/upcoming" : entry == 'About' ? '/about' :  entry == 'Blog' ? '/blog' : entry == 'Reference' ? '/reference': "/explore")} className={`font-inter
${route?.pathname.includes(entry.toLocaleLowerCase()) ? 'text-orange-300' : 'text-white'}
font-semibold cursor-pointer text-lg mr-2 hover:scale-101 hover:text-orange-300 rounded-md  transition-all`}>{entry}</p>
)}
</div>
<div onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white cursor-pointer flex justify-baseline"> { !isOpen ? <Menu></Menu> : <X></X>}


</div>
{isOpen && 
<div className="flex items-baseline flex-col md:hidden justify-baseline absolute left-0 mt-10 ">
    <div className=" bg-blue-200 p-3 w-screen rounded-b-xl ">
{ tabs.map((entry) =>
<p onClick={() => navigate(entry == 'Upcoming' ? "/upcoming" : entry == 'About' ? '/about' :  entry == 'Blog' ? '/blog' : entry == 'Reference' ? '/reference': "/explore")} className="font-inter  cursor-pointer text-white text-lg ml-4 mb-3">{entry}</p>
)}
</div>
</div>
}
    
</div>
        </nav>
    )
}

export default Navigation;
