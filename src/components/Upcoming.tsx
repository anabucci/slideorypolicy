import "react-router-dom";
import image0 from '../assets/Untitled design (9).png'
import { useNavigate } from "react-router-dom";
import Data from '../components/data';


const Upcoming = () => {
  const navigation = useNavigate();
 const data = Data;
return (

<section className="  h-full flex flex-col mb-10">
  <div

style={{
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url('${image0}')`
}}
  className="bg-blue-300 w-full h-min justify-center text-center bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 items-center flex flex-col pt-25">
  <h1 className=" text-7xl font-extrabold  text-gray-900 font-inter">
Upcoming
    </h1>  
    <p className="mt-5 text-xl pb-10 text-white font-bold font-poppins">
      Browse upcoming events happening in Winston-Salem.
      <br/>
     </p>
   
  
    </div>
     <div className="flex flex-col mt-5 ">
  {
data.filter((entry) => entry.date.toLowerCase() != 'ongoing').map((entry) => {
      return <div className="flex flex-row mx-15 items-center md:mb-0 mb-5 mr-10 ">
      <div className="flex flex-col items-center justify-center m-3 mb-10  w-15">
  <p className="font-poppins text-gray-500 text-xl mb-3">  {entry['month']} </p>
<p className="font-poppins text-black font-bold text-5xl">  {entry['day']} </p>
      </div>
<div className="ml-5 bg-blue-400 w-1 h-12 rounded-xl "></div>
<div   onClick={()=> {navigation(`/details/${entry.url_name}`)}}  className="ml-8 flex flex-col  justify-baseline cursor-pointer">
<p className="font-poppins text-black font-bold text-xl">  {entry['name']} </p>
<p className="font-poppins text-gray-500 text-l mb-3">  {entry['desc']} </p>
</div>
      </div>

    })
  }

   </div>
</section> 
)
}
export default Upcoming;