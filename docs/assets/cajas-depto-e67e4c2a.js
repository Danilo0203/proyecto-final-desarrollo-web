(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l=()=>{window.addEventListener("scroll",()=>{let o=document.getElementById("navBar");window.scrollY>50?o.style.opacity="0.8":o.style.opacity="1"})},c=document.querySelectorAll(".btn-primary"),a=()=>{let o="";return c.forEach(r=>{r.addEventListener("click",()=>{c.forEach(s=>{s.classList.remove("btn-warning"),s.classList.add("btn-primary")}),o=r.innerText,r.classList.add("btn-warning"),r.classList.remove("btn-primary")})}),()=>o};export{c as a,a as c,l as n};
