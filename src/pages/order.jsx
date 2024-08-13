import React, { useContext } from "react";
import { Context } from "../context/CustomContext";
import OrderProductsCart from "../components/OrderProductsCart";

function Order() {
  const { orderedProducts } = useContext(Context);
  console.log(orderedProducts);

  return (
    <>
      <div className=" flex flex-col mt-3 gap-3 container mx-auto overflow-y-auto">
        <h1 className="text-3xl dark:text-white font-medium">
          Your Order{" "}
          <small className="text-xs text-neutral-500 font-medium">
            {orderedProducts.length} Product(s)
          </small>
        </h1>
        ˝
        <div className="flex items-center border-b border-black/30 dark:text-neutral-500 p-2 dark:border-neutral-200">
          <p className="w-[5%]">Order</p>
          <p className="w-[22.5%]">Title</p>
          <p className="w-[10%]">Products</p>
          <p className="w-[15%]">Customer</p>
          <p className="w-[15%]">Phone</p>
          <p className="w-[20%]">Email</p>
          <p className="w-[15%]">Products Img</p>
        </div>
        {orderedProducts.length ? (
          orderedProducts.map((prod, index) => (
            <OrderProductsCart prod={prod} index={index} key={prod.id} />
          ))
        ) : (
          <p className="capitalize absolute left-1/2 -translate-y-1/2 -translate-x-1/2 top-1/2 flex items-center justify-center dark:text-white font-medium">
            not yet ordered products
          </p>
        )}
      </div>
    </>
  );
}

export default Order;
