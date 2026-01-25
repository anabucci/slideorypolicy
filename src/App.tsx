
import NotFound from "./pages/NotFound";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Main";
import ExplorePage from "./pages/ExplorePage";
import DetailsPage from "./pages/DetailsPage";
import UpcomingPage from "./pages/UpcomingPage";
import NewsPage from './pages/NewsPage';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import ReferencePage from "./pages/ReferencePage";
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto"
    });
  }, [pathname]);

  return null;
}


const App = () => (
 
      <BrowserRouter>
      <ScrollToTop></ScrollToTop>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/reference" element={<ReferencePage/>}
           
          />
          <Route
            path="/explore" element={<ExplorePage/>}
           
          />
          <Route path="/blog" element={<NewsPage></NewsPage>}/>
          <Route path='/about' element = {<AboutPage></AboutPage>}/>
          <Route
            path="/upcoming" element={<UpcomingPage/>}
          
           
          />
          <Route path="/details/:name" element={<DetailsPage/>} ></Route>
          
           <Route path="/blog-details/:name" element={<BlogDetailsPage/>} ></Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
);

export default App;
