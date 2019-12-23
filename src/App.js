import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GoogleApiWrapper from "./GoogleMapContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GoogleApiWrapper />
      </header>
    </div>
  );
}
export default App;
