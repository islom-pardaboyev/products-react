import React, { createContext, useState, useEffect } from "react";

const Context = createContext();

function CustomContext({ children }) {
  const [users, setUsers] = useState([]);
  const [savedProducts, setSavedProducts] = useState([]);
  const [showSavedProducts, setShowSavedProducts] = useState(false);

  function addBasket(id) {
    const product = users.find((user) => user.id === id);
    product.isSaved = false;

    if (savedProducts.find((savedProduct) => savedProduct.id === id)) {
      alert("This Products Is Already Exist");
    } else {
      setSavedProducts([...savedProducts, product]);
    }
  }

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch(console.error);
  }, []);

  return (
    <Context.Provider value={{ users, setUsers, savedProducts, addBasket, showSavedProducts, setShowSavedProducts }}>
      {children}
    </Context.Provider>
  );
}

export { Context, CustomContext };
