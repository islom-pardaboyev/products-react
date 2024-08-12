import { faClock, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Context } from "../context/CustomContext";

function ProductCart({ product }) {
  const date = new Date(product.creationAt);
  const { addBasket } = useContext(Context);
  const shortMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div
      className="max-w-[400px] flex flex-col rounded-lg overflow-hidden product-shadow min-w-[400px]"
    >
      <img src={product.images[0]} alt={product.name} />
      <div className="px-[20px] my-5">
        <div className="flex items-end justify-between">
          <h1 className="font-semibold text-3xl">${product.price}</h1>
          <p className="px-2 py-1 text-sm bg-yellow-300/50 font-bold text-yellow-700 rounded-lg">
            For Sale
          </p>
        </div>
        <h1 className="font-semibold text-xl mt-3">{product.title}</h1>
        <div className="mt-3 flex items-center gap-4 text-neutral-400 font-semibold">
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faClock} />
            <span>{`${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`}</span>
          </div>
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
            <span>{`${date.getUTCFullYear()} ${
              shortMonths[date.getUTCMonth() + 1]
            }.${date.getUTCDate()}`}</span>
          </div>
        </div>
        <hr className="my-4 text-neutral-400" />
        <div className="flex items-center justify-between">
          <button
            onClick={() => addBasket(product.id)}
            className="capitalize flex p-2 font-semibold rounded-lg hover:bg-green-700 transition-all items-center gap-2 bg-green-500 text-white"
          >
            <FontAwesomeIcon icon={faShoppingBasket} />
            add to cart
          </button>
          <button className="capitalize flex p-2 font-semibold rounded-lg hover:bg-sky-700 transition-all items-center gap-2 bg-sky-500 text-white">
            <FontAwesomeIcon icon="fa-solid fa-truck-ramp-box" />
            order now!
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
