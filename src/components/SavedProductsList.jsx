import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../context/CustomContext";

function SavedProductsList({ prods }) {
  const [counter, setCounter] = useState(1);
  const {removeProduct} = useContext(Context)

  const increase = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrease = () => {
    if (counter > 1) {
      setCounter((prevCounter) => prevCounter - 1);
    }
  };

  return (
    <div className="flex items-center border-b justify-between dark:border-neutral-500 border-black p-4 gap-4">
      <img src={prods.images[0]} width={100} alt="" />
      <p className="font-medium text-lg dark:text-white">{prods.title}</p>
      <div className="flex items-center gap-2 border border-neutral-600 overflow-hidden rounded-md justify-between">
        <FontAwesomeIcon
          className="cursor-pointer hover:bg-white/40 p-3 dark:text-white"
          onClick={decrease}
          icon={faMinus}
        />
        <p className="dark:text-white">{counter}</p>
        <FontAwesomeIcon
          className="cursor-pointer hover:bg-white/40 p-3 dark:text-white"
          onClick={increase}
          icon={faPlus}
        />
      </div>
      <div className="flex items-center gap-4">
        <p className="dark:text-white">${prods.price * counter}</p>
        <FontAwesomeIcon onClick={() => removeProduct(prods.id)} icon={faTrash} className="p-3 rounded-md bg-red-500 opacity-50 hover:opacity-100 cursor-pointer text-white"/>
      </div>
    </div>
  );
}

export default SavedProductsList;
