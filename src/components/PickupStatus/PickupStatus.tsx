import React, { useState } from "react";
import styles from "./PickupStatus.module.css";

interface PickupStatusProps {
  pickupRequests: PickupRequest[];
}

export interface PickupRequest {
  id: number;
  date: string;
  location: string;
  status: string;
}

const PickupStatus: React.FC<PickupStatusProps> = ({ pickupRequests }) => {
  const [searchId, setSearchId] = useState("");
  const [status, setStatus] = useState("");

  const handleSearch = () => {
    const requestedPickup = pickupRequests.find(
      (request) => request.id === Number(searchId)
    );
    console.log("requestedPickup", requestedPickup);
    if (requestedPickup) {
      setStatus(requestedPickup.status);
    } else {
      setStatus("Pickup not found");
    }
  };

  return (
    <div className={styles.statusContainer}>
      <div className={styles.inputGroup}>
        <label htmlFor="searchId" className={styles.label}>
          Enter Pickup ID:
        </label>
        <input
          type="text"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          id="searchId"
          className={styles.inputField}
        />
      </div>

      <button onClick={handleSearch} className={styles.checkButton}>
        Check Status
      </button>
      <br />
      <div>Status: {status}</div>
    </div>
  );
};

export default PickupStatus;
