import React from "react";
import TicketCard from "./TicketCard";
import "./KanbanColumn.css";

const KanbanColumn = ({ group, tickets }) => {
  // Define icons based on group/status
  const groupIcons = {
    Todo: "/to-do.svg",
    "In progress": "/in-progress.svg",
    Backlog: "/Backlog.svg",
    Done: "/Done.svg",
    Cancelled: "/Cancelled.svg",
  };

  // console.log(group);
  // console.log("*****************************");
  // console.log(tickets); 
  return (
    <div className="kanban-column">
      <div className="kanban-column-header">
        {/* Icon before the heading */}
        <img
          src={groupIcons[group]}
          alt={`${group} Icon`}
          className="kanban-icon"
        />
        <h2>{group}</h2>
        {/* Icon after the heading */}
        <img
          src={"/add.svg"}
          alt={`${group} Icon`}
          className="kanban-icon-after"
        />
      </div>

      {tickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default KanbanColumn;
