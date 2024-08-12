import React, { lazy, Suspense } from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import APIContent from './components/APIContent'
import SavedProducts from './components/SavedProducts'
import Navbar from "./components/Navbar";

library.add(fas);

function App() {
  return (
    <main>
      <Navbar />

      <APIContent />
      <SavedProducts/>
    </main>
  );
}

export default App;
