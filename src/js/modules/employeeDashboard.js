import { getEmployeeApi } from "../api/employeeApi.js";
import { Dashboard } from "../component/Dashboard/Dashboard.js";
import { protectedRoute } from "../component/ProtectedRoute.js";
import { sideBarComponent } from "../component/SideBar.js";
import { manageBaseUrl } from "../utils/manageBaseUrl.js";


manageBaseUrl();

const content = document.getElementById("content");

// const base = import.meta.env.BASE_URL;
// window.location.href.includes("employeeDashboard.html") ??
//   `${base}src/screen/employeeDashboard.html`;
  
const userID = localStorage.getItem("token"); // Ensure this matches API expectations
console.log("User ID from localStorage:", userID);

export const employeeDashboard = async () => {
  // Render sidebar
  sideBarComponent();

  try {
    const employeeByID = await getEmployeeApi(userID);
    content.innerHTML = Dashboard(employeeByID);
  } catch (error) {
    console.error("Error fetching employee data:", error);
    content.innerHTML = "<p>Failed to load employee dashboard.</p>";
  }
};

// Protect the route by calling function reference, not execution
protectedRoute(employeeDashboard);
