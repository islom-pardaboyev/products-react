import { faShoppingBasket, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Context } from "../context/CustomContext";
import Logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  const { setShowSavedProducts } = useContext(Context);
  return (
    <nav className="flex items-center z-30 mt-5 sticky top-5 mx-[20%] justify-center">
      <div className="backdrop-blur-lg rounded-md flex w-full items-center justify-between text-white bg-black/30 p-5 shadow-lg">
        <img width={100} src={Logo} alt="" />
        <ul className="flex items-center gap-4">
          <NavLink to={"/"}>
            <li className="cursor-pointer text-xl font-bold flex items-center gap-2">
              <p>All Products <FontAwesomeIcon icon={faShoppingBasket} /></p>
            </li>
          </NavLink>
          <NavLink to={"/saved"}>
            <li
              onClick={() => setShowSavedProducts(true)}
              className="cursor-pointer text-xl font-bold flex items-center gap-2"
            >
              <p>
                Basket <FontAwesomeIcon icon={faShoppingBasket} />
              </p>
            </li>
          </NavLink>
          <NavLink to={"/order"}>
            <li className="cursor-pointer text-xl font-bold flex items-center gap-2">
              <p>Order <FontAwesomeIcon icon={faTruck} /></p>
            </li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
