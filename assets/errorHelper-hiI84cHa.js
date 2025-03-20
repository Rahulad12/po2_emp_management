import{r as t,A as l}from"./constant-DWVoamgU.js";const u=async(s,e,r)=>{if(!e||!r)return t(!1,"Please enter both email and password");try{if((await(await fetch(s)).json()).some(i=>i.email===e))return t(!1,"User already exists");const c=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:r})}),d=await c.json();return c.ok?t(!0,{user:d.id,message:"Registration Successful"}):t(!1,d.message)}catch(n){return t(!1,n.message)}},p=async(s,e,r)=>{if(!e||!r)return t(!1,"Please enter both email and password");try{const o=(await(await fetch(s)).json()).find(c=>c.email===e);return o?o.password!==r?t(!1,"Invalid Credentials"):t(!0,{user:o.id,message:"Login Successful"}):t(!1,"User not found")}catch(n){return t(!1,n.message)}},y=async(s,e)=>{try{const n=await(await fetch(`${s}/${e}`)).json();return n?t(!0,n):t(!1,"User not found")}catch(r){return t(!1,r.message)}},f=async(s,e,r,n)=>{try{const o=await(await fetch(`${s}/${e}`)).json();if(!o)return t(!1,"User not found");if(o.password!==n)return console.log("current password"),t(!1,"Current password is incorrect");if(o.password===r)return t(!1,"New password cannot be the same as the old password");o.password=r;const d=await(await fetch(`${s}/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json();return t(!0,{user:d.id,message:"Password changed successfully"})}catch(a){return t(!1,a.message)}},m=async(s,e,r)=>{try{const a=await(await fetch(`${s}/${e}`)).json();if(!a)return t(!1,"User not found");if(a.email===r)return t(!1,"New email cannot be the same as the old email");a.email=r;const c=await(await fetch(`${s}/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})).json();return t(!0,{user:c.id,message:"Email changed successfully"})}catch{}},w=async(s,e)=>await u(l,s,e),h=async(s,e)=>await p(l,s,e),E=async s=>await y(l,s),U=async(s,e,r)=>await f(l,s,e,r),b=async(s,e)=>await m(l,s,e),P=s=>{const e=document.getElementById("password-error-message");e.textContent=s,e.style.color="red",e.style.display=s?"block":"none"},C=s=>{const e=document.getElementById("email-error-message");e.textContent=s,e.style.color="red",e.style.display=s?"block":"none"},I=s=>{const e=document.getElementById("error-message");e.textContent=s.message,e.style.color=s.success?"green":"red",e.style.display=s.message?"block":"none"},j=s=>{const e=document.getElementById("old-password-error-message");e.textContent=s,e.style.color="red",e.style.display=s?"block":"none"},x=s=>{const e=document.getElementById("new-password-error-message");e.textContent=s,e.style.color="red",e.style.display=s?"block":"none"},$=s=>{const e=document.getElementById("confirm-password-error-message");e.textContent=s,e.style.color="red",e.style.display=s?"block":"none"},B=s=>{const e=document.getElementById("change-email-error-message");e.textContent=s,e.style.color=s=="Email changed successfully"?"green":"red",e.style.display=s?"block":"none"};export{C as a,U as b,B as c,$ as d,I as e,E as g,h as l,x as n,j as o,P as p,w as r,b as u};
