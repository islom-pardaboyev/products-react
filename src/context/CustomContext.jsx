import React, { createContext, useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const Context = createContext();

function CustomContext({ children }) {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );
  const [loading, setLoading] = useState(
    JSON.parse(localStorage.getItem("loading")) || true
  );
  const [savedProducts, setSavedProducts] = useState(
    JSON.parse(localStorage.getItem("savedProducts")) || []
  );
  const [orderedProducts, setOrderedProducts] = useState(
    JSON.parse(localStorage.getItem("orderedProducts")) || []
  );
  const [showSavedProducts, setShowSavedProducts] = useState(
    JSON.parse(localStorage.getItem("showSavedProducts")) || false
  );
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const [showOrderModal, setShowOrderModal] = useState(
    JSON.parse(localStorage.getItem("showOrderModal")) || false
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
    localStorage.setItem("loading", JSON.stringify(loading));
    localStorage.setItem("savedProducts", JSON.stringify(savedProducts));
    localStorage.setItem("orderedProducts", JSON.stringify(orderedProducts));
    localStorage.setItem("showSavedProducts", JSON.stringify(showSavedProducts));
    localStorage.setItem("showOrderModal", JSON.stringify(showOrderModal));
  }, [products, loading, savedProducts, orderedProducts, showSavedProducts, showOrderModal]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch products:", error);
        toast.error("Failed to load products. Please try again later.");
        setLoading(false);
      });
  }, []);

  function addBasket(id) {
    const product = products.find((product) => product.id === id);
    if (!product) {
      toast.error("Product not found.");
      return;
    }

    if (savedProducts.some((savedProduct) => savedProduct.id === id)) {
      toast.error("This product is already in the saved list.");
    } else {
      product.isSaved = true;
      product.savedTime = new Date().toLocaleTimeString();
      setSavedProducts([...savedProducts, product]);
      toast.success("Product added to the saved list.");
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const orderOwner = {
      fullName: e.target.fullName.value,
      phone: e.target.phoneNumber.value,
      address: e.target.address.value,
      email: e.target.email.value,
    };
    console.log(orderOwner);

    setShowOrderModal(false);
    e.target.reset();

    const id = JSON.parse(localStorage.getItem('id'));
    const product = products.find((product) => product.id === id);

    if (!product) {
      toast.error("Product not found.");
      return;
    }

    const existingProductIndex = orderedProducts.findIndex((prod) => prod.id === id);

    if (existingProductIndex !== -1) {
      toast.error("This product is already in the order list.");
    } else {
      setOrderedProducts([...orderedProducts, { ...product, orderOwner }]);
      toast.success("Product ordered successfully.");
    }
  }

  function addOrder(id) {
    setShowOrderModal(true);
    localStorage.setItem('id', JSON.stringify(id));
  }

  function removeProduct(id) {
    setSavedProducts(
      savedProducts.filter((savedProduct) => savedProduct.id !== id)
    );
    toast.success("Product removed from the saved list.");
  }
  function removeProductOrder(id) {
    setOrderedProducts(
      orderedProducts.filter((orderedProducts) => orderedProducts.id !== id)
    );
    toast.success("Product removed from the ordered list.");
  }

  return (
    <Context.Provider
      value={{
        products,
        loading,
        setProducts,
        savedProducts,
        addBasket,
        removeProduct,
        removeProductOrder,
        showSavedProducts,
        setShowSavedProducts,
        darkMode,
        setDarkMode,
        showOrderModal,
        setShowOrderModal,
        orderedProducts,
        setOrderedProducts,
        handleFormSubmit,
        addOrder,
      }}
    >
      <Toaster position="top-right" reverseOrder={false} />
      {children}
    </Context.Provider>
  );
}

export { Context, CustomContext };