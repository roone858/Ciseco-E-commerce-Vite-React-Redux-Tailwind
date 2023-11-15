import "./App.css";
import Footer from "./layout/footer/Footer";
import NavbarComponent from "./layout/navbar copy/Navbar";
import AboutPage from "./page/AboutPage/AboutPage";
import CollectionPage from "./page/CollectionPage/CollectionPage";
import ContactPage from "./page/ContactPage/ContactPage";
import Home from "./page/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./page/productDetails/ProductDetails";
// import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <div className="light overflow-hidden   ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
