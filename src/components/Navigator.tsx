
import { useNavigate, useLocation, } from "react-router-dom";
import {Menu, X} from "lucide-react";
import { useEffect, useState,  } from "react";
const Navigation = () => {
    const route = useLocation();
     const [scrolled, setScrolled] = useState(false);
     function handleScroll(){
        
setScrolled(window.scrollY > (window.innerHeight-(window.innerHeight*0.1)));
// if (window.scrollY > window.innerHeight){
//     setScrolled(false)
// }

     }
    useEffect(()=>{
        if (route?.pathname == '/'){
      
        document.addEventListener("scroll", handleScroll);
        } 
        return ()=>{
document.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const navigate = useNavigate();
    const tabs = ['Privacy Policy', 'Support', 'Terms of Service'
    ]
   const [isOpen, setIsOpen] = useState(false);
   
    return (
        <nav className={`fixed top-0 left-0 right-0 z-60 px-4 py-5 flex flex-row
            bg-purple-400/20
            rounded-bl-xl rounded-br-xl backdrop-blur-2xl
        ${!scrolled && route?.pathname == '/' ? '' : 'bg-purple-400  transition-all '}
        `}>
<p onClick={()=>{navigate('/')}} className=" cursor-pointer font-bold text-2xl ml-5 font-bricolage text-pink-400">Slideory</p>
<div className="flex-1"></div>
<div className="flex flex-row gap-10 mr-10">
<div className="md:flex flex-row  hidden gap-6">
    {tabs.map((entry) =>
<p onClick={() => navigate(entry == 'Privacy Policy' ? "/privacy-policy" : entry == 'Support' ? '/support' : "/terms-of-service")} className={`

font-inter
${!scrolled && route?.pathname == '/'? 'text-black': route?.pathname.includes(entry.toLocaleLowerCase()) ? 'text-black' : 'text-white'}
font-semibold cursor-pointer text-lg mr-2 hover:scale-101 hover:text-black rounded-md  transition-all`}>{entry}</p>
)}
</div>
<div onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white cursor-pointer flex justify-baseline"> { !isOpen ? <Menu></Menu> : <X></X>}


</div>
{isOpen && 
<div className="flex items-baseline flex-col md:hidden justify-baseline absolute left-0 mt-10 ">
    <div className=" bg-blue-200 p-3 w-screen rounded-b-xl ">
{ tabs.map((entry) =>
<p onClick={() => navigate(entry == 'Privacy Policy' ? "/privacy-policy" : entry == 'Support' ? '/support' : "/terms-of-service")} className="font-inter  cursor-pointer text-white text-lg ml-4 mb-3">{entry}</p>
)}
</div>
</div>
}
    
</div>
        </nav>
    )
}

export default Navigation;