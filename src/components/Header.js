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
        {/* Corrected image paths */}
        <img src="/Display.svg" alt="Display Icon" />
        <button className="display-button" onClick={toggleDropdown}>
          Display
        </button>
        <img src="/down.svg" alt="Dropdown Arrow" />

        {/* Dropdown Menu */}
        {showDropdown && (
          <div className="dropdown-menu">
            <div className="dropdown-item">
              <label>Group By:</label>
              <select
                value={grouping}
                onChange={(e) => setGrouping(e.target.value)}
              >
                <option value="status">Status</option>
                <option value="assigned_user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>

            <div className="dropdown-item">
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
        )}
      </div>
    </div>
  );
};

export default Header;
