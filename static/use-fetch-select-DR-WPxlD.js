import{r,c as V,p as b,ai as i,q as d,t as m,v as p,U as f,O as E,F as k,aa as B,u as a,M as C,K as D,D as v}from"./vue-BWN0lbwY.js";function h(s){const{api:t}=s,o=r(!1),l=r([]),c=r(""),e=()=>{o.value=!0,l.value=[],t().then(u=>{l.value=u.data}).finally(()=>{o.value=!1})};return V(()=>{e()}),{loading:o,options:l,value:c}}const w={code:0,data:[{label:"苹果",value:1},{label:"香蕉",value:2},{label:"橘子",value:3,disabled:!0}],message:"获取 Select 数据成功"};function x(){return new Promise((s,t)=>{setTimeout(()=>{Math.random()<.8?s(w):t(new Error("接口发生错误"))},2e3)})}const A={class:"app-container"},M=b({__name:"use-fetch-select",setup(s){const{loading:t,options:o,value:l}=h({api:x});return(c,e)=>{const u=i("el-option"),_=i("el-select"),g=i("el-select-v2");return d(),m("div",A,[e[2]||(e[2]=p("h4",null,"该示例是演示：通过 hook 自动调用 api 后拿到 Select 组件需要的数据并传递给 Select 组件",-1)),e[3]||(e[3]=p("h5",null,"Select 示例",-1)),f(_,{loading:a(t),modelValue:a(l),"onUpdate:modelValue":e[0]||(e[0]=n=>v(l)?l.value=n:null),filterable:""},{default:E(()=>[(d(!0),m(k,null,B(a(o),(n,S)=>(d(),C(u,D({ref_for:!0},n,{key:S,placeholder:"请选择"}),null,16))),128))]),_:1},8,["loading","modelValue"]),e[4]||(e[4]=p("h5",null,"Select V2 示例（如果数据量过多，可以选择该组件）",-1)),f(g,{loading:a(t),modelValue:a(l),"onUpdate:modelValue":e[1]||(e[1]=n=>v(l)?l.value=n:null),options:a(o),filterable:"",placeholder:"请选择"},null,8,["loading","modelValue","options"])])}}});export{M as default};