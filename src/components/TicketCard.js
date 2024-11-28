import React from "react";
import "./TicketCard.css";

const TicketCard = ({ ticket }) => {
  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <span className="ticket-id">{ticket.id}</span>
      </div>
      <div className="ticket-content">
        <h3 className="ticket-title">{ticket.title}</h3>
      </div>
      <div className="ticket-footer">
        <div className="ticket-meta">
          <div className={`priority-icon priority-${ticket.priority}`}>
            <i className="fas fa-exclamation"></i>
          </div>
          <span className="ticket-tag">{ticket.tag}</span>
        </div>
        <img src={ticket.userImage} alt="User Avatar" className="user-avatar" />
      </div>
    </div>
  );
};

export default TicketCard;


// import React from "react";

// const TicketCard = ({ ticket }) => {
//   const priorityClass = [
//     "no-priority",
//     "low",
//     "medium",
//     "high",
//     "urgent",
//   ][ticket.priority];

//   return (
//     <div className={`ticket-card ${priorityClass}`}>
//       <h3>{ticket.title}</h3>
//       <p>Status: {ticket.status}</p>
//       <p>User: {ticket.assigned_user}</p>
//       <p>Priority: {ticket.priority}</p>
//     </div>
//   );
// };

// export default TicketCard;
