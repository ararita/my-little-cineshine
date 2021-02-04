import "./App.css";
import React, { useState, useEffect } from "react";
import SearchBar from "./compononets/SearchBar";


function App() {
  return (
    <div className="App">
      <h1 className="title">My little cineshine</h1>
      <SearchBar />
    </div>
  );
}

export default App;
