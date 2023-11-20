import "./App.css";
import Footer from "./layout/footer/Footer";
import NavbarComponent from "./layout/navbar copy/Navbar";
import AboutPage from "./page/AboutPage/AboutPage";
import CollectionPage from "./page/CollectionPage/CollectionPage";
import ContactPage from "./page/ContactPage/ContactPage";
import Home from "./page/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./page/productDetails/ProductDetails";
import LoginPage from "./page/LoginPage/LoginPage";
import { useSelector } from "react-redux";
import { State } from "./types";
import SearchPage from "./page/SearchPage/SearchPage";
function App() {
  const isLoggedIn = useSelector((state: State) => state.login.isLoggedIn);

  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <div className="light overflow-hidden   ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={isLoggedIn ? <Home /> : <LoginPage />}
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="/collection/:id" element={<ProductDetails />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
