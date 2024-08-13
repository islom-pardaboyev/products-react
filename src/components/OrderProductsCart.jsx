import React, { useContext } from "react";
import { Context } from "../context/CustomContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function OrderProductsCart({ prod, index }) {
  const { removeProductOrder } = useContext(Context);
  return (
    <div className="flex items-center border-b p-2 dark:text-white border-black dark:border-neutral-500">
      <p className="w-[5%] font-bold">#{index + 1}</p>
      <p className="w-[20%] font-bold mr-8 line-clamp-1">{prod.title}</p>
      <p className="w-[10%] font-bold">{prod?.category?.name}</p>
      <p className="w-[15%] capitalize font-bold line-clamp-1">
        {prod?.orderOwner.fullName}
      </p>
      <p className="w-[15%] capitalize font-bold line-clamp-1">
        +{prod?.orderOwner?.phone}
      </p>
      <p className="w-[15%] font-bold line-clamp-1">
        {prod?.orderOwner?.email}
      </p>
      <img className="ml-8" src={prod.images[0]} width={50} alt="" />
      <FontAwesomeIcon className="ml-auto text-white p-3 bg-red-500 opacity-50 hover:opacity-100 rounded-md cursor-pointer"
        onClick={() => removeProductOrder(prod.id)}
        icon={faTrash}
      />
    </div>
  );
}

export default OrderProductsCart;
