import{b as e,m as a,a as l,r as s,f as r,h as o,i as d,z as i,w as t,a6 as n,a7 as u,H as p,I as m,o as c,l as f,a8 as g,a9 as _,aa as v,ab as x,ac as b,q as h,A as w,D as y,_ as V}from"./index-230eb087.js";import{_ as z}from"./index.vue_vue_type_script_setup_true_lang-2da404fe.js";const k={class:"login-container"},q={class:"login-card"},C=(e=>(p("data-v-5826127b"),e=e(),m(),e))((()=>i("div",{class:"title"},[i("img",{src:"/v3-admin-vite/static/logo-text-2-eef467fb.png"})],-1))),M={class:"content"},U=V(e({__name:"index",setup(e){const p=a(),m=l(null),V=l(!1),U=l(""),j=s({username:"admin",password:"12345678",code:""}),I={username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:8,max:16,message:"长度在 8 到 16 个字符",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}]},K=()=>{var e;null==(e=m.value)||e.validate((e=>{if(!e)return!1;V.value=!0,y().login({username:j.username,password:j.password,code:j.code}).then((()=>{p.push({path:"/"})})).catch((()=>{A(),j.password=""})).finally((()=>{V.value=!1}))}))},A=()=>{j.code="",U.value="",u().then((e=>{U.value=e.data}))};return A(),(e,a)=>{const l=r("el-input"),s=r("el-form-item"),u=r("el-icon"),p=r("el-image"),y=r("el-button"),D=r("el-form");return c(),o("div",k,[d(z,{class:"theme-switch"}),i("div",q,[C,i("div",M,[d(D,{ref_key:"loginFormRef",ref:m,model:j,rules:I,onKeyup:n(K,["enter"])},{default:t((()=>[d(s,{prop:"username"},{default:t((()=>[d(l,{modelValue:j.username,"onUpdate:modelValue":a[0]||(a[0]=e=>j.username=e),modelModifiers:{trim:!0},placeholder:"用户名",type:"text",tabindex:"1","prefix-icon":f(g),size:"large"},null,8,["modelValue","prefix-icon"])])),_:1}),d(s,{prop:"password"},{default:t((()=>[d(l,{modelValue:j.password,"onUpdate:modelValue":a[1]||(a[1]=e=>j.password=e),modelModifiers:{trim:!0},placeholder:"密码",type:"password",tabindex:"2","prefix-icon":f(_),size:"large","show-password":""},null,8,["modelValue","prefix-icon"])])),_:1}),d(s,{prop:"code"},{default:t((()=>[d(l,{modelValue:j.code,"onUpdate:modelValue":a[2]||(a[2]=e=>j.code=e),modelModifiers:{trim:!0},placeholder:"验证码",type:"text",tabindex:"3","prefix-icon":f(v),maxlength:"7",size:"large"},{append:t((()=>[d(p,{src:U.value,onClick:A,draggable:"false"},{placeholder:t((()=>[d(u,null,{default:t((()=>[d(f(x))])),_:1})])),error:t((()=>[d(u,null,{default:t((()=>[d(f(b))])),_:1})])),_:1},8,["src"])])),_:1},8,["modelValue","prefix-icon"])])),_:1}),d(y,{loading:V.value,type:"primary",size:"large",onClick:h(K,["prevent"])},{default:t((()=>[w(" 登 录 ")])),_:1},8,["loading","onClick"])])),_:1},8,["model","onKeyup"])])])])}}}),[["__scopeId","data-v-5826127b"]]);export{U as default};