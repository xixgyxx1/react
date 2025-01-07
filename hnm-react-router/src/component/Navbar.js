import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ auth, setAuth }) => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성"
  ];
  const [width, setWidth] = useState(0);
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const goToProductAll = () => {
    navigate("/");
  };

  const search = (event) => {
    if (event.key === "Enter") {
      const keyword = event.target.value.trim();
      console.log("navigating to", `q=${encodeURIComponent(keyword)}`);
      navigate(`/?q=${encodeURIComponent(keyword)}`);
    }
  };

  return (
    <div>
      <div className="login-button">
        <img
          className="login-icon"
          src="https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-business-men-icon-png-image_925963.jpg"
        />
        {auth ? (
          <div onClick={() => setAuth(false)}>
            <div style={{ cursor: "pointer" }}>로그아웃</div>
          </div>
        ) : (
          <div onClick={() => navigate("/login")}>
            <div style={{ cursor: "pointer" }}>로그인</div>
          </div>
        )}
      </div>
      <div className="hnm-logo">
        <img
          onClick={goToProductAll}
          width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png"
        />
      </div>

      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>

        <div className="find-button">
          <img
            className="find-icon"
            src="https://png.pngtree.com/element_our/20190528/ourmid/pngtree-magnifying-glass-icon-image_1128382.jpg"
          />
          <input type="text" onKeyDown={search} placeholder="search..." />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
