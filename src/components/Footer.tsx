import {Mail,} from "lucide-react";
const Footer = () => {
    return (
<div className="w-full   bg-black  p-10">
    <div className="flex md:flex-row flex-col gap-2  mb-2">
        <div className="flex flex-col ">
    <p className="text-purple-400 font-extrabold text-lg font-bricolage">About Us</p>
    <p className="text-pink-300 mt-2 text-md font-bricolage">Slideory is a fun, creative app that lets you play and create many stories.</p>
        </div>
        <div className="flex flex-1"></div>
        <div className="flex flex-col "> 
       <p className="text-purple-400 font-extrabold text-lg font-bricolage">Contact Us</p>
       <div className="flex mt-3 gap-2 flex-row text-pink-300 font-bricolage">
        <Mail size={20}/> contact@slideory.com
       </div>
      
       </div>
       </div>
</div>

    );
}

export default Footer;