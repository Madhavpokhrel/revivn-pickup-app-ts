import React from "react";
import "./App.css";
import PickupForm from "./components/PickupForm/PickupForm";
import PickupStatus from "./components/PickupStatus/PickupStatus";

function App() {
  return (
    <div className="App">
      <h1>Revivn Pickup App</h1>
      <div className="formWrap">
        <PickupForm />
        <PickupStatus />
      </div>
    </div>
  );
}

export default App;
