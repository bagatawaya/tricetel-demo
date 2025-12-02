export default function Logs() {
  const logs = [
    { caller: "+18885551234", date: "Today • 2:44 PM", status: "Completed" },
    { caller: "+14085550092", date: "Today • 1:11 PM", status: "Missed" },
  ];

  return (
    <div>
      <h1 className="page-title">Call Logs</h1>

      <div className="card">
        {logs.map((log) => (
          <div key={log.caller} className="item-row">
            <div>
              <strong>{log.caller}</strong>
              <div style={{ fontSize: 12, color: "#666" }}>{log.date}</div>
            </div>
            <div>{log.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
