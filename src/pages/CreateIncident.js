import React, { useState } from "react";

const CreateIncident = ({ onSubmit }) => {
  const [incident, setIncident] = useState({
    accidentId: "",
    title: "",
    description: "",
    location: "",
    severity: 1,
    status: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIncident((prevIncident) => ({
      ...prevIncident,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(incident); 
  };

  return (
    <div>
      <h2>Create Incident</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          <div style={{ flex: 1, minWidth: "120px" }}>
            <label>Accident ID</label>
            <input
              type="number"
              name="accidentId"
              value={incident.accidentId}
              onChange={handleInputChange}
              required
              style={{ width: "100%" }}
            />
          </div>

          <div style={{ flex: 1, minWidth: "120px" }}>
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={incident.title}
              onChange={handleInputChange}
              required
              style={{ width: "100%" }}
            />
          </div>

          <div style={{ flex: 1, minWidth: "120px" }}>
            <label>Description</label>
            <input
              type="text"
              name="description"
              value={incident.description}
              onChange={handleInputChange}
              required
              style={{ width: "100%" }}
            />
          </div>

          <div style={{ flex: 1, minWidth: "120px" }}>
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={incident.location}
              onChange={handleInputChange}
              required
              style={{ width: "100%" }}
            />
          </div>

          <div style={{ flex: 1, minWidth: "120px" }}>
            <label>Severity</label>
            <select
              name="severity"
              value={incident.severity}
              onChange={handleInputChange}
              required
              style={{ width: "100%" }}
            >
              <option value={1}>Low</option>
              <option value={2}>Medium</option>
              <option value={3}>High</option>
            </select>
          </div>

          <div style={{ flex: 1, minWidth: "120px" }}>
            <label>Status</label>
            <input
              type="text"
              name="status"
              value={incident.status}
              onChange={handleInputChange}
              required
              style={{ width: "100%" }}
            />
          </div>
        </div>
        
        <div>
          <button type="submit" style={{ marginTop: "20px" }}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreateIncident;
