import { outlet } from "./Outlet.js";
  
/**
 * @function protectedRoute
 * @description A function that checks if a user is logged in and, if so, renders a component. If the user is not logged in, it redirects the user to the login page.
 * @param {function} component - A function that renders a component.
 * @example
 * protectedRoute(employeeDashboard);
 */
export const protectedRoute = (component) => {
  const isLoggedIn = localStorage.getItem("token");

  if (isLoggedIn) {
    outlet(component);
  } else {
    window.location.href = "../screen/userLogin.html";
  }
};
