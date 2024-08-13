import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import {
  faXmark,
  faPerson,
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Context } from "../context/CustomContext";

function CustomModal() {
  const { showOrderModal, setShowOrderModal, handleFormSubmit } = useContext(Context);
  return (
    <div
      id="wrapper"
      onClick={(e) => e.target.id ? setShowOrderModal(false) : ""}
      className={`fixed top-0 z-50 left-0 ${showOrderModal ? "scale-100" : "scale-0"} w-full h-full backdrop-blur-lg flex duration-300 items-center justify-center `}
    >
      <div className="w-[500px] relative bg-white rounded-lg px-3 py-8">
        <h1 className="text-center text-2xl font-bold">Order Products</h1>
        <p className="capitalize text-xs text-neutral-500 text-center font-medium">
          fill the form about yourself
        </p>
        <FontAwesomeIcon
          id="wrapper"
          className="absolute top-4 right-4 text-xl opacity-50 hover:opacity-100 cursor-pointer"
          icon={faXmark}
        />
        <form
          autoComplete="off"
          onSubmit={(e) => handleFormSubmit(e)}
          className="px-5 mt-5 flex flex-col gap-5"
        >
          <label className="flex flex-col">
            <span className="font-medium">Full Name</span>
            <div className="flex items-center w-full p-2 gap-3 rounded-md border-2 border-black">
              <FontAwesomeIcon icon={faPerson} />
              <span className="w-px h-[15px] bg-neutral-600"></span>
              <input
                required
                type="text"
                name="fullName"
                className="outline-none"
                placeholder="Full Name"
              />
            </div>
          </label>

          <label className="flex flex-col">
            <span className="font-medium">Phone Number</span>
            <div className="flex items-center w-full p-2 gap-3 rounded-md border-2 border-black">
              <FontAwesomeIcon icon={faPhone} />
              <span className="w-px h-[15px] bg-neutral-600"></span>
              <input
                type="number"
                required
                name="phoneNumber"
                className="outline-none"
                placeholder="Phone Number"
              />
            </div>
          </label>
          <label className="flex flex-col">
            <span className="font-medium">Email</span>
            <div className="flex items-center w-full p-2 gap-3 rounded-md border-2 border-black">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="w-px h-[15px] bg-neutral-600"></span>
              <input
                type="email"
                required
                name="email"
                className="outline-none"
                placeholder="Email"
              />
            </div>
          </label>
          <label className="flex flex-col">
            <span className="font-medium">Adress</span>
            <div className="flex items-center w-full p-2 gap-3 rounded-md border-2 border-black">
              <FontAwesomeIcon icon={faLocationDot} />
              <span className="w-px h-[15px] bg-neutral-600"></span>
              <input
                type="text"
                required
                name="adress"
                className="outline-none"
                placeholder="Adress"
              />
            </div>
          </label>
          <button className="py-3 w-full opacity-50 hover:opacity-100 duration-300 bg-black text-white font-medium rounded-md">
            Order!
          </button>
        </form>
      </div>
    </div>
  );
}

export default CustomModal;
