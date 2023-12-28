import{S as l,i as u}from"./assets/vendor-9310f15c.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d=document.getElementById("search-form"),f=document.getElementById("search-input"),c=document.getElementById("gallery"),m="https://pixabay.com/api/",y="41471340-7b105b7a368edb6edd340273b",p=new l(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});d.addEventListener("submit",async r=>{r.preventDefault();const o=f.value;try{const e=(await(await fetch(`${g()}&q=${o}`)).json()).hits;e.length>0?(c.innerHTML="",c.innerHTML=e.reduce((t,{BASE_URL:n,images:i})=>t+`
<li class="gallery-item">
  <a class="gallery-link" href="${i}" download="none">
    <img
      class="gallery-image"
      src="${n}"
      data-source="${i}"
      
    />
  </a>
</li>`,""),p.refresh()):u.error({title:"Error",message:"Sorry, there are no images matching your search"})}catch(s){console.error(s)}});const g=()=>{const r=new URL(m);return r.searchParams.append("key",y),r};
//# sourceMappingURL=commonHelpers.js.map
