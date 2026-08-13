import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <p>Welcome to KStudio</p>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Total Customers</h3>
          <p>0</p>
        </div>

        <div className="dashboard-card">
          <h3>Today's Bookings</h3>
          <p>0</p>
        </div>

        <div className="dashboard-card">
          <h3>Photos Taken</h3>
          <p>0</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
