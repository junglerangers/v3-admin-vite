import{aB as Ke,_ as je,r as P,b as se,aC as ae,E as De,d as he,z as ge,H as L,ah as y,l as f,m as T,p as w,V as d,P as v,X as Fe,O as x,aD as Ge,u as m,R as ie,aE as fe,F as K,a8 as ee,U as B,a3 as re,I as ue,e as M,aa as Je,S as A,T as j,J as H,aF as G,aG as Ne,w as be,c as ze,K as Be,aH as ye,aI as we,s as Ye,a9 as le,n as Ze,aJ as Qe,Q as pe,W as ve}from"./vue-09136d94.js";import{g as et,s as Ve,u as Oe,_ as D,a as Y,b as ce,c as xe,d as tt,r as nt,l as ot,e as st,f as Ae}from"./index-6b396fa7.js";import{h as at,j as lt,g as rt,k as ct,b as de,l as it,n as ut,o as We,u as dt,r as _t,p as ft,q as pt,s as vt,t as mt}from"./element-3594ebb6.js";import{_ as ht}from"./index.vue_vue_type_script_setup_true_lang-e2e691af.js";import"./vxe-e1f17f9a.js";var X=(n=>(n[n.Mobile=0]="Mobile",n[n.Desktop=1]="Desktop",n))(X||{});const gt="opened",He="closed";function bt(n){n?Ve(gt):Ve(He)}const te=Ke("app",()=>{const n=je({opened:et()!==He,withoutAnimation:!1}),e=P(X.Desktop);return se(()=>n.opened,o=>bt(o)),{device:e,sidebar:n,toggleSidebar:o=>{n.opened=!n.opened,n.withoutAnimation=o},closeSidebar:o=>{n.opened=!1,n.withoutAnimation=o},toggleDevice:o=>{e.value=o}}}),yt=992,wt=()=>{const n=ae(),e=te(),t=()=>document.body.getBoundingClientRect().width-1<yt,l=()=>{if(!document.hidden){const a=t();e.toggleDevice(a?X.Mobile:X.Desktop),a&&e.closeSidebar(!0)}};se(()=>n.name,()=>{e.device===X.Mobile&&e.sidebar.opened&&e.closeSidebar(!1)}),De(()=>{window.addEventListener("resize",l)}),he(()=>{t()&&(e.toggleDevice(X.Mobile),e.closeSidebar(!0))}),ge(()=>{window.removeEventListener("resize",l)})},xt={class:"app-main"},St={class:"app-scrollbar"},kt=L({__name:"AppMain",setup(n){const e=Oe();return(t,l)=>{const a=y("router-view"),o=y("el-backtop");return f(),T("section",xt,[w("div",St,[d(a,null,{default:v(({Component:s,route:r})=>[d(Fe,{name:"el-fade-in",mode:"out-in"},{default:v(()=>[(f(),x(Ge,{include:m(e).cachedViews},[(f(),x(ie(s),{key:r.path}))],1032,["include"]))]),_:2},1024)]),_:1})]),d(o),d(o,{target:".app-scrollbar"})])}}});const Se=D(kt,[["__scopeId","data-v-47303278"]]),Ct=L({__name:"index",props:{isActive:{type:Boolean,default:!1}},emits:["toggleClick"],setup(n,{emit:e}){const t=n,l=()=>{e("toggleClick")};return(a,o)=>{const s=y("el-icon");return f(),T("div",{onClick:l},[d(s,{size:20,class:"icon"},{default:v(()=>[t.isActive?(f(),x(m(at),{key:0})):(f(),x(m(lt),{key:1}))]),_:1})])}}});const Tt=D(Ct,[["__scopeId","data-v-252d9bf8"]]);function $t(n){for(var e=[],t=0;t<n.length;){var l=n[t];if(l==="*"||l==="+"||l==="?"){e.push({type:"MODIFIER",index:t,value:n[t++]});continue}if(l==="\\"){e.push({type:"ESCAPED_CHAR",index:t++,value:n[t++]});continue}if(l==="{"){e.push({type:"OPEN",index:t,value:n[t++]});continue}if(l==="}"){e.push({type:"CLOSE",index:t,value:n[t++]});continue}if(l===":"){for(var a="",o=t+1;o<n.length;){var s=n.charCodeAt(o);if(s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122||s===95){a+=n[o++];continue}break}if(!a)throw new TypeError("Missing parameter name at ".concat(t));e.push({type:"NAME",index:t,value:a}),t=o;continue}if(l==="("){var r=1,i="",o=t+1;if(n[o]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(o));for(;o<n.length;){if(n[o]==="\\"){i+=n[o++]+n[o++];continue}if(n[o]===")"){if(r--,r===0){o++;break}}else if(n[o]==="("&&(r++,n[o+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(o));i+=n[o++]}if(r)throw new TypeError("Unbalanced pattern at ".concat(t));if(!i)throw new TypeError("Missing pattern at ".concat(t));e.push({type:"PATTERN",index:t,value:i}),t=o;continue}e.push({type:"CHAR",index:t,value:n[t++]})}return e.push({type:"END",index:t,value:""}),e}function Mt(n,e){e===void 0&&(e={});for(var t=$t(n),l=e.prefixes,a=l===void 0?"./":l,o="[^".concat(At(e.delimiter||"/#?"),"]+?"),s=[],r=0,i=0,_="",u=function(W){if(i<t.length&&t[i].type===W)return t[i++].value},c=function(W){var E=u(W);if(E!==void 0)return E;var C=t[i],p=C.type,V=C.index;throw new TypeError("Unexpected ".concat(p," at ").concat(V,", expected ").concat(W))},h=function(){for(var W="",E;E=u("CHAR")||u("ESCAPED_CHAR");)W+=E;return W};i<t.length;){var b=u("CHAR"),g=u("NAME"),S=u("PATTERN");if(g||S){var k=b||"";a.indexOf(k)===-1&&(_+=k,k=""),_&&(s.push(_),_=""),s.push({name:g||r++,prefix:k,suffix:"",pattern:S||o,modifier:u("MODIFIER")||""});continue}var I=b||u("ESCAPED_CHAR");if(I){_+=I;continue}_&&(s.push(_),_="");var R=u("OPEN");if(R){var k=h(),F=u("NAME")||"",O=u("PATTERN")||"",U=h();c("CLOSE"),s.push({name:F||(O?r++:""),pattern:F&&!O?o:O,prefix:k,suffix:U,modifier:u("MODIFIER")||""});continue}c("END")}return s}function Et(n,e){return Vt(Mt(n,e),e)}function Vt(n,e){e===void 0&&(e={});var t=It(e),l=e.encode,a=l===void 0?function(i){return i}:l,o=e.validate,s=o===void 0?!0:o,r=n.map(function(i){if(typeof i=="object")return new RegExp("^(?:".concat(i.pattern,")$"),t)});return function(i){for(var _="",u=0;u<n.length;u++){var c=n[u];if(typeof c=="string"){_+=c;continue}var h=i?i[c.name]:void 0,b=c.modifier==="?"||c.modifier==="*",g=c.modifier==="*"||c.modifier==="+";if(Array.isArray(h)){if(!g)throw new TypeError('Expected "'.concat(c.name,'" to not repeat, but got an array'));if(h.length===0){if(b)continue;throw new TypeError('Expected "'.concat(c.name,'" to not be empty'))}for(var S=0;S<h.length;S++){var k=a(h[S],c);if(s&&!r[u].test(k))throw new TypeError('Expected all "'.concat(c.name,'" to match "').concat(c.pattern,'", but got "').concat(k,'"'));_+=c.prefix+k+c.suffix}continue}if(typeof h=="string"||typeof h=="number"){var k=a(String(h),c);if(s&&!r[u].test(k))throw new TypeError('Expected "'.concat(c.name,'" to match "').concat(c.pattern,'", but got "').concat(k,'"'));_+=c.prefix+k+c.suffix;continue}if(!b){var I=g?"an array":"a string";throw new TypeError('Expected "'.concat(c.name,'" to be ').concat(I))}}return _}}function At(n){return n.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function It(n){return n&&n.sensitive?"":"i"}const Rt={key:0,class:"no-redirect"},Lt=["onClick"],Pt=L({__name:"index",setup(n){const e=ae(),t=fe(),l=P([]),a=()=>{l.value=e.matched.filter(r=>{var i,_;return((i=r.meta)==null?void 0:i.title)&&((_=r.meta)==null?void 0:_.breadcrumb)!==!1})},o=r=>Et(r)(e.params),s=r=>{const{redirect:i,path:_}=r;if(i){t.push(i);return}t.push(o(_))};return se(()=>e.path,r=>{r.startsWith("/redirect/")||a()}),a(),(r,i)=>{const _=y("el-breadcrumb-item"),u=y("el-breadcrumb");return f(),x(u,{class:"app-breadcrumb"},{default:v(()=>[(f(!0),T(K,null,ee(l.value,(c,h)=>(f(),x(_,{key:c.path},{default:v(()=>[c.redirect==="noRedirect"||h===l.value.length-1?(f(),T("span",Rt,B(c.meta.title),1)):(f(),T("a",{key:1,onClick:re(b=>s(c),["prevent"])},B(c.meta.title),9,Lt))]),_:2},1024))),128))]),_:1})}}});const Dt=D(Pt,[["__scopeId","data-v-94c6aa4b"]]),_e=n=>/^(https?:|mailto:|tel:)/.test(n),Ft=["href"],Nt=L({__name:"SidebarItemLink",props:{to:{}},setup(n){const e=n;return(t,l)=>{const a=y("router-link");return m(_e)(e.to)?(f(),T("a",{key:0,href:e.to,target:"_blank",rel:"noopener"},[ue(t.$slots,"default")],8,Ft)):(f(),x(a,{key:1,to:e.to},{default:v(()=>[ue(t.$slots,"default")]),_:3},8,["to"]))}}});function J(n){if(typeof n!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(n))}function Ie(n,e){for(var t="",l=0,a=-1,o=0,s,r=0;r<=n.length;++r){if(r<n.length)s=n.charCodeAt(r);else{if(s===47)break;s=47}if(s===47){if(!(a===r-1||o===1))if(a!==r-1&&o===2){if(t.length<2||l!==2||t.charCodeAt(t.length-1)!==46||t.charCodeAt(t.length-2)!==46){if(t.length>2){var i=t.lastIndexOf("/");if(i!==t.length-1){i===-1?(t="",l=0):(t=t.slice(0,i),l=t.length-1-t.lastIndexOf("/")),a=r,o=0;continue}}else if(t.length===2||t.length===1){t="",l=0,a=r,o=0;continue}}e&&(t.length>0?t+="/..":t="..",l=2)}else t.length>0?t+="/"+n.slice(a+1,r):t=n.slice(a+1,r),l=r-a-1;a=r,o=0}else s===46&&o!==-1?++o:o=-1}return t}function zt(n,e){var t=e.dir||e.root,l=e.base||(e.name||"")+(e.ext||"");return t?t===e.root?t+l:t+n+l:l}var oe={resolve:function(){for(var e="",t=!1,l,a=arguments.length-1;a>=-1&&!t;a--){var o;a>=0?o=arguments[a]:(l===void 0&&(l=process.cwd()),o=l),J(o),o.length!==0&&(e=o+"/"+e,t=o.charCodeAt(0)===47)}return e=Ie(e,!t),t?e.length>0?"/"+e:"/":e.length>0?e:"."},normalize:function(e){if(J(e),e.length===0)return".";var t=e.charCodeAt(0)===47,l=e.charCodeAt(e.length-1)===47;return e=Ie(e,!t),e.length===0&&!t&&(e="."),e.length>0&&l&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return J(e),e.length>0&&e.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var e,t=0;t<arguments.length;++t){var l=arguments[t];J(l),l.length>0&&(e===void 0?e=l:e+="/"+l)}return e===void 0?".":oe.normalize(e)},relative:function(e,t){if(J(e),J(t),e===t||(e=oe.resolve(e),t=oe.resolve(t),e===t))return"";for(var l=1;l<e.length&&e.charCodeAt(l)===47;++l);for(var a=e.length,o=a-l,s=1;s<t.length&&t.charCodeAt(s)===47;++s);for(var r=t.length,i=r-s,_=o<i?o:i,u=-1,c=0;c<=_;++c){if(c===_){if(i>_){if(t.charCodeAt(s+c)===47)return t.slice(s+c+1);if(c===0)return t.slice(s+c)}else o>_&&(e.charCodeAt(l+c)===47?u=c:c===0&&(u=0));break}var h=e.charCodeAt(l+c),b=t.charCodeAt(s+c);if(h!==b)break;h===47&&(u=c)}var g="";for(c=l+u+1;c<=a;++c)(c===a||e.charCodeAt(c)===47)&&(g.length===0?g+="..":g+="/..");return g.length>0?g+t.slice(s+u):(s+=u,t.charCodeAt(s)===47&&++s,t.slice(s))},_makeLong:function(e){return e},dirname:function(e){if(J(e),e.length===0)return".";for(var t=e.charCodeAt(0),l=t===47,a=-1,o=!0,s=e.length-1;s>=1;--s)if(t=e.charCodeAt(s),t===47){if(!o){a=s;break}}else o=!1;return a===-1?l?"/":".":l&&a===1?"//":e.slice(0,a)},basename:function(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');J(e);var l=0,a=-1,o=!0,s;if(t!==void 0&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var r=t.length-1,i=-1;for(s=e.length-1;s>=0;--s){var _=e.charCodeAt(s);if(_===47){if(!o){l=s+1;break}}else i===-1&&(o=!1,i=s+1),r>=0&&(_===t.charCodeAt(r)?--r===-1&&(a=s):(r=-1,a=i))}return l===a?a=i:a===-1&&(a=e.length),e.slice(l,a)}else{for(s=e.length-1;s>=0;--s)if(e.charCodeAt(s)===47){if(!o){l=s+1;break}}else a===-1&&(o=!1,a=s+1);return a===-1?"":e.slice(l,a)}},extname:function(e){J(e);for(var t=-1,l=0,a=-1,o=!0,s=0,r=e.length-1;r>=0;--r){var i=e.charCodeAt(r);if(i===47){if(!o){l=r+1;break}continue}a===-1&&(o=!1,a=r+1),i===46?t===-1?t=r:s!==1&&(s=1):t!==-1&&(s=-1)}return t===-1||a===-1||s===0||s===1&&t===a-1&&t===l+1?"":e.slice(t,a)},format:function(e){if(e===null||typeof e!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return zt("/",e)},parse:function(e){J(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return t;var l=e.charCodeAt(0),a=l===47,o;a?(t.root="/",o=1):o=0;for(var s=-1,r=0,i=-1,_=!0,u=e.length-1,c=0;u>=o;--u){if(l=e.charCodeAt(u),l===47){if(!_){r=u+1;break}continue}i===-1&&(_=!1,i=u+1),l===46?s===-1?s=u:c!==1&&(c=1):s!==-1&&(c=-1)}return s===-1||i===-1||c===0||c===1&&s===i-1&&s===r+1?i!==-1&&(r===0&&a?t.base=t.name=e.slice(1,i):t.base=t.name=e.slice(r,i)):(r===0&&a?(t.name=e.slice(1,s),t.base=e.slice(1,i)):(t.name=e.slice(r,s),t.base=e.slice(r,i)),t.ext=e.slice(s,i)),r>0?t.dir=e.slice(0,r-1):a&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};oe.posix=oe;var Bt=oe;const Ue=rt(Bt),Ot={key:2},Wt=L({__name:"SidebarItem",props:{item:{},isCollapse:{type:Boolean,default:!1},isTop:{type:Boolean,default:!1},isFirstLevel:{type:Boolean,default:!0},basePath:{default:""}},setup(n){const e=n,t=M(()=>{var r;return(r=e.item.meta)==null?void 0:r.alwaysShow}),l=M(()=>{var r;return((r=e.item.children)==null?void 0:r.filter(i=>{var _;return!((_=i.meta)!=null&&_.hidden)}))??[]}),a=M(()=>l.value.length),o=M(()=>{const r=a.value;switch(!0){case r>1:return null;case r===1:return l.value[0];default:return{...e.item,path:""}}}),s=r=>{switch(!0){case _e(r):return r;case _e(e.basePath):return e.basePath;default:return Ue.resolve(e.basePath,r)}};return(r,i)=>{var b;const _=y("SvgIcon"),u=y("el-menu-item"),c=y("sidebar-item",!0),h=y("el-sub-menu");return(b=e.item.meta)!=null&&b.hidden?A("",!0):(f(),T("div",{key:0,class:H({"simple-mode":e.isCollapse&&!r.isTop,"first-level":e.isFirstLevel})},[!t.value&&o.value&&!o.value.children?(f(),T(K,{key:0},[o.value.meta?(f(),x(Nt,{key:0,to:s(o.value.path)},{default:v(()=>[d(u,{index:s(o.value.path)},Je({default:v(()=>[o.value.meta.svgIcon?(f(),x(_,{key:0,name:o.value.meta.svgIcon},null,8,["name"])):o.value.meta.elIcon?(f(),x(ie(o.value.meta.elIcon),{key:1,class:"el-icon"})):A("",!0)]),_:2},[o.value.meta.title?{name:"title",fn:v(()=>[j(B(o.value.meta.title),1)]),key:"0"}:void 0]),1032,["index"])]),_:1},8,["to"])):A("",!0)],64)):(f(),x(h,{key:1,index:s(e.item.path),teleported:""},{title:v(()=>{var g,S,k;return[(g=e.item.meta)!=null&&g.svgIcon?(f(),x(_,{key:0,name:e.item.meta.svgIcon},null,8,["name"])):(S=e.item.meta)!=null&&S.elIcon?(f(),x(ie(e.item.meta.elIcon),{key:1,class:"el-icon"})):A("",!0),(k=e.item.meta)!=null&&k.title?(f(),T("span",Ot,B(e.item.meta.title),1)):A("",!0)]}),default:v(()=>[e.item.children?(f(!0),T(K,{key:0},ee(e.item.children,g=>(f(),x(c,{key:g.path,item:g,"is-collapse":e.isCollapse,"is-first-level":!1,"base-path":s(g.path)},null,8,["item","is-collapse","base-path"]))),128)):A("",!0)]),_:1},8,["index"]))],2))}}});const Ht=D(Wt,[["__scopeId","data-v-72444830"]]),Ut="/v3-admin-vite/static/logo-cc70e06e.png",qt="/v3-admin-vite/static/logo-text-1-b6b0364d.png",Xt="/v3-admin-vite/static/logo-text-2-eef467fb.png",Kt=["src"],jt=["src"],Gt=L({__name:"index",props:{collapse:{type:Boolean,default:!0}},setup(n){const e=n,t=Y(),{layoutMode:l}=G(t);return(a,o)=>{const s=y("router-link");return f(),T("div",{class:H(["layout-logo-container",{collapse:e.collapse,"layout-mode-top":m(l)==="top"}])},[d(Fe,{name:"layout-logo-fade"},{default:v(()=>[e.collapse?(f(),x(s,{key:"collapse",to:"/"},{default:v(()=>[w("img",{src:m(Ut),class:"layout-logo"},null,8,Kt)]),_:1})):(f(),x(s,{key:"expand",to:"/"},{default:v(()=>[w("img",{src:m(l)!=="left"?m(Xt):m(qt),class:"layout-logo-text"},null,8,jt)]),_:1}))]),_:1})],2)}}});const ke=D(Gt,[["__scopeId","data-v-8474c76e"]]),Jt=L({__name:"index",setup(n){Ne(C=>({72322718:E.value,"57a52134":U.value,"738aeddc":W.value,"8423c222":O.value}));const e=ce("--v3-sidebar-menu-bg-color"),t=ce("--v3-sidebar-menu-text-color"),l=ce("--v3-sidebar-menu-active-text-color"),a=ae(),o=te(),s=xe(),r=Y(),{sidebar:i,device:_}=G(o),{layoutMode:u,showLogo:c}=G(r),h=M(()=>{const{meta:{activeMenu:C},path:p}=a;return C||p}),b=M(()=>!i.value.opened),g=M(()=>u.value==="left"),S=M(()=>u.value==="top"),k=M(()=>_.value===X.Mobile),I=M(()=>g.value&&c.value),R=M(()=>g.value?e:void 0),F=M(()=>g.value?t:void 0),O=M(()=>g.value?l:void 0),U=M(()=>u.value!=="top"?"var(--v3-sidebar-menu-item-height)":"var(--v3-navigationbar-height)"),W=M(()=>u.value!=="top"?"var(--v3-sidebar-menu-hover-bg-color)":"transparent"),E=M(()=>u.value!=="top"?"2px":"0px");return(C,p)=>{const V=y("el-menu"),N=y("el-scrollbar");return f(),T("div",{class:H({"has-logo":I.value})},[I.value?(f(),x(ke,{key:0,collapse:b.value},null,8,["collapse"])):A("",!0),d(N,{"wrap-class":"scrollbar-wrapper"},{default:v(()=>[d(V,{"default-active":h.value,collapse:b.value&&!S.value,"background-color":R.value,"text-color":F.value,"active-text-color":O.value,"unique-opened":!0,"collapse-transition":!1,mode:S.value&&!k.value?"horizontal":"vertical"},{default:v(()=>[(f(!0),T(K,null,ee(m(s).routes,$=>(f(),x(Ht,{key:$.path,item:$,"base-path":$.path,"is-collapse":b.value,"is-top":S.value},null,8,["item","base-path","is-collapse","is-top"]))),128))]),_:1},8,["default-active","collapse","background-color","text-color","active-text-color","mode"])]),_:1})],2)}}});const Ce=D(Jt,[["__scopeId","data-v-72f686ac"]]),Yt={class:"card-header"},Zt={class:"card-title"},Qt={class:"card-time"},en={key:0,class:"card-avatar"},tn=["src"],nn={class:"card-body"},on=L({__name:"NotifyList",props:{list:{}},setup(n){const e=n;return(t,l)=>{const a=y("el-empty"),o=y("el-tag"),s=y("el-card");return e.list.length===0?(f(),x(a,{key:0})):(f(!0),T(K,{key:1},ee(e.list,(r,i)=>(f(),x(s,{key:i,shadow:"never",class:"card-container"},{header:v(()=>[w("div",Yt,[w("div",null,[w("span",null,[w("span",Zt,B(r.title),1),r.extra?(f(),x(o,{key:0,type:r.status,effect:"plain",size:"small"},{default:v(()=>[j(B(r.extra),1)]),_:2},1032,["type"])):A("",!0)]),w("div",Qt,B(r.datetime),1)]),r.avatar?(f(),T("div",en,[w("img",{src:r.avatar,width:"34"},null,8,tn)])):A("",!0)])]),default:v(()=>[w("div",nn,B(r.description??"No Data"),1)]),_:2},1024))),128))}}});const sn=D(on,[["__scopeId","data-v-137655f9"]]),an=[{avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"V3 Admin Vite 上线啦",datetime:"一年前",description:"一个免费开源的中后台管理系统基础解决方案，基于 Vue3、TypeScript、Element Plus、Pinia 和 Vite 等主流技术"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"V3 Admin 上线啦",datetime:"两年前",description:"一个中后台管理系统基础解决方案，基于 Vue3、TypeScript、Element Plus 和 Pinia"}],ln=[{avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"来自楚门的世界",description:"如果再也不能见到你，祝你早安、午安和晚安",datetime:"1998-06-05"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"来自大话西游",description:"如果非要在这份爱上加上一个期限，我希望是一万年",datetime:"1995-02-04"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"来自龙猫",description:"心存善意，定能途遇天使",datetime:"1988-04-16"}],rn=[{title:"任务名称",description:"这家伙很懒，什么都没留下",extra:"未开始",status:"info"},{title:"任务名称",description:"这家伙很懒，什么都没留下",extra:"进行中",status:""},{title:"任务名称",description:"这家伙很懒，什么都没留下",extra:"已超时",status:"danger"}],cn={class:"notify"},un={class:"notify-history"},Re=99,dn=350,_n=L({__name:"index",setup(n){const e=M(()=>l.value.reduce((o,s)=>o+s.list.length,0)),t=P("通知"),l=P([{name:"通知",type:"primary",list:an},{name:"消息",type:"danger",list:ln},{name:"待办",type:"warning",list:rn}]),a=()=>{de.success(`跳转到${t.value}历史页面`)};return(o,s)=>{const r=y("el-icon"),i=y("el-tooltip"),_=y("el-badge"),u=y("el-scrollbar"),c=y("el-tab-pane"),h=y("el-tabs"),b=y("el-button"),g=y("el-popover");return f(),T("div",cn,[d(g,{placement:"bottom",width:dn,trigger:"click"},{reference:v(()=>[d(_,{value:e.value,max:Re,hidden:e.value===0},{default:v(()=>[d(i,{effect:"dark",content:"消息通知",placement:"bottom"},{default:v(()=>[d(r,{size:20},{default:v(()=>[d(m(ct))]),_:1})]),_:1})]),_:1},8,["value","hidden"])]),default:v(()=>[d(h,{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=S=>t.value=S),class:"demo-tabs",stretch:""},{default:v(()=>[(f(!0),T(K,null,ee(l.value,(S,k)=>(f(),x(c,{name:S.name,key:k},{label:v(()=>[j(B(S.name)+" ",1),d(_,{value:S.list.length,max:Re,type:S.type},null,8,["value","type"])]),default:v(()=>[d(u,{height:"400px"},{default:v(()=>[d(sn,{list:S.list},null,8,["list"])]),_:2},1024)]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"]),w("div",un,[d(b,{link:"",onClick:a},{default:v(()=>[j("查看"+B(t.value)+"历史",1)]),_:1})])]),_:1})])}}});const fn=D(_n,[["__scopeId","data-v-50089150"]]),Le=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],Q=(()=>{if(typeof document>"u")return!1;const n=Le[0],e={};for(const t of Le)if((t==null?void 0:t[1])in document){for(const[a,o]of t.entries())e[n[a]]=o;return e}return!1})(),Pe={change:Q.fullscreenchange,error:Q.fullscreenerror};let q={request(n=document.documentElement,e){return new Promise((t,l)=>{const a=()=>{q.off("change",a),t()};q.on("change",a);const o=n[Q.requestFullscreen](e);o instanceof Promise&&o.then(a).catch(l)})},exit(){return new Promise((n,e)=>{if(!q.isFullscreen){n();return}const t=()=>{q.off("change",t),n()};q.on("change",t);const l=document[Q.exitFullscreen]();l instanceof Promise&&l.then(t).catch(e)})},toggle(n,e){return q.isFullscreen?q.exit():q.request(n,e)},onchange(n){q.on("change",n)},onerror(n){q.on("error",n)},on(n,e){const t=Pe[n];t&&document.addEventListener(t,e,!1)},off(n,e){const t=Pe[n];t&&document.removeEventListener(t,e,!1)},raw:Q};Object.defineProperties(q,{isFullscreen:{get:()=>!!document[Q.fullscreenElement]},element:{enumerable:!0,get:()=>document[Q.fullscreenElement]??void 0},isEnabled:{enumerable:!0,get:()=>!!document[Q.fullscreenEnabled]}});Q||(q={isEnabled:!1});const ne=q,pn=L({__name:"index",props:{element:{default:"html"},openTips:{default:"全屏"},exitTips:{default:"退出全屏"},content:{type:Boolean,default:!1}},setup(n){const e=n,t=P(!1),l=M(()=>t.value?e.exitTips:e.openTips),a=M(()=>t.value?"fullscreen-exit":"fullscreen"),o=()=>{const c=document.querySelector(e.element)||void 0;ne.isEnabled?ne.toggle(c):de.warning("您的浏览器无法工作")},s=()=>{t.value=ne.isFullscreen};be(c=>{ne.on("change",s),c(()=>{ne.isEnabled&&ne.off("change",s)})});const r=P(!1),i=M(()=>r.value?"内容区复原":"内容区放大"),_=M(()=>r.value?"fullscreen-exit":"fullscreen"),u=()=>{document.body.className=r.value?"":"content-large",r.value=!r.value};return(c,h)=>{const b=y("SvgIcon"),g=y("el-tooltip"),S=y("el-dropdown-item"),k=y("el-dropdown-menu"),I=y("el-dropdown");return f(),T("div",null,[c.content?(f(),x(I,{key:1},{dropdown:v(()=>[d(k,null,{default:v(()=>[d(S,{onClick:u},{default:v(()=>[j(B(i.value),1)]),_:1}),d(S,{onClick:o,disabled:t.value},{default:v(()=>[j("内容区全屏")]),_:1},8,["disabled"])]),_:1})]),default:v(()=>[d(b,{name:_.value},null,8,["name"])]),_:1})):(f(),x(g,{key:0,effect:"dark",content:l.value,placement:"bottom"},{default:v(()=>[d(b,{name:a.value,onClick:o},null,8,["name"])]),_:1},8,["content"]))])}}});const qe=D(pn,[["__scopeId","data-v-9e7c36e4"]]),vn=["onMouseenter"],mn={class:"result-item-title"},hn=L({__name:"SearchResult",props:{modelValue:{},list:{},isPressUpOrDown:{type:Boolean}},emits:["update:modelValue"],setup(n,{expose:e,emit:t}){const l=n,a=ze(),o=P(0),s=M({get(){return l.modelValue},set(c){t("update:modelValue",c)}}),r=c=>{const h=c.name===s.value;return{background:h?"var(--el-color-primary)":"",color:h?"#fff":""}},i=c=>{l.isPressUpOrDown||(s.value=c.name)},_=()=>{o.value=Number((window.innerHeight*.4).toFixed(1))},u=c=>{var S;const h=(S=a==null?void 0:a.proxy)==null?void 0:S.$refs[`resultItemRef${c}`];if(!h)return 0;const g=h[0].offsetTop+128;return g>o.value?g-o.value:0};return De(()=>{window.addEventListener("resize",_)}),he(()=>{_()}),ge(()=>{window.removeEventListener("resize",_)}),e({getScrollTop:u}),(c,h)=>{const b=y("SvgIcon");return f(),T("div",null,[(f(!0),T(K,null,ee(c.list,(g,S)=>{var k,I,R;return f(),T("div",{key:S,ref_for:!0,ref:`resultItemRef${S}`,class:"result-item",style:Be(r(g)),onMouseenter:F=>i(g)},[(k=g.meta)!=null&&k.svgIcon?(f(),x(b,{key:0,name:g.meta.svgIcon},null,8,["name"])):(I=g.meta)!=null&&I.elIcon?(f(),x(ie(g.meta.elIcon),{key:1,class:"el-icon"})):A("",!0),w("span",mn,B((R=g.meta)==null?void 0:R.title),1),s.value&&s.value===g.name?(f(),x(b,{key:2,name:"keyboard-enter"})):A("",!0)],44,vn)}),128))])}}});const gn=D(hn,[["__scopeId","data-v-7383ebb0"]]),Te=n=>(ye("data-v-3171d360"),n=n(),we(),n),bn={class:"search-footer"},yn={class:"search-footer-item"},wn=Te(()=>w("span",null,"确认",-1)),xn={class:"search-footer-item"},Sn=Te(()=>w("span",null,"切换",-1)),kn={class:"search-footer-item"},Cn=Te(()=>w("span",null,"关闭",-1)),Tn={class:"search-footer-total"},$n=L({__name:"SearchFooter",props:{total:{}},setup(n){const e=n,t=te(),l=M(()=>t.device===X.Mobile);return(a,o)=>{const s=y("SvgIcon");return f(),T("div",bn,[l.value?A("",!0):(f(),T(K,{key:0},[w("span",yn,[d(s,{name:"keyboard-enter"}),wn]),w("span",xn,[d(s,{name:"keyboard-up"}),d(s,{name:"keyboard-down"}),Sn]),w("span",kn,[d(s,{name:"keyboard-esc"}),Cn])],64)),w("span",Tn,"共 "+B(e.total)+" 项",1)])}}});const Mn=D($n,[["__scopeId","data-v-3171d360"]]),En=w("p",null,"搜索结果",-1),Vn=L({__name:"SearchModal",props:{modelValue:{type:Boolean}},emits:["update:modelValue"],setup(n,{emit:e}){const t=n,l=te(),a=fe(),o=P(null),s=P(null),r=P(null),i=P(""),_=Ye([]),u=P(void 0),c=P(!1),h=M(()=>l.device===X.Mobile?"80vw":"40vw"),b=M({get(){return t.modelValue},set(E){e("update:modelValue",E)}}),g=M(()=>it(xe().routes)),S=ut(()=>{var p;const E=k(g.value);_.value=E.filter(V=>{var N,$;return i.value?($=(N=V.meta)==null?void 0:N.title)==null?void 0:$.toLocaleLowerCase().includes(i.value.toLocaleLowerCase().trim()):!1});const C=(p=_.value)==null?void 0:p.length;u.value=C>0?_.value[0].name:void 0},500),k=(E,C=[])=>(E.forEach(p=>{C.push(p),p.children&&k(p.children,C)}),C),I=()=>{b.value=!1,setTimeout(()=>{i.value="",_.value=[]},200)},R=E=>{var p;if(!r.value)return;const C=r.value.getScrollTop(E);(p=s.value)==null||p.setScrollTop(C)},F=()=>{c.value=!0;const{length:E}=_.value;if(E===0)return;const C=_.value.findIndex(p=>p.name===u.value);if(C===0){const p=_.value[E-1].name;u.value===p&&E>1?(u.value=_.value[E-2].name,R(E-2)):(u.value=p,R(E-1))}else u.value=_.value[C-1].name,R(C-1)},O=()=>{c.value=!0;const{length:E}=_.value;if(E===0)return;const C=_.value.map(p=>p.name).lastIndexOf(u.value);if(C===E-1){const p=_.value[0].name;u.value===p&&E>1?(u.value=_.value[1].name,R(1)):(u.value=p,R(0))}else u.value=_.value[C+1].name,R(C+1)},U=()=>{var V;const{length:E}=_.value;if(E===0)return;const C=u.value,p=(V=_.value.find(N=>N.name===C))==null?void 0:V.path;if(p&&_e(p)){window.open(p,"_blank","noopener, noreferrer");return}if(!C){de.warning("无法通过搜索进入该菜单，请为对应的路由设置唯一的 Name");return}try{a.push({name:C})}catch{de.error("该菜单有必填的动态参数，无法通过搜索进入");return}I()},W=()=>{c.value=!1};return(E,C)=>{const p=y("SvgIcon"),V=y("el-input"),N=y("el-empty"),$=y("el-dialog");return f(),x($,{modelValue:b.value,"onUpdate:modelValue":C[2]||(C[2]=z=>b.value=z),onOpened:C[3]||(C[3]=z=>{var Z;return(Z=o.value)==null?void 0:Z.focus()}),onClosed:C[4]||(C[4]=z=>{var Z;return(Z=o.value)==null?void 0:Z.blur()}),onKeydown:[le(F,["up"]),le(O,["down"]),le(U,["enter"])],onKeyup:le(W,["up","down"]),"before-close":I,width:h.value,top:"5vh",class:"search-modal__private","append-to-body":""},{footer:v(()=>[d(Mn,{total:_.value.length},null,8,["total"])]),default:v(()=>[d(V,{ref_key:"inputRef",ref:o,modelValue:i.value,"onUpdate:modelValue":C[0]||(C[0]=z=>i.value=z),onInput:m(S),placeholder:"搜索菜单",size:"large",clearable:""},{prefix:v(()=>[d(p,{name:"search"})]),_:1},8,["modelValue","onInput"]),_.value.length===0?(f(),x(N,{key:0,description:"暂无搜索结果","image-size":100})):(f(),T(K,{key:1},[En,d(m(We),{ref_key:"scrollbarRef",ref:s,"max-height":"40vh",always:""},{default:v(()=>[d(gn,{ref_key:"searchResultRef",ref:r,modelValue:u.value,"onUpdate:modelValue":C[1]||(C[1]=z=>u.value=z),list:_.value,isPressUpOrDown:c.value,onClick:U},null,8,["modelValue","list","isPressUpOrDown"])]),_:1},512)],64))]),_:1},8,["modelValue","onKeydown","onKeyup","width"])}}});const An=L({__name:"index",setup(n){const e=P(!1),t=()=>{e.value=!0};return(l,a)=>{const o=y("SvgIcon"),s=y("el-tooltip");return f(),T("div",null,[d(s,{effect:"dark",content:"搜索菜单",placement:"bottom"},{default:v(()=>[d(o,{name:"search",onClick:t})]),_:1}),d(Vn,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=r=>e.value=r)},null,8,["modelValue"])])}}});const In=D(An,[["__scopeId","data-v-dc5accb4"]]),Rn=n=>(ye("data-v-2926c407"),n=n(),we(),n),Ln={class:"navigation-bar"},Pn={class:"right-menu"},Dn={class:"right-menu-avatar"},Fn={target:"_blank",href:"https://juejin.cn/post/7089377403717287972"},Nn={target:"_blank",href:"https://github.com/un-pany/v3-admin-vite"},zn={target:"_blank",href:"https://gitee.com/un-pany/v3-admin-vite"},Bn=Rn(()=>w("span",{style:{display:"block"}},"退出登录",-1)),On=L({__name:"index",setup(n){const e=fe(),t=te(),l=Y(),a=tt(),{sidebar:o,device:s}=G(t),{layoutMode:r,showNotify:i,showThemeSwitch:_,showScreenfull:u,showSearchMenu:c}=G(l),h=M(()=>r.value==="top"),b=M(()=>s.value===X.Mobile),g=()=>{t.toggleSidebar(!1)},S=()=>{a.logout(),e.push("/login")};return(k,I)=>{const R=y("el-avatar"),F=y("el-dropdown-item"),O=y("el-dropdown-menu"),U=y("el-dropdown");return f(),T("div",Ln,[!h.value||b.value?(f(),x(Tt,{key:0,"is-active":m(o).opened,class:"hamburger",onToggleClick:g},null,8,["is-active"])):A("",!0),!h.value||b.value?(f(),x(Dt,{key:1,class:"breadcrumb"})):A("",!0),h.value&&!b.value?(f(),x(Ce,{key:2,class:"sidebar"})):A("",!0),w("div",Pn,[m(c)?(f(),x(In,{key:0,class:"right-menu-item"})):A("",!0),m(u)?(f(),x(qe,{key:1,class:"right-menu-item"})):A("",!0),m(_)?(f(),x(ht,{key:2,class:"right-menu-item"})):A("",!0),m(i)?(f(),x(fn,{key:3,class:"right-menu-item"})):A("",!0),d(U,{class:"right-menu-item"},{dropdown:v(()=>[d(O,null,{default:v(()=>[w("a",Fn,[d(F,null,{default:v(()=>[j("中文文档")]),_:1})]),w("a",Nn,[d(F,null,{default:v(()=>[j("GitHub")]),_:1})]),w("a",zn,[d(F,null,{default:v(()=>[j("Gitee")]),_:1})]),d(F,{divided:"",onClick:S},{default:v(()=>[Bn]),_:1})]),_:1})]),default:v(()=>[w("div",Dn,[d(R,{icon:m(dt),size:30},null,8,["icon"]),w("span",null,B(m(a).username),1)])]),_:1})])])}}});const $e=D(On,[["__scopeId","data-v-2926c407"]]),Wn={class:"select-layout-mode"},Hn=L({__name:"SelectLayoutMode",setup(n){const e=Y(),{layoutMode:t}=G(e),l=M(()=>t.value==="left"),a=M(()=>t.value==="top"),o=M(()=>t.value==="left-top");return(s,r)=>{const i=y("el-aside"),_=y("el-header"),u=y("el-main"),c=y("el-container"),h=y("el-tooltip");return f(),T("div",Wn,[d(h,{content:"左侧模式"},{default:v(()=>[d(c,{class:H(["layout-mode left",{active:l.value}]),onClick:r[0]||(r[0]=b=>t.value="left")},{default:v(()=>[d(i),d(c,null,{default:v(()=>[d(_),d(u)]),_:1})]),_:1},8,["class"])]),_:1}),d(h,{content:"顶部模式"},{default:v(()=>[d(c,{class:H(["layout-mode top",{active:a.value}]),onClick:r[1]||(r[1]=b=>t.value="top")},{default:v(()=>[d(_),d(u)]),_:1},8,["class"])]),_:1}),d(h,{content:"混合模式"},{default:v(()=>[d(c,{class:H(["layout-mode left-top",{active:o.value}]),onClick:r[2]||(r[2]=b=>t.value="left-top")},{default:v(()=>[d(_),d(c,null,{default:v(()=>[d(i),d(u)]),_:1})]),_:1},8,["class"])]),_:1})])}}});const Un=D(Hn,[["__scopeId","data-v-e7938886"]]),Xe=n=>(ye("data-v-4d7dda5b"),n=n(),we(),n),qn={class:"setting-container"},Xn=Xe(()=>w("h4",null,"布局配置",-1)),Kn=Xe(()=>w("h4",null,"功能配置",-1)),jn={class:"setting-name"},Gn=L({__name:"index",setup(n){const e=Y(),{layoutMode:t,showTagsView:l,showLogo:a,fixedHeader:o,showNotify:s,showThemeSwitch:r,showScreenfull:i,showSearchMenu:_,cacheTagsView:u,showGreyMode:c,showColorWeakness:h}=G(e),b={显示标签栏:l,"显示 Logo":a,"固定 Header":o,显示消息通知:s,显示切换主题按钮:r,显示全屏按钮:i,显示搜索按钮:_,是否缓存标签栏:u,显示灰色模式:c,显示色弱模式:h};return be(()=>{t.value!=="left"&&(o.value=!0)}),(g,S)=>{const k=y("el-divider"),I=y("el-switch"),R=y("el-button");return f(),T("div",qn,[Xn,d(Un),d(k),Kn,(f(),T(K,null,ee(b,(F,O,U)=>w("div",{class:"setting-item",key:U},[w("span",jn,B(O),1),d(I,{modelValue:F.value,"onUpdate:modelValue":W=>F.value=W,disabled:m(t)!=="left"&&O==="固定 Header"},null,8,["modelValue","onUpdate:modelValue","disabled"])])),64)),d(R,{type:"danger",icon:m(_t),onClick:m(nt)},{default:v(()=>[j("重 置")]),_:1},8,["icon","onClick"])])}}});const Jn=D(Gn,[["__scopeId","data-v-4d7dda5b"]]),Yn={class:"scroll-container"},Zn=200,Qn=L({__name:"ScrollPane",props:{tagRefs:{}},setup(n){const e=n,t=ae(),l=Y(),a=P(),o=P();let s=0;const r=({scrollLeft:h})=>{s=h},i=({deltaY:h})=>{/^-/.test(h.toString())?u("left"):u("right")},_=()=>{const h=o.value.clientWidth,b=a.value.wrapRef.clientWidth,g=h-b-s;return{scrollbarContentRefWidth:h,scrollbarRefWidth:b,lastDistance:g}},u=(h,b=Zn)=>{let g=0;const{scrollbarContentRefWidth:S,scrollbarRefWidth:k,lastDistance:I}=_();k>S||(h==="left"?g=Math.max(0,s-b):g=Math.min(s+b,s+I),a.value.setScrollLeft(g))},c=()=>{const h=e.tagRefs;for(let b=0;b<h.length;b++)if(t.path===h[b].$props.to.path){const g=h[b].$el,S=g.offsetWidth,k=g.offsetLeft,{scrollbarRefWidth:I}=_();if(k<s){const F=s-k;u("left",F);return}const R=I+s-S;if(k>R){const F=k-R;u("right",F);return}}};return se(t,()=>{Ze(c)},{deep:!0}),(h,b)=>{const g=y("el-icon");return f(),T("div",Yn,[d(g,{class:"arrow left",onClick:b[0]||(b[0]=S=>u("left"))},{default:v(()=>[d(m(ft))]),_:1}),d(m(We),{ref_key:"scrollbarRef",ref:a,onWheelPassive:i,onScroll:r},{default:v(()=>[w("div",{ref_key:"scrollbarContentRef",ref:o,class:"scrollbar-content"},[ue(h.$slots,"default",{},void 0,!0)],512)]),_:3},512),d(g,{class:"arrow right",onClick:b[1]||(b[1]=S=>u("right"))},{default:v(()=>[d(m(pt))]),_:1}),m(l).showScreenfull?(f(),x(qe,{key:0,element:".app-main",content:!0,class:"screenfull"})):A("",!0)])}}});const eo=D(Qn,[["__scopeId","data-v-01845fab"]]),to={class:"tags-view-container"},no=L({__name:"index",setup(n){const e=ze(),t=fe(),l=ae(),a=Oe(),o=xe(),s=P([]),r=P(!1),i=P(0),_=P(0),u=P({});let c=[];const h=p=>p.path===l.path,b=p=>{var V;return(V=p.meta)==null?void 0:V.affix},g=(p,V="/")=>{const N=[];return p.forEach($=>{if(b($)){const z=Ue.resolve(V,$.path);N.push({fullPath:z,path:z,name:$.name,meta:{...$.meta}})}if($.children){const z=g($.children,$.path);N.push(...z)}}),N},S=()=>{c=g(o.routes);for(const p of c)p.name&&a.addVisitedView(p)},k=p=>{p.name&&(a.addVisitedView(p),a.addCachedView(p))},I=p=>{a.delCachedView(p),t.replace({path:"/redirect"+p.path,query:p.query})},R=p=>{a.delVisitedView(p),a.delCachedView(p),h(p)&&U(a.visitedViews,p)},F=()=>{const p=u.value.fullPath;p!==l.path&&p!==void 0&&t.push(p),a.delOthersVisitedViews(u.value),a.delOthersCachedViews(u.value)},O=p=>{a.delAllVisitedViews(),a.delAllCachedViews(),!c.some(V=>V.path===l.path)&&U(a.visitedViews,p)},U=(p,V)=>{const N=p.slice(-1)[0],$=N==null?void 0:N.fullPath;$!==void 0?t.push($):V.name==="Dashboard"?t.push({path:"/redirect"+V.path,query:V.query}):t.push("/")},W=(p,V)=>{const $=e.proxy.$el.getBoundingClientRect().left,Z=e.proxy.$el.offsetWidth-105,Ee=V.clientX-$+15;_.value=Ee>Z?Z:Ee,i.value=V.clientY,r.value=!0,u.value=p},E=()=>{r.value=!1};se(r,p=>{p?document.body.addEventListener("click",E):document.body.removeEventListener("click",E)}),he(()=>{S(),k(l)});const C=p=>{k(p)};return ot(C),ge(()=>{st(C)}),(p,V)=>{const N=y("el-icon");return f(),T("div",to,[d(eo,{class:"tags-view-wrapper","tag-refs":s.value},{default:v(()=>[(f(!0),T(K,null,ee(m(a).visitedViews,$=>(f(),x(m(Qe),{ref_for:!0,ref_key:"tagRefs",ref:s,key:$.path,class:H([{active:h($)},"tags-view-item"]),to:{path:$.path,query:$.query},onMouseup:re(z=>!b($)&&R($),["middle"]),onContextmenu:re(z=>W($,z),["prevent"])},{default:v(()=>{var z;return[j(B((z=$.meta)==null?void 0:z.title)+" ",1),b($)?A("",!0):(f(),x(N,{key:0,size:12,onClick:re(Z=>R($),["prevent","stop"])},{default:v(()=>[d(m(vt))]),_:2},1032,["onClick"]))]}),_:2},1032,["class","to","onMouseup","onContextmenu"]))),128))]),_:1},8,["tag-refs"]),pe(w("ul",{class:"contextmenu",style:Be({left:_.value+"px",top:i.value+"px"})},[w("li",{onClick:V[0]||(V[0]=$=>I(u.value))},"刷新"),b(u.value)?A("",!0):(f(),T("li",{key:0,onClick:V[1]||(V[1]=$=>R(u.value))},"关闭")),w("li",{onClick:F},"关闭其它"),w("li",{onClick:V[2]||(V[2]=$=>O(u.value))},"关闭所有")],4),[[ve,r.value]])])}}});const Me=D(no,[["__scopeId","data-v-bf1e92be"]]),oo=L({__name:"index",props:{buttonTop:{default:350}},setup(n){const e=n;Ne(a=>({"184df93f":t}));const t=e.buttonTop+"px",l=P(!1);return(a,o)=>{const s=y("el-icon"),r=y("el-drawer");return f(),T(K,null,[w("div",{class:"handle-button",onClick:o[0]||(o[0]=i=>l.value=!0)},[d(s,{size:24},{default:v(()=>[d(m(mt))]),_:1})]),d(r,{modelValue:l.value,"onUpdate:modelValue":o[1]||(o[1]=i=>l.value=i),size:"300px","with-header":!1},{default:v(()=>[ue(a.$slots,"default",{},void 0,!0)]),_:3},8,["modelValue"])],64)}}});const so=D(oo,[["__scopeId","data-v-79eaf320"]]),ao=L({__name:"LeftMode",setup(n){const e=te(),t=Y(),{showTagsView:l,fixedHeader:a}=G(t),o=M(()=>({hideSidebar:!e.sidebar.opened,openSidebar:e.sidebar.opened,withoutAnimation:e.sidebar.withoutAnimation,mobile:e.device===X.Mobile})),s=()=>{e.closeSidebar(!1)};return(r,i)=>(f(),T("div",{class:H([o.value,"app-wrapper"])},[o.value.mobile&&o.value.openSidebar?(f(),T("div",{key:0,class:"drawer-bg",onClick:s})):A("",!0),d(m(Ce),{class:"sidebar-container"}),w("div",{class:H([{hasTagsView:m(l)},"main-container"])},[w("div",{class:H([{"fixed-header":m(a)},"layout-header"])},[d(m($e)),pe(d(m(Me),null,null,512),[[ve,m(l)]])],2),d(m(Se),{class:"app-main"})],2)],2))}});const lo=D(ao,[["__scopeId","data-v-f24dda26"]]),ro={class:"app-wrapper"},co={class:"fixed-header layout-header"},io={class:"content"},uo=L({__name:"TopMode",setup(n){const e=Y(),{showTagsView:t,showLogo:l}=G(e);return(a,o)=>(f(),T("div",ro,[w("div",co,[w("div",io,[m(l)?(f(),x(m(ke),{key:0,collapse:!1,class:"logo"})):A("",!0),d(m($e),{class:"navigation-bar"})]),pe(d(m(Me),null,null,512),[[ve,m(t)]])]),w("div",{class:H([{hasTagsView:m(t)},"main-container"])},[d(m(Se),{class:"app-main"})],2)]))}});const _o=D(uo,[["__scopeId","data-v-8946dd49"]]),fo={class:"fixed-header layout-header"},po={class:"content"},vo=L({__name:"LeftTopMode",setup(n){const e=te(),t=Y(),{showTagsView:l,showLogo:a}=G(t),o=M(()=>({hideSidebar:!e.sidebar.opened}));return(s,r)=>(f(),T("div",{class:H([o.value,"app-wrapper"])},[w("div",fo,[m(a)?(f(),x(m(ke),{key:0,collapse:!1,class:"logo"})):A("",!0),w("div",po,[d(m($e)),pe(d(m(Me),null,null,512),[[ve,m(l)]])])]),w("div",{class:H([{hasTagsView:m(l)},"main-container"])},[d(m(Ce),{class:"sidebar-container"}),d(m(Se),{class:"app-main"})],2)],2))}});const mo=D(vo,[["__scopeId","data-v-08489ac9"]]),me="--v3-tagsview-height",ho=L({__name:"index",setup(n){wt();const e=te(),t=Y(),{showSettings:l,layoutMode:a,showTagsView:o,showGreyMode:s,showColorWeakness:r}=G(t),i=M(()=>({showGreyMode:s.value,showColorWeakness:r.value})),_=ce(me);return be(()=>{o.value?Ae(me,_):Ae(me,"0px")}),(u,c)=>(f(),T("div",{class:H(i.value)},[m(a)==="left"||m(e).device===m(X).Mobile?(f(),x(lo,{key:0})):m(a)==="top"?(f(),x(_o,{key:1})):m(a)==="left-top"?(f(),x(mo,{key:2})):A("",!0),m(l)?(f(),x(m(so),{key:3},{default:v(()=>[d(m(Jn))]),_:1})):A("",!0)],2))}});const So=D(ho,[["__scopeId","data-v-606e13ce"]]);export{So as default};
