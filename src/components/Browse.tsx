import {MapPin, Clock, Check, Filter, SearchX} from "lucide-react";
import { useState} from 'react';
import Data from '../components/data';
import { useNavigate } from "react-router-dom";
const Browse = () => {
  const resource = Data;

const [text, setText] = useState('');

const [actualZip, setactualZip]=useState('');
const [isOpen, setIsOpen] = useState(false);
const[zip, setZip] = useState('');
const navigation = useNavigate();
const [isWheelchair, setWheelchair] = useState(false);
const [isParking, setParking] = useState(false);
const [categories, setCategories] = useState( [{'type':'Volunteering', 'selected':false},

  {'type':'Educational', 'selected':false},
   {'type':'Event', 'selected':false},
 {'type':'Resource', 'selected':false},]);
 const filteredResource =  resource.filter((entry) => (categories.every((category) => !category['selected']) ? true : categories.some((cat) => cat['type'] == entry['type'] && cat['selected']) ) && (text == '' ? true : entry['name'].toLowerCase().includes
(text.toLowerCase())) && (actualZip == '' ? true : (entry['zip'] == actualZip ))&& (isParking ? entry.parking : true) && (isWheelchair ? entry.wheelchair : true)  );
return (

<section className="  h-full flex flex-col mb-10">
  <div className="bg-blue-300 w-full h-min justify-center text-center bg-gradient-to-r from-blue-300 via-sky-200 to-orange-300 items-center flex flex-col pt-25">
  <h1 className=" text-7xl font-extrabold  text-gray-900 font-inter">
    Explore 
    </h1>  
    <p className="mt-5 mx-3 text-lg pb-10 text-gray-700 font-poppins ">Browse community resources, programs, and opportunities near you. 
      <br/>
      Discover what’s available and find the support or activities that fit your needs.</p>
    </div>
    <div className="flex flex-row mt-5"> 
      <button onClick={() =>  isOpen ? setIsOpen(false) : setIsOpen(true)} className="ml-5 flex items-center gap-2 px-6 md:hidden py-2 rounded-xl border-2 border-blue-400 bg-white text-blue-700 hover:bg-blue-500/30  cursor-pointer transition-all duration-300 shadow-sm">
       
        
            Filter <Filter size={18} />
         
          </button>
    <input onChange={(e) => setText(e.target.value) } placeholder="Search for a resource..." className=" font-poppins border-2 ml-2 md:ml-5 w-full mr-6  border-gray-400 rounded-lg py-2 px-3"></input>
    </div>
    <div className="flex flex-row mt-5">
      <div className="md:hidden">
      {  isOpen && (
              <div className="absolute top-96 left-5 py-5 rounded-2xl bg-white border-2 border-gray-400 z-50">
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
          </div>
      <div className="md:w-200 md:px-10 hidden md:block ">

        <p className="font-bold text-gray-900 text-lg font-inter">Category</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3 w-85">
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
} className={`rounded-xl font-inter ${entry['selected'] ? "bg-orange-300" : 'bg-blue-500'} text-md cursor-pointer font-semibold text-white text-center py-3`}>
{entry['type']}
</div>
          )
        }
        </div>
        <p className="text-gray-900 font-bold text-lg mt-4 font-inter">Zip code</p>
        <div className="flex flex-row gap-2 mt-3">
<input onChange={(e) => setZip(e.target.value)} placeholder="Zip code" className="border-2 font-inter border-gray-400 px-4 py-3  rounded-lg">

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
      
{
filteredResource.length == 0 ? 
<div className="flex-1 md:flex-none flex items-center justify-center"> 
<div className="font-poppins  font-bold text-gray-900 text-3xl flex items-center justify-center flex-col">
  <SearchX size={90} className="mb-5 text-blue-400  "/>
  No resources found
  </div>
  </div> :
    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 mx-6  ">
      {
filteredResource.map((entry: any) => 
    <div onClick={()=> {navigation(`/details/${entry.url_name}`)}} className="p-5 border-blue-400 bg-gradient-to-r
    to-blue-50 from-white rounded-md flex flex-col  hover:border-blue-500 border-2  shadow-xl hover:shadow-blue-500/20 
    shadow-black/10rounded-lg hover:scale-101 cursor-pointer 
    transition-all duration-200">
<p className="font-bold text-2xl mb-3 font-inter">{entry['name']}</p>
<div className={`rounded-2xl ${entry['type'] == 'Event' ? " bg-gradient-to-r from-blue-500 to-sky-300 "  : entry.type == 'Volunteering' ? " bg-gradient-to-r from-green-500 to-green-300  " : entry.type == 'Educational' ? " bg-gradient-to-r from-yellow-500 to-yellow-300 " :" bg-gradient-to-r from-orange-500 to-orange-300  " }  :  text-center max-w-30 py-1 text-white mb-3 `}>{entry['type']}</div>
<p className="text-gray-700 text-lg font-poppins">{entry['desc']}</p>
<div className="flex flex-1 min-h-2"></div>
<p className="flex flex-row items-center gap-2 text-blue-500 text-lg mb-1 font-inter"> <MapPin></MapPin>{entry['location']}</p>
<p className=" flex flex-row gap-2 items-center font-inter text-blue-500 text-lg mt-1"> <Clock></Clock> {entry['time']}</p>
</div>
)}

 </div>
}
    </div>
</section> 
)
}
export default Browse;