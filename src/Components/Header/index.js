import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../Providers/AuthProvider";

function Header() {
  const [navDetails] = useState([
    { name: "Celebs List", path: "/celebs" },
    { name: "Add Celeb", path: "/add-celeb" },
  ]);
  const location = useLocation();
  const { token, setToken } = useAuth();
  const handleLogout = () => {
    setToken(false);
    localStorage.removeItem("token");
  };

  let activeTabStyle = {
    backgroundColor: "gray",
    color: "white",
    padding: "8px",
    borderRadius: "12px",
    transition: "all 0.2s",
  };

  return token ? (
    <div>
      <h2 className="heading">Fav Celebrities</h2>
      <nav className="header">
        {navDetails.map((item, index) => (
          <Link
            style={
              location.pathname === item.path
                ? activeTabStyle
                : {
                    padding: "8px",
                    backgroundColor: "transparent",
                    borderRadius: "12px",
                  }
            }
            to={item.path}
            key={index}
          >
            {item.name}
          </Link>
        ))}
        <button
          style={{
            padding: "8px",
            backgroundColor: "transparent",
            borderRadius: "12px",
            marginLeft: "auto",
          }}
          onClick={() => handleLogout()}
        >
          Logout
        </button>
      </nav>
    </div>
  ) : null;
}

export default Header;
