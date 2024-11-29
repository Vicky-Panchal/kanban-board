import React from "react";
import TicketCard from "./TicketCard";
import "./KanbanColumn.css";

const KanbanColumn = ({ group, tickets }) => {
  // Define icons based on group/status
  const groupIcons = {
    Todo: "/to-do.svg",
    "In Progress": "/in-progress.svg",
    Done: "/done.svg",
    Cancelled: "/cancelled.svg",
  };

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
          src={groupIcons[group]}
          alt={`${group} Icon`}
          className="kanban-icon"
        />
      </div>

      {tickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default KanbanColumn;
