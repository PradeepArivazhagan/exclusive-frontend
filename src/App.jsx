import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import HomePage from "./Pages/HomePage";
import NotFound from "./Pages/NotFound";
import Contact from "./Pages/Contact";
import ContactPage from "./Pages/ContactPage";
import About from "./Pages/About";
import AboutPage from "./Pages/AboutPage";
import Account from "./Pages/Account";
import Checkout from "./Pages/Checkout";
import Cart from "./Pages/Cart";
import WishList from "./Pages/WishList";
import ProductDetails from "./Pages/ProductDetails";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import PageNotFound from "./Pages/PageNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" Component={Login} />
        <Route exact path="/signup" Component={SignUp} />
        <Route exact path="/" Component={Home} />
        <Route exact path="/homepage" Component={HomePage} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/aboutpage" Component={AboutPage} />
        <Route exact path="/contact" Component={Contact} />
        <Route exact path="/contactpage" Component={ContactPage} />
        <Route exact path="/account" Component={Account} />
        <Route exact path="/checkout" Component={Checkout} />
        <Route exact path="/cart" Component={Cart} />
        <Route exact path="/wishlist" Component={WishList} />
        <Route exact path="/productdetails" Component={ProductDetails} />
        <Route
          exact
          path="/productdetailspage"
          Component={ProductDetailsPage}
        />
        <Route path="*" Component={NotFound} />
        <Route path="*" Component={PageNotFound} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
