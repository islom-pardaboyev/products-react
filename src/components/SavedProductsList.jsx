import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Context } from "../context/CustomContext";

function SavedProductsList({ savedProd }) {
  const { removeProduct} = useContext(Context);
  
  return (
    <div className="mt-10 flex group relative border justify-between border-black rounded-md p-2 items-center">
      <img
        className="rounded-md"
        src={savedProd.images[0]}
        width={70}
        height={70}
        alt=""
      />
      <div className="flex flex-col items-end">
        <h1 className="font-bold text-xl">${savedProd.price}</h1>
        <h1 className="font-bold">{savedProd.title}</h1>
        <span className="text-sm text-neutral-500 text-medium">
          Added Time: {savedProd.savedTime}
        </span>
      </div>
      <div
        onClick={() => removeProduct(savedProd.id)}
        className="absolute invisible duration-300 group-hover:visible w-[35px] h-[35px] rounded-md flex items-center justify-center bg-red-500/50 hover:bg-red-500 text-white -bottom-10 cursor-pointer right-0"
      >
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
}

export default SavedProductsList;

