import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import KanbanBoard from "./components/KanbanBoard";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState("status");
  const [sorting, setSorting] = useState("priority");

  // Fetch tickets and users from the API
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        setTickets(response.data.tickets);
        setUsers(response.data.users);
        console.log(response);
      } catch (error) {
        console.error("Error fetching tickets:", error);
        setTickets([]); // Fallback to an empty array
        setUsers([]);
      }
    };
    fetchTickets();
  }, []);

  // Save view state in localStorage
  useEffect(() => {
    const savedState = localStorage.getItem("viewState");
    if (savedState) {
      const { grouping, sorting } = JSON.parse(savedState);
      setGrouping(grouping);
      setSorting(sorting);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "viewState",
      JSON.stringify({ grouping, sorting })
    );
  }, [grouping, sorting]);

  // Map userId to user name
  const ticketsWithUserNames = tickets.map((ticket) => {
    const user = users.find((user) => user.id === ticket.userId);
    return { ...ticket, assigned_user: user ? user.name : "Unknown" };
  });

  return (
    <div className="App">
      <Header
        grouping={grouping}
        setGrouping={setGrouping}
        sorting={sorting}
        setSorting={setSorting}
      />
      <KanbanBoard
        tickets={ticketsWithUserNames}
        grouping={grouping}
        sorting={sorting}
      />
    </div>
  );
};

export default App;
