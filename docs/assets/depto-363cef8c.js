import{c as i,a as t,n as l}from"./cajas-depto-e67e4c2a.js";const m=()=>{const n=document.querySelectorAll(".deptoGt"),o=document.querySelector("#reiniciar"),a=i();n.forEach(s=>{s.addEventListener("click",()=>{let e=s.getAttribute("name");console.log(`Mapa: ${e}`);const r=a();e===r?(t.forEach(c=>{c.innerText===e&&(c.classList.remove("btn-warning"),c.classList.add("btn-success"))}),s.classList.add("success")):console.log("Los nombres no coinciden")})}),o.addEventListener("click",()=>{n.forEach(s=>{s.classList.remove("success")}),t.forEach(s=>{s.classList.remove("btn-success"),s.classList.remove("btn-warning"),s.classList.add("btn-primary")})})};l();m();