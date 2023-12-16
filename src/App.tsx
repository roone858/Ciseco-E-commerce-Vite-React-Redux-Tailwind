import "./App.css";
import Footer from "./layout/footer/Footer";
import NavbarComponent from "./layout/navbar copy/Navbar";
import AboutPage from "./page/About";
import CollectionPage from "./page/Collection";
import ContactPage from "./page/Contact";
import Home from "./page/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./page/ProductDetails";
import LoginPage from "./page/LoginPage";
import { useDispatch, useSelector } from "react-redux";
import { State } from "./interfaces";
import SearchPage from "./page/Search/SearchPage";
import AccountPage from "./page/Account";
import PaymentSection from "./component/Sections/paymentSection/PaymentSection";
import UpdatePasswordForm from "./component/Sections/ChangePasswordSection/ChangePasswordSection";
import SaveListSection from "./component/Sections/saveListSection/SaveListSection";
import AccountInformationForm from "./component/Sections/accountInfo/AccountInfo";
import CheckoutPage from "./page/Checkout";
import OrderSection from "./component/Sections/orderSection/OrderSection";
import SignupPage from "./page/Signup";
import { useEffect } from "react";
import authService from "./services/auth.service";
import { setTokenInAxios } from "./utils/axios";
import productsService from "./services/products.services";
function App() {
  const dispatch = useDispatch();
  const login = useSelector((state: State) => state.login);
  const products = useSelector((state: State) => state.products.data);
  const user = useSelector((state: State) => state.user.data);
  useEffect(() => {
    if (login.isLoggedIn) {
      login.accessToken && setTokenInAxios(login.accessToken);
      if (!user) authService.getAuthenticatedUserInfo(dispatch);
    }
  }, [dispatch, login.accessToken, login.isLoggedIn, user]);

  useEffect(() => {
    if (!products.length) productsService.getProducts(dispatch);
  }, [dispatch, products]);
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <div className="light overflow-hidden   ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={login.isLoggedIn ? <Home /> : <LoginPage />}
            />
            <Route
              path="/signup"
              element={login.isLoggedIn ? <Home /> : <SignupPage />}
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="/collection/:id" element={<ProductDetails />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/account" element={<AccountPage />}>
              <Route path="" element={<AccountInformationForm />} />
              <Route path="payment" element={<PaymentSection />} />
              <Route path="password" element={<UpdatePasswordForm />} />
              <Route path="billing" element={<PaymentSection />} />
              <Route path="order" element={<OrderSection />} />
              <Route
                path="savelist"
                element={<SaveListSection products={[]} />}
              />
            </Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
