const sideBar = document.getElementById("side-bar");
const Logout = async () => {
  localStorage.removeItem("token");
  window.location.href = "../screen/userLogin.html";
};

export const sideBarComponent = () => {
  // Map elements to HTML
  sideBar.innerHTML = `
  <ul>
    <li><a href="/src/screen/employeeDashboard.html">Dashboard</a></li>
    <li><a href="/src/screen/employeeSettingDashboard.html">Setting</a></li>
    <li><a href="#" id="logout">Logout</a></li>
  </ul>
  `;

  const logout = document.getElementById("logout");
  logout.addEventListener("click", Logout);
};
