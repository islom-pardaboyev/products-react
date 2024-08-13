import React, { useContext, useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  faClock,
  faShoppingBasket,
  faTruckRampBox,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Context } from "../context/CustomContext";

function ProductCart({ product }) {
  const [loading, setLoading] = useState(true);
  const date = new Date(product.creationAt);
  const { addBasket, setShowOrderModal } = useContext(Context);

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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  }, []);

  return (
    <div className="max-w-[250px] select-none group flex flex-col rounded-lg overflow-hidden product-shadow min-w-[250px]">
      <div className="w-fit h-fit overflow-hidden">
        {loading ? (
          <Skeleton height={300} />
        ) : (
          <img
            src={imageUrl}
            alt={product.title}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/600x600?text=Not+Found";
            }}
            className="group-hover:scale-110 duration-300 min-h-[300px]"
          />
        )}
      </div>

      <div className="px-[20px] my-5 transition-colors duration-300">
        <h1 className="font-semibold text-md dark:text-white">
          {loading ? <Skeleton width={150} /> : product.title}
        </h1>
        <div className="mt-3 flex items-center gap-4 text-neutral-400 font-semibold">
          <div className="flex items-center text-sm gap-1">
            <FontAwesomeIcon icon={faClock} />
            <span>
              {loading ? (
                <Skeleton width={50} />
              ) : (
                `${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`
              )}
            </span>
          </div>
          <div className="flex items-center text-sm gap-1">
            <FontAwesomeIcon icon={faCalendarDays} />
            <span>
              {loading ? (
                <Skeleton width={100} />
              ) : (
                `${date.getUTCFullYear()} ${
                  shortMonths[date.getUTCMonth()]
                }.${date.getUTCDate()}`
              )}
            </span>
          </div>
        </div>
        <hr className="my-4 text-neutral-400" />
        <div className="flex justify-between">
          <div>
            <del className="text-xs text-neutral-400">
              {loading ? <Skeleton width={50} /> : `$${product.price}`}
            </del>
            <h1 className="text-xl font-bold dark:text-white">
              {loading ? <Skeleton width={50} /> : `$${product.price - 5}`}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            {loading ? (
              <Skeleton width={30} height={30} />
            ) : (
              <FontAwesomeIcon
                onClick={() => addBasket(product.id)}
                className=" flex  transition-all items-center gap-2 border-2 p-3 font-semibold rounded-lg border-green-500 bg-transparent text-green-500 hover:text-white hover:bg-green-700 hover:border-green-700"
                icon={faShoppingBasket}
              />
            )}

            {loading ? (
              <Skeleton width={30} height={30} />
            ) : (
              <FontAwesomeIcon onClick={() => setShowOrderModal(true)}
                className=" flex  transition-all items-center gap-2 border-2 p-3 font-semibold rounded-lg border-red-500 bg-transparent text-red-500 hover:text-white hover:bg-red-700 hover:border-red-700"
                icon={faTruckRampBox}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
