import React, { useState } from "react";
import "./App.css";
import PickupForm, {
  PickupRequest as FormPickupRequest,
} from "./components/PickupForm/PickupForm";
import PickupStatus, {
  PickupRequest as StatusPickupRequest,
} from "./components/PickupStatus/PickupStatus";

function App() {
  const [pickupRequests, setPickupRequests] = useState<StatusPickupRequest[]>(
    []
  );

  const handlePickupSubmit = (newPickup: FormPickupRequest) => {
    const newRequest = { ...newPickup, id: Date.now(), status: "Scheduled" };
    setPickupRequests([...pickupRequests, newRequest]);
  };

  return (
    <div className="App">
      <h1>Revivn Pickup App</h1>
      <div className="formWrap">
        <PickupForm onSubmit={handlePickupSubmit} />
        <PickupStatus pickupRequests={pickupRequests} />
      </div>
    </div>
  );
}

export default App;
