
import { useNavigate } from "react-router-dom";

import NewsData from "./NewsData";
const News = () =>{
    const newsData = NewsData;
    const navigate = useNavigate();
    return(
    <section  className="  h-full flex flex-col mb-10">

      <div
      
      className="bg-blue-300 w-full px-3 h-min justify-center text-center bg-gradient-to-r from-blue-300 via-sky-200 to-orange-300 items-center flex flex-col pt-25">
  <h1 className=" text-7xl font-extrabold  text-gray-900 font-inter " >
Blog
    </h1>  
    <p className="mt-5 text-lg pb-10 text-gray-700 font-poppins">
      Find the latest news about our community and resources.
     </p>
   
  
    </div> 
    <div className=" mx-2 md:mx-5 lg:mx-10 mt-10">
    {
    newsData.map((entry: any) => {
      
{
    return <div onClick={() => {navigate(`/blog-details/${entry['url_name']}`)}} className=" 
    rounded-2xl mt-4 mx-3  flex flex-row mb-8 gap-3 cursor-pointer
     border-blue-400 hover:scale-101 h-40
    transition-all duration-200 hover:shadow-xl hover:shadow-blue-100
    border-1 p-4">
<div 
style={{
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url('${entry.url}')`
}}
className="bg-gray-200 p-10 rounded-lg w-1/3 md:w-1/4 lg:w-1/6 flex items-center justify-center">
   
</div>

<div className="flex flex-col items-baseline ml-7 ">
<p className="font-poppins font-extrabold mt-1 text-lg"> 
    {entry.title}
    </p>
<p className="text-blue-300 font-inter  mb-2 rounded-b-2xl ">{entry.date}</p>
<p className="text-gray-500 font-inter overflow-ellipsis hidden md:block">{entry.desc}</p>

</div>
</div>
}
        })
    }    
    </div>  
    </section>
    );
}
export default News;