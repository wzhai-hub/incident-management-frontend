import React, { useState ,useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Message from "./components/Message";
import "./App.css";
const BASE_URL = process.env.NODE_ENV === 'production' 
    ? ''
    : 'http://192.168.0.106:9090';

const API_URL = `${BASE_URL}/api/incidents`;

const App = () => {
  const [activeTab, setActiveTab] = useState("Create");
  const [message, setMessage] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    setMessage("");
  }, [activeTab]);

  const createIncident = async (data) => {
    setMessage("");
    console.log('body:',JSON.stringify(data));
    try {
      const response = await fetch(`${API_URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.status === 201) {
        setMessage("Incident created successfully.");
      } else {
        const responseData = await response.json();
        setMessage(`create incident. Status: ${response.status}. Message: ${responseData.message || 'No message'}`);
      }
    } catch (error) {
      setMessage(`Error creating incident: ${error.message}`);
    }
  };

  const deleteIncident = async (accidentId) => {
    setMessage("");
    try {
      const response = await fetch(`${API_URL}/${accidentId}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        return {
          message: "Incident deleted successfully.",
        };
      } else if (response.status === 404) {
        return {
          message: `Incident with ID ${accidentId} not found.`,
        };
      } else {
        throw new Error("Unexpected error occurred.");
      }
    } catch (error) {
      throw new Error(error.message || "Failed to delete the incident.");
    }
  };

  
  const modifyIncident = async ({ accidentId, details }) => {
    setMessage("");
    try {
      const response = await fetch(`${API_URL}/${accidentId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(details),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        setMessage(`Modification successful: ${responseData.message}`);
      } else {
        const errorText = await response.text();
        setMessage(`Modification failed: ${errorText || response.statusText}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };
  

  const listIncidents = async (params) => {
    setMessage("");
    try {
      const queryParams = new URLSearchParams(params).toString();
      const response = await fetch(`${API_URL}?${queryParams}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        const result = await response.json();
        setList(result.incidents || []);
        setMessage("Incidents fetched successfully");
        return result;
      } else {
        const errorText = await response.text();
        setMessage(`Failed to fetch incidents: ${errorText || response.statusText}`);
      }
    } catch (error) {
      setMessage(`Request failed: ${error.message}`);
    }
  };
  

  return (
    <div className="incident-management">
      <Header />
      <div className="container">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="content">
          <Content activeTab={activeTab} 
                  createIncident={createIncident}
                  deleteIncident={deleteIncident}
                  modifyIncident={modifyIncident}
                  listIncidents={listIncidents}
                  list={list}
           />
          <Message message={message} />
        </main>
      </div>
    </div>
  );
};

export default App;

