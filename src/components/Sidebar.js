import React from "react";

const Sidebar = ({ activeTab, setActiveTab }) => {
  const tabs = ["Create", "Delete", "Modify", "List"];
  return (
    <nav className="sidebar">
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`tab ${activeTab === tab ? "active" : ""}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab === "Create" && "Create incident"}
          {tab === "Delete" && "Delete incident"}
          {tab === "Modify" && "Modify incident"}
          {tab === "List" && "List all incidents"}
        </div>
      ))}
    </nav>
  );
};

export default Sidebar;
