(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function L(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=L(e);fetch(e.href,t)}})();let n=document.querySelector(".header-btn-menu"),r=document.querySelector(".header-btn-esc"),m=document.querySelector(".header-menu");n.addEventListener("click",function(){n.classList.toggle("active"),m.classList.toggle("active")});r.addEventListener("click",function(){r.classList.toggle("active"),m.classList.toggle("active")});let i=document.querySelectorAll(".item"),l=document.querySelector(".header-menu"),a=i[0],d=i[1],u=i[2],f=i[3],g=i[4];a.addEventListener("click",function(){a.classList.toggle("active"),l.classList.toggle("active")});d.addEventListener("click",function(){d.classList.toggle("active"),l.classList.toggle("active")});u.addEventListener("click",function(){u.classList.toggle("active"),l.classList.toggle("active")});f.addEventListener("click",function(){f.classList.toggle("active"),l.classList.toggle("active")});g.addEventListener("click",function(){g.classList.toggle("active"),l.classList.toggle("active")});
//# sourceMappingURL=commonHelpers.js.map
