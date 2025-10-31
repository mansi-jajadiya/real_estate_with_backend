import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
import "./AdminDashboard .css";

const AdminDashboard = () => {
  const pieData = [
    { name: "Agent", value: 38 },
    { name: "Customers", value: 62 },
  ];
  const COLORS = ["#fcae65", "#a851f0"];

  return (
    <div className="container admin_dashboard-container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="admin_dashboard-title">Dashboard</h2>
          <p className="admin_dashboard-subtitle">
            Welcome to houzez Property Admin
          </p>
        </div>
        <button
          className="btn admin_refresh-btn"
          onClick={() => window.location.reload()}
        >
          Refresh
        </button>
      </div>

      <div className="admin_total-properties-card mb-4">
        <div className="row align-items-center">
          <div className="col-auto">
            <div className="admin_properties-icon">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <rect
                  x="8"
                  y="15"
                  width="20"
                  height="35"
                  stroke="white"
                  strokeWidth="3"
                  fill="none"
                />
                <rect
                  x="32"
                  y="10"
                  width="20"
                  height="40"
                  stroke="white"
                  strokeWidth="3"
                  fill="none"
                />
                <rect x="12" y="25" width="4" height="8" fill="white" />
                <rect x="20" y="25" width="4" height="8" fill="white" />
                <rect x="12" y="35" width="4" height="8" fill="white" />
                <rect x="20" y="35" width="4" height="8" fill="white" />
                <rect x="36" y="20" width="4" height="8" fill="white" />
                <rect x="44" y="20" width="4" height="8" fill="white" />
                <rect x="36" y="30" width="4" height="8" fill="white" />
                <rect x="44" y="30" width="4" height="8" fill="white" />
              </svg>
            </div>
          </div>
          <div className="col">
            <h3 className="admin_properties-title">Total Properties</h3>
            <p className="admin_properties-subtitle">
              431 more to break last month record
            </p>
          </div>
          <div className="col-auto">
            <div className="admin_properties-count">4,562</div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="admin_property-card">
            <div className="row align-items-center">
              <div className="col">
                <div className="admin_property-number">2,356</div>
                <div className="admin_property-title">Upcoming Projects</div>
                <div className="admin_property-target">Target 3k/month</div>
              </div>
              <div className="col-auto" style={{ width: 150, height: 150 }}>
                <CircularProgressbar
                  value={71}
                  text={`${71}%`}
                  styles={buildStyles({
                    textColor: "#4285f4",
                    pathColor: "#4285f4",
                    trailColor: "#e9ecef",
                  })}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="admin_property-card">
            <div className="row align-items-center">
              <div className="col">
                <div className="admin_property-number">2,206</div>
                <div className="admin_property-title">Properties for Rent</div>
                <div className="admin_property-target">Target 3k/month</div>
              </div>
              <div className="col-auto" style={{ width: 150, height: 150 }}>
                <CircularProgressbar
                  value={90}
                  text={`${90}%`}
                  styles={buildStyles({
                    textColor: "#77c720",
                    pathColor: "#77c720",
                    trailColor: "#e9ecef",
                  })}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="admin_chart-card p-4 bg-white shadow-sm">
        <h4 className="mb-3 admin_chart-heading">Users Overview</h4>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={110}
              fill="#8884d8"
              dataKey="value"
              label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend verticalAlign="bottom" align="center" iconType="circle" />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="row mt-4">
        <div className="col-md-12 mb-4">
          <div className="admin_total-properties-card">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="admin_properties-title">Total Agents</h3>
                <p className="admin_properties-subtitle">
                  54 new agents joined this month
                </p>
              </div>
              <div className="col-auto">
                <div className="admin_properties-count">1,245</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="admin_property-card">
            <div className="row align-items-center">
              <div className="col">
                <div className="admin_property-number">845</div>
                <div className="admin_property-title">Active Agents</div>
                <div className="admin_property-target">Target 1k/month</div>
              </div>
              <div className="col-auto" style={{ width: 150, height: 150 }}>
                <CircularProgressbar
                  value={84}
                  text={`${84}%`}
                  styles={buildStyles({
                    textColor: "#0d6efd",
                    pathColor: "#0d6efd",
                    trailColor: "#e9ecef",
                  })}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="admin_property-card">
            <div className="row align-items-center">
              <div className="col">
                <div className="admin_property-number">400</div>
                <div className="admin_property-title">
                  Top Performing Agents
                </div>
                <div className="admin_property-target">Target 500/month</div>
              </div>
              <div className="col-auto" style={{ width: 150, height: 150 }}>
                <CircularProgressbar
                  value={80}
                  text={`${80}%`}
                  styles={buildStyles({
                    textColor: "#28a745",
                    pathColor: "#28a745",
                    trailColor: "#e9ecef",
                  })}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
