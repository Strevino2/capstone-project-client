import React from "react";
import { BrowserRouter } from "react-router-dom";
import CustomNavigation from "./components/CustomNavigation";
// import Navigation from "./components/Navigation";
import BottomNavigation from "./components/BottomNavigation";
import "./App.css";
import Router from "./Router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomNavigation />
        {/* <Navigation /> */}
        <Router />
        <BottomNavigation />
      </BrowserRouter>
    </div>
  );
}

export default App;
