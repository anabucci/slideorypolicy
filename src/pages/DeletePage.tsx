import { createClient } from
'@supabase/supabase-js'
;



import { BadgeCheck, ArrowRight } from
'lucide-react'
;



import { useState } from 'react';



const DeletePage = () => {



const supabaseUrl =
'https://qbehrysrnnhvxigeocdm.supabase.co'
;



const supabaseAnonKey =
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFiZWhyeXNybm5odnhpZ2VvY2RtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2MDM0NDAsImV4cCI6MjA4NjE3OTQ0MH0.00mpD4oRE1uMO8-ZbD9kR2pE45e9Dlu767zfhz7uDf4'
;



const supabase = createClient(supabaseUrl,supabaseAnonKey);



     const [title, setTitle] = useState("");



   const [isSubmitted, setSubmit] = useState(false);



     const [password, setPassword] = useState("");



     function  handleTitleChange (e: any) {



setTitle(e.target.value);



   }



   function  handlePasswordChange (e: any) {



setPassword(e.target.value);



   }



return (



    <div className=" min-h-screen p-20 flex flex-col bg-gradient-to-b from-pink-200 to-white">



  <h1 className=" font-poppins font-bold text-6xl text-black">Account Deletion</h1>



 




                                                          



                                                                                



     
<label className="font-poppins text-black text-3xl font-bold mt-5">Enter your account details and your account and all associated data will be deleted.</label>



    {isSubmitted ?



 <div className="flex items-center justify-center flex-col mt-10">



        <BadgeCheck size={170} className="text-green-500"></BadgeCheck>



        <p className="font-poppins font-bold text-green-400 mt-5 text-3xl text-center">Thanks for the Submission!</p>



        <p className="mt-3 font-poppins text-xl text-center">Your account was deleted successfully.</p>



<button 



onClick={()=> {setSubmit(false); setPassword('') ; setTitle('');}}



className="bg-green-500 flex items-center cursor-pointer justify-center font-poppins  text-white p-3  text-xl rounded-4xl mt-8 px-18 hover:scale-105 hover:bg-green-400



transition-all duration-300 font-bold">



    Ok



</button>



    </div> :



<div>



            <p className="text-gray-700 mb-2 font-semibold font-poppins mt-7 ">Email</p>



            <input



            value={title}



            onChange={handleTitleChange}



            placeholder="Enter email..." className={`  focus:outline-pink-300 p-3 border-2   text-gray-400



       font-poppins 



             border-gray-300 py-2 rounded-lg w-full `}></input>



 <p className="text-gray-700 mb-2 font-semibold font-poppins ">Password</p>



            <input



            value={password}



type="password"



            onChange={handlePasswordChange}



            placeholder="Enter password..." className={`  focus:outline-pink-300 p-3 border-2   text-gray-400



       font-poppins 



             border-gray-300 py-2 rounded-lg w-full `}></input>



  <button 



   



   onClick={async ()=> {



    if (title != '' && password != ''){     



 await supabase.auth.signInWithPassword({



email: title,



password: password



})



const user = await supabase.auth.getUser();



if (user.data?.user != null) {



setPassword('');



setTitle('');







}



}



   }}



   className="bg-pink-400 flex justify-center items-center rounded-lg



    



   w-full p-3 mt-6 font-bold text-white hover:scale-102 hover:shadow-lg hover:shadow-blue-500/30



   transition-all duration-300 cursor-pointer gap-2 font-inter text-lg">Delete Account<ArrowRight size={20}></ArrowRight></button>



</div>  



}



</div>



)};



export default DeletePage;

