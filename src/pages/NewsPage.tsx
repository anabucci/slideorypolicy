import News from "../components/News";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const NewsPage = () => {

return (
    <div className="min-h-screen flex flex-col">
    <Navigation></Navigation>

 <News/>
  <div className="flex-1"></div>
    <Footer/>
    </div>
)
}

export default NewsPage;