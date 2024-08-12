import React, { useContext } from "react";
import { Context } from "../context/CustomContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import SavedProductsList from "../components/SavedProductsList";

function SavedProducts() {
  const { showSavedProducts, setShowSavedProducts, savedProducts } =
    useContext(Context);
  console.log(savedProducts);
  let total = 0;

  savedProducts.forEach((item) => (total += item.price));
  console.log(total);

  return (
    <section>
      {savedProducts.map(savedProd => <SavedProductsList savedProd={savedProd} />)}
    </section>
  );
}

export default SavedProducts;
