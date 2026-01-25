import {ArrowRight, BadgeCheck} from "lucide-react";
import { useState } from "react";

const Form =() => {
     const [title, setTitle] = useState("");
     const [noTitle,] = useState(false);
     const [description, setDescription] = useState("");
     const [category,setCategory] = useState('');
     const [hasError, setHasError] = useState(false);
 function  handleTitleChange (e: any) {
setTitle(e.target.value);
   }
   function handleDescChange(e:any){
    setDescription(e.target.value);
   }
   function handleCategoryChange(e: any){
    setCategory(e.target.value);
   }
   const [isSubmitted, setSubmit] = useState(false);
    return (
<section className="bg-white m-10  mt-60 flex justify-center  pb-10 items-center flex-col" >
    {isSubmitted ? <div className="flex items-center justify-center flex-col">
        <BadgeCheck size={170} className="text-green-500"></BadgeCheck>
        <p className="font-poppins font-bold text-green-400 mt-5 text-3xl text-center">Thanks for the Submission!</p>
        <p className="mt-3 font-poppins text-xl text-center">Your subsmission will be reviewed  <br></br>by our team shortly.</p>
<button 
onClick={()=> {setSubmit(false); setCategory('') ; setTitle(''); setDescription(''); setHasError(false);}}
className="bg-green-500 flex items-center cursor-pointer justify-center font-poppins  text-white p-3  text-xl rounded-4xl mt-8 px-18 hover:scale-105 hover:bg-green-400
transition-all duration-300 font-bold">
    Ok
</button>
    </div> :
    <div>
    <h1 className="bg-gradient-to-r from-blue-500 via-sky-500 to-blue-600 bg-clip-text text-transparent font-extrabold text-5xl text-center font-inter  ">Submit a Resource</h1>
    <p className="text-gray-600 text-lg text-center mt-4 font-poppins" >Do you know of a resource that would help others in the Winston-Salem Community? <br></br>  Please let us know by filling out the information!</p>
<div className="max-w-3xl w-full ">
    <div className="bg-gradient-to-r from-blue-300 via-sky-300 to-orange-300  mt-7 rounded-xl p-1 flex justify-center items-center  ">
   
        <div className="bg-gradient-to-r from-white to-blue-50 rounded-lg p-10 w-full py-15 ">
              {hasError && <p className="font-poppins text-red font-bold text-md text-red-400 mb-5"> * Please fill out all required fields </p>}
            <p className="text-gray-700 mb-2 font-semibold font-poppins ">Title <span className="text-red-400">*</span></p>
            < input
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter a title for the resource..." className={`  focus:outline-blue-500 p-3 border-2 ${noTitle ? 'border-red-400' : ''}   text-gray-400
       font-poppins 
             border-gray-300 py-2 rounded-lg w-full `}></input>
            <p className="text-gray-700 mb-2 font-poppins font-semibold mt-4 ">Description <span className="text-red-400">*</span></p>
            <textarea
            value={description}
            onChange={handleDescChange}
            rows={5} placeholder="Enter a description..." className="
             font-poppins  text-gray-400
            p-3 border-2  border-gray-300 py-2 rounded-lg w-full focus:outline-blue-500 "></textarea>
               <p className="text-gray-700 mb-2 font-poppins font-semibold mt-4">Category </p>
<select 
value={category}
onChange={handleCategoryChange}
className="mt-2 text-gray-400 border-2 flex items-center border-gray-300 p-3
font-poppins 
rounded-lg w-full focus:outline-blue-500">
    <option  value="" disabled selected hidden>Select a category...</option>
    <option value='Volunteering'>Volunteering</option>
    <option value='Resource'>Resource</option>
    <option value='Event'>Event</option>
    <option value='Educational'>Educational</option>
</select>
   <button 
   
   onClick={()=>{
    if (title != '' && description != ''){     setSubmit(true);
setCategory('');
setTitle('');
setDescription(
 '');
} else {
    setHasError(true)
}
//     if (category != '' && title != '' && description != ''){
//     setSubmit(true);
// setCategory('');
// setTitle('');
// setDescription(
//  '');
// } else {
// setNoTile(true);
// }
   }}
   className="bg-blue-400 flex justify-center items-center rounded-lg
    
   w-full p-3 mt-6 font-bold text-white hover:scale-102 hover:shadow-lg hover:shadow-blue-500/30
   transition-all duration-300 cursor-pointer gap-2 font-inter text-lg">Submit <ArrowRight size={20}></ArrowRight></button>  
        </div>
   </div>
    </div>
    </div>
}   
</section>

    );
}

export default Form;