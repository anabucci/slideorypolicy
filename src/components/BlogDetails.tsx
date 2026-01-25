import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import NewsData from "./NewsData";
const Blogname  = () => {
    const navigate = useNavigate();
      const { name } = useParams();
const data = NewsData.find((entry: any) => entry['url_name'] == name);
    return (
<section className="m-10 mb-5 flex flex-col ">
    <div
    onClick={() => {
   const loc = location as unknown as {key?:string};
    loc.key != 'default'  ? navigate(-1) : navigate('/')}}
    className=" flex-row gap-3 w-min mt-15 cursor-pointer hover:text-blue-500 transition-all flex items-center">
<ArrowLeft className=""></ArrowLeft>
<p className="font-inter text-lg">Back</p>
</div>
<p className="font-poppins text-blue-500 font-bold text-3xl mt-5 mb-5 ">{data?.title}</p>
<p className="font-inter text-gray-900 text-xl mb-7">{data?.date}</p>
<div 
style={{
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url('${data?.url}')`
}}
className="bg-gray-200 p-10 rounded-lg w-full h-100 mb-10 flex items-center justify-center">
   
</div>
{
    data?.sections == null ?
<p className="font-poppins text-2xl text-gray-900 mb-10 mt-5">{data?.fullArticle}</p> : <div>
{
    data.sections.map((e) => {
        return <div>
<p className="font-inter text-gray-900 font-bold text-3xl mt-5 mb-5">{e.title}</p>
<p className="font-poppins text-2xl text-gray-900 mb-10">{e.text}</p> 
        </div>
    })
}
</div>
}
</section>
    );
}

export default Blogname;