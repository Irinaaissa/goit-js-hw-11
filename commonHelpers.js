import{S as g,i as l}from"./assets/vendor-9310f15c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const h=document.getElementById("search-form"),v=document.getElementById("search-input"),i=document.getElementById("gallery"),b="https://pixabay.com/api/",L="41471340-7b105b7a368edb6edd340273b",E=new g(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),d=document.querySelector(".loader");function $(){d.style.display="block"}function c(){d.style.display="none"}h.addEventListener("submit",async o=>{o.preventDefault();const t=v.value;if(t.trim()==="")return l.error({title:"Error",message:"Sorry, there are no images matching your search"}),c();$();try{const r=await fetch(`${b}?key=${L}&q=${t}`);if(!r.ok)throw new Error(r.status);const{hits:n}=await r.json();i.innerHTML="";const e=n.map(({webformatURL:s,largeImageURL:a,tags:u,likes:p,views:f,comments:m,downloads:y})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${a}" >
            <img
              class="gallery-image"
              src="${s}"
              data-source="${a}"
              alt="${u}"
            />
          </a>
          <div class="card-info">
          <div class="field">
              <span class="label">Likes</span>
              <span class="value">${p}</span>    
          </div>
          
          <div class="field">
              <span class="label">Views</span>
              <span class="value">${f}</span>   
          </div>
          <div class="field">
              <span class="label">Comments</span>
              <span class="value">${m}</span>    
          </div>
          <div class="field">
              <span class="label">Downloads</span>
              <span class="value">${y}</span>    
          </div>
          </div>
        </li>
      `).join("");i.insertAdjacentHTML("beforeend",e),E.refresh()}catch{l.error({title:"Error",message:"Error"})}finally{c(),o.target.reset()}});
//# sourceMappingURL=commonHelpers.js.map
