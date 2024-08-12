import React from "react";
import { Route, Routes } from "react-router-dom";
import { Order, APIContent, SavedProducts } from "../pages";

function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<APIContent />} />
      <Route path="/saved" element={<SavedProducts />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  );
}

export default CustomRoutes;
