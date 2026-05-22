
import image0 from "../assets/Untitled design (62).png";
import { useNavigate,  } from "react-router-dom";
const Hero = () => {
      const navigate = useNavigate();

  return (
    <section id="Hero" className=" bg-gradient-to-b from-white to-pink-50 relative ">

   
      <div className="absolute h-70 inset-0 bg-gradient-to-r px-20  from-purple-300 via-pink-200 to-pink-400 opacity-40 blur-3xl"></div>

  
      <div className="absolute inset-0 ">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-30 blur-sm"
          style={{
            backgroundImage: `url('${image0}')`,
          }}
        />
      </div>

   
      <div className="relative w-full h-screen flex justify-center items-center flex-row p-10"
        style={{ gap: window.innerWidth * 0.1 }}
      >

        <div className="flex flex-col ">
          <h1 className="lg:text-9xl text-6xl pl-20 lg:pl-40  font-extrabold font-bricolage w-screen">
            Slideory
          </h1>

          <p className="bg-gradient-to-r from-pink-400 via-pink-200 to-pink-500 bg-clip-text text-transparent 
          mt-5 lg:text-7xl pl-20
          text-5xl font-semibold font-bricolage lg:pl-40  ">
            the app for fun slideshow  <br></br> games
          </p>

          <div className="flex  flex-row pl-10 lg:pl-30 ">
            

            <button
              onClick={() => navigate("/terms-of-service")}
              className="ml-8 pl-12 pr-12 md:pt-4 md:pb-4 py-3 mt-10 text-xl
              w-1/4 font-bricolage
              text-purple-400 font-extrabold bg-black rounded-3xl border-2 hover:scale-105 items-center justify-center flex"
            >
            Terms of Service
            </button>
              <button
              onClick={() => navigate("/terms-of-service")}
              className="ml-8 pl-12 pr-12 md:pt-4 md:pb-4 py-3 mt-10 text-xl text-purple-400 font-extrabold bg-black border-2
              rounded-3xl w-1/4 flex items-center justify-center font-bricolage
              hover:scale-105 "
            >
            Privacy Policy
            </button>
             
          </div>
        </div>

        <div className="w-0 md:w-50 lg:w-100"></div>
      </div>
    </section>
  );
};

export default Hero;