import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import ProductDetails from "./Pages/ProductDetails";
import NotFound from "./Pages/NotFound";

import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import AboutPage from "./Pages/AboutPage";
import Account from "./Pages/Account";
import Checkout from "./Pages/Checkout";
import Cart from "./Pages/Cart";
import WishList from "./Pages/WishList";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import PageNotFound from "./Pages/PageNotFound";

import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import NonProtectedRoute from "./ProtectedRoute/NonProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NonProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/productdetails" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/contactpage" element={<ContactPage />} />
          <Route path="/aboutpage" element={<AboutPage />} />
          <Route path="/account" element={<Account />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/productdetailspage" element={<ProductDetailsPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
