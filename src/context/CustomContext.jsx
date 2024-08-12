import React, { createContext, useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const Context = createContext();

function CustomContext({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [savedProducts, setSavedProducts] = useState(
    JSON.parse(window.localStorage.getItem("savedProducts")) || []
  );
  const [showSavedProducts, setShowSavedProducts] = useState(false);

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

  function removeProduct(id) {
    setSavedProducts(savedProducts.filter((savedProduct) => savedProduct.id !== id));
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

  window.localStorage.setItem("savedProducts", JSON.stringify(savedProducts));

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
      }}
    >
      <Toaster position="top-right" reverseOrder={false} />
      {children}
    </Context.Provider>
  );
}

export { Context, CustomContext };