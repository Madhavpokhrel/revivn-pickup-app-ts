import React, { useState } from "react";
import axios from "axios";
import styles from "./PickupStatus.module.css";

export interface PickupRequest {
  id: number;
  date: string;
  location: string;
  status: string;
}

const PickupStatus: React.FC = () => {
  // Holds the pickup id that is needed to search for the pickup details
  const [searchId, setSearchId] = useState("");
  // Holds the pickup status. It can be either two of the following:
  // 1. Scheduled
  // 2. Pickup not found
  const [status, setStatus] = useState("");

  const handleSearch = async () => {
    await axios
      .get(`http://localhost:3000/pickup-request/${searchId}`)
      .then(function (response) {
        if (response?.data?.status) {
          setStatus(response?.data?.status);
        } else {
          setStatus("Pickup not found");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
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
