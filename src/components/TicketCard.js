import React from "react";
import "./TicketCard.css";

const TicketCard = ({ ticket }) => {
  // Define icons based on priority
  const priorityIcons = {
    0: "/Img - Low Priority.svg",
    1: "/Img - Medium Priority.svg",
    2: "/Img - High Priority.svg",
    3: "/SVG - Urgent Priority colour.svg",
  };

  // Define icons based on status
  const statusIcons = {
    Todo: "/To-do.svg",
    "In progress": "/in-progress.svg",
    Backlog: "/Backlog.svg",
  };

  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <img
          src={statusIcons[ticket.status]}
          alt={`${ticket.status} Icon`}
          className="status-icon"
        />
        <span className="ticket-id">{ticket.id}</span>
      </div>
      <div className="ticket-content">
        <h3 className="ticket-title">{ticket.title}</h3>
      </div>
      <div className="ticket-footer">
        <div className="ticket-meta">
          <img
            src={priorityIcons[ticket.priority]}
            alt={`${ticket.priority} Priority Icon`}
            className="priority-icon"
          />
          <span className="ticket-tag">{ticket.tag}</span>
        </div>
        <img src={ticket.userImage} alt="User Avatar" className="user-avatar" />
      </div>
    </div>
  );
};

export default TicketCard;
