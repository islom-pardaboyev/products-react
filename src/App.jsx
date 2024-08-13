import React, { useContext } from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./components/Navbar";
import CustomRoutes from "./routes";
import { Context } from "./context/CustomContext";
import CustomModal from "./components/CustomModal";

library.add(fas);

function App() {
  const { showOrderModal, setShowOrderModal } = useContext(Context);

  return (
    <main className="transition-all h-screen overflow-y-auto duration-300 dark:bg-neutral-800">
      <Navbar />

      <CustomRoutes />
      <CustomModal
        showOrderModal={showOrderModal}
        setShowOrderModal={setShowOrderModal}
      />
    </main>
  );
}

export default App;
