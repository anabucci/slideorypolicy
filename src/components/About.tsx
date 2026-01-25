import { useRef, useState, useEffect } from "react";
import image0 from "../assets/image1 (3).jpeg";
export function useInView(options = {}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); 
        }
      },
      options
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return { ref, isInView };
} 
const About = () =>{
    const { ref, isInView } = useInView({ threshold: 0.2 });
   const impact = [
  { value: "300+", label: "People Helped" },
  { value: "1,000+", label: "Resources Listed" },
  { value: "500+", label: "Residents Reached" },
  { value: "100+", label: "Resources Suggested" }
];

  const cards = [{
    
    'title':'Connect', 'desc': 'Our hub brings people together by making it easy to find and engage with local resources. We believe that when residents are connected, stronger bonds and thriving communities emerge.'}, 
  { 'title': 'Support', 'desc': 'A core goal of Resource-Salem is to help our community. The resources here are designed to provide help, guidance, and support to anyone who may need it.'}
   ,{ 'title': 'Change', 'desc': "We want to empower people to make a change. By submitting a resource or finding a volunteer opportunity, you can make a difference through Resource-Salem" }]
    return(
    <section  className="  h-full flex flex-col mb-30">

      <div
      
style={{
  
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
          backgroundImage: `url('${image0}')`

}}
      className="relative bg-blue-300 pt-30 pb-10 w-full min-h-screen justify-center text-center bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 items-center flex flex-col ">
        <div className="bg-blue-400/10 p-20 rounded-xl w-5/6 md:w-1/2 backdrop-blur-lg ">
  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-inter bg-gradient-to-r from-blue-400 via-sky-300 to-orange-400
 bg-clip-text text-transparent  mb-4 ">
          About Resource-Salem
        </h1>
           <p className="mt-5 text-sm md:text-xl  text-black font-poppins">
          The Community Resource Hub is dedicated to connecting residents with the wealth of support, services, and opportunities available in our community.
           Our mission is to make it easy for everyone to discover and access resources, from local non-profits and support programs to community events and initiatives. 
         
       
     </p>

        </div>
 
        {/* <ChevronDown  size={50}  className="absolute bottom-10 animate-bounce text-blue-700"></ChevronDown> */}
    </div>  
   <div className="mt-20 flex flex-col items-center  ">
     <h2 className="text-4xl md:text-6xl lg:text-3xl text-center text-blue-500 mb-5 font-poppins font-extrabold">
          OUR MISSION
        </h2>
    <div className="grid grid-cols-1  lg:grid-cols-3 gap-10 px-20 mt-5">
    
  {cards.map((entry: any) => 
    <div  className="p-5 border-blue-400 bg-gradient-to-r 
    to-blue-50 from-white rounded-md flex flex-col  hover:border-blue-500 border-2  shadow-xl hover:shadow-blue-500/20 
    shadow-black/10rounded-lg hover:scale-101 cursor-pointer 
    transition-all duration-200">
<p className="font-bold text-2xl mb-3 font-inter self-center ">{entry['title']}</p>

<div className={`rounded-2xl bg-gradient-to-r from-orange-500 to-orange-300  w-full  text-center py-0.5 text-white mb-3 `}></div>
  <div className="flex-1 flex" ></div>
<p className="text-gray-700 text-lg font-poppins"> {entry['desc']} </p>
<div className="flex flex-1 min-h-2"></div>

</div>
)}
       </div> 
       <div className=" bg-gradient-to-br from-blue-500 via-sky-500 to-blue-600 w-full  mt-20 p-20 flex justify-baseline flex-col ">
        <p className="font-inter text-orange-300 text-lg font-semibold">A MESSAGE FROM OUR FOUNDER </p>
        <p className=" font-inter font-bold text-3xl text-white mt-4 mb-4">Help Should Never Be Hard to Find</p>
        <p className="font-poppins text-lg text-white">Resource-Salem began with a simple realization: finding help in your own community should not be difficult. Too often, people in need are not able to find valuable programs, nonprofits, and services.

This platform was created to bridge that gap. Resource-Salem brings together local resources in one place, making it easier for residents to find support and get involved. By making information easier to find and participation easier to take part in, we can help strengthen the networks that already exist within our community. Thank you for being part of this vision. Together, we can make local support more visible, accessible, and impactful.</p>
       </div>
         <h2 className="text-4xl md:text-6xl lg:text-3xl text-center text-blue-500 mb-5 mt-20 font-poppins font-extrabold">
          OUR IMPACT
        </h2>

     
        <div
        ref={ref}
        className="flex flex-col  md:flex-row w-full gap-15 mt-5 px-20">
     <p className={`mt-10 text-xl md:text-2xl text-gray-900 font-poppins max-w-4xl text-left duration-700 leading-relaxed w-full md:w-1/2 transition-all  ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}>
         Since it's founding, Resouce-salem has had a meaningful impact in our community. The platform has connected hundreds of people to local programs and inspired many to make a change. Over the years, we have received  resource suggestions from the community that have made a valuable addition to our list. In the future, Resource-Salem hope to reach even more people and organizations, continuing to make an impact in our community.
        </p>

<div className={`grid grid-cols-2 md:w-1/2 w-full gap-6 self-center transition-all duration-700 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"} `}>
  {impact.map((item) => (
    <div
      className="flex items-center gap-4 rounded-tl-2xl rounded-br-2xl hover:scale-103
      bg-white/70 py-10 flex-col 
      border border-blue-200 p-5 shadow-md 
      hover:bg-orange-500/70  transition-all text-orange-500 hover:text-white"
    >
      <div className="text-3xl font-extrabold font-inter">
        {item.value}
      </div>

      <div className="text-lg font-poppins text-gray-700 leading-tight">
        {item.label}
      </div>
    </div>
  ))}

</div>

  </div>
      </div>


  
    </section>
    );
}
export default About;