import React, { useContext } from "react";
import { Context } from "../context/CustomContext";

function SavedProducts() {
  const {  savedProducts } =
    useContext(Context);
  console.log(savedProducts);
  let total = 0;

  savedProducts.forEach((item) => (total += item.price));
  console.log(total);

  return <section className="w-screen h-screen overflow-y-auto">order</section>;
}

export default SavedProducts;
