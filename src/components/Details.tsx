
import {ArrowLeft, MapPin, Clock, Globe, Accessibility, Check, Contact, SearchX} from "lucide-react";
import {useNavigate} from "react-router-dom";
import { useParams } from "react-router-dom";
import Data from "../components/data";
const Details = () => {
   const { name } = useParams();
const data = Data.find((entry) => entry['url_name'] == name);
    const navigate = useNavigate();
    // const location = useLocation();
    // const {name, desc, loc, date} = location.state || {};
    return (

      <section className="bg-gradient-to-br from-sky-200   via-blue-400 to-orange-400 ">
         <div className="flex items-center justify-center mt-35  rounded-2xl  m-15 ">
  <div className="flex flex-col p-10 w-full max-w-5xl border-white border-2  bg-white/40 rounded-xl ">

<p onClick={() => {
   const loc = location as unknown as {key?:string};
    loc.key != 'default'  ? navigate(-1) : navigate('/')}} className="gap-2 font-inter text-lg items-center 
 cursor-pointer hover:text-blue-600 flex flex-row w-min"> <ArrowLeft></ArrowLeft> Back  </p>
 {
   !data ?
     <div className="font-poppins mt-24 font-bold text-gray-900 text-3xl flex items-center justify-center flex-col">
  
  <SearchX size={90} className="mb-5 text-blue-400  "/>
   No resource found
   <button 
   onClick={()=>{navigate('/explore')}}
   className="mt-8
   cursor-pointer
   text-white bg-blue-400 rounded-2xl font-normal text-xl font-poppins flex items-center justify-center py-3 px-9">
Search Resources
   </button>
  </div> : 
<div>
     <h1 className="text-3xl text-blue-500 font-inter font-extrabold pt-7 "> {data?.name ?? ''} </h1>
    <div className={`rounded-2xl font-inter ${ data?.type == 'Event' ? " bg-gradient-to-r from-blue-500 to-sky-300 "  :  data?.type == 'Volunteering' ? " bg-gradient-to-r from-green-500 to-green-300  " : data?.type  == 'Educational' ? " bg-gradient-to-r from-yellow-500 to-yellow-300 " :" bg-gradient-to-r from-orange-500 to-orange-300  " } text-center max-w-30 py-1 text-white mb-3 mt-3`}>{data?.type ?? ''}</div>
     <p className="text-xl text-gray-600 font-poppins mt-7">{data?.desc ?? ''}


</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6  max-w-screen ">
   <div>
<p className="pt-6 items-center text-xl font-inter text-blue-500 flex flex-row gap-3 font-bold break-all"><MapPin></MapPin>Adress</p>
<p className="text-gray-600 font-poppins ml-9 font-bold mt-1 text-lg">{data?.location ?? ''} </p></div>
<div>
<p className="pt-3 items-center text-xl font-inter text-blue-500 flex flex-row gap-3 font-bold"> <Clock></Clock> Time</p>
<p className="text-gray-600 font-poppins ml-9 font-bold mt-2 text-lg"> {data?.time ?? ''}</p></div>
<div>
<p className="pt-3 items-center text-xl font-inter text-blue-500 flex flex-row gap-3 font-bold"> <Contact></Contact> Contact </p>
<p className="text-gray-600 font-poppins ml-9 font-bold mt-2 text-lg"> {data?.contact ?? ''}</p></div>
<div>
<p className="pt-3 items-center text-xl font-inter text-blue-500 flex flex-row gap-3 font-bold"> <Globe></Globe> Website</p>
<a href={data?.website} className="text-gray-600 font-poppins ml-9 font-bold mt-2 text-lg hover:text-orange-400 cursor-pointer  break-all ">  {data?.website ?? ''} </a></div>
<div>
<p className="pt-3 items-center text-xl font-inter text-blue-500 flex flex-row gap-3 font-bold"> <Accessibility></Accessibility> Accesibility</p>
{data?.wheelchair && <p  className="text-gray-600 font-poppins ml-9 font-bold mt-2 text-lg flex flex-row gap-2"> <Check className="text-green-300"/>  Wheelchair Accesible </p>}
{data?.parking && <p  className="text-gray-600 font-poppins ml-9 font-bold mt-1 text-lg flex flex-row gap-2"> <Check className="text-green-300 "></Check>Parking Availible </p>}</div>
</div>
     </div>
}


        </div>
   </div>

       </section>
    )
}

export default Details;