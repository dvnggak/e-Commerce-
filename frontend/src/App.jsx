import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Success from "./pages/Success";

const App = () => {
  const user = true;

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:category" element={<ProductList />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/success" element={<Success />} />
            <Route path="/login" element={user ? <Home/> : <Navigate to={<Login/>} replace />} />
            <Route path="/register" element={user ? <Home/> : <Navigate to={<Register />} replace />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;