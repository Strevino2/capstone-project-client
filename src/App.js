import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from './components/Navigation'
import "./App.css";
import Router from "./Router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
