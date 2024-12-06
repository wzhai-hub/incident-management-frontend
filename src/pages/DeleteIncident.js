import React, { useState } from "react";

const DeleteIncident = ({ onSubmit }) => {
  const [incidentId, setIncidentId] = useState(""); 
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!incidentId) {
      setMessage("Please enter an incident ID.");
      return;
    }

    try {
      // 调用 onSubmit，传入单个 accidentId
      const response = await onSubmit(incidentId);
      if (response) {
        setMessage(response.message || "Incident deleted successfully.");
      }
    } catch (error) {
      setMessage(error.message || "Failed to delete the incident.");
    }
  };

  return (
    <div>
      <h2>Delete Incident</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter incident ID"
          value={incidentId}
          onChange={(e) => setIncidentId(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteIncident;
