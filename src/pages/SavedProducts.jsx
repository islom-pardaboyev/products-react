import React, { useContext } from "react";
import { Context } from "../context/CustomContext";
import SavedProductsList from "../components/SavedProductsList";

function SavedProducts() {
  const { savedProducts } = useContext(Context);

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-3xl dark:text-white font-medium">
        Your Basket{" "}
        <small className="text-xs text-neutral-500 font-medium">
          {savedProducts.length} Product(s)
        </small>
      </h1>

      <div className="flex flex-col gap-3 p-4 border dark:border-neutral-400 border-black rounded-md mt-3">
        {savedProducts.length ? (
          savedProducts.map((prods) => (
            <SavedProductsList prods={prods} key={prods.id} />
          ))
        ) : (
          <p className=" dark:text-white flex items-center justify-center capitalize">
            not yet saved products
          </p>
        )}
      </div>
    </div>
  );
}

export default SavedProducts;
