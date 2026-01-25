import { MapPin,Clock, SearchX, Filter, ArrowRight, Check } from "lucide-react";

import {useRef, useState} from "react"
import { useNavigate } from "react-router-dom";
import Data from "../components/data"
const Locations = () => {
  function HandleText (e: any)  {
    setText(e.target.value)
  }
  const [isOpen, setIsOpen] = useState(false);
  
const [text, setText] = useState('');

const [actualZip, setactualZip]=useState('');
const closeRef = useRef<HTMLDivElement | null>(null);
const buttonRef = useRef<HTMLButtonElement | null>(null)
const[zip, setZip] = useState('');
document.addEventListener('click', (event) => {
  if (buttonRef.current && closeRef.current && !closeRef.current.contains(event.target as Node) &&  !buttonRef.current.contains(event.target as Node)){
    setIsOpen(false)
  }
})
const [isWheelchair, setWheelchair] = useState(false);
const [isParking, setParking] = useState(false);
const [categories, setCategories] = useState( [{'type':'Volunteering', 'selected':false},

  {'type':'Educational', 'selected':false},
   {'type':'Event', 'selected':false},
 {'type':'Resource', 'selected':false},]);
 const resource = Data.slice(0,6);
const navigate=useNavigate();
const filteredResource = resource.filter((entry) => (categories.every((category) => !category['selected']) ? true : categories.some((cat) => cat['type'] == entry['type'] && cat['selected']) ) && (text == '' ? true : entry['name'].toLowerCase().includes
(text.toLowerCase())) && (actualZip == '' ? true : (entry['zip'] == actualZip ))&& (isParking ? entry.parking : true) && (isWheelchair ? entry.wheelchair : true)  );
    return (
<section id="explore" className="bg-white w-full mt-[-50px] mb-10 relative">
<div className="h-22"></div>
<div className="flex flex-row items-center">
    <h1 className=" text-4xl ml-6  m-5 gap-3 font-extrabold font-inter text-gray-800 ">Explore Resources</h1>
    <div className="flex flex-1"></div>
    <p onClick={() => navigate('/explore')} className="gap-2 ml-2 mt-2 hover:text-blue-700 cursor-pointer flex-row flex text-xl mr-7 font-inter text-blue-600">View All <ArrowRight></ArrowRight> </p>
    </div>
    <div className="flex flex-row gap-3 ml-6 mb-10 ">
       
   <button ref={buttonRef}
   onClick={() =>  isOpen ? setIsOpen(false) : setIsOpen(true)} className="flex items-center gap-2 px-6 py-2 rounded-xl border-2 border-orange-300 bg-white text-orange-400 hover:bg-orange-300/30  cursor-pointer transition-all duration-300 shadow-sm">
       
        
            Filter <Filter size={18} />
         
          </button>
         
        <input onChange={HandleText} placeholder="Search a resource..." className="border-2 border-gray-400 w-full focus:outline-blue-500 rounded-xl px-3 mr-9"></input>
    </div>
       {
            isOpen && (
             
              // <div ref={closeRef}
              // className="inset-0 fixed flex items-center justify-center"
              // onClick={() => setIsOpen(false)}>
              //   <div className="absolute bg-black opacity-30 inset-0"></div>
              // <div 
              // onClick={(e) => e.stopPropagation()}

              // className="absolute py-5  px-10 rounded-2xl bg-white border-2 border-gray-400 z-50">
              //   <div className=" px-10"></div>
              <div  ref={closeRef} className="absolute top-56 left-5 py-5 rounded-2xl bg-white border-2 border-gray-400 z-50">
                <div className=" px-10">
        <p className="font-bold text-gray-900 text-lg font-inter">Category</p>
        <div className="grid grid-cols-2 gap-2 mt-3 ">
        {
          categories.map((entry) =>
<div onClick={
  () => {
     setCategories(
  categories.map((category) => 
    category['type'] == entry['type'] ? {'type':category['type'], 'selected': !category['selected']} : category
  )
   
    );

   
  }
} className={`rounded-xl font-inter ${entry['selected'] ? "bg-blue-400" : 'bg-blue-500'}  cursor-pointer text-lg  font-semibold text-white text-center py-3 px-2 `}>
{entry['type']}
</div>
          )
        }
        </div>
        <p className="text-gray-900 font-bold text-lg mt-4 font-inter">Zip code</p>
        <div className="flex flex-row gap-2 mt-3">
<input onChange={(e) => setZip(e.target.value)} placeholder="Zip code" className="border-2 w-30 font-inter border-gray-400 px-4 py-3  rounded-lg">

</input>
<div
onClick={() =>  setactualZip(zip)}
className="bg-blue-500 text-white font-inter font-semibold flex items-center justify-center px-4 rounded-lg py-3 cursor-pointer hover:bg-blue-400">Filter</div>
        </div>
            {/* <p className="text-gray-900 font-bold text-lg mt-4 font-inter">Hours</p>
            <div className="flex flex-row  mt-3 gap-2 w-min">
<input placeholder="Start" className="border-2 font-inter w-42 border-gray-400 px-4 py-3  rounded-lg">

</input>
<input placeholder="End" className=" border-2 font-inter w-42 border-gray-400 px-4 py-3  rounded-lg">

</input>


            </div> */}
              <p className="text-gray-900 font-bold text-lg mt-4 font-inter">Accesibility</p>
            <div className="flex flex-col mt-3 gap-5 w-full">
<div className="flex flex-row gap-3 items-center">

  <div onClick={()=> setWheelchair(!isWheelchair)} className={`w-6 h-6  hover:border-blue-500 ${isWheelchair ? "border-blue-500" : "border-black"} border-2 cursor-pointer 
    flex items-center ${isWheelchair ? "bg-blue-500" : "bg-white"}`} >
    {isWheelchair && <Check className="text-white"></Check> }
  </div>
  <p  onClick={()=> setWheelchair(!isWheelchair)}  className="text-gray-900 text-lg  font-inter cursor-pointer ">Wheelchair Acess</p>
</div>
<div className="flex flex-row gap-3 items-center ">
  <div onClick={()=> setParking(!isParking)} className={`w-6 h-6 hover:border-blue-500 border-2 
  cursor-pointer flex items-center  ${isParking ? "bg-blue-500" : "bg-white"} ${isParking? "border-blue-500" : "border-black"}   `}>
     {isParking && <Check className="text-white"></Check> }
  </div>
  <p   onClick={()=> setParking(!isParking)} className="text-gray-900 text-lg font-inter cursor-pointer">Parking Availible</p>
      
</div>


            </div>
        
      </div>
              </div>
            )
          }
          {
          filteredResource.length == 0 ?
 
   
    <div className="font-poppins mt-20 mb-40 font-bold text-gray-900 text-3xl flex items-center justify-center flex-col">
  
  <SearchX size={90} className="mb-5 text-blue-400  "/>
   No resources found
  </div>
 
   :
     <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mx-6 mt-5 ">
   {
   filteredResource.map((entry: any) => 
    <div 
    onClick={() => {navigate(`/details/${entry.url_name}`)}}
     className=" p-5 rounded-md  border-blue-400 flex flex-col  hover:border-blue-500 border-2   shadow-xl hover:shadow-blue-500/20 shadow-black/10rounded-lg hover:scale-101 cursor-pointer transition-all duration-200">
<p className="font-inter font-bold text-2xl mb-3">{entry['name']}</p>
<div className={`rounded-2xl font-inter${entry['type'] == 'Event' ? " bg-gradient-to-r from-blue-500 to-sky-300 "  : entry.type == 'Volunteering' ? " bg-gradient-to-r from-green-500 to-green-300  " : entry.type == 'Educational' ? " bg-gradient-to-r from-yellow-500 to-yellow-300 " :" bg-gradient-to-r from-orange-500 to-orange-300  " } text-center max-w-30 py-1 text-white mb-3 `}>{entry['type']}</div>
<p className="text-gray-700 text-lg font-poppins">{entry['desc']}</p>
<div className="flex flex-1 min-h-2"></div>
<p className="flex flex-row items-center gap-2 text-blue-500 text-lg mb-1"> <MapPin></MapPin>{entry['location']}</p>
<p className=" flex flex-row gap-2 items-center text-blue-500 text-lg mt-1"> <Clock></Clock> {entry['time']}</p>
   
</div>
   )
}
</div>
    
}

</section>
    );
}
export default Locations;