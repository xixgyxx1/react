import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const goProductPage = () => {
    navigate("/product?q=pants");
  };
  return (
    <div>
      Homepage
      <Link to="/about"> Go to about page </Link>
      <button onClick={goProductPage}>Go to product page </button>\
    </div>
  );
};

export default Homepage;
