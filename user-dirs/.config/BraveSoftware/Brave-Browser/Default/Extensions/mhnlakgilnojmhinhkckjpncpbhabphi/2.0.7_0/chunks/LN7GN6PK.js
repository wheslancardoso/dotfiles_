import{M as G,N as K,O as U,Q as V,T as D}from"./VV54QQJA.js";import{a as B,f as Z,g as $,y as _}from"./BK6QTIUI.js";import{a as Q}from"./JS22TWPO.js";import{C as P,D as W,f as N,s as O}from"./BR2YNKDZ.js";import{e as L}from"./O5NYTI7P.js";var k=L(Q());var C=L(Z()),Y=L($());C.default.extend(Y.default);var ee=B(),A=t=>({left:t.left,right:t.right,top:t.top,bottom:t.bottom,width:t.width||t.right-t.left,height:t.height||t.bottom-t.top,x:t.x||t.left,y:t.y||t.top}),j=()=>{try{return window.self!==window.top}catch(t){return!0}},q=new _("Iframe"),X=new _("Arkose"),te=()=>{let t=window.location.href,f=W;t.includes("chat.openai.com")&&t.includes(f)&&(X.info(window.location.href,"arkose token iframe!!!!!!!!!!"),new MutationObserver(p=>{p.forEach(I=>{I.addedNodes.forEach(e=>{if(e instanceof HTMLInputElement&&(e.id==="verification-token"||e.id==="FunCaptcha-Token")&&e.value.trim()!==""){let a={token:e.value,date:(0,C.default)().utc().valueOf()};X.info("arkose token update",a),k.default.storage.local.set({[P]:JSON.stringify(a)})}})})}).observe(document.body,{childList:!0,subtree:!0}))},ne=async()=>{if(!j())return;te();let t=null,f=[],g=!1,p=(e,a=0)=>{var l,w;try{let s=t||e.target,d=K(),T="",{isEditableElement:M,editableElement:y}=D(s),x="",o="",h=0;if(M&&y){h=G(y);let u=U(y);x=u.startMarkerId,o=u.endMarkerId,d=u.selectionText,T=u.editableElementSelectionText}!d&&g&&s.tagName==="BUTTON"&&a<10&&setTimeout(()=>{p(e,a+1)},100),t=null;let i=A(document.body.getBoundingClientRect()),n=A(s.getBoundingClientRect()),r=(w=(l=window.getSelection())==null?void 0:l.getRangeAt(0))==null?void 0:w.getBoundingClientRect(),m=null;if(s.tagName==="INPUT"||s.tagName==="TEXTAREA"){let u=Math.max(n.left,0),b=Math.max(n.top,0),E=(document.documentElement.clientWidth||document.body.clientWidth||document.body.offsetWidth)-u,c=document.documentElement.clientHeight||document.body.clientHeight||document.body.offsetHeight,v=Math.max(n.left,0),R=Math.max(n.left,0),S=Math.min(b,c),H=Math.min(b,c),F=Math.min(n.left>0?n.width:n.width+n.left,E),J=Math.min(n.top>0?n.height:n.height+n.top,c);m={left:v,x:R,top:S,y:H,width:F,height:J,right:Math.max(Math.min(n.width,E),E),bottom:Math.min(n.bottom,c)},m.height=Math.min(c-m.top,m.height)}else if(r){let u=Math.max(r.left,0),b=Math.max(r.top,0),E=(document.documentElement.clientWidth||document.body.clientWidth||document.body.offsetWidth)-u,c=document.documentElement.clientHeight||document.body.clientHeight||document.body.offsetHeight,v=Math.max(r.left,0),R=Math.max(r.left,0),S=Math.min(b,c),H=Math.min(b,c);m={left:v,x:R,top:S,y:H,width:Math.min(r.width,E),height:Math.min(r.height,c),right:Math.max(Math.min(r.right,E),E),bottom:Math.min(r.bottom,c)},m.height=Math.min(c-m.top,m.height)}let z=[f[0]-window.screenLeft,f[1]-window.screenTop];window.parent.postMessage({id:O,type:"iframeSelection",data:{virtual:!0,iframeId:ee,tagName:s.tagName,id:s.id,className:s.className,windowRect:i,targetRect:n,selectionRect:r,iframeSelectionRect:m,iframePosition:z,selectionText:d||"",selectionHTML:d||"",editableElementSelectionText:T,editableElementSelectionHTML:T,eventType:e instanceof MouseEvent?"mouseup":"keyup",isEmbedPage:g,isEditableElement:M,caretOffset:h,startMarkerId:x,endMarkerId:o}},"*")}catch(s){q.error(s)}},I=e=>{let a=e.target;(a.tagName==="INPUT"||a.tagName==="TEXTAREA")&&(t=a),f=[e.screenX,e.screenY]};if(document.addEventListener("mousedown",I),document.addEventListener("mouseup",p),document.addEventListener("keyup",p),window.location.href.indexOf("maxai.me/embed")>-1){let e=document.createElement("div");e.id="USE_CHAT_GPT_AI_ROOT",e.style.display="none",e.style.zIndex="-1",e.style.position="absolute",e.style.top="-10000px",e.style.left="-10000px",e.style.width="1px",e.style.height="1px",e.style.overflow="hidden",e.style.opacity="0",e.style.pointerEvents="none",document.body.appendChild(e),g=!0}k.default.runtime.onMessage.addListener((e,a)=>{if(a.id===k.default.runtime.id&&e.event==="Client_listenUpdateIframeInput"){let l=e.data;l.startMarkerId&&l.endMarkerId&&V(l.startMarkerId,l.endMarkerId,l.value,l.type)}})},re=t=>{let f=g=>{let{id:p,type:I,data:e}=g.data;if(p===O&&I==="iframeSelection"){let{selectionText:a,iframeSelectionRect:l,iframePosition:w}=e;if(!j()){if(!t)return;let s=window.outerHeight-window.innerHeight,d=[w[0],Math.max(w[1]-s,0)],T=document.querySelectorAll("iframe"),M=0,y=0,x=Array.from(T).find(o=>{let h=o.getBoundingClientRect();if(h){let{left:i,top:n,width:r,height:m}=h;if(d[0]>=i&&d[0]<=i+r&&d[1]>=n&&d[1]<=n+m)return M=n,y=i,!0}return!1});if(x){let o=A(l);if(o.top+=M,o.y=M,o.left+=y,o.x+=y,q.info("currentSelection",x,a,d,o),o){if(a&&!N){let h=document.getElementById("a");h&&h.remove();let i=document.createElement("div");i.id="a",i.style.position="fixed",i.style.top=o.top+"px",i.style.left=o.left+"px",i.style.width=o.width+"px",i.style.height=o.height+"px",i.style.border="1px solid red",i.style.pointerEvents="none",document.body.appendChild(i)}t({...e,iframeSelectionRect:o,selectionRect:o,iframePosition:d,isEmbedPage:g.origin.indexOf("maxai.me")>-1&&e.isEmbedPage})}}}}};return window.addEventListener("message",f),()=>{window.removeEventListener("message",f)}};ne();export{re as a};
