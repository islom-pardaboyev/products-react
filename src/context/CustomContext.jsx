import React, { createContext, useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const Context = createContext();

function CustomContext({ children }) {
  // use states
  // const [showOrderModal, setShowOrderModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [savedProducts, setSavedProducts] = useState(
    JSON.parse(localStorage.getItem("savedProducts")) || []
  );
  const [orderedProducts, setOrderedProducts] = useState(
    JSON.parse(localStorage.getItem("orderedProducts")) || []
  );
  const [showSavedProducts, setShowSavedProducts] = useState(false);
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const [showOrderModal, setShowOrderModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    setDarkMode(JSON.parse(localStorage.getItem("darkMode")));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    window.localStorage.setItem("savedProducts", JSON.stringify(savedProducts));
  }, [savedProducts]);

  function addBasket(id) {
    const product = products.find((user) => user.id === id);
    product.isSaved = false;
    product.savedTime = new Date().toLocaleTimeString();

    if (savedProducts.find((savedProduct) => savedProduct.id === id)) {
      toast.error("This Products Is Already Exist");
    } else {
      setSavedProducts([...savedProducts, product]);
      toast.success("Products Added Saved List");
    }
  }

  function handleFormSubmit(e) {
    setShowOrderModal(false);
    e.preventDefault();
    const orderOwner = {
      fullName: e.target.fullName.value,
      phone: e.target.phoneNumber.value,
      address: e.target.adress.value,
      email: e.target.email.value,
    };
    toast.success("Product Ordered")
    console.log(orderOwner);
  }

  function removeProduct(id) {
    setSavedProducts(
      savedProducts.filter((savedProduct) => savedProduct.id !== id)
    );
    toast.success("Products Removed Saved List");
  }

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <Context.Provider
      value={{
        products,
        loading,
        setProducts,
        savedProducts,
        addBasket,
        removeProduct,
        showSavedProducts,
        setShowSavedProducts,
        darkMode,
        setDarkMode,
        showOrderModal,
        setShowOrderModal,
        orderedProducts,
        setOrderedProducts,
        handleFormSubmit,
      }}
    >
      <Toaster position="top-right" reverseOrder={false} />
      {children}
    </Context.Provider>
  );
}

export { Context, CustomContext };
