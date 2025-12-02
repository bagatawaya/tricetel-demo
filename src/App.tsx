import React, { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Templates from "./pages/Templates";
import Sip from "./pages/Sip";
import Numbers from "./pages/Numbers";
import Logs from "./pages/Logs";
import Settings from "./pages/Settings";

const pages: Record<string, React.ReactNode> = {
  dashboard: <Dashboard />,
  templates: <Templates />,
  sip: <Sip />,
  numbers: <Numbers />,
  logs: <Logs />,
  settings: <Settings />,
};

export default function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="app-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>TriceTel Demo</h2>

        <div
          className={`nav-item ${page === "dashboard" ? "active" : ""}`}
          onClick={() => setPage("dashboard")}
        >
          Dashboard
        </div>

        <div
          className={`nav-item ${page === "templates" ? "active" : ""}`}
          onClick={() => setPage("templates")}
        >
          Agent Templates
        </div>

        <div
          className={`nav-item ${page === "sip" ? "active" : ""}`}
          onClick={() => setPage("sip")}
        >
          SIP
        </div>

        <div
          className={`nav-item ${page === "numbers" ? "active" : ""}`}
          onClick={() => setPage("numbers")}
        >
          Phone Numbers
        </div>

        <div
          className={`nav-item ${page === "logs" ? "active" : ""}`}
          onClick={() => setPage("logs")}
        >
          Call Logs
        </div>

        <div
          className={`nav-item ${page === "settings" ? "active" : ""}`}
          onClick={() => setPage("settings")}
        >
          Settings
        </div>
      </aside>

      {/* Main Page */}
      <main className="main">{pages[page]}</main>
    </div>
  );
}
