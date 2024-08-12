import React, { useContext } from "react";
import ProductCart from "./ProductCart";
import { Context } from "../context/CustomContext";

function APIContent() {
  const { products, loading } = useContext(Context);

  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="spinner"></div>
      </div>
    );
  }
x
  return (
    <div className="flex m-7 items-center justify-between flex-wrap gap-8">
      {products.length > 0 ? (
        products.map((product) => {
          return <ProductCart product={product} key={product.id} />;
        })
      ) : (
        <p className="w-screen h-screen flex items-center justify-center">
          No Data
        </p>
      )}
    </div>
  );
}

export default APIContent;