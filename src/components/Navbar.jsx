import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Context } from "../context/CustomContext";

function Navbar() {
  // const navlinks =
  const { savedProducts } = useContext(Context);
  return (
    <nav className="flex items-center mt-5 sticky top-5 mx-[20%] justify-center">
      <div className="backdrop-blur-lg rounded-md flex w-full items-center justify-between text-white bg-black/30 p-5 shadow-lg">
        <h1 className="font-bold text-center text-2xl">
          Products.
          <small className="text-sm bg-gradient-to-r from-red-500 text-transparent bg-clip-text to-orange-500">
            com
          </small>
        </h1>
        <ul>
          <li className="text-xl font-bold flex items-center gap-2">
            <p>
              Basket <FontAwesomeIcon icon={faShoppingBasket} />
            </p>
            <span>({savedProducts.length})</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
