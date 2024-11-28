import React from "react";
import KanbanColumn from "./KanbanColumn";

const groupBy = (array = [], key) =>
  array.reduce((result, item) => {
    const group = item[key] || "Uncategorized";
    (result[group] = result[group] || []).push(item);
    return result;
  }, {});

  const KanbanBoard = ({ tickets = [], grouping, sorting }) => {
    const sortedTickets = [...tickets].sort((a, b) => {
      if (sorting === "priority") return b.priority - a.priority;
      if (sorting === "title") return a.title.localeCompare(b.title);
      return 0;
    });
  
    const groupedTickets = groupBy(sortedTickets, grouping);
  
    if (Object.keys(groupedTickets).length === 0) {
      return <div>No tickets to display</div>;
    }
  
    return (
      <div className="kanban-board">
        {Object.keys(groupedTickets).map((group) => (
          <KanbanColumn
            key={group}
            group={group}
            tickets={groupedTickets[group]}
          />
        ))}
      </div>
    );
  };
  
export default KanbanBoard;