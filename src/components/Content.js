// import React from "react";
// import CreateIncident from "../pages/CreateIncident";
// import DeleteIncident from "../pages/DeleteIncident";
// import ModifyIncident from "../pages/ModifyIncident";
// import ListIncidents from "../pages/ListIncidents";

// const Content = ({ activeTab, onSubmit, list }) => {
//   switch (activeTab) {
//     case "Create":
//       return <CreateIncident onSubmit={onSubmit} />;
//     case "Delete":
//       return <DeleteIncident onSubmit={onSubmit} />;
//     case "Modify":
//       return <ModifyIncident onSubmit={onSubmit} />;
//     case "List":
//       return <ListIncidents onSubmit={onSubmit} list={list} />;
//     default:
//       return null;
//   }
// };

// export default Content;


import React from "react";
import CreateIncident from "../pages/CreateIncident";
import DeleteIncident from "../pages/DeleteIncident";
import ModifyIncident from "../pages/ModifyIncident";
import ListIncidents from "../pages/ListIncidents";

const Content = ({
  activeTab,
  createIncident,
  deleteIncident,
  modifyIncident,
  listIncidents,
  list,
}) => {
  switch (activeTab) {
    case "Create":
      return <CreateIncident onSubmit={createIncident} />;
    case "Delete":
      return <DeleteIncident onSubmit={deleteIncident} />;
    case "Modify":
      return <ModifyIncident onSubmit={modifyIncident} />;
    case "List":
      return <ListIncidents onSubmit={listIncidents} list={list} />;
    default:
      return null;
  }
};

export default Content;
