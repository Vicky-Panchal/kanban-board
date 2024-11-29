import React, { useState } from "react";
import "./Header.css";

const Header = ({ grouping, setGrouping, sorting, setSorting }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="header">
      {/* Display Button */}
      <div className="display-container">
        <button className="display-button" onClick={toggleDropdown}>
          <img src="/Display.svg" alt="Display Icon" />
          Display
          <img src="/down.svg" alt="Dropdown Arrow" />
        </button>

        {/* Dropdown Menu */}
        {showDropdown && (
          <div className="dropdown-menu">
            <div className="dropdown-item">
              <label className="dropdown-label">Grouping</label>
              <select
                className="dropdown-select"
                value={grouping}
                onChange={(e) => setGrouping(e.target.value)}
              >
                <option value="status">Status</option>
                <option value="assigned_user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>

            <div className="dropdown-item">
              <label className="dropdown-label">Ordering</label>
              <select
                className="dropdown-select"
                value={sorting}
                onChange={(e) => setSorting(e.target.value)}
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
