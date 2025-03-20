import{m as c}from"./manageBaseUrl-BqVoOfTC.js";import{r as a,E as i}from"./constant-DWVoamgU.js";import{p as l,s as p}from"./SideBar-h2itk8z6.js";const m=async(e,n)=>{try{const o=(await(await fetch(e)).json()).find(d=>d.userID===n);return o?a(!0,o):a(!1,"Employee not found")}catch(s){return a(!1,s.message)}},h=async e=>await m(i,e),g=e=>`<div class="dashboard-container">
    <div class="dashboard-header">
      <h2>Welcome, ${e.message.name}</h2>
      <p>Your Employee Dashboard</p>
    </div>

    <div class="dashboard-card-container">
      <div class="dashboard-card">
        <h3>Position</h3>
        <p>${e.message.position}</p>
      </div>

      <div class="dashboard-card">
        <h3>Department</h3>
        <p>${e.message.department}</p>
      </div>

      <div class="dashboard-card">
        <h3>Salary</h3>
        <p>$${e.message.salary}</p>
      </div>

      <div class="dashboard-card">
        <h3>Joining Date</h3>
        <p>${e.message.joiningDate}</p>
      </div>
    </div>
  </div>`;c();const r=document.getElementById("content"),t=localStorage.getItem("token");console.log("User ID from localStorage:",t);const u=async()=>{p();try{const e=await h(t);r.innerHTML=g(e)}catch(e){console.error("Error fetching employee data:",e),r.innerHTML="<p>Failed to load employee dashboard.</p>"}};l(u);
