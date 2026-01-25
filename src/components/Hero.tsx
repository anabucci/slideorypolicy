 import { ArrowRight,  } from "lucide-react";
import image0 from "../assets/image1 (3).jpeg"
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return ( 
<section id='Hero' className="bg-gradient-to-b from-white to-sky-50 relative  " >
   
  <div className="absolute h-70 inset-0 bg-gradient-to-r from-blue-300 via-sky-300 to-orange-400 opacity-40 blur-3xl"></div>

  <div
  style={{gap: window.innerWidth*0.1}}
  className={`w-full h-screen flex justify-center items-center flex-row p-10`}>
    
    <div className="flex flex-col "> 
      <h1 className=" md:text-8xl text-7xl font-extrabold font-inter">
     Winston-Salem <span className="bg-gradient-to-r from-blue-300 via-sky-500 to-orange-400 bg-clip-text text-transparent ">
       <br/>Resources</span>
      </h1>
      <p className="text-gray-700 md:text-2xl text-xl mt-10 font-poppins ">
        Explore local programs, events and services in Winston-Salem.
        <br/>Find help, things to do, and ways to get involved.
      </p>
      <div className="flex flex-row">
        <button 
        onClick={() => {
          const explore = document.getElementById('explore');
          explore?.scrollIntoView({
            behavior: 'smooth',

          })
        }}
        className="pl-8 pr-8 md:pt-4 md:pb-4 py-3 mt-10 
        text-white items-center justify-center
        rounded-lg bg-blue-400 text-xl flex flex-row gap-2
        font-poppins ease-in-out
        hover:bg-blue-500 cursor-pointer duration-400 hover:scale-103 transition-all">
          Explore <ArrowRight className="mt-1"/>
        </button>
        <button 
        onClick={() => {
          navigate('/upcoming')
        }}
        className="items-center justify-center ml-8 pl-8 pr-8 md:pt-4 md:pb-4 py-3 mt-10 text-xl text-sky-500  row gap-3 
         hover:bg-sky-300/30 transition-all duration-200 
         font-poppins
         rounded-xl cursor-pointer border-sky-500 border-2 hover:scale-103 hidden lg:block">
          Upcoming 
        </button>
      </div>
    </div>
    <div className=" border-2 border-blue-500 hidden w-[25%] h-105 rounded-full lg:flex md:items-center lg:justify-center lg:text-2xl lg:text-center">
     <div
    style={{
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    // backgroundImage: `url('https://media.istockphoto.com/id/1160024091/photo/winston-salem-north-carolina-nc-downtown-skyline-aerial-at-sunset.jpg?s=2048x2048&w=is&k=20&c=iLoOEKcfmXZpAlGHDXCEZ5nV6SCvE9xktfaJcmEkpTA=')`
    backgroundImage: `url('${image0}')`
}}
    className=" hidden h-100 w-[97%] rounded-full  lg:flex md:items-center md:justify-center md:text-2xl md:text-center">
     
    </div>
    </div>
   </div>


</section>
  );
}
export default Hero;