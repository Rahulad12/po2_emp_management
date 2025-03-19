import "./style.css";

if (localStorage.getItem("token"))
  window.location.href = "./src/screen/employeeDashboard.html";

document.getElementById("app").innerHTML = `
     <div class="container">
      <h1>Welcome to Employee Management System</h1>
      <p>
        Streamline your employee management process with our intuitive platform.
        Login to access your details or administrative dashboards.
      </p>
      <div class="login-buttons">
        <a href="/src/screen/userLogin.html" class="login-button">User Login</a>
        <a href="/src/screen/userRegister.html" class="login-button"
          >User Register</a
        >
      </div>
    </div>
`;
