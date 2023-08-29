import React, { useState } from "react";
import axios from "axios";
import styles from "./PickupForm.module.css";

export interface PickupRequest {
  id: number;
  date: string;
  location: string;
}

const PickupForm: React.FC = () => {
  // Holds selected date for pickup
  const [date, setDate] = useState("");
  // Holds selected location for pickup
  const [location, setLocation] = useState("");
  // Holds unique pickup Id
  const [submittedId, setSubmittedId] = useState<number | null>(null); // Track the submitted ID

  const postPickupRequest = async () => {
    await axios
      .post("http://localhost:3000/pickup-request", {
        date: date,
        location: location,
        status: "Scheduled",
      })
      .then(function (response) {
        setSubmittedId(response?.data?.id);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // Creates a pickup ID which is a date
  // calls onSubmit function that is being passed as props
  // stores new pickupId in a state
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    postPickupRequest();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      {submittedId !== null && (
        <p className={styles.submittedId}>
          Your pickup request ID: {submittedId}
        </p>
      )}

      <div className={styles.inputGroup}>
        <label htmlFor="date" className={styles.label}>
          Date:
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          id="date"
          className={styles.inputField}
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="location" className={styles.label}>
          Location:
        </label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          id="location"
          className={styles.inputField}
        />
      </div>

      <button type="submit" className={styles.submitButton}>
        Submit Pickup Request
      </button>
    </form>
  );
};

export default PickupForm;
