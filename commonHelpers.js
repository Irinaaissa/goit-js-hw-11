import{S as m,i as y}from"./assets/vendor-9310f15c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const g=document.getElementById("search-form"),h=document.getElementById("search-input"),i=document.getElementById("gallery"),v="41471340-7b105b7a368edb6edd340273b",b=new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});g.addEventListener("submit",async l=>{l.preventDefault();const t=h.value;try{const a=await fetch(`https://pixabay.com/api/?key=${v}&q=${t}`),{hits:r,totalHits:e}=await a.json();if(r.length===0){y.error({title:"Error",message:"Sorry, there are no images matching your search"});return}i.innerHTML="";const s=r.map(({webformatURL:n,largeImageURL:o,tags:c,likes:d,views:u,comments:p,downloads:f})=>`
        
            <li class="gallery-item">
                <a class="gallery-link" href="${o}" download="none">
                    <img
                        class="gallery-image"
                        src="${n}"
                        data-source="${o}"
                        alt="${c}"
                    />
                </a>
                
                <div class="card-info">
                <div class="field">
                    <span class="label">Likes</span>
                    <span class="value">${d}</span>    
                </div>
                <div class="field">
                    <span class="label">Views</span>
                    <span class="value">${u}</span>   
                </div>
                <div class="field">
                    <span class="label">Comments</span>
                    <span class="value">${p}</span>    
                </div>
                <div class="field">
                    <span class="label">Downloads</span>
                    <span class="value">${f}</span>    
                </div>
            </div>
            </li>
        `);i.insertAdjacentHTML("beforeend",s),b.refresh()}catch(a){console.error(a)}l.target.reset()});
//# sourceMappingURL=commonHelpers.js.map
