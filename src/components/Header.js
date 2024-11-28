import React from "react";

const Header = ({ grouping, setGrouping, sorting, setSorting }) => {
  return (
    <div className="header">
      <h1>Kanban Board</h1>
      <div className="controls">
        <label>Group By:</label>
        <select
          value={grouping}
          onChange={(e) => setGrouping(e.target.value)}
        >
          <option value="status">Status</option>
          <option value="assigned_user">User</option>
          <option value="priority">Priority</option>
        </select>

        <label>Sort By:</label>
        <select
          value={sorting}
          onChange={(e) => setSorting(e.target.value)}
        >
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
