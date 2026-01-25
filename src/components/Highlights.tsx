
// import { Check } from "lucide-react";
// import { Button } from "../components/ui/button";
// import { useNavigate } from 'react-router-dom';
// import { useEffect, useRef, } from "react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "../components/ui/card";
// import { useState } from "react";
// export function useInView(options = {}) {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const [isInView, setInView] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setInView(true);
//           observer.disconnect(); 
//         }
//       },
//       options
//     );

//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, [options]);

//   return { ref, isInView };
// }

// const Pricing = () => {
//   const { ref, isInView } = useInView({ threshold: 0.2 });
//   const plans = [
//     {
//       name: "Basic",
//       price: "$29",
//       period: "/month",
//       description: "Perfect for small teams getting started",
//       features: [
//         "All Core Features",
//         'Up to 500 transactions per month',
//         "Up to 5 team members",
//       ],
//       popular: false,
//       buttonText: "Get Started",
//     },
//     {
//       name: "Pro",
//       price: "$79",
//       period: "/month",
//       description: "Best for growing businesses",
//      features: [
//         "All Core Features",
//         'Up to 1000 transactions per month',
       
//         "Up to 15 team members",
//         "CSV Download Access",
//       ],
//       popular: true,
//       buttonText: "Get Started",
//     },
//     {
//       name: "Unlimited",
//       price: "$149",
//       period: "/month",
//       description: "For enterprises with unlimited needs",
//       features: [
//         "All Core Features",
//         "Unlimited transactions per month",
       
//         "Unlimited team members",
//         "CSV Download Access",
//       ],
//       popular: false,
//       buttonText: "Get Started",
//     },
//   ];


//   const navigate = useNavigate();

//   const handleClick = (planName: string) => {
   
//     navigate('/billing', { state: { plan: planName } });
//   };

//   return (
    
//   <section
//   id='pricing'
//   ref={ref}
//   className={`py-24 transition-all duration-700 ease-out
//     bg-[linear-gradient(to_bottom, hsl(var(--background)), hsl(var(--muted)/0.2))]
//     ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-13"}`}
// >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold tracking-tight mb-4 text-[hsl(var(--foreground))]">
//             Simple, Transparent Pricing
//           </h2>
//           <p className="text-xl max-w-2xl mx-auto text-[hsl(var(--muted-foreground))]">
//             Choose the perfect plan for your business needs. All plans include our core features with scalable
//             limits.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//           {plans.map((plan) => (
//             <Card
//               key={plan.name}
//               className={`relative transition-all duration-300 ${
//                 plan.popular
//                   ? "border-[hsl(var(--primary))] shadow-lg scale-105"
//                   : "border-[hsl(var(--border))] hover:border-[hsl(var(--primary)/0.5)]"
//               }`}
//             >
//               {plan.popular && (
//             <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//   <span className="whitespace-nowrap bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-4 py-1 rounded-full text-sm font-medium">
//     Most Popular
//   </span>
// </div>
//               )}

//               <CardHeader className="text-center pb-8">
//                 <CardTitle className="text-2xl font-bold text-[hsl(var(--foreground))]">
//                   {plan.name}
//                 </CardTitle>
//                 <CardDescription className="text-[hsl(var(--muted-foreground))]">
//                   {plan.description}
//                 </CardDescription>
//                 <div className="mt-4">
//                   <span className="text-4xl font-bold text-[hsl(var(--foreground))]">{plan.price}</span>
//                   <span className="text-[hsl(var(--muted-foreground))]">{plan.period}</span>
//                 </div>
//               </CardHeader>

//               <CardContent className="space-y-4">
//                 {plan.features.map((feature, index) => (
//                   <div key={index} className="flex items-start space-x-3">
//                     <Check className="h-5 w-5 shrink-0 mt-0.5 text-[hsl(var(--primary))]" />
//                     <span className="text-sm text-[hsl(var(--muted-foreground))]">{feature}</span>
//                   </div>
//                 ))}
//               </CardContent>

//               <CardFooter>
//                 <Button
//                   className={`w-full cursor-pointer ${
//                     plan.popular ? "bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)/0.9)]" : "variant-outline"
//                   }`}
//                   variant={plan.popular ? "default" : "outline"}

//                   onClick={() => handleClick(plan.name)}
//                 >
//                   {plan.buttonText}
//                 </Button>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <p className="text-sm text-[hsl(var(--muted-foreground))]">
//             Yearly subscriptions availible at a discount.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Pricing;


import {Star} from "lucide-react";
import Data  from "./data";
import {useRef, useEffect, useState} from "react";
import {MapPin, Clock, Globe} from "lucide-react";
import { useNavigate } from "react-router-dom";

