import React, { useState } from "react";

const ModifyIncident = ({ onSubmit }) => {
  const [incidentId, setIncidentId] = useState("");
  const [incidentData, setIncidentData] = useState({
    title: "",
    description: "",
    location: "",
    severity: 1,
    status: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIncidentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!incidentId) {
      alert("Please enter a valid incident ID.");
      return;
    }

    const updatedIncident = {};
    Object.keys(incidentData).forEach((key) => {
      if (incidentData[key]) {
        updatedIncident[key] = incidentData[key];
      }
    });

    if (Object.keys(updatedIncident).length === 0) {
      alert("Please provide at least one field to update.");
      return;
    }

    onSubmit({ accidentId: incidentId, details: updatedIncident });
  };

  return (
    <div>
      <h2>Modify Incident</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter incident ID"
            value={incidentId}
            onChange={(e) => setIncidentId(e.target.value)}
            required
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Location</th>
              <th>Severity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  name="title"
                  value={incidentData.title}
                  onChange={handleInputChange}
                  placeholder="Title (optional)"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="description"
                  value={incidentData.description}
                  onChange={handleInputChange}
                  placeholder="Description (optional)"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="location"
                  value={incidentData.location}
                  onChange={handleInputChange}
                  placeholder="Location (optional)"
                />
              </td>
              <td>
                <select
                  name="severity"
                  value={incidentData.severity}
                  onChange={handleInputChange}
                >
                  <option value={1}>Low</option>
                  <option value={2}>Medium</option>
                  <option value={3}>High</option>
                </select>
              </td>
              <td>
                <input
                  type="text"
                  name="status"
                  value={incidentData.status}
                  onChange={handleInputChange}
                  placeholder="Status (optional)"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ModifyIncident;
