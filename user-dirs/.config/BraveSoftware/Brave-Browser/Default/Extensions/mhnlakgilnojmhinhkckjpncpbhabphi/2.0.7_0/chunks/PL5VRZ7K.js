import{a as X}from"./MP5TUTVV.js";import{a as Ae,b as Be,c as Z,d as R,e as ee,f as te,g as oe,h as re,i as ne,j as ie,n as ae}from"./SAIZ6RKG.js";import{ga as Q,u as N}from"./36BQJYSV.js";import{D as $}from"./VV54QQJA.js";import{a as se}from"./4LKVI2HJ.js";import{b as Y}from"./5T4V74FX.js";import{a as M}from"./KSWBD2TZ.js";import{h as K}from"./RF7QDMRO.js";import{d as T}from"./MKFZQTYG.js";import{b as De,e as J}from"./4SC7XEKB.js";import{a as g,r as k}from"./23DIE7BK.js";import{a as ke,i as Te}from"./ON4Q5ESC.js";import{W as q,X as G,a as z,n as j}from"./BK6QTIUI.js";import{L as U}from"./VYGUKUEK.js";import{a as W}from"./BIAB2ZEP.js";import{b as Me,e as v}from"./O5NYTI7P.js";var le=Me(D=>{"use strict";var Ee=ke();Object.defineProperty(D,"__esModule",{value:!0});D.default=void 0;var ze=Ee(De()),Oe=Te(),_e=(0,ze.default)((0,Oe.jsx)("path",{d:"m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"}),"ArrowUpward");D.default=_e});var t=v(W());var pe=v(le()),p=v(W());var Le=c=>{let{defaultValue:s="",onChange:f,placeholder:l="Ask AI to edit or generate..."}=c,{palette:i}=K(),[m,d]=(0,p.useState)(s),I=(0,p.useMemo)(()=>m!=="",[m]);return p.default.createElement("div",{style:{position:"relative",zIndex:1,boxSizing:"border-box",border:"1px solid",borderColor:i.customColor.borderColor,background:i.customColor.paperBackground,borderRadius:"6px",boxShadow:"rgb(15 15 15 / 5%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 3px 6px, rgb(15 15 15 / 20%) 0px 9px 24px",overflow:"hidden",isolation:"isolate",display:"flex",alignItems:"center",flexDirection:"row",gap:"8px",width:"100%",padding:"7px 8px",marginBottom:"4px"}},p.default.createElement(Y,{sx:{flexShrink:0,color:"primary.main",height:"20px",width:"20px",m:"4px",alignSelf:"start"}}),p.default.createElement(g,{direction:"row",width:0,flex:1,alignItems:"center",spacing:1,justifyContent:"left"},p.default.createElement(M,{component:"div",borderRadius:"8px",width:"100%",sx:{border:"none",borderRadius:0,minHeight:"24px",display:"flex",alignItems:"center",flexDirection:"row",flexWrap:"wrap",overflow:"hidden","& > textarea":{p:0,color:b=>b.palette.mode==="dark"?"#fff":"rgba(0,0,0,.87)!important",my:1.5,fontSize:"16px",minHeight:24+"px",lineHeight:24+"px",background:"transparent!important",borderColor:"transparent!important",margin:"0!important",border:"0!important",outline:"0!important",boxShadow:"none!important",width:"100%",resize:"none",overflow:"hidden",overflowY:"auto",fontFamily:'"Roboto","Helvetica","Arial",sans-serif!important',"&::-webkit-scrollbar":{width:0,background:"transparent"},"&::-webkit-scrollbar-thumb":{background:"transparent"}}}},p.default.createElement("textarea",{placeholder:l,value:m,rows:1,onInput:b=>{let x=b.target.value.replace(/\n/g,"");d(x),f==null||f(x)}})),p.default.createElement(J,{sx:{height:"20px",width:"20px",flexShrink:0,alignSelf:"center",alignItems:"center",p:0,m:"2px",cursor:I?"pointer":"default",bgcolor:I?"primary.main":"rgb(219,219,217)","&:hover":{bgcolor:I?"primary.main":"rgb(219,219,217)"}}},p.default.createElement(pe.default,{sx:{color:"#fff",fontSize:16}}))))},de=Le;var O=v(Ae()),ue=v(Be());var y="root",Ve=async(c,s)=>{try{let f=await G(l=>{var i;return{...l,buttonSettings:{...l.buttonSettings,[c]:{...(i=l.buttonSettings)==null?void 0:i[c],contextMenu:s}}}})}catch(f){}},Fe=(c,s,f)=>{var m;if(s===f)return!1;let l=c.find(d=>d.id===f);if(!l||((m=l==null?void 0:l.data)==null?void 0:m.type)!=="group")return!1;let i=c.find(d=>d.id===l.parent);for(;i&&i.parentId!==y;){if(i.id===s)return!1;i=c.find(d=>d.id===i.parentId)}return!0},Pe=c=>{let{buttonKey:s,defaultContextMenuJson:f,iconSetting:l=!1,onUpdated:i}=c,m=(0,t.useRef)(!0),[d,I]=(0,t.useState)(!1),b=(0,t.useRef)({}),[x,w]=(0,t.useState)(null),[a,S]=(0,t.useState)([]),[_,A]=(0,t.useState)(!1),[L,ce]=(0,t.useState)(null),[V,B]=(0,t.useState)(null),[C,fe]=(0,t.useState)(""),[F,P]=(0,t.useState)([]),me=(0,t.useMemo)(()=>a.filter(e=>e.data.type==="group").map(e=>e.id),[a]);(0,t.useEffect)(()=>{if(F.length===0){let e=a.filter(o=>o.data.type==="group"&&o.parent===y).map(o=>o.id);e.length>0&&P(e)}return()=>{}},[a]);let xe=(0,t.useRef)(null),ge=async(e,o)=>{S(e)},he=async()=>{let e=z();w({id:e,parent:y,droppable:!0,text:"",data:{editable:!0,type:"shortcuts",actions:[],visibility:{whitelist:[],blacklist:[],isWhitelistMode:!1}}})},be=async()=>{let e=z();w({id:e,parent:y,droppable:!0,text:"",data:{editable:!0,type:"group",actions:[]}})},Ce=(0,t.useCallback)((e,o,n)=>{e.data.type==="group"?H(e):H({...e,data:{...e.data,actions:N(s,o,n)}}),w(null)},[s]),H=e=>{S(o=>{let n=!1,u=o.map(r=>r.id===e.id?(n=!0,e):r);return n||u.push(e),u})},ye=e=>{let o=j(U(a),"parent"),n=[],u=r=>{n.push(r),o[r]&&o[r].forEach(h=>u(h.id))};u(e),S(r=>r.filter(ve=>!n.includes(ve.id)))},E=(e,o)=>{B(e),o&&ce(o),A(!0)},Ie=()=>{A(!1),B(null)},we=e=>{if(e==="reset")try{I(!0),S(f||[])}catch(o){}finally{I(!1)}e==="delete"&&L&&(ye(L),w(null)),A(!1),B(null)};(0,t.useEffect)(()=>{let e=!1;return(async()=>{let n=await q(s);e||(S(n),xe.current=n)})(),()=>{e=!0}},[s]),(0,t.useEffect)(()=>{let e={};b.current={};let o=n=>{let u=a.filter(r=>r.parent===n);u.length!==0&&u.forEach(r=>{let h=e[r.parent]?`${e[r.parent]} `:"";e[r.id]=`${r.text}`.toLowerCase(),r.data.searchText=h+e[r.id].toLowerCase(),b.current[r.id]=r,o(r.id)})};o(y),a.length>0&&Ve(s,a).then(()=>{if(m.current){m.current=!1;return}i&&i()})},[a]);let Se=(0,t.useMemo)(()=>{if(!C)return a;let e=$(a,C),o=[],n=r=>{let h=b.current[r];h&&(o.push(h.id),n(h.parent))};e.forEach(r=>n(r.id));let u=r=>{o.push(r.id),r.children&&r.children.length>0&&r.children.forEach(u)};return e.forEach(u),a.filter(r=>o.includes(r.id))},[a,C]);return t.default.createElement(g,{spacing:3,height:"100%",mb:4},t.default.createElement(g,{height:0,flex:1},t.default.createElement(g,{height:"100%"},t.default.createElement(X,null,t.default.createElement(g,null,t.default.createElement(ne,{treeData:a}))),t.default.createElement(k,{fontSize:20,fontWeight:700,flexShrink:0,component:"h2",id:"my-own-prompts"},"My own prompts"),t.default.createElement(Q,{icon:t.default.createElement(t.default.Fragment,null),sx:{mt:1,mb:2}},t.default.createElement(g,{sx:{b:{fontSize:16,display:"inline-flex",minWidth:"28px",justifyContent:"center",paddingRight:1}},flexShrink:0},t.default.createElement(k,{fontSize:14,color:"text.primary"},"You can:"),t.default.createElement(se,{textProps:{fontSize:14,color:"text.primary"},pointProps:{mr:2},textList:["Add new options with your own prompt templates.","Create your own option groups for nested options.","Modify your own option\u2019s name, icon, and prompt template.","Drag your own options to reposition them."]}),t.default.createElement(k,{fontSize:14,color:"text.primary"},t.default.createElement("b",null,"\u{1F4CC} "),'Please note that the options marked as "Read only" cannot be edited or moved.'))),t.default.createElement(de,{defaultValue:C,onChange:fe}),t.default.createElement(M,{sx:{flex:1,position:"relative",zIndex:2,display:"flex",flexDirection:"column",p:.5,outline:"none!important",width:400,minHeight:600,maxHeight:600,boxSizing:"border-box",overflowY:"scroll",border:"1px solid",borderColor:"customColor.borderColor",bgcolor:"background.paper",borderRadius:"6px",boxShadow:"rgb(15 15 15 / 5%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 3px 6px, rgb(15 15 15 / 20%) 0px 9px 24px","&::-webkit-scrollbar":{webkitAppearance:"none",width:"7px"},"&::-webkit-scrollbar-thumb":{borderRadius:"4px",backgroundColor:"rgba(0, 0, 0, .5)",boxShadow:"0 0 1px rgba(255, 255, 255, .5)"},li:{"&:has(> .dragTarget)":{outline:e=>e.palette.mode==="dark"?"3px solid rgb(216 167 255 / 45%)":"3px solid rgba(118, 1, 211, 0.1)",borderRadius:"4px",bgcolor:e=>e.palette.mode==="dark"?"rgb(115 61 158 / 10%)":"rgba(118, 1, 211, 0.04)"}},".context-menu__root":{py:1}}},t.default.createElement(Z,{backend:R,options:ee()},t.default.createElement(te,{onChangeOpen:e=>{C.trim()||P(e)},initialOpen:C.trim()?me:F,tree:Se,rootId:y,onDrop:ge,sort:!1,classes:{root:"context-menu__root",placeholder:"context-menu__placeholder",dropTarget:"context-menu__drop-target"},canDrag:e=>!!(e!=null&&e.droppable),canDrop:(e,{dragSource:o,dropTargetId:n})=>o?n===y?!0:Fe(e,String(o.id),String(n)):!1,dropTargetOffset:5,placeholderRender:(e,o)=>t.default.createElement(re,{node:e,depth:o.depth}),insertDroppableFirst:!1,render:(e,o)=>t.default.createElement(oe,{isDropTarget:o.isDropTarget,isActive:(x==null?void 0:x.id)===e.id,onEdit:w,onDelete:n=>E("delete",n),node:e,params:o,disabledDrag:C!==""})}))))),x&&t.default.createElement(ae,{open:!!x,iconSetting:l,settingsKey:s,onSave:Ce,onCancel:()=>w(null),onDelete:e=>{E("delete",e)},node:x}),_&&V&&t.default.createElement(ie,{open:_,actionType:V,onClose:Ie,onConfirm:we}),t.default.createElement(g,{direction:"row",alignItems:"center",mb:2,spacing:2},t.default.createElement(T,{disableElevation:!0,variant:"contained",onClick:he,disabled:d,startIcon:t.default.createElement(O.default,null)},"New option"),t.default.createElement(T,{disableElevation:!0,variant:"contained",onClick:be,disabled:d,startIcon:t.default.createElement(O.default,null)},"New option group"),t.default.createElement(T,{disableElevation:!0,variant:"outlined",disabled:d,onClick:()=>E("reset"),startIcon:t.default.createElement(ue.default,null)},"Restore defaults")))},gt=Pe;export{gt as a};
