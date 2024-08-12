import React from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import Navbar from "./components/Navbar";
import CustomRoutes from "./routes";

library.add(fas);

function App() {
  return (
    <main>
      <Navbar />

      <CustomRoutes />
    </main>
  );
}

export default App;
