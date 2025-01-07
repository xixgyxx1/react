import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import Navbar from "./component/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {}, [auth]);

  return (
    <div className="App">
      <Navbar auth={auth} setAuth={setAuth} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/product/:id" element={<PrivateRoute auth={auth} />} />
      </Routes>
    </div>
  );
}

export default App;
