import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { CustomContext } from "./context/CustomContext";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CustomContext>
      <App />
    </CustomContext>
  </BrowserRouter>
);
