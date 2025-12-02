export default function Sip() {
  return (
    <div>
      <h1 className="page-title">SIP</h1>

      <div className="card">
        <h3>SIP Trunk</h3>
        <p>No trunk configured.</p>
      </div>

      <div className="card">
        <h3>Outbound SIP IPs</h3>
        <ul>
          <li>45.202.75.61</li>
          <li>45.202.75.62</li>
          <li>45.202.75.63</li>
        </ul>
      </div>

      <div className="card">
        <h3>Inbound Address</h3>
        <p>sip:+19707726934@sip.tricetel.ai</p>
      </div>
    </div>
  );
}
