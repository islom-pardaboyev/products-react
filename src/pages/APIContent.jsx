import React, { useContext } from "react";
import ProductCart from "../components/ProductCart";
import { Context } from "../context/CustomContext";
import { Triangle } from "react-loader-spinner";

function APIContent() {
  const { products, loading } = useContext(Context);

  if (loading) {
    return (
      <div className="w-screen flex h-screen items-center justify-center">
        <Triangle
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  return (
    <div className="flex mx-7 py-20 items-center justify-between flex-wrap gap-8">
      {products.length > 0 ? (
        products.map((product) => {
          return <ProductCart product={product} key={product.id} />;
        })
      ) : (
        <p className="w-screen h-full flex items-center justify-center">
          No Data
        </p>
      )}
    </div>
  );
}

export default APIContent;
