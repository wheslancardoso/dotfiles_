// Copyright 2023 OneTab Ltd.  All rights reserved.
const B=!1,k=!1,W=!1,z=!1,V=!1,q=!1,J=!0,K="chrome://",Q="chrome://newtab/";async function f(){return new Promise((e,t)=>{document.readyState==="complete"?e():document.addEventListener("readystatechange",n=>{document.readyState==="complete"&&e()})})}async function X(){await b(),await f(),setHtmlTagLanguageDirection()}async function b(){try{await chrome.tabs.update((await chrome.tabs.getCurrent()).id,{autoDiscardable:!1})}catch(e){console.log(e)}}function Y(e){if(typeof e=="string"&&(e=document.getElementById(e)),!!e)for(;e.childNodes.length>0;)e.childNodes[0].remove()}function Z(e){return A(void 0,"div",{style:{fontSize:"1px",height:e+"px",width:"1px"}}).o}let d=!1;async function S(e,t={}){if(!d){const r=async()=>{if((await chrome.runtime.sendMessage({args:[],type:P.U,L:!0}))?.result?.pong!==String(currentVersion))throw new Error};try{await r()}catch{console.log("core not ready. retrying..."),await u(1e3);try{await r()}catch{console.log("core not ready. retrying..."),await u(5e3);try{await r()}catch{throw new Error("Cannot connect to core")}}}d=!0}t.type=e,t.L=!0;let n=await chrome.runtime.sendMessage(t);if(n===null)throw new Error("null message response from core");if(n?.S)throw new Error(n.S);return n.result}function ee(e){chrome.runtime.onMessage.addListener((t,n,r)=>{t.type==="stateChange"&&e(t.F)})}const P=new Proxy({},{get(e,t){return t}}),te=new Proxy({},{get(e,t,n){return(...r)=>(r=l(r,void 0,N),S(t,{args:r}))}}),w=chrome.runtime.getURL("onetab.html"),h=w.substring(0,w.length-"onetab.html".length);let m=!0;async function ne(){return m?(await chrome.permissions.getAll()).permissions.includes("tabGroups")&&chrome.tabGroups:!1}async function re(){if(!m||requestTabGroupsPermissionIfNecessaryDisabled)return!1;try{return await chrome.permissions.request({permissions:["tabGroups"]})}catch(e){return console.log('chrome.permissions.request for "tabGroups" permission failed with error:'),console.log(e),!1}}function oe(e){let t=x(e);return t.toLowerCase().startsWith("www.")?t.substring("www.".length):t}function x(e){return e?(e.indexOf("//")===0&&(e="http:"+e),e.indexOf("://")===-1&&(e="http://"+e),e=e.substring(e.indexOf("://")+"://".length),e.indexOf("/")!==-1&&(e=e.substring(0,e.indexOf("/"))),e.indexOf(":")!==-1&&(e=e.substring(0,e.indexOf(":"))),e.indexOf("?")!==-1&&(e=e.substring(0,e.indexOf("?"))),e.indexOf("#")!==-1&&(e=e.substring(0,e.indexOf("#"))),e.toLowerCase()):"undefined"}function ae(e){return e.indexOf("://")===-1?"https://":(e=e.substring(0,e.indexOf("://")+"://".length),e.toLowerCase())}let y=["com","co.uk","org.uk","net","org","de","ru","info","xyz","nl"];function ie(e){let t=x(e);try{for(let n in y){let r="."+y[n];if(D(t,r)){for(t=t.substring(0,t.length-r.length);t.indexOf(".")!==-1;)t=t.substring(t.indexOf(".")+1);t=t+r;break}}return t.indexOf("www.")===0&&(t=t.substring("www.".length)),t}catch{return t}}function C(e){e.noCacheRandom=E()}function E(){return new Date().getTime()+Math.round(Math.random()*1e4)+""}async function se(e,t){C(t);let n=JSON.stringify(t);return await(await T(e,n)).json()}async function T(e,t){let n={};t?(n.method="POST",n.body=t):n.method="GET",n.headers=new Headers,n.headers.append("Content-Type","text/json");let r=await fetch(e,n);if(r.status===200)return r;throw new Error("http response code"+r.status)}function ce(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{let t=Math.random()*16|0;return(e=="x"?t:t&3|8).toString(16)})}const U="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split("");function I(e,t){let n=U,r=[],o=0;for(t=t||n.length,e=e||22,o=0;o<e;o++)r[o]=n[0|Math.random()*t];return r.join("")}function F(){return I()}function ue(){return F()}function le(e){return e==null?"":e.replace(/^\s+/,"").replace(/\s+$/,"")}function fe(...e){return(t,n)=>e.reduce((r,o)=>r||o(t,n),0)}function de(e){return(t,n)=>e(t)-e(n)}function we(e){return(t,n)=>e(n)-e(t)}const he=(e,t)=>!!t.starred-!!e.starred||e.starred&&t.starred&&t.starredDate-e.starredDate||t.createDate-e.createDate;function me(e){return e||(e=""),e.replace(/[\x00-\x1F\x7F-\x9F]/g,"")}function D(e,t){return e?e.indexOf(t,e.length-t.length)!==-1:!1}const R={restoreWindow:"newWindow",pinnedTabs:"ignore",startupLaunch:"displayOneTab",restoreRemoval:"default",duplicates:"allow",pinned:"true"};function xe(e,t){return t[e]?t[e]:R[e]}function ye(e,t,n){e.parentNode&&e.remove(),t.insertBefore(e,n===void 0||n>=t.children.length||t.children.length===0?null:t.children[Math.max(0,n)])}function A(e,t,n){let r=t===void 0?e:document.createElement(t),o={};if(n){n.style&&Object.assign(r.style,n.style);for(let a of Object.keys(n))a!=="style"&&a!=="children"&&(r[a]=n[a]);if(n.children)for(const[a,i]of Object.entries(n.children))o[a]=i,r.appendChild(i instanceof HTMLElement?i:i.o);n.l&&r.appendChild(n.l),n.init&&n.init(r)}t!==void 0&&e&&e.appendChild(r);let c={o:r};return Object.assign(c,o),c}const g="about:reader?url=";function ge(e){return e?e.indexOf(":")===-1?"https://"+e:e.indexOf(g)===0?decodeURIComponent(e.substring(g.length)):e.startsWith(`${h}placeholder.html?`)?new URLSearchParams(e.substring(e.indexOf("?"))).get("url"):e:""}function pe(e){return parseInt(e.match(/\d+/)[0])}const p=[...new Array(30)].map((e,t)=>parseInt(10+Math.pow(1.6,t)));function*M(e){let t=0;for(;p.slice(0,t).reduce((n,r)=>n+r,0)<e;)yield p[t++]}async function be(e,t,n){let r=0;for(let o of M(e)){if(await n(r))return;await u(o),r+=o}throw new Error(`Timeout waiting for condition ${t}`)}function j(e){let t=chrome.i18n.getMessage(e);return t||(console.log("No translation available for: "+e),e)}function Se(e,t,n){return t=globalForcePlaceholdersEnabled,((e||"").toLowerCase().startsWith("file:")||L(e))&&t?n?`data:text/html, <html><body><div id="placeholderUrl">${e}</div></body></html>`:`${h}placeholder.html?url=${encodeURI(e)}`:e}function L(e){for(let t of v)if(e.startsWith(t))return!0;return!!(!e||e===""||e.startsWith("chrome-devtools:"))}const v=["javascript:","about:",...["chrome://","edge://","data:"].filter(e=>!1),...["edge://","chrome://"].map(e=>["newtab","new-tab-page","print","network-error","badcastcrash","inducebrowsercrashforrealz","crash","crashdump","kill","hang","shorthang","gpuclean","gpucrash","gpuhang","memory-exhaust","memory-pressure-critical","memory-pressure-moderate","ppapiflashcrash","ppapiflashhang","quit","restart"].map(t=>`${e}${t}/`)).flat()];async function u(e){return new Promise(t=>setTimeout(t,e))}class G{async put(t,n){await chrome.storage.local.set({[t]:n})}async get(t){return(await chrome.storage.local.get([t]))[t]}async remove(t){return await chrome.storage.local.remove(t)}}const O=new G;function s(){return O}const N="undefined-34LKmiHxP3Mu48u8qrDaHf";function l(e,t,n){return Array.isArray(e)?e.map(r=>l(r,t,n)):typeof e=="object"&&e!==null?Object.fromEntries(Object.entries(e).map(([r,o])=>[r,l(o,t,n)])):e===t?n:e}const Pe="c",Ce="e",Ee="tg";class _{async put(t,n){await chrome.storage.session.set({[t]:n})}async get(t){return(await chrome.storage.session.get([t]))[t]}async getAll(){return await chrome.storage.session.get(null)}async remove(t){return await chrome.storage.session.remove(t)}async clearAll(){await chrome.storage.session.clear()}}class H{async put(t,n){await s().put("sessionStore",{...await this.getAll(),[t]:n})}async get(t){return(await this.getAll())[t]}async getAll(){return await s().get("sessionStore")??{}}async remove(t){let n=await this.getAll();delete n[t],await s().put("sessionStore",n)}async clearAll(){await s().remove("sessionStore")}}const $=chrome.storage.session?new _:new H;function Te(){return $}(async()=>(await f(),[...document.querySelectorAll("[data-m]")].forEach(e=>e.textContent=j(e.dataset.m))))();
