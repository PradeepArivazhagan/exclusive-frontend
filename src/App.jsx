import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Account from "./Pages/Account";
import Checkout from "./Pages/Checkout";
import Cart from "./Pages/Cart";
import WishList from "./Pages/WishList";
import ProductDetails from "./Pages/ProductDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" Component={Login} />
        <Route exact path="/signup" Component={SignUp} />
        <Route exact path="/" Component={Home} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/contact" Component={Contact} />
        <Route exact path="/account" Component={Account} />
        <Route exact path="/checkout" Component={Checkout} />
        <Route exact path="/cart" Component={Cart} />
        <Route exact path="/wishlist" Component={WishList} />
        <Route exact path="/productdetails" Component={ProductDetails}/>
        <Route path="*" Component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
