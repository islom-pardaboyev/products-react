import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { Context } from "./context/CustomContext";
import Navbar from "./components/Navbar";
import SavedProducts from "./components/SavedProducts";

library.add(fas);

function App() {
  const {users, savedProducts, addBasket} = useContext(Context)
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
  console.log(savedProducts);
  


  return (
    <main>
      <Navbar/>
      <div className="flex m-7 items-center justify-between flex-wrap gap-8">
        {users.length > 0 ? (
          users.map((user) => {
            const date = new Date(user.creationAt);
            return (
              <div
                key={user.id}
                className="max-w-[400px] flex flex-col rounded-lg overflow-hidden product-shadow min-w-[400px]"
              >
                <img src={user.images[0]} alt={user.name} />
                <div className="px-[20px] my-5">
                  <div className="flex items-end justify-between">
                    <h1 className="font-semibold text-3xl">${user.price}</h1>
                    <p className="px-2 py-1 text-sm bg-yellow-300/50 font-bold text-yellow-700 rounded-lg">
                      For Sale
                    </p>
                  </div>
                  <h1 className="font-semibold text-xl mt-3">{user.title}</h1>
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
                    <button onClick={() => addBasket(user.id)} className="capitalize flex p-2 font-semibold rounded-lg hover:bg-green-700 transition-all items-center gap-2 bg-green-500 text-white">
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
          })
        ) : (
          <p className="w-screen h-screen flex items-center justify-center">
            No Data
          </p>
        )}
      </div>
      <SavedProducts/>
    </main>
  );
}

export default App;
