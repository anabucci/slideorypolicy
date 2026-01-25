import About from "../components/About";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const AboutPage = () => {

return (
    <div className="min-h-screen flex flex-col">
    <Navigation></Navigation>

    <About/>
        <div className="flex-1"></div>
    <Footer/>
    </div>
)
}

export default AboutPage;