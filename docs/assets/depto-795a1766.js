import{n as a}from"./nav-opacity-753324be.js";const r=document.querySelectorAll(".btn-primary"),l=()=>{let t="";return r.forEach(s=>{s.addEventListener("click",()=>{r.forEach(n=>{n.classList.remove("btn-warning"),n.classList.add("btn-primary")}),t=s.innerText,s.classList.add("btn-warning"),s.classList.remove("btn-primary")})}),()=>t},m=()=>{const t=document.querySelectorAll(".deptoGt"),s=document.querySelector("#reiniciar"),n=l();t.forEach(e=>{e.addEventListener("click",()=>{let o=e.getAttribute("name");console.log(`Mapa: ${o}`);const i=n();o===i?(r.forEach(c=>{c.innerText===o&&(c.classList.remove("btn-warning"),c.classList.add("btn-success"))}),e.classList.add("success")):console.log("Los nombres no coinciden")})}),s.addEventListener("click",()=>{t.forEach(e=>{e.classList.remove("success")}),r.forEach(e=>{e.classList.remove("btn-success"),e.classList.remove("btn-warning"),e.classList.add("btn-primary")})})};a();m();
