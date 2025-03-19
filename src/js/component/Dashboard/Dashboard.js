export const Dashboard = (employee) => {
  return `<div class="dashboard-container">
    <div class="dashboard-header">
      <h2>Welcome, ${employee.message.name}</h2>
      <p>Your Employee Dashboard</p>
    </div>

    <div class="dashboard-card-container">
      <div class="dashboard-card">
        <h3>Position</h3>
        <p>${employee.message.position}</p>
      </div>

      <div class="dashboard-card">
        <h3>Department</h3>
        <p>${employee.message.department}</p>
      </div>

      <div class="dashboard-card">
        <h3>Salary</h3>
        <p>$${employee.message.salary}</p>
      </div>

      <div class="dashboard-card">
        <h3>Joining Date</h3>
        <p>${employee.message.joiningDate}</p>
      </div>
    </div>
  </div>`;
};
