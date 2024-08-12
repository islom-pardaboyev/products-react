import {
  faClock,
  faShoppingBasket,
  faTruckRampBox,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Context } from "../context/CustomContext";

function ProductCart({ product }) {
  const date = new Date(product.creationAt);
  const { addBasket } = useContext(Context);

  const imageUrl = Array.isArray(product.images)
    ? product.images[0]
    : product.images;

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
    <div className="max-w-[250px] group flex flex-col rounded-lg overflow-hidden product-shadow min-w-[250px]">
      <div className="w-fit h-fit overflow-hidden">
        <img
          src={imageUrl}
          alt={product.title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/600x600?text=Not+Found";
          }}
          className="group-hover:scale-110 duration-300 min-h-[300px]"
        />
      </div>

      <div className="px-[20px] my-5">
        <h1 className="font-semibold text-md">{product.title}</h1>
        <div className="mt-3 flex items-center gap-4 text-neutral-400 font-semibold">
          <div className="flex items-center text-sm gap-1">
            <FontAwesomeIcon icon={faClock} />
            <span>{`${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`}</span>
          </div>
          <div className="flex items-center text-sm gap-1">
            <FontAwesomeIcon icon={faCalendarDays} />
            <span>{`${date.getUTCFullYear()} ${
              shortMonths[date.getUTCMonth()]
            }.${date.getUTCDate()}`}</span>
          </div>
        </div>
        <hr className="my-4 text-neutral-400" />
        <div className="flex justify-between">
          <div>
            <p className="line-through text-xs text-neutral-400">
              ${product.price - 10}
            </p>
            <h1 className="text-xl font-bold">${product.price}</h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => addBasket(product.id)}
              className="capitalize flex p-3 font-semibold rounded-lg transition-all items-center gap-2 border-2 border-green-500 bg-transparent text-green-500 hover:text-white hover:bg-green-700 hover:border-green-700"
            >
              <FontAwesomeIcon icon={faShoppingBasket} />
            </button>

            <button>
              <FontAwesomeIcon icon={faTruckRampBox} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
