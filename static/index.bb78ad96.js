import{_ as a,f as n,o as s,b as e,C as r,a as i,i as t,k as o}from"./index.609baa64.js";const d={class:"app-container"};const c=a({},[["render",function(a,e){return s(),n("div",d,"Admin 权限可见")}]]),u={class:"app-container"};const l=a({},[["render",function(a,e){return s(),n("div",u,"Editor 权限可见")}]]),m=e({__name:"index",setup(a){const n=r(),e=i("admin");return n.roles.includes("admin")||(e.value="editor"),(a,n)=>(s(),t(o("admin"===e.value?c:l)))}});export{m as default};
