import "./App.css";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import Homepage from "./page/Homepage";
import Aboutpage from "./page/Aboutpage";
import Productpage from "./page/Productpage";
import ProductDetailpage from "./page/ProductDetailpage";
import Loginpage from "./page/Loginpage";
import UserPage from "./page/Userpage";
import { useState } from "react";

function App() {
  const [auth, setAuth] = useState(false);
  const PrivateRoute = () => {
    return auth === true ? <UserPage /> : <Navigate to="/login" />;
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/product" element={<Productpage />} />
        <Route path="/product/:id/:num" element={<ProductDetailpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/user" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
