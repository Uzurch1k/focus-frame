(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();let i=document.querySelector(".header-btn-menu"),l=document.querySelector(".header-btn-esc"),s=document.querySelector(".header-menu");i.addEventListener("click",function(){i.classList.toggle("active"),s.classList.toggle("active")});l.addEventListener("click",function(){l.classList.toggle("active"),s.classList.toggle("active")});
//# sourceMappingURL=commonHelpers.js.map
