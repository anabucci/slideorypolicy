import Navigation from "../components/Navigation";
import Upcoming from "../components/Upcoming";
// import About from "../components/About";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
   <Upcoming/>
       <Footer />
    </div>
  );
};

export default Index;