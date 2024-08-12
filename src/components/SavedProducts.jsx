import React, { useContext } from "react";
import { Context } from "../context/CustomContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import SavedProductsList from "./SavedProductsList";

function SavedProducts() {
  const { showSavedProducts, setShowSavedProducts, savedProducts } =
    useContext(Context);
  console.log(savedProducts);
  let total = 0

  savedProducts.forEach(item => total += item.price)
  console.log(total);
  

  return (
    <div
      id="wrapper"
      onClick={(e) =>
        e.target.id == "wrapper" ? setShowSavedProducts(false) : ""
      }
      className={`fixed top-0 left-0 bottom-0 duration-300 ${
        showSavedProducts ? "right-0" : "-right-[200%]"
      } m-auto w-full h-full`}
    >
      <div className="absolute w-[600px] top-0 bottom-0 left-0 right-0 ml-auto p-3">
        <div className="w-full h-full rounded-md p-5 bg-white overflow-y-auto border border-black">
          <h1 className="text-center font-bold text-2xl">
            Saved Products ({savedProducts.length})
          </h1>
          {savedProducts.length ? (
            savedProducts.map((savedProd) => (
              <SavedProductsList savedProd={savedProd} key={savedProd.id} />
            ))
          ) : (
            <p className="flex items-center justify-center w-full h-full font-bold text-2xl text-neutral-400 capitalize">
              not yet saved products
            </p>
          )}
        </div>
        <FontAwesomeIcon
          onClick={() => setShowSavedProducts(false)}
          className="text-3xl absolute right-6 top-6 text-black/50 cursor-pointer text-black"
          icon={faXmark}
        />
        <p className="absolute bottom-5 bg-white font-bold w-full text-center">
          Total: ${total}
        </p>
      </div>
    </div>
  );
}

export default SavedProducts;
