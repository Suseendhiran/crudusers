import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [navDetails, setNavDetails] = useState([
    { name: "Celebs List", path: "/" },
    { name: "Add Celeb", path: "/add-celeb" },
  ]);
  const location = useLocation();

  let activeTabStyle = {
    backgroundColor: "gray",
    color: "white",
    padding: "8px",
    borderRadius: "12px",
    transition: "all 0.2s",
  };
  console.log(location.pathname);
  return (
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
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Header;
