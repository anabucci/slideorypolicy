import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Form from "../components/Form";
// import About from "../components/About";
import Highlights from "../components/Highlights";
import Locations from "../components/Locations";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
        <Highlights />
        <Locations/>
        <Form/>
      {/* <Form />
      <About />
    
      <Locations /> */}
       <Footer />
    </div>
  );
};

export default Index;