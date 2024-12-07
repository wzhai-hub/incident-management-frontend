import React, { useState, useEffect } from "react";
import './ListIncidents.css';

const ListIncidents = ({ onSubmit }) => {
  const [incidents, setIncidents] = useState([]);
  const [status, setStatus] = useState(""); 
  const [severity, setSeverity] = useState(""); 
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const fetchIncidents = () => {
    setIncidents([]);
    const params = {
      status,
      severity,
      page,
      limit,
    };

    // 去除空的参数
    Object.keys(params).forEach(key => params[key] === "" && delete params[key]);

    onSubmit(params).then((response) => {
      if (response && response.incidents) {
        setIncidents(response.incidents);
      }
    });

  };

  useEffect(() => {
    fetchIncidents();
  }, [page, limit, status, severity]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    if (name === "status") setStatus(value);
    if (name === "severity") setSeverity(value);
  };

  const handlePaginationChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <h2>Incident List</h2>
      <div>
        <label>Status:</label>
        <select name="status" value={status} onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="Open">Open</option>
          <option value="Closed">Closed</option>
        </select>

        <label>Severity:</label>
        <select name="severity" value={severity} onChange={handleFilterChange}>
          <option value="">All</option>
          {[1, 2, 3, 4, 5].map((sev) => (
            <option key={sev} value={sev}>
              {sev}
            </option>
          ))}
        </select>

        <label>Page:</label>
        <input
          type="number"
          value={page}
          onChange={(e) => setPage(Number(e.target.value))}
          min={1}
        />
        <label>Limit:</label>
        <input
          type="number"
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
          min={1}
        />
      </div>

      <button onClick={fetchIncidents}>Get Incidents List</button>

      <table>
        <thead>
          <tr>
            <th>Accident ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Severity</th>
          </tr>
        </thead>
        <tbody>
          {incidents.length > 0 ? (
            incidents.map((incident) => (
              <tr key={incident.accidentId}>
                <td>{incident.accidentId}</td>
                <td><strong>{incident.title}</strong></td>
                <td>{incident.description}</td>
                <td>{incident.status}</td>
                <td>{incident.severity}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No incidents found.</td>
            </tr>
          )}
        </tbody>
      </table>


      <div>
        <button onClick={() => handlePaginationChange(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <button onClick={() => handlePaginationChange(page + 1)} disabled={incidents.length === 0}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ListIncidents;
