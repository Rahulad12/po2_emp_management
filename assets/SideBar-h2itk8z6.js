const o=e=>{e()},l=e=>{localStorage.getItem("token")?o(e):window.location.href="/po2_emp_management/src/screen/userLogin.html"},t=document.getElementById("side-bar"),n=async()=>{localStorage.removeItem("token"),window.location.href="../screen/userLogin.html"},a=()=>{t.innerHTML=`
  <ul>
    <li><a href="/src/screen/employeeDashboard.html">Dashboard</a></li>
    <li><a href="/src/screen/employeeSettingDashboard.html">Setting</a></li>
    <li><a href="#" id="logout">Logout</a></li>
  </ul>
  `,document.getElementById("logout").addEventListener("click",n)};export{l as p,a as s};
