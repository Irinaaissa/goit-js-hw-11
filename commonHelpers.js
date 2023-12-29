import{S as g,i as h}from"./assets/vendor-9310f15c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const v=document.getElementById("search-form"),b=document.getElementById("search-input"),i=document.getElementById("gallery"),L="41471340-7b105b7a368edb6edd340273b",$=new g(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),d=document.querySelector(".loader");function w(){d.style.display="block"}function c(){d.style.display="none"}v.addEventListener("submit",async o=>{o.preventDefault();const t=b.value;w();try{const a=await fetch(`https://pixabay.com/api/?key=${L}&q=${t}`),{hits:r,totalHits:e}=await a.json();if(t==="")return h.error({title:"Error",message:"Sorry, there are no images matching your search"}),c();i.innerHTML="";const s=r.map(({webformatURL:n,largeImageURL:l,tags:u,likes:p,views:f,comments:m,downloads:y})=>`
        
            <li class="gallery-item">
                <a class="gallery-link" href="${l}" download="none">
                    <img
                        class="gallery-image"
                        src="${n}"
                        data-source="${l}"
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
        `);i.insertAdjacentHTML("beforeend",s),$.refresh()}catch(a){console.error(a)}c(),o.target.reset()});
//# sourceMappingURL=commonHelpers.js.map
