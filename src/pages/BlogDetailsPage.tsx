import BlogDetails from "../components/BlogDetails";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const BlogDetailsPage = () => {

return (
    <div className="min-h-screen flex flex-col">
    <Navigation></Navigation>

    <BlogDetails></BlogDetails>
        <div className="flex-1"></div>
    <Footer/>
    </div>
);
}

export default BlogDetailsPage;