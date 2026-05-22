import Displays from '../components/Displays';
import Footer from '../components/Footer';
import Navigation from '../components/Hero';
import Hero from "../components/Navigator";
// import About from "../components/About";


const Index = () => {
  return (
    <div className="min-h-screen  max-w-screen">
        <Hero />
      <Navigation />
    
        <Displays/>
        <Footer></Footer>
      {/* <Form />
      <About />
    
      <Locations /> */}
       {/* <Footer /> */}
    </div>
  );
};

export default Index;