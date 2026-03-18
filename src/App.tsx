


import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
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
 
      <BrowserRouter basename="/slideorypolicy/">
      <ScrollToTop></ScrollToTop>
        <Routes>
          <Route
            path="/privacy-policy" element={<AboutPage/>}
           
          />
          <Route
            path="/terms-of-service" element={<BlogDetailsPage/>}
           
          />
        
        </Routes>
      </BrowserRouter>
);

export default App;
