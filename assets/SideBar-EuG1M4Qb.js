const o=e=>{e()},s=e=>{localStorage.getItem("token")?o(e):window.location.href="../screen/userLogin.html"},t=document.getElementById("side-bar"),n=async()=>{localStorage.removeItem("token"),window.location.href="../screen/userLogin.html"},r=()=>{t.innerHTML=`
  <ul>
    <li><a href="/src/screen/employeeDashboard.html">Dashboard</a></li>
    <li><a href="/src/screen/employeeSettingDashboard.html">Setting</a></li>
    <li><a href="#" id="logout">Logout</a></li>
  </ul>
  `,document.getElementById("logout").addEventListener("click",n)};export{s as p,r as s};
