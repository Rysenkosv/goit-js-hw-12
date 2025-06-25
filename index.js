import{a as q,S as P,i as l}from"./assets/vendor-D8_O3--j.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const $="https://pixabay.com/api/",v="50874397-c6e917ec67a94e5ad530eed0e";async function m(s,t=1){return(await q.get($,{params:{key:v,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const h=document.querySelector(".button-more");function O(s){return s.map(({id:t,webformatURL:r,largeImageURL:i,tags:e,likes:o,views:a,comments:x,downloads:M})=>`
    <li class="list-item" data-id="${t}">
      <a href="${i}">
        <img class="image" src="${r}" alt="${e}" width="360" />
      </a>
      <ul class="info">
        <li>
          <h3>Likes</h3>
          <p class="info-text">${o}</p>
        </li>
        <li>
          <h3>Views</h3>
          <p class="info-text">${a}</p>
        </li>
        <li>
          <h3>Comments</h3>
          <p class="info-text">${x}</p>
        </li>
        <li>
          <h3>Downloads</h3>
          <p class="info-text">${M}</p>
        </li>
      </ul>
    </li>
    `).join("")}function g(s){document.querySelector(".gallery").insertAdjacentHTML("beforeend",O(s)),new P(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const y=document.querySelector(".loader");function b(){y.style.display="block"}function L(){y.style.display="none"}function w(){h.classList.remove("hiddenbtn")}function d(){h.classList.add("hiddenbtn")}const u=document.querySelector(".form"),R=document.querySelector(".gallery"),c=document.querySelector(".button-more");let f="",n=1;const S=15;let p=0;u.addEventListener("submit",B);c.addEventListener("click",E);async function B(s){s.preventDefault();const t=u.elements["search-text"].value.trim();if(f=t,n=1,t===""){l.warning({message:"Введіть назву зображення!",position:"topRight"});return}R.innerHTML="",d(),b();try{const r=await m(f,n),i=r.hits;p=r.totalHits;const e=Math.ceil(p/S);i.length===0?l.info({message:"Зображень не знайдено.",position:"topRight"}):(g(i),n<e?(w(),c.disabled=!1):d())}catch(r){l.error({message:"Сталася помилка при запиті!",position:"topRight"}),console.error("Помилка:",r)}finally{L()}u.reset()}async function E(){n+=1,b(),c.disabled=!0;try{const t=(await m(f,n)).hits;g(t);const r=Math.ceil(p/S);n<r?(c.disabled=!1,w()):(d(),l.info({message:"Усі результати завантажено.",position:"bottomCenter",timeout:3e3}));const i=document.querySelector(".list-item");if(i){const e=i.getBoundingClientRect().height;window.scrollBy({left:0,top:e*2,behavior:"smooth"})}}catch{l.error({message:"Помилка при завантаженні додаткових зображень",position:"topRight"}),c.disabled=!1}finally{L()}}
//# sourceMappingURL=index.js.map
