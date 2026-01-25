import Details from "../components/Details";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const DetailsPage = () => {

return (
    <div className="min-h-screen flex flex-col">
    <Navigation></Navigation>

    <Details></Details>
        <div className="flex-1"></div>
    <Footer/>
    </div>
)
}

export default DetailsPage;