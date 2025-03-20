export const manageBaseUrl = () => {
  const url = window.location.href;
  const baseURL = import.meta.env.BASE_URL;

  console.log("Current URL:", url);
  console.log("Base URL:", baseURL);

  // Redirect to correct paths if the base URL is missing
  if (url.includes("userLogin.html") && !url.includes(baseURL)) {
    window.location.href = `${baseURL}src/screen/userLogin.html`;
  }
  if (url.includes("userRegister.html") && !url.includes(baseURL)) {
    window.location.href = `${baseURL}src/screen/userRegister.html`;
  }
  if (url.includes("employeeDashboard.html") && !url.includes(baseURL)) {
    window.location.href = `${baseURL}src/screen/employeeDashboard.html`;
  }
  if (url.includes("employeeSettingDashboard.html") && !url.includes(baseURL)) {
    window.location.href = `${baseURL}src/screen/employeeSettingDashboard.html`;
  }
};
