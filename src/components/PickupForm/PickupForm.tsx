import React, { useState } from "react";
import styles from "./PickupForm.module.css";

interface PickupFormProps {
  onSubmit: (newPickup: PickupRequest) => void;
}

export interface PickupRequest {
  id: number;
  date: string;
  location: string;
}

const PickupForm: React.FC<PickupFormProps> = ({ onSubmit }) => {
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [submittedId, setSubmittedId] = useState<number | null>(null); // Track the submitted ID

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = Date.now(); // Generate a unique ID (using current time for simplicity)
    onSubmit({ id: newId, date, location }); // Include the ID in the submitted data
    setSubmittedId(newId); // Update the submitted ID state
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
