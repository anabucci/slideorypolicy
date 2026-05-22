
import image0 from "../assets/Untitled design (65).png";
import image1 from "../assets/Untitled design (67).png";

const Displays = () => {

  return (
    <section id="Displays" className="bg-gradient-to-b from-white to-pink-50 relative">
 
  <div className="flex flex-col lg:flex-row">
      <div className="bg-white w-full lg:w-1/2 lg:h-screen justify-center items-center flex p-20">
       

         <h1 className="lg:text-8xl text-5xl font-extrabold font-bricolage ">
           Over 1000 slideshow games and stories to play when bored!
          </h1>
      </div>
   <div className="bg-purple-300 w-full lg:w-1/2 h-screen">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat "
          style={{
            backgroundImage: `url('${image0}')`,
          }}
        />
      </div>
     
      </div>
       <div className="flex flex-col lg:flex-row">
      
   <div className="bg-pink-300 w-full lg:w-1/2 h-screen">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat "
          style={{
            backgroundImage: `url('${image1}')`,
          }}
        />
      </div>
      <div className="bg-white w-full lg:w-1/2  justify-center items-center flex p-20">
       

         <h1 className="lg:text-8xl text-5xl font-extrabold font-bricolage ">
          Have fun by creating your own games!
          </h1>
      </div>
     
      </div>
<div className="absolute bottom-0 left-0 right-0 h-70 bg-gradient-to-t from-purple-300 via-pink-200 to-transparent opacity-40 blur-3xl"></div>
    </section>
  );
};

export default Displays;