export function useInView(options = {}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); 
        }
      },
      options
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return { ref, isInView };
} 
const Highlights = () => {
  
 const navigator = useNavigate();
  const highlights = Data.filter((entry) => entry.isHighlight == true);
     const { ref, isInView } = useInView({ threshold: 0.4 });
  function getColors(entry: any){
   return entry['type'] == 'Event' ? " bg-gradient-to-r from-blue-500 to-sky-300 "  : entry.type == 'Volunteering' ? " bg-gradient-to-r from-green-500 to-green-300  " :
  entry.type == 'Educational' ? " bg-gradient-to-r from-yellow-500 to-yellow-400 " :" bg-gradient-to-r from-orange-500 to-orange-300 " } 
    
  return ( 
<section ref={ref}  className={`bg-gradient-to-b from-sky-50 to-white mt-[-50px]   `}>

  <div className="  flex justify-center items-center flex-col m-10 mb-10">
    
   
     <h1 className="font-extrabold text-gray-900 text-5xl mb-4 flex  flex-col md:flex-row pt-3 justify-center items-center gap-4 font-inter">
      Community  <Star size={46}  className="fill-orange-300/40 text-orange-400"></Star> Highlights
       </h1>
        <p className="text-gray-700 text-2xl mb-8 text-center  mt-2 max-w-3xl font-poppins">
          These programs are recognized for bringing our community together and creating positive change.
        </p>
    <div className=" flex-row mt-3 gap-10  md:gap-20 grid sm:grid-cols-1 lg:grid-cols-3 items-center">
        {/* {highlights.map((entry) =>
        <div className="flex flex-col bg-sky-50 rounded-br-2xl h-130 w-120  " onClick={() => {navigator(`/details/${entry.url_name}`)}}
        // className="
        // rounded-2xl bg-gradient-to-br from-blue-500 to-sky-300 h-110 w-93 hover:scale-103 transition-all duration-300
        // flex justify-center items-center mb-12 cursor-pointer
       // "
       > 
       <div className="bg-gradient-to-r from-blue-500 to-sky-300 rounded-b-2xl p-2">
          <div className="flex flex-col items-center">
<p className="text-white font-bold font-inter text-2xl  "> {entry['name']} </p>
</div>
</div>
<div className="p-2 mb-3 ">
<p className="text-gray-500  font-poppins text-xl px-4"> {entry['desc']} </p>
<div className="flex justify-baseline flex-col mt-2 mx-2">
<p className="flex flex-row  gap-2 text-blue-500 text-xl mb-1"> <MapPin></MapPin>{entry['location']}</p>
<p className=" flex flex-row gap-2  text-blue-500 text-xl mt-1"> <Clock></Clock> {entry['date']}</p>
</div>
          </div>
        </div>
      )} */}
      {highlights.map((entry) =>
        <div onClick={() => {navigator(`/details/${entry.url_name}`)}} className={`${getColors(entry)}  
        duration-700 ease-out
        ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-25"} 
        rounded-2xl  
       
         h-120 w-103 hover:shadow-xl hover:shadow-blue-200 hover:scale-103 transition-all duration-300
        flex justify-center items-center mb-12 cursor-pointer`}> 
          <div className="bg-white rounded-lg  h-117 w-100 flex flex-col items-center ">
 <div className={`${getColors(entry)} 
  rounded-b-3xl p-2 w-full`}>
          <div className="flex flex-col items-center">
<p className="text-white font-bold font-inter text-2xl py-2 "> {entry['name']} </p>
</div>
</div>
<div className="py-5 my-4 px-4">
  <div className={`rounded-2xl font-inter text-lg
  ${getColors(entry)} 
     text-center max-w-30 py-1 text-white mb-3 `}>{entry['type']}</div>
<p className="text-gray-500  font-poppins text-lg  overflow-hidden line-clamp-3"> {entry['desc']} </p>
<div className="flex justify-baseline flex-col mt-5 ">
<p className="flex flex-row  gap-2 text-blue-500 text-lg mb-1 overflow-ellipsis overflow-hidden "> <MapPin></MapPin>{entry['location']}</p>
<p className=" flex flex-row gap-2  text-blue-500 text-lg mt-1 overflow-ellipsis overflow-hidden"> <Clock></Clock> {entry['date']}</p>
<p className=" flex flex-row gap-2  text-blue-500 text-lg mt-2 overflow-ellipsis overflow-hidden w-85"> <Globe></Globe> {entry.website}</p>
</div>
</div>
          </div>
        </div>
      )}
    </div>
  </div>
</section>
  );
}
export default Highlights;
