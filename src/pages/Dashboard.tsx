export default function Dashboard() {
  const agents = [
    { name: "Tristan", status: "Active" },
    { name: "Bobby Scheduler", status: "Active" },
    { name: "Bobby Support", status: "Idle" },
  ];

  return (
    <div>
      <h1 className="page-title">Agents</h1>

      <div className="card">
        {agents.map((a) => (
          <div key={a.name} className="item-row">
            <div>
              <strong>{a.name}</strong>
              <div style={{ fontSize: 12, color: "#666" }}>{a.status}</div>
            </div>
            <button className="btn">View</button>
          </div>
        ))}
      </div>
    </div>
  );
}
