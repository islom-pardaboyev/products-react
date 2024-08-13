import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Context } from "../context/CustomContext";
import Logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  const { setShowSavedProducts, darkMode, setDarkMode } = useContext(Context);
  const [darkModeIcon, setDarkModeIcon] = useState(faMoon);

  const toggleDarkMode = () => {
    setDarkModeIcon(darkModeIcon === faMoon ? faSun : faMoon);
    setDarkMode(!darkMode);
  };

  return (
    <nav className="sticky top-0 left-1/2 -translate-x-1/2 w-[50%] z-30 pt-5">
      <div className="backdrop-blur-lg rounded-md flex w-full items-center justify-between transition-all duration-300 dark:bg-white/30 text-white bg-black/30 p-5 shadow-lg">
        <img width={100} src={Logo} alt="" />
        <ul className="flex items-center gap-4">
          <NavLink to="/">
            <li className="cursor-pointer text-xl font-bold flex items-center gap-2">
              <p>All Products</p>
            </li>
          </NavLink>
          <NavLink to="/saved">
            <li
              onClick={() => setShowSavedProducts(true)}
              className="cursor-pointer text-xl font-bold flex items-center gap-2"
            >
              <p>Basket</p>
            </li>
          </NavLink>
          <NavLink to="/order">
            <li className="cursor-pointer text-xl font-bold flex items-center gap-2">
              <p>Order</p>
            </li>
          </NavLink>
          <FontAwesomeIcon
            onClick={toggleDarkMode}
            icon={darkModeIcon}
            className="cursor-pointer"
          />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
