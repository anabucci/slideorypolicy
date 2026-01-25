import Reference from "../components/Reference";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const DetailsPage = () => {

return (
    <div className="min-h-screen flex flex-col">
    <Navigation></Navigation>

    <Reference></Reference>
        <div className="flex-1"></div>
    <Footer/>
    </div>
)
}

export default DetailsPage;