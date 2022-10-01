import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from './components/Navigation'
import CustomNavigation from './components/CustomNavigation'
import "./App.css";
import Router from "./Router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
      {/* <CustomNavigation /> */}
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
