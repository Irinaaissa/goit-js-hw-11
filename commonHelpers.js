import{S as y,i as g}from"./assets/vendor-9310f15c.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const h=document.getElementById("search-form"),v=document.getElementById("search-input"),l=document.getElementById("gallery"),b="https://pixabay.com/api/",L="41471340-7b105b7a368edb6edd340273b",$=new y(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),c=document.querySelector(".loader");function w(){c.style.display="block"}function i(){c.style.display="none"}h.addEventListener("submit",async o=>{o.preventDefault();const a=v.value;if(a.trim()==="")return g.error({title:"Error",message:"Sorry, there are no images matching your search"}),i();w();try{const t=await fetch(`${b}?key=${L}&q=${a}`);if(!t.ok)throw new Error(t.status);const{hits:n}=await t.json();l.innerHTML="";const e=n.map(({webformatURL:s,largeImageURL:r,tags:d,likes:u,views:p,comments:f,downloads:m})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${r}" >
            <img
              class="gallery-image"
              src="${s}"
              data-source="${r}"
              alt="${d}"
            />
          </a>
          <div class="card-info">
          <div class="field">
              <span class="label">Likes</span>
              <span class="value">${u}</span>    
          </div>
          
          <div class="field">
              <span class="label">Views</span>
              <span class="value">${p}</span>   
          </div>
          <div class="field">
              <span class="label">Comments</span>
              <span class="value">${f}</span>    
          </div>
          <div class="field">
              <span class="label">Downloads</span>
              <span class="value">${m}</span>    
          </div>
          </div>
        </li>
      `).join("");l.insertAdjacentHTML("beforeend",e),$.refresh()}catch(t){console.error(t)}finally{i(),o.target.reset()}});
//# sourceMappingURL=commonHelpers.js.map
