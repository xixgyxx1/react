import React from "react";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();

  const goToHompage = () => {
    navigate("/");
  };

  return (
    <div>
      AboutPage
      <button onClick={goToHompage}>Go to Homepage</button>
    </div>
  );
};

export default AboutPage;
